import convict from 'convict'
import path from 'path'
import './development.json'
import './production.json'

require('dotenv').config()

export const config = convict({
	env: {
		doc: 'The application environment.',
		format: ['production', 'development', 'test'],
		default: 'development',
		env: 'NODE_ENV',
	},
	shopify: {
		shopName: {
			format: String,
			env: 'SHOPIFY_SHOP_NAME',
		},
		accessToken: {
			format: String,
			env: 'SHOPIFY_ACCESS_TOKEN',
		},
	},
	sanity: {
		projectId: {
			format: String,
			env: 'SANITY_PROJECT_ID',
		},
		dataset: {
			format: String,
			env: 'SANITY_DATASET',
		},
	},
	port: {
		env: 'PORT',
		default: 3000,
	},
})

const env = config.get('env')
config.loadFile(path.resolve(__dirname, `${env}.json`))
