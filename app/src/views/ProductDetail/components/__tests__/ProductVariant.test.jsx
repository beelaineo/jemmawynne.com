import * as React from 'react'
import { ProductVariantSelector } from '../ProductVariantSelector'

const variants = [
  { id: '1', availableForSale: true, title: 'Variant 1' },
  { id: '2', availableForSale: true, title: 'Variant 2' },
  { id: '3', availableForSale: false, title: 'Variant 3' },
  { id: '4', availableForSale: true, title: 'Variant 4' },
]

const selectVariant = jest.fn()

afterEach(() => {
  selectVariant.mocks.clear()
})

describe('Product Variant Selector', () => {
  const renderDefault = () =>
    render(
      <ProductVariantSelector
        variants={variants}
        currentVariant={mockVariants[0]}
        selectVariant={noop}
      />,
    )

  it('should display a UI item for each variant', () => {
    //
    const { container } = renderDefault

    mockVariants.forEach((variant) => {
      expect(container.text()).toInclude(variant.title)
    })
  })

  it('should call `selectVariant` when a UI item is clicked', () => {
    const { container } = renderDefault()
    const v2 = container.findByText(variants[1].title)
    fireEvent('click', v2)
    expect(selectVariant).toHaveBeenCalledWith(variants[1].id)
  })

  it('should disable variants unavailable for sale', () => {
    const { container } = renderDefault()
    const v3 = container.findByText(variants[1].title)
    fireEvent('click', v3)
    expect(selectVariant.calls).toHaveLength(0)
  })

  it('should highlight the current variant', () => {
    const { getByTestId } = renderDefault()
    const v1 = getByTestId(`variant-${curerntVariant.id}`)
    expect(v1).toHaveStyleRule('color: blue')
  })

  it('should render nothing if there is only one variant', () => {
    const { container } = render(
      <ProductVariantSelector
        variants={[currentVariant]}
        currentVariant={currentVariant}
        selectVariant={selectVariant}
      />,
    )
    expect(container).toBe(null)
  })
})
