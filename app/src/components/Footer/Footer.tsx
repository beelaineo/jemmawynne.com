import * as React from 'react'
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaPinterest,
} from 'react-icons/fa'
import Link from 'next/link'
import Logo from '../../assets/Logo_Large_Black.svg'
import { Heading } from '../../components/Text'
import { RichText } from '../../components/RichText'
import { useShopData } from '../../providers/ShopDataProvider'
import { NewsletterSignup } from './NewsletterSignup'
import { FooterLinkGroup } from './FooterLinkGroup'
import { TabletLinks } from './TabletLinks'
import { definitely } from '../../utils'
import {
  Socials,
  FooterWrapper,
  Company,
  LinkGroupsWrapper,
  LinkGroupWrapper,
  LogoWrapper,
  FooterBottom,
} from './styled'

const currentYear = new Date().getFullYear()

const AboutText = (props: any) => (
  <Heading family="serif" level={4} {...props} />
)

export const Footer = () => {
  const { siteSettings } = useShopData()
  if (!siteSettings) return null
  const { aboutRaw, linkGroups } = siteSettings
  return (
    <FooterWrapper>
      <Socials>
        <a
          href="https://www.facebook.com/Jemma-Wynne-279690269614/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebookF />
        </a>
        <a
          href="https://twitter.com/JEMMAWYNNE"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTwitter />
        </a>
        <a
          href="https://www.pinterest.com/jemmawynne/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaPinterest />
        </a>
        <a
          href="https://www.instagram.com/jemmawynne/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram />
        </a>
      </Socials>
      <NewsletterSignup />
      <Company>
        <LogoWrapper>
          <Logo />
        </LogoWrapper>
        <RichText body={aboutRaw} blockWrapper={AboutText} />
      </Company>
      <LinkGroupsWrapper>
        {linkGroups
          ? definitely(linkGroups).map((group) => (
              <LinkGroupWrapper key={group._key || 'some-key'}>
                <FooterLinkGroup linkGroup={group} />
              </LinkGroupWrapper>
            ))
          : null}
      </LinkGroupsWrapper>
      <TabletLinks linkGroups={definitely(linkGroups)} />

      <FooterBottom>
        <Heading color="body.7" pt="5px" level={5}>
          <Link href="/[pageSlug]" as="/terms-and-conditions">
            <a>Terms & Conditions</a>
          </Link>
        </Heading>
        <Heading color="body.7" pt="5px" level={5}>
          <Link href="/[pageSlug]" as="/privacy-policy">
            <a>Privacy Policy</a>
          </Link>
        </Heading>
        <Heading color="body.7" pt="5px" level={5}>
          © {currentYear} Jemma Wynne
        </Heading>
      </FooterBottom>
    </FooterWrapper>
  )
}
