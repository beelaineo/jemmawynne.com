import client from 'part:@sanity/base/client'

const query =
  '*[_type == "shopifyProduct" || _type == "shopifyCollection"]{ _id }'

const fetchDocuments = async () => client.fetch(query)

const sleep = (ms) => new Promise((r) => setTimeout(r, ms))

const createTransaction = (patches) =>
  patches.reduce(
    (tx, patch) => tx.patch(patch.id, patch.patch),
    client.transaction(),
  )

const commitTransaction = (tx) => tx.commit()

const run = async () => {
  const docs = await fetchDocuments()
  const patches = docs.map((doc) => ({
    id: doc._id,
    patch: {
      unset: ['collections', 'products'],
    },
  }))
  const unsetTx = createTransaction(patches)
  const r = await unsetTx.commit()
  const d = await client.delete({ query })
}

run()
