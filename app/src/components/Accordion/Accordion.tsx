import * as React from 'react'
import { Wrapper, ToggleButton, Inner } from './styled'

interface AccordionProps {
	label: string
	children: React.ReactNode
}

export const Accordion = ({ label, children }: AccordionProps) => {
	const [open, setOpen] = React.useState(false)
	const toggleOpen = () => setOpen(!open)

	return (
		<Wrapper>
			<ToggleButton onClick={toggleOpen}>{label}</ToggleButton>
			<Inner open={open}>{children}</Inner>
		</Wrapper>
	)
}
