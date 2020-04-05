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

export const Company = styled.div`
  padding: 0 8;

  h4:first-of-type {
    margin-bottom: 1.3em;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`

export const LinkGroupWrapper = styled.div`
  padding-top: 7px;
`

export const FooterBottom = styled.div`
  display: flex;
  justify-content: center;

  & > * + * {
    margin-left: 5;
  }
`

export const LogoWrapper = styled.div`
  margin-bottom: 15px;
  width: 250px;
`

export const FooterLinks = styled.div`
  display: grid;
  grid-template-columns: 400px 1fr 1fr 1fr;
  grid-column-gap: 6;
  margin: 5 auto;
  padding: 0 3;
  max-width: 1200px;
`

export const MailerWrapper = styled.div`
  margin: 4 0;
`

export const MailerInput = styled.form`
  position: relative;
  border: 1px solid;
  border-color: body.5;
  height: 40px;
  overflow: hidden;
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

  input {
    border: none;
    height: 100%;
  }

  input:focus ~ button {
    color: body.7;
  }
`

interface WithVisible {
  visible: boolean
  pending?: boolean
}

export const InputWrapper = styled.div`
  ${({ visible, pending }: WithVisible) => css`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    opacity: ${pending ? '0.5' : '1'};
    height: 100%;
    transform: ${visible ? 'none' : 'translateY(-100%)'};
    transition: 0.3s;
  `}
`
export const Message = styled.div`
  ${({ visible }: WithVisible) => css`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transform: ${visible ? 'none' : 'translateY(100%)'};
    transition: 0.3s;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 0 2;
  `}
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
