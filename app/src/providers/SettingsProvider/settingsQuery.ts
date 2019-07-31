import { Collection } from 'use-shopify'
import { Paginated } from '@good-idea/unwind-edges'
import { Menu } from '../../types/generated'
import { linkFragment, imageBlockFragment } from '../../graphql/fragments'

export const SETTINGS_QUERY = /* GraphQL */ `
	{
		Menu(id: "menu-settings") {
			_id
			_type
			_key
			_createdAt
			menuItems {
				... on MenuLink {
					_key
					_type
					label
					link {
						...LinkFragment
					}
				}
				... on SubMenu {
					_key
					_type
					title
					columns {
						... on ImageBlock {
							...ImageBlockFragment
						}
						... on LinkGroup {
							_key
							_type
							title
							links {
								...LinkFragment
							}
						}
					}
				}
			}
		}
	}
	${linkFragment}
	${imageBlockFragment}
`

export interface SettingsResponse {
	Menu: Menu
}
