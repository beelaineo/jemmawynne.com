import * as React from 'react'
import { Cta } from '../types/generated'

interface CTAProps {
	cta: Cta
}

export const CTA = ({ cta }: CTAProps) => {
	const { label } = cta
	return <div>{label}</div>
}
