import * as React from 'react'
import { Modal } from '../../components/Modal'
import { Heading } from '../../components/Text'
import { Form, Field } from '../../components/Forms'
import { ShopifyProduct } from '../../types'
import { Button } from '../../components/Button'
import { HintFieldsWrapper } from './styled'
import { buildMailTo } from '../../utils'

interface HintModalProps {
  open: boolean
  closeModal: () => void
  product: ShopifyProduct
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

export const HintModal = ({ open, closeModal, product }: HintModalProps) => {
  const handleSubmit = async (values: FormValues) => {
    const { recipientEmail, recipientName, senderName } = values
    const hintMailTo = buildMailTo({
      to: recipientEmail,
      subject: "Here's a hint..",
      body: `Hello ${recipientName},\n\nHere is a hint for you:\n\nhttps://www.jemmawynne.com/products/${product.handle}\n\nSincerely,\n${senderName}`,
    })
    if (typeof window !== 'undefined') window.open(hintMailTo)
    closeModal()
    return true
  }
  return (
    <Modal open={open} closeModal={closeModal}>
      <Heading level={1} family="serif">
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
          <Button type="submit">Send Hint</Button>
        </HintFieldsWrapper>
      </Form>
    </Modal>
  )
}
