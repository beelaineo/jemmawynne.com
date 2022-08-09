import * as React from 'react'
import { IoMdClose } from 'react-icons/io'
import { DocumentLink } from '../DocumentLink'
import styled, { css, DefaultTheme } from '@xstyled/styled-components'
import { useShopData } from '../../providers/ShopDataProvider'
import { useAnnouncement } from '../../providers/AnnouncementProvider'
import { Heading } from '../../components/Text'

const { useState, useEffect } = React

interface AnnouncementWrapperProps {
  open: boolean
}

const AnnouncementWrapper = styled.div<AnnouncementWrapperProps>`
  ${({ open, theme }) => css`
    position: relative;
    display: flex;
    overflow: hidden;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: ${open ? theme.announcementHeight : '0'};
    background-color: body.2;
    transition: 0.5s;
    ${theme.mediaQueries.mobile} {
      height: 35px;
    }
  `}
`

const CloseButton = styled.button`
  position: absolute;
  top: 50%;
  right: 15px;
  font-size: 21px;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  background-color: transparent;
`

const Announcements = styled.div``

interface AnnouncementTextProps {
  theme: DefaultTheme
  active: boolean
}

const AnnouncementText = styled.div<AnnouncementTextProps>`
  ${({ active, theme }) => css`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 3;
    opacity: ${active ? '1' : '0'};
    pointer-events: ${active ? 'initial' : 'none'};
    transition: 0.3s;
    transition-delay: ${active ? '0.5s' : '0'};

    & > div > *,
    & > div > * > * {
      display: inline;
    }

    ${theme.mediaQueries.mobile} {
      line-height: 0.8em;
      h6 {
        line-height: inherit;
        font-size: 9px;
      }
    }
  `}
`

export const Announcement = () => {
  const { siteSettings } = useShopData()
  const { dismiss, open, setOpen } = useAnnouncement()
  const [activeAnnouncement, setActiveAnnouncement] = useState(0)
  const { banner } = siteSettings || {}
  const { dismissable, announcements } = banner || {}

  useEffect(() => {
    if (!open) return
    if (!announcements || announcements.length === 0) return
    const timeout = setTimeout(() => {
      const nextIndex =
        activeAnnouncement === announcements.length - 1
          ? 0
          : activeAnnouncement + 1
      setActiveAnnouncement(nextIndex)
    }, 10000)
    return () => clearTimeout(timeout)
  }, [open, announcements, activeAnnouncement])

  if (!siteSettings) return null

  if (!banner) return null
  if (!announcements || announcements.length === 0) return null

  return (
    <AnnouncementWrapper open={open}>
      {dismissable ? (
        <CloseButton onClick={dismiss}>
          <IoMdClose />
        </CloseButton>
      ) : null}
      <Announcements>
        {announcements.map((announcement, index) =>
          announcement ? (
            <AnnouncementText
              key={announcement._key || 'some-key'}
              active={index === activeAnnouncement}
              aria-hidden={!Boolean(index === activeAnnouncement)}
            >
              <div>
                <Heading weight={3} family="sans" mb={0} level={6}>
                  {announcement.text}
                </Heading>
                {announcement.cta?.link && announcement.cta?.label?.length ? (
                  <DocumentLink document={announcement.cta.link.document}>
                    <Heading
                      weight={4}
                      mb={0}
                      ml={2}
                      family="sans"
                      textDecoration="underline"
                      level={6}
                    >
                      {announcement.cta.label}
                    </Heading>
                  </DocumentLink>
                ) : null}
              </div>
            </AnnouncementText>
          ) : null,
        )}
      </Announcements>
    </AnnouncementWrapper>
  )
}
