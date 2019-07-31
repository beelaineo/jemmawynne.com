import convict from 'convict'
import path from 'path'

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

const development = {
	shopify: {
		shopName: 'jemmawynne-development',
		accessToken: 'f50903d30045eaffacf14aa2dc37f167',
	},
	sanity: {
		projectId: 'caazz4uw',
		dataset: 'production',
	},
}

const production = {
	shopify: {
		shopName: 'jemmawynne-development',
		accessToken: 'f50903d30045eaffacf14aa2dc37f167',
	},
	sanity: {
		projectId: 'caazz4uw',
		dataset: 'production',
	},
}

const env = config.get('env')
const filePath = path.resolve(__dirname, `${env}.jzon`)
config.load(env === 'production' ? production : development)
