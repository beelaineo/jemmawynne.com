import styled, { css } from '@xstyled/styled-components'

export const FooterWrapper = styled.footer`
  ${({ theme }) => css`
    background-color: rgba(26, 48, 31);
    color: body.0;
    padding: 34px 38px;
    margin-top: calc(38px * 2);
    display: flex;
    flex-direction: column;

    ${theme.mediaQueries.tablet} {
      padding: 3;
      grid-gap: ${theme.space[4]}px;
      display: grid;
      margin-top: 38px;
      grid-template-columns: repeat(12, 1fr);
      position: relative;
    }
  `}
`

export const Company = styled.div`
  padding: 0;
  grid-column: 1 / 5;

  h4:first-of-type {
    margin-bottom: 1.3em;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
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
      padding-top: 3;
      grid-row: 5;
      text-align: center;
      justify-content: start;
      padding-bottom: 4;
      & > * + * {
        margin-left: 0;
      }
      & > * {
        margin: 0 3;
      }
    }
  `}
`

export const FooterMain = styled.div`
  ${({ theme }) => css`
    margin: 0 auto;
    max-width: 1100px;
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-gap: ${theme.space[5]}px;
    margin-bottom: 5;

    p {
      color: body.0;
    }

    ${theme.mediaQueries.tablet} {
      display: block;
      grid-column: span 12;
      grid-row: 1;
      margin-bottom: 0;
      padding: 0 4;
      p {
        font-size: 3;
        font-weight: 100;
        &:nth-child(2) {
          float: left;
        }
        &:nth-child(3) {
          float: right;
        }
        a {
          font-family: sans;
          font-weight: 400;
          font-size: 6;
          display: inline-block;
          border-bottom: 1px solid #fff;
          text-transform: uppercase;
          letter-spacing: 1;
          color: inherit;
          text-decoration: none;
        }
      }
    }
    @media screen and (max-width: 420px) {
      p {
        &:nth-child(2) {
          float: unset;
        }
        &:nth-child(3) {
          float: unset;
        }
      }
    }
  `}
`

export const LogoWrapper = styled.div`
  ${({ theme }) => css`
    margin-bottom: 15px;
    width: 250px;
    ${theme.mediaQueries.tablet} {
      margin: 4 0;
      text-align: left;
      width: unset;
    }
  `}
`

export const FooterLinks = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: 400px 1fr 1fr 1fr;
    grid-column-gap: ${theme.space[6]}px;
    margin: 5 auto;
    padding: 0 3;
    max-width: 1200px;
    h5 a {
      color: body.1;
    }
  `}
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
    margin: 0 4;
    max-width: 100%;
    width: auto;
    grid-column: 1 / 13;
    grid-row: 4;
    text-align: left;
    padding-bottom: 8;
    & > div {
      display: grid;
      grid-template-columns: 1fr 1fr;
      width: 100%;
      a {
        font-weight: 200;
      }
    }
    button {
      grid-column: span 2;
      justify-content: start;
      padding-bottom: 0;
      & > h2 {
        font-size: 3;
        font-weight: 200;
      }
      & > div {
        margin-left: 2;
        width: 11px;
        height: 11px;
        &:before {
          left: 5px;
        }
        &:after {
          top: 5px;
        }
    }
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
      padding: 4;
      grid-row: 2;
    }
  `}
`

export const MailerInput = styled.form`
  ${({ theme }) => css`
    position: relative;
    border: 1px solid;
    border-color: body.3;
    height: 40px;
    overflow: hidden;
    margin-bottom: 5;
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
      font-family: sans;
      &::placeholder {
        text-transform: uppercase;
        font-weight: 500;
        font-size: 0.75em;
      }
    }

    input:focus ~ button {
      color: body.7;
    }

    ${theme.mediaQueries.tablet} {
      margin-bottom: 0;
    }
  `}
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

export const SocialsWrapper = styled.div`
  ${({ theme }) => css`
    margin: 0 auto 5;
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

    ${theme.mediaQueries.tablet} {
      margin: 0 auto;
      padding: 4;
      position: absolute;
      right: 0;
      top: 20;
    }
  `}
`
