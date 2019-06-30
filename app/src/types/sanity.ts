import * as React from 'react'
import { ShopifyImage } from 'use-shopify'
import {
	ContentSection as ContentSectionGen,
	ImageWithAltText,
} from './generated'

/**
 * Sanity Rich Text
 */

interface TextChild {
	_key: string
	_type: string
	text: string
	marks: string[]
}

interface MarkDef {
	_type: string
	href: string
}

export interface TextNode {
	children: TextChild[]
	markDefs: MarkDef[]
	style: string
	listItem?: 'number' | 'bullet'
	level?: number
}

interface Mark {
	mark: {
		href: string
	}
	children: React.ReactNode
}

interface VideoEmbed {
	_key: string
	_type: string
	service: string
	videoId: string
	alt?: string
}

export type RichTextBlock = TextNode | SanityImage | VideoEmbed

/**
 * Main Blocks
 */

interface Block {
	_type: string
	_key: string
}

export interface TextBlock extends Block {
	_type: string
	_key: string
}

export interface ImageBlock extends Block {
	_type: string
	_key: string
}

type ContentBlock = TextBlock | ImageBlock

export interface ContentSection extends ContentSectionGen {}

/**
 * Colors
 */

export interface Color {
	hex: string
	rgb?: {
		r: number
		g: number
		b: number
		a: number
	}
	hsv?: {
		h: number
		s: number
		v: number
		a: number
	}
}

/**
 * Media
 */

export interface SanityImage extends ImageWithAltText {}

/**
 * SEO
 */

export interface SEO {
	description?: string
	name?: string
	image?: SanityImage | ShopifyImage | null
	contentType?: string
	currency?: string | null
	price?: string | null
}
