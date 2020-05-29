import * as React from 'react'
import { Field as FormikField } from 'formik'
import { FieldProps } from './Field'
import { InputWrapper, Input as InputElement } from './styled'

export interface InputProps extends FieldProps {
  type?: string
  renderBeforeInput?: () => React.ReactNode
}

export const Input = (props: InputProps) => {
  const {
    name,
    required,
    readOnly,
    disabled,
    placeholder,
    type,
    color,
    renderBeforeInput,
    validate,
  } = props
  return (
    <FormikField validate={validate} name={name}>
      {({ field }) => (
        <div>
          <InputWrapper>
            {renderBeforeInput ? renderBeforeInput() : null}
            <InputElement
              {...field}
              value={field.value || ''}
              id={field.name}
              required={required}
              placeholder={placeholder}
              color={color}
              type={type}
              readOnly={readOnly}
              disabled={disabled}
            />
          </InputWrapper>
        </div>
      )}
    </FormikField>
  )
}
