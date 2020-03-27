import styled, { css } from '@xstyled/styled-components'

export const FooterWrapper = styled.footer`
  ${({ theme }) => css`
    background-color: body.2;
    color: body.9;
    padding: 34px 38px;
    text-align: center;

    ${theme.mediaQueries.tablet} {
      padding: 4 3;
    }
  `}
`

export const FooterInner = styled.div`
  display: flex;
  justify-content: center;
  margin: 4 0;

  &:last-child {
    margin-bottom: 0;
  }
`

export const FooterLinks = styled.div`
  display: flex;
  margin: 2 0;

  & > * + * {
    margin-left: 4;
  }
`

export const MailerWrapper = styled.div``

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
  font-size: 3;
  display: flex;
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
