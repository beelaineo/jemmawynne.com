import * as React from 'react'
import styled from '@xstyled/styled-components'
import { useError } from './ErrorProvider'
import { Heading } from '../../components/Text'
import Logo from '../../assets/Logo_Large_Black.svg'

const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 200;
  background-color: error.0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

const LogoWrapper = styled.div`
  max-width: 300px;
  margin: 0 auto;
  margin-bottom: 5;
`

const Wrapper = styled.div`
  width: 100%;
  max-width: 500px;
  border-radius: 8px;
  box-shadow: 0px 2px 2px 2px rgba(0, 0, 0, 0.3);
  padding: 6;
  text-align: center;
  background-color: body.1;
`

interface ErrorPageProps {
  children: React.ReactNode
}

export const ErrorWrapper = ({ children }: ErrorPageProps) => {
  const { errorMessage } = useError()
  if (!errorMessage) return <>{children}</>
  return (
    <Background>
      <Wrapper>
        <LogoWrapper>
          <Logo />
        </LogoWrapper>
        <Heading color="body.6" level={3}>
          {errorMessage}
        </Heading>
      </Wrapper>
    </Background>
  )
}
