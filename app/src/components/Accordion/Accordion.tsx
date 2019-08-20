import * as React from 'react'
import { RichText } from '../RichText'
import { Header5 } from '../Text'
import { Wrapper, ToggleButton, Inner, Span } from './styled'

interface AccordionProps {
	label: string
	content: { [key: string]: string }
}

const AccordionTextWrapper = (props: any) => (
	<Header5 {...props} weight="normal" />
)

export const Accordion = ({ label, content }: AccordionProps) => {
	const [open, setOpen] = React.useState(false)
	const toggleOpen = () => setOpen(!open)

	return (
		<Wrapper>
			<ToggleButton onClick={toggleOpen}>
				{label}
				<Span>{open === true ? ' −' : ' +'}</Span>
			</ToggleButton>
			<Inner open={open}>
				<RichText blockWrapper={AccordionTextWrapper} body={content} />
			</Inner>
		</Wrapper>
	)
}
