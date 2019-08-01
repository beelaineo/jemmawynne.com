import S from '@sanity/desk-tool/structure-builder'
import { MdSettings, MdHome, MdInfoOutline } from 'react-icons/md'
import { TiDevicePhone, TiThSmallOutline, TiDocument } from 'react-icons/ti'
import { FaShoppingBag } from 'react-icons/fa'
import { FiCompass } from 'react-icons/fi'

export default () =>
	S.list()
		.title('Site')
		.items([
			S.listItem()
				.title('Homepage')
				.icon(MdHome)
				.child(
					S.editor()
						.id('homepage')
						.schemaType('homepage')
						.documentId('homepage'),
				),
			S.listItem()
				.title('Nav Menu')
				.icon(FiCompass)
				.child(
					S.editor()
						.id('menu')
						.schemaType('menu')
						.documentId('menu-settings'),
				),

			// Products
			S.listItem()
				.id('products')
				.title('Products')
				.icon(TiDevicePhone)
				.child(S.documentTypeList('shopifyProduct')),

			S.listItem()
				.id('productInfo')
				.title('Product Info')
				.icon(MdInfoOutline)
				.child(
					S.editor()
						.id('productInfo')
						.schemaType('productInfo')
						.documentId('productInfo'),
				),

			// Collections
			S.listItem()
				.id('collections')
				.title('Collections')
				.icon(TiThSmallOutline)
				.child(S.documentTypeList('shopifyCollection')),

			// Shop Page
			// S.listItem()
			// 	.title('Shop')
			// 	.icon(FaShoppingBag)
			// 	.child(
			// 		S.editor()
			// 			.id('shop')
			// 			.schemaType('shop')
			// 			.documentId('shop'),
			// 	),

			// Pages
			S.listItem()
				.id('pages')
				.title('Pages')
				.icon(TiDocument)
				.child(S.documentTypeList('page')),

			// S.listItem()
			// 	.title('Site Settings')
			// 	.icon(MdSettings)
			// 	.child(
			// 		S.editor()
			// 			.id('config')
			// 			.schemaType('siteSettings')
			// 			.documentId('site-settings'),
			// 	),

			// // Static pages: About, Contact
			// S.listItem()
			// 	.title('Other Pages')
			// 	.child(S.documentTypeList('staticPage').title('Pages')),
		])
