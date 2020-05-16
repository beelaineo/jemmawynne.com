import * as React from 'react'
import styled from '@xstyled/styled-components'
import { Field as FormikField } from 'formik'
import { Option, FieldProps } from './Field'
import { Label } from '../../Text'

const OptionWrapper = styled.div`
  display: block;
`
export interface RadioProps extends FieldProps {
  options?: Option[]
}

export const Radio = ({ name, options, label }: RadioProps) => {
  return (
    <>
      <Label htmlFor={name}>{label}</Label>
      {options
        ? options.map((option) => (
            <OptionWrapper key={option.id}>
              <FormikField name={name}>
                {({ field }) => (
                  <>
                    <input
                      {...field}
                      type="radio"
                      id={option.id}
                      name={name}
                      value={option.value}
                      disabled={option.disabled}
                    />
                    <Label htmlFor={option.id}>{option.label}</Label>
                  </>
                )}
              </FormikField>
            </OptionWrapper>
          ))
        : null}
    </>
  )
}
