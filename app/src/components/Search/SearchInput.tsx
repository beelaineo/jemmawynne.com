import * as React from 'react'
import { Formik, Field as FormikField } from 'formik'
import { SearchForm, SearchInputWrapper, StyledSearchInput } from './styled'
import { Button } from '../Button'

interface SearchInputProps {
  handleSubmit: (values: any) => void
  searchTerm?: string
  /* */
}

export const SearchInput = ({ handleSubmit, searchTerm }: SearchInputProps) => {
  const initialValues = {
    searchTerm: searchTerm || '',
  }
  return (
    <SearchInputWrapper>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        {({ handleSubmit: formikHandleSubmit }) => (
          <SearchForm onSubmit={formikHandleSubmit}>
            <FormikField name="searchTerm">
              {({ field }) => (
                <StyledSearchInput name="searchTerm" {...field} />
              )}
            </FormikField>
            <Button level={1} type="submit">
              Search
            </Button>
          </SearchForm>
        )}
      </Formik>
    </SearchInputWrapper>
  )
}
