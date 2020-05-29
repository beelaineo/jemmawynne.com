import * as React from 'react'
import {
  ErrorMessage,
  Field as FormikField,
  FieldProps as FormikFieldProps,
  FieldValidator,
} from 'formik'
import { Heading } from '../../Text'
import { Checkbox } from './Checkbox'
import { Radio } from './Radio'
import { Input } from './Input'
import { NumberInput } from './Number'
import { Select } from './Select'
import { FieldWrapper, Label } from './styled'

/**
 * Base Field
 */

export interface Option {
  value: string | number
  id: string
  label: string
  disabled?: boolean
}

export type WithFormik<T> = T & {
  formik: FormikFieldProps
}

export interface FieldProps {
  label?: string | React.ReactNode
  name: string
  helpText?: string
  children?: React.ReactNode
  disabled?: boolean
  placeholder?: string
  min?: number
  max?: number
  required?: boolean
  type?: string
  color?: string
  options?: Option[]
  validate?: FieldValidator
  onChange?: (value: string) => void
  readOnly?: boolean
}

export const Field = (fieldProps: FieldProps) => {
  const { label, required, type, helpText, children } = fieldProps
  if (fieldProps.type === 'hidden') {
    return (
      <FormikField name={fieldProps.name}>
        {({ field }) => <input type="hidden" {...field} />}
      </FormikField>
    )
  }

  const renderInner = () => {
    switch (type) {
      case 'radio':
        return <Radio {...fieldProps} />
      case 'checkbox':
        return <Checkbox {...fieldProps} />
      case 'number':
        return <NumberInput {...fieldProps} />
      case 'select':
        return <Select {...fieldProps} />
      default:
        return <Input {...fieldProps} />
    }
  }
  const className = `field field--${fieldProps.type} field--${fieldProps.name}`

  const noBorder = type === 'checkbox' || type === 'number'

  return (
    <div className={className}>
      <FieldWrapper noBorder={noBorder}>
        {label ? (
          <Label required={required} htmlFor={name}>
            {label}
          </Label>
        ) : null}
        {children ? children : renderInner()}
      </FieldWrapper>
      {helpText ? (
        <Heading level={4} mt={1} weight={1} color="body.3">
          {helpText}
        </Heading>
      ) : null}
      <ErrorMessage
        name={fieldProps.name}
        render={(message) => (
          <Heading level={4} weight={1} mt={1} mb={2} color="red">
            {message}
          </Heading>
        )}
      />
    </div>
  )
}
