import * as React from 'react'
import styled from '@xstyled/styled-components'
import { Field as FormikField } from 'formik'
import { FieldProps } from './Field'
import { Label, Input } from './styled'

const Outer = styled.div`
  text-align: center;
  margin: 0 auto;
`

const Wrapper = styled.div`
  margin-top: 1;
  display: flex;
  justify-content: center;
  height: 3;
`

const NumberButton = styled.button`
  border: 1px solid;
  border-color: higlight.0;
  color: highlight.1;
  width: 3;
  font-size: 2;
  font-weight: 100;
`

const NumberInputElement = styled(Input)`
  border: 1px solid;
  border-color: highlight.1;
  color: highlight.2;
  height: 100%;
  text-align: center;
  display: block;
  margin: 0;
  border-left-width: 0;
  font-size: 2;
  font-weight: 500;
  font-family: sans;
  border-right-width: 0;
  width: 3;

  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`

interface NumberProps extends FieldProps {
  type?: string
}

export const NumberInput = ({ label, name, required }: NumberProps) => (
  <FormikField name={name}>
    {({ field, form }) => {
      const increment = () => {
        form.setTouched({ ...form.touched, [name]: true })
        form.setValues({ ...form.values, [name]: field.value + 1 })
      }
      const decrement = () => {
        form.setTouched({ ...form.touched, [name]: true })
        form.setValues({ ...form.values, [name]: field.value - 1 })
      }
      return (
        <Outer>
          <Label required={required} htmlFor={name}>
            {label}
          </Label>
          <Wrapper>
            <NumberButton type="button" onClick={decrement}>
              -
            </NumberButton>
            <NumberInputElement type="number" {...field} />
            <NumberButton type="button" onClick={increment}>
              +
            </NumberButton>
          </Wrapper>
        </Outer>
      )
    }}
  </FormikField>
)
