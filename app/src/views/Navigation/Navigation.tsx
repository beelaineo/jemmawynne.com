import * as React from 'react'
import { unwindEdges } from '@good-idea/unwind-edges'
import Link from 'next/link'
import { AiOutlineShopping, AiOutlineMenu } from 'react-icons/ai'
import { IoMdClose, IoIosArrowBack } from 'react-icons/io'
import { DocumentLink } from '../../components/DocumentLink'
import { Heading } from '../../components/Text'
import { getDocumentLinkLabel } from '../../utils/links'
import { useCheckout } from 'use-shopify'
import { useShopData } from '../../providers/ShopDataProvider'
import { useCart } from '../../providers/CartProvider'
import { CartSidebar, CloseButton } from '../../components/Cart'
import { Checkout } from '../Cart/Checkout'
import { SubMenu } from './SubMenu'
import { SearchInput } from './SearchInput'
import {
  Wrapper,
  Inner,
  NavSection,
  CartCount,
  CartButton,
  NavHeader,
  NavHeaderWrapper,
  SubmenuPane,
  Logo,
  NavTools,
  NavTop,
  ModalBackground,
  BurgerMenu,
} from './styled'

const { useEffect, useReducer } = React

interface NavState {
  cartOpen: boolean
  menuOpen: boolean
  subMenuOpen: boolean
  currentSubMenuKey: string | void
}

const OPEN_MENU = 'OPEN_MENU'
const CLOSE_MENU = 'CLOSE_MENU'
const OPEN_SUBMENU = 'OPEN_SUBMENU'
const OPEN_CART = 'OPEN_CART'
const CLOSE_CART = 'CLOSE_CART'
const CLOSE_SUBMENU = 'CLOSE_SUBMENU'
const CLOSE_ALL = 'CLOSE_ALL'

interface GenericAction {
  type: typeof CLOSE_SUBMENU | typeof OPEN_MENU | typeof CLOSE_MENU
}

interface OpenMenuAction {
  type: typeof OPEN_SUBMENU
  subMenuKey: string | void
}

type Action = GenericAction | OpenMenuAction

function navReducer(currentState: NavState, action: Action): NavState {
  switch (action.type) {
    case OPEN_SUBMENU:
      return {
        ...currentState,
        currentSubMenuKey: action.subMenuKey,
        subMenuOpen: true,
      }
    case CLOSE_SUBMENU:
      return {
        ...currentState,
        subMenuOpen: false,
        currentSubMenuKey: undefined,
      }
    case OPEN_MENU:
      return {
        ...currentState,
        menuOpen: true,
      }

    case CLOSE_MENU:
      return {
        ...currentState,
        menuOpen: false,
        subMenuOpen: false,
        currentSubMenuKey: undefined,
      }

    default:
      // @ts-ignore
      throw new Error(`"${action.type}" is not a valid action type`)
  }
}

export const Navigation = () => {
  /* State from Providers */
  const { ready, menu } = useShopData()
  const { loading, checkout } = useCheckout()
  const { open: cartOpen, openCart, closeCart } = useCart()

  /* State */
  const [{ subMenuOpen, menuOpen, currentSubMenuKey }, dispatch] = useReducer(
    navReducer,
    {
      cartOpen: false,
      menuOpen: false,
      subMenuOpen: false,
      currentSubMenuKey: undefined,
    },
  )

  /* Handlers */
  const openCartMenu = () => openCart()
  const closeCartMenu = () => closeCart()

  const openMenu = () => dispatch({ type: OPEN_MENU })
  const closeMenu = () => dispatch({ type: CLOSE_MENU })
  const toggleMenu = () => (menuOpen ? closeMenu() : openMenu())

  const openSubMenu = (subMenuKey: string | undefined) => () =>
    dispatch({ type: OPEN_SUBMENU, subMenuKey })
  const closeSubMenu = () => dispatch({ type: CLOSE_SUBMENU })

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
  console.log(currentSubMenuKey)
  return (
    <Wrapper>
      <NavTop>
        <Link href="/">
          <a>
            <Logo src="/static/images/Logo_Large_Black.svg" />
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
        <CartButton disabled={loading} onClick={openCartMenu}>
          {cartCount ? <CartCount>{cartCount}</CartCount> : null}
          <AiOutlineShopping />
        </CartButton>
      </NavTools>

      <Inner open={menuOpen}>
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
                        fontWeight={2}
                        level={4}
                      >
                        {menuItem.title}
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
                          level={4}
                          fontWeight={2}
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
        <SubmenuPane
          open={Boolean(subMenuOpen && currentSubMenuKey)}
          onMouseLeave={closeSubMenu}
        >
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
      <ModalBackground open={cartOpen} onClick={closeCartMenu} />
      <CartSidebar open={cartOpen}>
        <Checkout />
        <CloseButton onClick={closeCartMenu}>close</CloseButton>
      </CartSidebar>
    </Wrapper>
  )
}
