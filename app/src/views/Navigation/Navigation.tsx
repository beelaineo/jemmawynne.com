import * as React from 'react'
import { unwindEdges } from '@good-idea/unwind-edges'
import Link from 'next/link'
import { IoIosCart } from 'react-icons/io'
import { DocumentLink } from '../../components/DocumentLink'
import { Heading } from '../../components/Text'
import { getDocumentLinkLabel } from '../../utils/links'
import { useCheckout } from 'use-shopify'
import { useShopData } from '../../providers/ShopDataProvider'
import { useLocation } from '../../providers/LocationProvider'
import { CartSidebar, CloseButton } from '../../components/Cart'
import { Checkout } from '../Cart/Checkout'
import { SubMenu } from './SubMenu'
import { SearchInput } from './SearchInput'
import {
  Wrapper,
  Inner,
  NavSection,
  CartButton,
  NavHeader,
  NavHeaderWrapper,
  SubmenuPane,
  Logo,
  NavTools,
  NavTop,
  ModalBackground,
} from './styled'

const { useEffect, useReducer } = React

interface NavState {
  cartOpen: boolean
  menuOpen: boolean
  currentSubmenuKey: string | void
}

const OPEN_SUBMENU = 'OPEN_SUBMENU'
const OPEN_CART = 'OPEN_CART'
const CLOSE_CART = 'CLOSE_CART'
const CLOSE_MENU = 'CLOSE_MENU'
const CLOSE_ALL = 'CLOSE_ALL'

interface GenericAction {
  type:
    | typeof OPEN_CART
    | typeof CLOSE_MENU
    | typeof CLOSE_CART
    | typeof CLOSE_ALL
}

interface OpenMenuAction {
  type: typeof OPEN_SUBMENU
  menuKey: string | void
}

type Action = GenericAction | OpenMenuAction

function navReducer(currentState: NavState, action: Action): NavState {
  switch (action.type) {
    case OPEN_SUBMENU:
      return {
        ...currentState,
        currentSubmenuKey: action.menuKey,
        menuOpen: true,
      }
    case CLOSE_MENU:
      return {
        ...currentState,
        menuOpen: false,
      }

    case OPEN_CART:
      return {
        ...currentState,
        cartOpen: true,
      }
    case CLOSE_CART:
      return {
        ...currentState,
        cartOpen: false,
      }
    case CLOSE_ALL:
      return {
        ...currentState,
        cartOpen: false,
        menuOpen: false,
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
  const { location } = useLocation()

  /* State */
  const [{ cartOpen, menuOpen, currentSubmenuKey }, dispatch] = useReducer(
    navReducer,
    {
      cartOpen: false,
      menuOpen: false,
      currentSubmenuKey: undefined,
    },
  )

  /* Effects */

  useEffect(() => {
    /* Close the menu & cart after a path change */
    dispatch({ type: CLOSE_ALL })
  }, [location.pathname])

  /* Handlers */
  const openCart = () => dispatch({ type: OPEN_CART })
  const closeCart = () => dispatch({ type: CLOSE_CART })

  const openMenu = (menuKey: string | undefined) => () =>
    dispatch({ type: OPEN_SUBMENU, menuKey })
  const closeMenu = () => dispatch({ type: CLOSE_MENU })

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
            <Logo src="/static/images/Logo_Large_Black.svg" />
          </a>
        </Link>
      </NavTop>

      <NavTools>
        <SearchInput />
        <CartButton disabled={loading} onClick={openCart}>
          <IoIosCart />
          {cartCount ? (
            <div>
              {cartCount}
              {cartCount === 1 ? ' item' : cartCount >= 2 ? ' items' : ''}
            </div>
          ) : null}
        </CartButton>
      </NavTools>

      <Inner>
        <NavSection ready={ready}>
          {allMenuItems.map((menuItem) => {
            if (!menuItem || !menuItem._key) return null
            const { _key } = menuItem
            const active = currentSubmenuKey === _key
            switch (menuItem.__typename) {
              case 'SubMenu':
                return (
                  <NavHeaderWrapper
                    key={_key}
                    active={active}
                    onMouseEnter={openMenu(_key)}
                  >
                    <NavHeader>
                      <Heading
                        textTransform="uppercase"
                        family="sans"
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
                    onMouseEnter={openMenu(undefined)}
                  >
                    <NavHeader>
                      <DocumentLink document={menuItem?.link?.document}>
                        <Heading
                          textTransform="uppercase"
                          family="sans"
                          level={4}
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
          open={Boolean(menuOpen && currentSubmenuKey)}
          onMouseLeave={closeMenu}
        >
          {submenus.map((submenu) =>
            submenu && submenu._key && submenu.__typename === 'SubMenu' ? (
              <SubMenu
                key={submenu._key}
                submenu={submenu}
                active={currentSubmenuKey === submenu._key}
              />
            ) : null,
          )}
        </SubmenuPane>
      </Inner>
      <ModalBackground open={cartOpen} onClick={closeCart} />
      <CartSidebar open={cartOpen}>
        <Checkout />
        <CloseButton onClick={closeCart}>close</CloseButton>
      </CartSidebar>
    </Wrapper>
  )
}
