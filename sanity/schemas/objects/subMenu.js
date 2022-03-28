import * as React from 'react'
import { groupBy, prop } from 'ramda'
import { BsFileImage } from 'react-icons/bs'
import { IoIosListBox, IoWarningOutline } from 'react-icons/io'
import { BlockPreview } from '../components/BlockPreview'
import { getReferencedDocument, getShopifyThumbnail } from '../utils'

const getPreviewValues = async ({ label, link: previewLink }) => {
  if (!previewLink || !previewLink.document || !previewLink.document._ref)
    return { title: 'Missing Link' }
  const linkedDoc = await getReferencedDocument(previewLink.document._ref)

  const subtitles = [
    linkedDoc ? `🔗${linkedDoc.title}` : null,
    linkedDoc && linkedDoc.archived === true
      ? `🛑 This collection is archived and will not be displayed on the site.`
      : undefined,
  ].filter(Boolean)

  const shopifyThumbnail =
    linkedDoc &&
    (linkedDoc._type === 'shopifyProduct' ||
      linkedDoc._type === 'shopifyCollection')
      ? getShopifyThumbnail(linkedDoc)
      : undefined

  return {
    title: label || linkedDoc.title,
    subtitles,
    src: shopifyThumbnail,
  }
}

export const MenuLink = {
  name: 'menuLink',
  type: 'object',
  title: 'Nav Link',
  fields: [
    {
      title: 'Link',
      name: 'link',
      type: 'cta',
    },
  ],
  preview: {
    select: {
      link: 'link',
      label: 'label',
    },
    prepare: (val) => val,
    component: (props) => (
      <BlockPreview {...props} getPreviewValues={getPreviewValues} />
    ),
  },
}

export const linkGroup = {
  title: 'Link Group',
  name: 'linkGroup',
  description: 'Deprecated',
  type: 'object',
  fields: [
    {
      title: 'Group Title',
      name: 'title',
      description:
        '(optional) A light gray header that appears above the list of links',
      type: 'string',
    },
    {
      title: 'Links',
      name: 'links',
      type: 'array',
      validation: (Rule) => Rule.required().max(12),
      of: [{ type: 'internalLink' }],
    },
  ],
  preview: {
    select: {
      title: 'title',
      links: 'links',
    },
    prepare: ({ title, links }) => {
      return {
        title: 'Link Group',
        subtitle: '⚠️  Deprecated',
      }
    },
  },
}

export const submenuSectionListItem = {
  title: 'Menu Link + Image',
  name: 'submenuSectionListItem',
  type: 'object',
  fields: [
    {
      name: 'link',
      title: 'Linked page',
      type: 'internalLink',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'image',
      title: 'Highlight Image',
      type: 'richImage',
      validation: (Rule) => Rule.required(),
    },
  ],
  preview: {
    select: {
      title: 'link.document.title',
      altTitle: 'link.label',
      media: 'image',
    },
    prepare: ({ title, altTitle, media }) => {
      return {
        title: altTitle || title,
        media,
      }
    },
  },
}

export const submenuSectionList = {
  title: 'List Submenu',
  name: 'submenuSectionList',
  type: 'object',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Links',
      name: 'links',
      type: 'array',
      of: [{ type: 'submenuSectionListItem' }],
      validation: (Rule) => Rule.required().min(1),
    },
  ],
  icon: IoIosListBox,
}

export const submenuSection = {
  title: 'Cards Submenu',
  name: 'submenuSection',
  type: 'object',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Links',
      name: 'links',
      type: 'array',
      of: [{ type: 'richPageLink' }, { type: 'linkGroup' }],
      validation: (Rule) => Rule.required().min(1),
    },
    {
      title: 'Images',
      description:
        'Deprecated: use images in Page links or in Submenu Section (list)',
      name: 'images',
      type: 'array',
      of: [{ type: 'richImage' }],
    },
  ],
  icon: BsFileImage,
}

export const subMenu = {
  title: 'Dropdown Menu',
  name: 'subMenu',
  type: 'object',
  icon: IoIosListBox,
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Submenu Sections',
      name: 'columns',
      type: 'array',
      of: [{ type: 'submenuSection' }, { type: 'submenuSectionList' }],
    },
  ],
  preview: {
    select: {
      title: 'title',
      columns: 'columns',
    },
    prepare: ({ title, columns }) => {
      const byType = groupBy(prop('_type'), columns || {})

      const { richPageLink: richPageLinks, linkGroup: linkGroups } = byType

      const subtitle = [
        richPageLinks && richPageLinks.length
          ? `${richPageLinks.length} Page Link${
              richPageLinks.length === 1 ? '' : 's'
            }`
          : undefined,
        linkGroups && linkGroups.length
          ? `${linkGroups.length} Link Group${
              linkGroups.length === 1 ? '' : 's'
            }`
          : undefined,
      ]
        .filter(Boolean)
        .join(' | ')
      return {
        title,
        subtitle,
      }
    },
  },
}
