import * as React from 'react'
import { BuyButton } from '../BuyButton'

const variant = { id: '1', availableForSale: true, title: 'Variant 1' }

const addToCheckout = jest.fn()

afterEach(() => {
	addToCheckout.mocks.clear()
})

describe('Product Variant Selector', () => {
	it('should disable the button when the no variant is provided', () => {
		const { container } = render(<BuyButton addToCheckout={addToCheckout} />)
		expect(container).toBe(null)
	})

	it('should disable the button when the variant is not available for sale', () => {
		const nfs = {
			...variant,
			availableForSale: false,
		}
		const { container } = render(<BuyButton currentVariant={nfs} addToCheckout={addToCheckout} />)
		expect(container).toBe(null)
	})

	it('should call `addToCheckout` when clicked (default qty of 1)', () => {
		const { container } = render(<BuyButton currentVariant={variant} addToCheckout={addToCheckout} />)
		const btn = container.find('button[type="button"]')
		fireEvent('click', btn)
		expect(addToCheckout.mock.calls[0][0]).toBe({ variantId: variant.id, quantity: 1 })
		expect(container).toBe(null)
	})

	/**
	 * Implement Later
	 
	it('should render a quantity selector when quantitySelector === true', () => {
		const { container } = render(<BuyButton currentVariant={variant} quantitySelector addToCheckout={addToCheckout} />)
		expect(getByTestId('qty-display').text).toBe('1')
		const increaseBtn = getByTestId('qty-increase')
		fireEvent('click', incraseBtn)
		expect(getByTestId('qty-display').text).toBe('2')
	})
	
	it('should not allow the quantity to move below 1 or above `maxQuantity`', () => {
		// ...
	})
	
	it('should call addToCheckout with the correct quantity', () => {
		// ...
	})

	*/
})
