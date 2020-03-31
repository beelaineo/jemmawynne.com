import styled, { css } from '@xstyled/styled-components'

export const FooterWrapper = styled.footer`
  ${({ theme }) => css`
    background-color: body.2;
    color: body.9;
    padding: 34px 38px;

    ${theme.mediaQueries.tablet} {
      padding: 4 3;
    }
  `}
`

export const Company = styled.div``

export const LinkGroupWrapper = styled.div`
  padding-top: 16px;
`

export const FooterBottom = styled.div`
  display: flex;
  justify-content: center;

  & > * + * {
    margin-left: 5;
  }
`

export const Logo = styled.img`
  margin-bottom: 8px;
  height: 30px;
`

export const FooterLinks = styled.div`
  display: grid;
  grid-template-columns: 300px 1fr 1fr 1fr;
  grid-column-gap: 6;
  margin: 5 auto;
  padding: 0 3;
  max-width: 1200px;

  & > * + * {
    margin-left: 4;
  }
`

export const MailerWrapper = styled.div`
  margin: 4 0;
`

export const MailerInput = styled.form`
  position: relative;
  button {
    color: body.5;
    font-size: 2;
    background-color: transparent;
    position: absolute;
    top: 0;
    right: 11px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  svg {
    stroke: currentColor;
  }

  input:focus ~ button {
    color: body.7;
  }
`

export const Socials = styled.div`
  margin: 0 auto 5;
  font-size: 3;
  display: flex;
  justify-content: center;
  a {
    display: flex;
  }
  a + a {
    margin-left: 5;
  }
  svg {
    fill: currentColor;
  }
`
