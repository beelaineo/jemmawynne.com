import React, { SyntheticEvent } from 'react'
import { MdArrowForward } from 'react-icons/md'
import { Column } from '../../components/Layout'
import { Input } from '../../components/Text'
import { MailerInput, MailerWrapper } from './styled'

const { useState } = React

export const NewsletterSignup = () => {
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
        <MailerInput onSubmit={handleSubmit}>
          <Input
            type="email"
            value={inputValue}
            onChange={handleChange}
            placeholder="Sign up for our mailing list"
          />
          <button type="submit">
            <MdArrowForward />
          </button>
        </MailerInput>
      </Column>
    </MailerWrapper>
  )
}
