import { Collection } from 'use-shopify'
import { Paginated } from '../../types'
import { Menu } from '../../types/generated'
import {
	linkFragment,
	linkFragmentInline,
	imageBlockFragment,
} from '../../graphql/fragments'

export const SETTINGS_QUERY = /* GraphQL */ `
	{
		Menu(id: "menu-settings") {
			_id
			_type
			_key
			menuItems {
				... on MenuLink {
					_key
					_type
					label
					link {
            ${linkFragmentInline}
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
								_key
								_type
								label
								link {
                  ${linkFragmentInline}
								}
							}
						}
					}
				}
			}
		}
	}
	${imageBlockFragment}
`

export interface SettingsResponse {
	collections: Paginated<Collection>
	Menu: Menu
}
