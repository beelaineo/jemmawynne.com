import * as React from 'react'
import { SubMenu as SubMenuType } from '../../types/generated'
import {
	NavHeaderWrapper,
	NavHeader,
	SubMenuWrapper,
	SubMenuColumns,
} from './styled'
import { ImageBlock } from '../../components/ContentSection/ImageBlock'
import { LinkGroup } from './LinkGroup'

const { useEffect, useRef } = React

interface SubMenuProps {
	subMenu: SubMenuType
}

export const SubMenu = ({ subMenu }: SubMenuProps) => {
	const { title, columns } = subMenu
	console.log(subMenu)
	return (
		<React.Fragment>
			<NavHeaderWrapper>
				<NavHeader transform="uppercase">{title}</NavHeader>
			</NavHeaderWrapper>
			<SubMenuWrapper>
				<SubMenuColumns>
					{columns.map((col) => {
						switch (col.__typename) {
							case 'ImageBlock':
								console.log(col)
								return <ImageBlock key={col._key} block={col} />
							case 'LinkGroup':
								return <LinkGroup key={col._key} linkGroup={col} />
							default:
								throw new Error(
									// @ts-ignore
									`Cannot create a column for type "${col.__typename}"`,
								)
						}
					})}
				</SubMenuColumns>
			</SubMenuWrapper>
		</React.Fragment>
	)
}
