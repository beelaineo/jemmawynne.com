import * as React from 'react'
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaPinterest,
} from 'react-icons/fa'
import { TiSocialInstagram, TiSocialGooglePlus } from 'react-icons/ti'
import { PageLink } from '../../components/PageLink'
import { Heading } from '../../components/Text'
import { useShopData } from '../../providers/ShopDataProvider'
import { NewsletterSignup } from './NewsletterSignup'
import { Socials, FooterWrapper, FooterInner, FooterLinks } from './styled'

const currentYear = new Date().getFullYear()

export const Footer = () => {
  const shopData = useShopData()
  const footerLinks = shopData?.siteSettings?.links ?? []
  const mailerTitle = shopData?.siteSettings?.mailerTitle ?? ''
  const mailerSubtitle = shopData?.siteSettings?.mailerSubtitle ?? ''
  return (
    <FooterWrapper>
      <NewsletterSignup
        mailerTitle={mailerTitle}
        mailerSubtitle={mailerSubtitle}
      />
      <FooterInner>
        <FooterLinks>
          {footerLinks.map((link) =>
            link ? (
              <Heading
                weight={2}
                key={link._key || 'some-key'}
                family="sans"
                level={5}
              >
                <PageLink link={link} />
              </Heading>
            ) : null,
          )}
        </FooterLinks>
      </FooterInner>
      <FooterInner>
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
        <div />
      </FooterInner>
      <FooterInner>
        <Heading color="body.4" level={6}>
          © {currentYear} Jemma Wynne
        </Heading>
      </FooterInner>
    </FooterWrapper>
  )
}
