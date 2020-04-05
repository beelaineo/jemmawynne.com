import * as React from 'react'
import { unwindEdges } from '@good-idea/unwind-edges'
import Link from 'next/link'
import { AiOutlineShopping, AiOutlineMenu } from 'react-icons/ai'
import { IoMdClose, IoIosArrowBack } from 'react-icons/io'
import { MdChevronRight } from 'react-icons/md'
import { DocumentLink } from '../../components/DocumentLink'
import { Heading } from '../../components/Text'
import { getDocumentLinkLabel } from '../../utils/links'
import { useCheckout } from 'use-shopify'
import { useMenu } from '../../providers/MenuProvider'
import { useShopData } from '../../providers/ShopDataProvider'
import { CartSidebar } from '../../components/Cart'
import { Checkout } from '../Cart/Checkout'
import { SubMenu } from './SubMenu'
import { SearchInput } from './SearchInput'
import Logo from '../../assets/Logo_Large_Black.svg'
import {
  Wrapper,
  Inner,
  NavSection,
  CartCount,
  CartButton,
  NavHeader,
  NavHeaderWrapper,
  SubmenuPane,
  LogoWrapper,
  NavTools,
  NavTop,
  ModalBackground,
  RightArrowSpan,
  BurgerMenu,
} from './styled'

const { useEffect } = React

export const Navigation = () => {
  /* State from Providers */
  const { ready, menu } = useShopData()
  const { loading, checkout } = useCheckout()

  /* State */
  const {
    cartOpen,
    menuOpen,
    subMenuOpen,
    currentSubMenuKey,
    openCart: openCartHandler,
    closeCart,
    openMenu,
    closeMenu,
    openSubMenu: openSubMenuHandler,
    closeSubMenu,
  } = useMenu()

  /* Handlers */
  const openSubMenu = (key: string | undefined) => () => openSubMenuHandler(key)
  const openCart = () => openCartHandler()

  /* Effects */
  useEffect(() => {
    if (cartOpen) closeMenu()
  }, [cartOpen])

  /* Parsing */
  const allMenuItems = menu?.menuItems ?? []
  const submenus = allMenuItems.filter(
    (mi) => mi && mi.__typename === 'SubMenu',
  )
  const lineItems = checkout ? unwindEdges(checkout.lineItems)[0] : []
  const cartCount = loading ? null : lineItems.length || null

  if (!ready) return null
  return (
    <Wrapper>
      <NavTop>
        <Link href="/">
          <a>
            <LogoWrapper>
              <Logo />
            </LogoWrapper>
          </a>
        </Link>
      </NavTop>

      <BurgerMenu>
        {menuOpen ? (
          currentSubMenuKey ? (
            <IoIosArrowBack onClick={closeSubMenu} />
          ) : (
            <IoMdClose onClick={closeMenu} />
          )
        ) : (
          <AiOutlineMenu onClick={openMenu} />
        )}
      </BurgerMenu>

      <NavTools>
        <SearchInput />
        <CartButton disabled={loading} onClick={openCart}>
          {cartCount ? <CartCount>{cartCount}</CartCount> : null}
          <AiOutlineShopping />
        </CartButton>
      </NavTools>

      <Inner open={menuOpen} onMouseLeave={closeSubMenu}>
        <NavSection ready={ready}>
          {allMenuItems.map((menuItem) => {
            if (!menuItem || !menuItem._key) return null
            const { _key } = menuItem
            const active = currentSubMenuKey === _key
            switch (menuItem.__typename) {
              case 'SubMenu':
                return (
                  <NavHeaderWrapper
                    key={_key}
                    active={active}
                    onMouseEnter={openSubMenu(_key)}
                    onClick={openSubMenu(_key)}
                  >
                    <NavHeader>
                      <Heading
                        textTransform="uppercase"
                        family="sans"
                        fontWeight={3}
                        level={6}
                      >
                        {menuItem.title}

                        <RightArrowSpan>
                          <MdChevronRight />
                        </RightArrowSpan>
                      </Heading>
                    </NavHeader>
                  </NavHeaderWrapper>
                )
              case 'Cta':
                return (
                  <NavHeaderWrapper
                    key={_key}
                    active={active}
                    onMouseEnter={openSubMenu(undefined)}
                    onClick={openSubMenu(undefined)}
                  >
                    <NavHeader>
                      <DocumentLink document={menuItem?.link?.document}>
                        <Heading
                          textTransform="uppercase"
                          family="sans"
                          level={6}
                          fontWeight={3}
                        >
                          {getDocumentLinkLabel(menuItem?.link?.document) ||
                            null}
                        </Heading>
                      </DocumentLink>
                    </NavHeader>
                  </NavHeaderWrapper>
                )
                return 'CTA'
              default:
                throw new Error(
                  // @ts-ignore
                  `There is no component for menu item of type "${menuItem.__typename}"`,
                )
            }
          })}
        </NavSection>
        <SubmenuPane open={Boolean(subMenuOpen && currentSubMenuKey)}>
          {submenus.map((submenu) =>
            submenu && submenu._key && submenu.__typename === 'SubMenu' ? (
              <SubMenu
                key={submenu._key || 'some-key'}
                submenu={submenu}
                active={currentSubMenuKey === submenu._key}
              />
            ) : null,
          )}
        </SubmenuPane>
      </Inner>
      <ModalBackground open={cartOpen} onClick={closeCart} />
      <CartSidebar open={cartOpen}>
        <Checkout />
      </CartSidebar>
    </Wrapper>
  )
}
