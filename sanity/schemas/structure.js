import S from '@sanity/desk-tool/structure-builder'
import { MdSettings, MdHome, MdInfoOutline } from 'react-icons/md'
import { TiDevicePhone, TiThSmallOutline, TiDocument } from 'react-icons/ti'
import { FaRegNewspaper } from 'react-icons/fa'
import { AiFillShop } from 'react-icons/ai'
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
          S.editor().id('menu').schemaType('menu').documentId('menu-settings'),
        ),

      // Products
      S.listItem()
        .id('products')
        .title('Products')
        .icon(TiDevicePhone)
        .child(
          S.documentList()
            .title('Products')
            .filter('_type == "shopifyProduct" && archived != true')
            .defaultOrdering([{ field: 'title', direction: 'asc' }])
            .menuItems([
              S.orderingMenuItem({
                title: 'A-Z',
                by: [{ field: 'title', direction: 'asc' }],
              }),
              S.orderingMenuItem({
                title: 'Recently Updated',
                by: [{ field: '_updatedAt', direction: 'desc' }],
              }),
            ]),
        ),

      S.listItem()
        .id('productInfo')
        .title('Product Settings')
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
        .child(
          S.documentList()
            .title('Collections')
            .filter('_type == "shopifyCollection" && archived != true')
            .defaultOrdering([{ field: 'title', direction: 'asc' }])
            .menuItems([
              S.orderingMenuItem({
                title: 'A-Z',
                by: [{ field: 'title', direction: 'asc' }],
              }),
              S.orderingMenuItem({
                title: 'Recently Updated',
                by: [{ field: '_updatedAt', direction: 'desc' }],
              }),
            ]),
        ),

      S.listItem()
        .id('collectionInfo')
        .title('Collection Settings')
        .icon(MdInfoOutline)
        .child(
          S.editor()
            .id('collectionInfo')
            .schemaType('collectionInfo')
            .documentId('collectionInfo'),
        ),
      S.listItem()
        .title('Stockists')
        .icon(AiFillShop)
        .child(
          S.editor()
            .id('stockists')
            .schemaType('stockists')
            .documentId('stockists'),
        ),

      S.listItem()
        .title('Main Press Page')
        .icon(FaRegNewspaper)
        .child(
          S.editor()
            .id('pressPage')
            .schemaType('pressPage')
            .documentId('pressPage'),
        ),

      S.listItem()
        .title('Press')
        .icon(FaRegNewspaper)
        .child(S.documentTypeList('pressItem')),

      // Pages
      S.listItem()
        .id('pages')
        .title('Pages')
        .icon(TiDocument)
        .child(S.documentTypeList('page')),

      S.listItem()
        .title('Site Settings')
        .icon(MdSettings)
        .child(
          S.editor()
            .id('config')
            .schemaType('siteSettings')
            .documentId('site-settings'),
        ),

      // // Static pages: About, Contact
      // S.listItem()
      // 	.title('Other Pages')
      // 	.child(S.documentTypeList('staticPage').title('Pages')),
    ])
