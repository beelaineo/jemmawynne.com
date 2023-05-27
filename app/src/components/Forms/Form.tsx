import * as React from 'react'
import styled, { css } from '@xstyled/styled-components'
// eslint-disable-next-line import/named
import { Formik, FormikValues } from 'formik'
import { FormWrapper } from './styled'
import { Heading } from '../Text'

interface FormElementProps {
  isSubmitting: boolean
  disabled?: boolean
}

export interface FormikConfig<Values> {
  initialValues: Values
  validate?: (props: Values) => void
  validateOnChange?: boolean
}

const FormElement = styled.form`
  ${({ isSubmitting, disabled }: FormElementProps) =>
    isSubmitting || disabled
      ? css`
          opacity: 0.75;
          pointer-events: none;
        `
      : ''}
`

interface FormProps<FormValues extends FormikValues>
  extends FormikConfig<FormValues> {
  title?: string
  description?: string
  children: React.ReactNode
  disabled?: boolean
  onSubmit: (values: FormValues) => void
  initialValues: FormValues
  validationSchema?: FormikValues['validationSchema']
}

interface BaseValues {
  [k: string]: string | boolean | number | void | null
}

export function Form<FormValues extends FormikValues>({
  title,
  description,
  onSubmit,
  disabled,
  initialValues,
  children,
  validationSchema,
}: FormProps<FormValues>) {
  return (
    <FormWrapper>
      {title ? (
        <Heading
          level={2}
          // @ts-ignore
          color="primaryMain"
        >
          {title}
        </Heading>
      ) : null}
      {description ? (
        <Heading
          level={4}
          // @ts-ignore
          color="offset.1"
        >
          {description}
        </Heading>
      ) : null}
      <Formik<FormValues>
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        {({ handleSubmit, isSubmitting }) => {
          return (
            <FormElement
              isSubmitting={isSubmitting}
              disabled={disabled}
              onSubmit={handleSubmit}
            >
              {children}
            </FormElement>
          )
        }}
      </Formik>
    </FormWrapper>
  )
}
