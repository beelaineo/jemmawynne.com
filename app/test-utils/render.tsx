import * as React from 'react'
import { render } from 'react-testing-library'
import { ThemeProvider } from 'styled-components'
import { theme } from '../theme'

interface Props {
  children: React.ReactNode
}

const Providers = ({ children }: Props) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
)

const customRender = (ui: React.ReactElement, options = {}) =>
  render(ui, { wrapper: Providers, ...options })

// re-export everything
export * from 'react-testing-library'

// override render method
export { customRender as render }
