import * as React from 'react'
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaPinterest,
} from 'react-icons/fa'
import Link from 'next/link'
import { Heading } from '../../components/Text'
import { RichText } from '../../components/RichText'
import { useShopData } from '../../providers/ShopDataProvider'
import { NewsletterSignup } from './NewsletterSignup'
import { FooterLinkGroup } from './FooterLinkGroup'
import {
  Socials,
  FooterWrapper,
  Company,
  FooterLinks,
  LinkGroupWrapper,
  Logo,
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
      <FooterLinks>
        <Company>
          <Logo
            src="/static/images/Logo_Large_Black.svg"
            alt="Jemma Wynne Logo"
          />

          <RichText body={aboutRaw} blockWrapper={AboutText} />
        </Company>
        {linkGroups
          ? linkGroups.map((group) =>
              group ? (
                <LinkGroupWrapper key={group._key || 'some-key'}>
                  <FooterLinkGroup linkGroup={group} />
                </LinkGroupWrapper>
              ) : null,
            )
          : null}
      </FooterLinks>
      <FooterBottom>
        <Heading color="body.7" pt="5px" level={4}>
          © {currentYear} Jemma Wynne
        </Heading>
        <Heading color="body.7" pt="5px" level={4}>
          <Link href="/terms-and-conditions">
            <a>Terms & Conditions</a>
          </Link>
        </Heading>
        <Heading color="body.7" pt="5px" level={4}>
          <Link href="/privacy-policy">
            <a>Privacy Policy</a>
          </Link>
        </Heading>
      </FooterBottom>
    </FooterWrapper>
  )
}
