import * as React from 'react'
import { Field as FormikField } from 'formik'
import { SelectElement } from '../Fields/styled'
import { Option, FieldProps } from './Field'

interface SelectProps extends FieldProps {
  options?: Option[]
}

export const Select = (props: SelectProps) => {
  const { options, name, required, disabled, placeholder } = props
  if (!options) return null
  return (
    <FormikField name={name}>
      {({ field }) => (
        <>
          <SelectElement
            {...field}
            value={field.value}
            id={field.name}
            required={required}
            placeholder={placeholder}
            disabled={disabled}
          >
            {placeholder ? (
              <option key="__placeholder" value="" disabled>
                {placeholder}
              </option>
            ) : null}
            {options.map(({ id, value, label, disabled }) => (
              <option key={id} value={value} disabled={disabled}>
                {label}
              </option>
            ))}
          </SelectElement>
        </>
      )}
    </FormikField>
  )
}
