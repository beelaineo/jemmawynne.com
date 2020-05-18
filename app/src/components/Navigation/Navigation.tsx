import * as React from 'react'
import { unwindEdges } from '@good-idea/unwind-edges'
import { Router } from 'next/router'
import Link from 'next/link'
import { AiOutlineMenu } from 'react-icons/ai'
import { IoMdClose } from 'react-icons/io'
import { definitely } from '../../utils'
import { useCheckout } from 'use-shopify'
import { useMenu } from '../../providers/MenuProvider'
import { useShopData } from '../../providers/ShopDataProvider'
import { CartSidebar, Checkout } from '../Cart'
import { SearchInput } from './SearchInput'
import Logo from '../../assets/Logo_Large_Black.svg'
import { DesktopNav } from './DesktopNav'
import { TabletNav } from './TabletNav'
import {
  Wrapper,
  CartCount,
  CartButton,
  LogoWrapper,
  NavTools,
  NavTop,
  ModalBackground,
  BurgerMenu,
} from './styled'

const { useEffect } = React

interface NavigationProps {
  router: Router
}

export const Navigation = ({ router }: NavigationProps) => {
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
  const openSubMenu = (key: string | undefined) => () => {
    if (key === currentSubMenuKey) {
      openSubMenuHandler(undefined)
    } else {
      openSubMenuHandler(key)
    }
  }
  const openCart = () => openCartHandler()

  /* Effects */
  useEffect(() => {
    if (cartOpen) closeMenu()
  }, [cartOpen])

  useEffect(() => {
    closeMenu()
  }, [router.asPath])

  /* Parsing */
  const allMenuItems = definitely(menu?.menuItems) ?? []
  const subMenus = allMenuItems.filter(
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
          <IoMdClose onClick={closeMenu} />
        ) : (
          <AiOutlineMenu onClick={openMenu} />
        )}
      </BurgerMenu>

      <NavTools>
        <SearchInput />
        <CartButton disabled={loading} onClick={openCart}>
          {cartCount ? <CartCount>{cartCount}</CartCount> : null}
        </CartButton>
      </NavTools>
      <DesktopNav
        ready={ready}
        closeSubMenu={closeSubMenu}
        openSubMenu={openSubMenu}
        menuItems={allMenuItems}
        currentSubMenuKey={currentSubMenuKey}
        subMenus={subMenus}
        subMenuOpen={subMenuOpen}
      />
      <TabletNav
        open={menuOpen}
        ready={ready}
        openSubMenu={openSubMenu}
        menuItems={allMenuItems}
        currentSubMenuKey={currentSubMenuKey}
      />
      <ModalBackground open={cartOpen} onClick={closeCart} />
      <CartSidebar open={cartOpen}>
        <Checkout />
      </CartSidebar>
    </Wrapper>
  )
}
