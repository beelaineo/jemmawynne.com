export const searchQuery = `
*[
  (
    _type == "shopifyProduct" ||
    _type == "shopifyCollection"
  )
  &&
    defined(shopifyId)
  && 
  (
    [title, sourceData.description] match $searchTerm
    ||
    sourceData.productType == $searchTerm
    ||
    $searchTerm in sourceData.options[].value
    || 
    $searchTerm in sourceData.tags
  )
] {
  ...
}

`
