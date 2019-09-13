import * as React from 'react'
import { render, fireEvent } from 'test-utils/render'
// import { BuyButton } from '../BuyButton'
import { BuyButton } from '../BuyButton'

const variant = { id: '1', availableForSale: true, title: 'Variant 1' }

const addItemToCheckout = jest.fn()

afterEach(() => {
  addItemToCheckout.mockReset()
})

describe('Buy Button', () => {
  it('should disable the button when the no variant is provided', () => {
    const { container } = render(
      <BuyButton addItemToCheckout={addItemToCheckout} />,
    )
    const btn = container.querySelectorAll('button')[0]
    fireEvent.click(btn)
    expect(addItemToCheckout.mock.calls.length).toBe(0)
  })

  it('should disable the button when the variant is not available for sale', () => {
    const nfs = {
      ...variant,
      availableForSale: false,
    }
    const { container } = render(
      <BuyButton currentVariant={nfs} addItemToCheckout={addItemToCheckout} />,
    )
    const btn = container.querySelectorAll('button')[0]
    fireEvent.click(btn)
    expect(addItemToCheckout.mock.calls.length).toBe(0)
  })

  it('should call `addItemToCheckout` when clicked (default qty of 1)', () => {
    const { container } = render(
      <BuyButton
        currentVariant={variant}
        addItemToCheckout={addItemToCheckout}
      />,
    )
    const btn = container.querySelectorAll('button')[0]
    fireEvent.click(btn)
    expect(addItemToCheckout.mock.calls[0][0]).toEqual({
      variantId: variant.id,
      quantity: 1,
    })
  })

  it('should call `addItemToCheckout` when clicked with the correct quantity', () => {
    const { container } = render(
      <BuyButton
        currentVariant={variant}
        addItemToCheckout={addItemToCheckout}
        quantity={3}
      />,
    )
    const btn = container.querySelectorAll('button')[0]
    fireEvent.click(btn)
    expect(addItemToCheckout.mock.calls[0][0]).toEqual({
      variantId: variant.id,
      quantity: 3,
    })
  })
})
