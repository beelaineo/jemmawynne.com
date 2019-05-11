import * as React from 'react'
import { SanityImage, ShopifyImage } from './media'

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

export interface TextBlock {
	_type: string
	_key: string
	blocks?: RichTextBlock[]
	fullWidth?: boolean
}

export type ContentBlock = TextBlock

export type ContentBlocks = ContentBlock[]

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
