import * as React from 'react'
import { Modal } from '../../components/Modal'
import { Heading } from '../../components/Text'
import { Form, Field } from '../../components/Forms'
import { ShopifyProduct, ShopifySourceProductVariant } from '../../types'
import { Button } from '../../components/Button'
import { HintFieldsWrapper } from './styled'
import { buildMailTo } from '../../utils'

interface HintModalProps {
  open: boolean
  closeModal: () => void
  product: ShopifyProduct
  currentVariant?: ShopifySourceProductVariant
}

interface FormValues {
  senderName: string
  recipientName: string
  recipientEmail: string
}

const initialValues = {
  senderName: '',
  recipientName: '',
  recipientEmail: '',
}

export const HintModal = ({
  open,
  closeModal,
  currentVariant,
  product,
}: HintModalProps) => {
  const handleSubmit = async (values: FormValues) => {
    const { recipientEmail, recipientName, senderName } = values
    const hintLink = [
      'https://www.jemmawynne.com/products/',
      product.handle,
      currentVariant?.title ? `?v=${encodeURI(currentVariant.title)}` : '',
    ].join('')
    const hintMailTo = buildMailTo({
      to: recipientEmail,
      subject: "Here's a hint..",
      body: `Hello ${recipientName},\n\nHere is a hint for you:\n\n${hintLink}\n\nSincerely,\n${senderName}`,
    })
    if (typeof window !== 'undefined') window.open(hintMailTo)
    closeModal()
    return true
  }
  return (
    <Modal open={open} closeModal={closeModal}>
      <Heading
        textAlign="center"
        fontWeight={2}
        mb={6}
        level={1}
        family="serif"
      >
        Drop a Hint
      </Heading>
      <Form<FormValues> onSubmit={handleSubmit} initialValues={initialValues}>
        <HintFieldsWrapper>
          <Field name="senderName" label="Your Name" required />
          <Field name="recipientName" label="Recipient Name" required />
          <Field
            name="recipientEmail"
            label="Recipient Email"
            type="email"
            required
          />
          <Button mt={5} type="submit">
            Send Hint
          </Button>
        </HintFieldsWrapper>
      </Form>
    </Modal>
  )
}
