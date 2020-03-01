import styled from '@xstyled/styled-components'

export const FooterWrapper = styled.footer`
  background-color: body.7;
  color: body.0;
  padding: 4 6;
  text-align: center;
  box-shadow: 0 -2px 3px rgba(0, 0, 0, 0.3);
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
