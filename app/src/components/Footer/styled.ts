import styled, { css } from '@xstyled/styled-components'

export const FooterWrapper = styled.footer`
  ${({ theme }) => css`
    background-color: body.2;
    color: body.9;
    padding: 34px 38px;
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-gap: 5;
    margin-top: 6;

    ${theme.mediaQueries.tablet} {
      padding: 3;
      grid-gap: 4;
    }
  `}
`

export const Company = styled.div`
  ${({ theme }) => css`
    padding: 0;
    grid-column: 1 / 6;

    h4:first-of-type {
      margin-bottom: 1.3em;
    }

    a {
      text-decoration: none;
      color: inherit;
    }
    ${theme.mediaQueries.tablet} {
      grid-row: 1;
      grid-column: span 12;
      text-align: center;
    }
  `}
`

export const LinkGroupsWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    grid-column: 6 / 13;

    ${theme.mediaQueries.tablet} {
      display: none;
    }
  `}
`

export const LinkGroupWrapper = styled.div`
  padding-top: 7px;
  grid-column: span 2;
`

export const FooterBottom = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    grid-column: span 12;

    & > * + * {
      margin-left: 5;
    }
    ${theme.mediaQueries.tablet} {
      border-top: 1px solid;
      border-top-color: body.9;
      padding-top: 3;
      grid-row: 5;
      text-align: center;
      & > * + * {
        margin-left: 0;
      }
      & > * {
        margin: 0 3;
      }
    }
  `}
`

export const LogoWrapper = styled.div`
  ${({ theme }) => css`
    margin-bottom: 15px;
    width: 250px;
    ${theme.mediaQueries.tablet} {
      margin: 4 auto 4;
    }
  `}
`

export const FooterLinks = styled.div`
  display: grid;
  grid-template-columns: 400px 1fr 1fr 1fr;
  grid-column-gap: 6;
  margin: 5 auto;
  padding: 0 3;
  max-width: 1200px;
`
export const FooterLinkGroupWrapper = styled.div`
  ${({ theme }) => css`
    ${theme.mediaQueries.tablet} {
      display: none;
    }
  `}
`

export const FooterLinkGroupWrapperTablet = styled.div`
  ${({ theme }) => css`
    ${theme.mediaQueries.aboveTablet} {
      display: none;
    }
    margin: 0 auto;
    max-width: 330px;
    width: 100%;
    grid-column: 1 / 13;
    grid-row: 4;
    text-align: left;
  `}
`

export const LinksWrapper = styled.div`
  ${({ theme }) => css`
    margin-top: 15px;
    ${theme.mediaQueries.tablet} {
      margin-top: 2;
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      grid-column-gap: 10px;
    }
  `}
`

export const MailerWrapper = styled.div`
  ${({ theme }) => css`
    grid-column: span 12;

    ${theme.mediaQueries.tablet} {
      grid-row: 2;
    }
  `}
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
  margin: 0 auto;
  font-size: 3;
  display: flex;
  justify-content: center;
  grid-column: span 12;
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
