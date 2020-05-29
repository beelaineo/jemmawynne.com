import * as React from 'react'
import { RichText } from '../RichText'
import { Heading } from '../Text'
import { ProductInfoBlock } from '../../types'
import { Wrapper, ToggleButton, Inner, PlusMinus } from './styled'

interface AccordionProps {
  accordion: ProductInfoBlock
}

const AccordionTextWrapper = (props: any) => <Heading level={5} {...props} />

export const Accordion = ({ accordion }: AccordionProps) => {
  const { title, bodyRaw } = accordion
  const [open, setOpen] = React.useState(false)
  const toggleOpen = () => setOpen(!open)

  return (
    <Wrapper>
      <ToggleButton onClick={toggleOpen}>
        <Heading
          level={6}
          color="body.5"
          mb={0}
          textTransform="uppercase"
          family="sans"
        >
          {title}
        </Heading>
        <PlusMinus open={open} />
      </ToggleButton>
      <Inner open={open}>
        <RichText blockWrapper={AccordionTextWrapper} body={bodyRaw} />
      </Inner>
    </Wrapper>
  )
}
