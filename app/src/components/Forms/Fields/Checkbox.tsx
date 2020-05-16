import * as React from 'react'
import styled from '@xstyled/styled-components'
import { Field as FormikField } from 'formik'
import { Label } from './styled'
import { FieldProps } from './Field'

const CheckboxElement = styled.input`
  -webkit-appearance: none;
  border-radius: 0;
  border: 1px solid;
  border-color: highlight.0;
  width: 20px;
  height: 20px;
  background-color: white;
  box-shadow: inset 0 2px 4px 0px rgba(0, 0, 0, 0.2);
  position: relative;

  &:checked {
    background-color: highlight.2;
    box-shadow: inset 0 0px 0px 2px white;
  }
`

const CheckboxWrapper = styled.div`
  display: grid;
  grid-template-columns: 35px 1fr;

  @media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {
    display: flex;
    align-items: flex-top;
    & > *:first-child {
      justify-content: flex-center;
      margin-right: 15px;
    }
  }
`

export interface CheckboxProps extends FieldProps {
  type?: string
  //
}

export const Checkbox = ({
  label,
  required,
  type,
  placeholder,
  disabled,
  name,
}: CheckboxProps) => {
  return (
    <FormikField type="checkbox" name={name}>
      {({ field }) => (
        <CheckboxWrapper>
          <div>
            <CheckboxElement
              {...field}
              value={field.value || false}
              id={field.name}
              required={required}
              placeholder={placeholder}
              type={type}
              disabled={disabled}
            />
          </div>

          <Label htmlFor={name} required={required}>
            {label}
          </Label>
        </CheckboxWrapper>
      )}
    </FormikField>
  )
}
