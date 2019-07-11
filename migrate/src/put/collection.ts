import { newStore } from './api'

export const createCollection = async (title, productIds) => {
	const collects = productIds.map((product_id) => ({
		product_id,
	}))
	return newStore.customCollection.create({ title, collects })
}
