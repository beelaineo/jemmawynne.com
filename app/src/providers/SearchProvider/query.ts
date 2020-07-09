export const searchQuery = `
*[
  (
    _type == "shopifyProduct"
  )
  &&
    defined(shopifyId)
  && 
  (
    [title, sourceData.description, sourceData.productType] match $searchTerm
    ||
    [sourceData.productType] match $searchTermSingular
    ||
    $searchTerm in sourceData.options[].value
    || 
    $searchTerm in sourceData.tags
  )
] {
  ...
}

`
