import * as React from 'react'
import { SubMenu as SubMenuType } from '../../types'
import {
  SubMenuWrapper,
  SubMenuTitle,
  SubMenuTitles,
  SubMenuContent,
  SubMenuContentSection,
  ImageWrapper,
} from './styled'
import { Image } from '../../components/Image'
import { Heading } from '../../components/Text'
import { SubmenuSection } from './SubmenuSection'
import { SubmenuSectionList } from './SubmenuSectionList'
import { definitely } from '../../utils'

const { useState } = React

interface SubMenuProps {
  submenu: SubMenuType
  active: boolean
}

export const SubMenu = ({ submenu, active }: SubMenuProps) => {
  const { columns } = submenu
  if (!columns || columns.length === 0) return null
  const firstColumn = columns[0]
  if (!firstColumn) return null
  const [activeSection, setActiveSectionValue] = useState(firstColumn._key)
  const setActiveSection = (key: string | null | undefined) => () =>
    setActiveSectionValue(key)

  if (!activeSection) return null
  if (!columns) return null

  return (
    <SubMenuWrapper>
      <SubMenuTitles>
        {columns.map((column) =>
          column ? (
            <SubMenuTitle
              active={column._key === activeSection}
              key={column._key || 'some-key'}
            >
              <Heading weight={2} level={3} family="serif">
                <span onMouseEnter={setActiveSection(column._key)}>
                  {column.title}
                </span>
              </Heading>
            </SubMenuTitle>
          ) : null,
        )}
      </SubMenuTitles>
      <SubMenuContent>
        {definitely(columns).map((column) => (
          <SubMenuContentSection
            active={column._key === activeSection}
            key={column._key || 'some-key'}
            aria-hidden={!(column._key === activeSection)}
          >
            {column.__typename === 'SubmenuSection' ? (
              <SubmenuSection section={column} />
            ) : column.__typename === 'SubmenuSectionList' ? (
              <SubmenuSectionList section={column} />
            ) : null}
            {
              // TODO: Deprecate
              'images' in column
                ? definitely(column.images).map((image, index) =>
                    image ? (
                      <ImageWrapper key={image._key || 'some-key'}>
                        <Image
                          image={image}
                          ratio={
                            column.images && index === column.images.length - 1
                              ? undefined
                              : 1
                          }
                        />
                      </ImageWrapper>
                    ) : null,
                  )
                : null
            }
          </SubMenuContentSection>
        ))}
      </SubMenuContent>
    </SubMenuWrapper>
  )
}
