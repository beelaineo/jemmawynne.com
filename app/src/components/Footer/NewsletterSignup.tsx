import React, { SyntheticEvent } from 'react'
import { MdArrowForward } from 'react-icons/md'
import { Column } from '../../components/Layout'
import { Heading, Input } from '../../components/Text'
import { MailerInput, MailerWrapper, InputWrapper, Message } from './styled'

const { useState } = React

const READY = 'READY'
const PENDING = 'PENDING'
const SUCCESS = 'SUCCESS'
const ERROR = 'ERROR'

type State = typeof READY | typeof PENDING | typeof SUCCESS | typeof ERROR

export const NewsletterSignup = () => {
  const [inputValue, setInputValue] = useState('')
  const [state, setState] = useState<State>(READY)

  const handleChange = (e: SyntheticEvent<HTMLInputElement>) => {
    e.preventDefault()
    const value = e?.currentTarget?.value ?? ''
    setInputValue(value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setState(PENDING)
    const response = await fetch('/api/klaviyo', {
      method: 'POST',
      body: JSON.stringify({ email: inputValue }),
    }).then((r) => r.json())
    const { statusCode } = response
    if (statusCode === 200) {
      setState(SUCCESS)
    } else {
      setState(ERROR)
    }
  }

  return (
    <MailerWrapper>
      <Column maxWidth="small">
        <MailerInput onSubmit={handleSubmit}>
          <InputWrapper
            visible={state === READY || state === PENDING}
            pending={state === PENDING}
          >
            <Input
              disabled={state !== READY}
              type="email"
              name="email"
              value={inputValue}
              onChange={handleChange}
              placeholder="Sign up for our mailing list"
            />
            <button disabled={state !== READY} type="submit">
              <MdArrowForward />
            </button>
          </InputWrapper>
          <Message visible={state === SUCCESS}>
            <Heading level={4}>Thank you!</Heading>
          </Message>
          <Message visible={state === ERROR}>
            <Heading level={4}>
              Sorry, there was an error. We have been notified and will add you
              to the mailing list.
            </Heading>
          </Message>
        </MailerInput>
      </Column>
    </MailerWrapper>
  )
}
