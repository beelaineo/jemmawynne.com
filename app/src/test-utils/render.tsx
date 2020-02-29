import * as React from 'react'
import { render } from 'react-testing-library'
import { ThemeProvider } from '@xstyled/styled-components'
import { defaultTheme } from '../theme'

interface Props {
  children: React.ReactNode
}

const Providers = ({ children }: Props) => (
  <ThemeProvider theme={defaultTheme}>{children}</ThemeProvider>
)

const customRender = (ui: React.ReactElement, options = {}) =>
  render(ui, { wrapper: Providers, ...options })

// re-export everything
export * from 'react-testing-library'

// override render method
export { customRender as render }
