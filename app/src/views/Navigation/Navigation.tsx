import * as React from 'react'
import { Link } from 'react-router-dom'
import styled, { css } from 'styled-components'
import { RichPageLink } from '../../components/RichPageLink'
import {
  getDocumentLinkLabel,
  DocumentLink,
} from '../../components/DocumentLink'
import { Header4 } from '../../components/Text'
import { path } from 'ramda'
import { useCheckout } from 'use-shopify'
import { useShopData } from '../../providers/ShopDataProvider'
import { useLocation } from '../../providers/LocationProvider'
import { CartSidebar, CloseButton, CartNav } from '../../components/Cart'
import { unwindEdges } from '../../utils/graphql'
import { Checkout } from '../Cart/Checkout'
import { Button } from '../ProductDetail/styled'
import { SubMenu } from './SubMenu'
import { SearchInput } from './SearchInput'
import {
  Wrapper,
  Inner,
  NavSection,
  NavHeader,
  NavHeaderWrapper,
  SubmenuPane,
  Logo,
  ModalBackground,
  Loading,
} from './styled'
import { IoIosCart } from 'react-icons/io'

const { useState, useEffect, useReducer } = React

interface MenuProps {
  activeMenu: null | string
  openMenu: (menuKey: null | string) => () => void
  closeMenu: () => void
}

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

interface Action {
  type:
    | typeof OPEN_SUBMENU
    | typeof OPEN_CART
    | typeof CLOSE_MENU
    | typeof CLOSE_CART
    | typeof CLOSE_ALL
  [key: string]: any
}

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
      throw new Error(`"${action.type}" is not a valid action type`)
  }
}

export const Navigation = () => {
  /* State from Providers */
  const { loading, checkout } = useCheckout()
  const { ready, menu } = useShopData()
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

  const openMenu = (menuKey: string) => () =>
    dispatch({ type: OPEN_SUBMENU, menuKey })
  const closeMenu = () => dispatch({ type: CLOSE_MENU })

  /* Parsing */
  const menuItems = menu ? menu.menuItems : []
  const submenus = menuItems.filter((mi) => mi.__typename === 'SubMenu')
  const lineItems = checkout ? unwindEdges(checkout.lineItems)[0] : []
  const cartCount = loading ? null : lineItems.length || null

  return (
    <Wrapper>
      <Inner>
        <NavSection ready={ready}>
          {menuItems.map((menuItem) => {
            switch (menuItem.__typename) {
              case 'SubMenu':
                return (
                  <NavHeaderWrapper
                    key={menuItem._key}
                    onMouseEnter={openMenu(menuItem._key)}
                  >
                    <NavHeader>{menuItem.title}</NavHeader>
                  </NavHeaderWrapper>
                )
              case 'Cta':
                return (
                  <NavHeaderWrapper key={menuItem._key}>
                    <DocumentLink document={menuItem.link.document}>
                      <NavHeader>
                        {getDocumentLinkLabel(menuItem.link.document)}
                      </NavHeader>
                    </DocumentLink>
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

        <Link to="/">
          <Logo src="/static/images/Logo_Large_Black.svg" />
        </Link>
        <NavSection ready={ready} align="right">
          <SearchInput />
          <NavHeaderWrapper>
            <NavHeader as="button" onClick={openCart}>
              <Loading isLoading={loading}>
                <div>
                  <IoIosCart />
                </div>
                <div>
                  {cartCount}
                  {cartCount === 1 ? ' item' : cartCount >= 2 ? ' items' : ''}
                </div>
              </Loading>
            </NavHeader>
          </NavHeaderWrapper>
        </NavSection>
        <SubmenuPane open={menuOpen} onMouseLeave={closeMenu}>
          {submenus.map((submenu) =>
            submenu.__typename === 'SubMenu' ? (
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
