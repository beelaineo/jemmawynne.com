import React, { SyntheticEvent } from 'react'
import { MdArrowForward } from 'react-icons/md'
import { Column } from '../../components/Layout'
import { Heading } from '../../components/Text'
import { Input } from '../../components/Text'
import { MailerInput, MailerWrapper } from './styled'

const { useState } = React

interface NewsletterSignupProps {
  mailerTitle: string
  mailerSubtitle: string
}

export const NewsletterSignup = ({
  mailerTitle,
  mailerSubtitle,
}: NewsletterSignupProps) => {
  const [inputValue, setInputValue] = useState('')

  const handleChange = (e: SyntheticEvent<HTMLInputElement>) => {
    e.preventDefault()
    const value = e?.currentTarget?.value ?? ''
    setInputValue(value)
  }

  const handleSubmit = () => alert('todo')

  return (
    <MailerWrapper>
      <Column center width="small">
        <Heading level={4} weight={4}>
          {mailerTitle}
        </Heading>
        <Heading mb={3} level={4} weight={2}>
          {mailerSubtitle}
        </Heading>
        <MailerInput onSubmit={handleSubmit}>
          <Input
            type="email"
            value={inputValue}
            onChange={handleChange}
            placeholder="email"
          />
          <button type="submit">
            <MdArrowForward />
          </button>
        </MailerInput>
      </Column>
    </MailerWrapper>
  )
}
