import * as React from 'react'
import styled, { css } from '@xstyled/styled-components'
import { useError } from './ErrorProvider'
import { Heading } from '../../components/Text'
import { Button } from '../../components/Button'
import Logo from '../../assets/Logo_Large_Black.svg'

const Outer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  z-index: alert;
`

interface WithIsFatal {
  isFatal?: boolean
}

const Background = styled.div<WithIsFatal>`
  ${({ isFatal }) => css`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: error.0;
    opacity: ${isFatal ? 1 : 0.7};
    z-index: 10;
  `}
`

const LogoWrapper = styled.div`
  max-width: 300px;
  margin: 0 auto;
  margin-bottom: 5;
  svg {
    width: 100%;
  }
`

const Wrapper = styled.div`
  width: 100%;
  max-width: 500px;
  border-radius: 8px;
  box-shadow: 0px 2px 2px 2px rgba(0, 0, 0, 0.3);
  padding: 6;
  text-align: center;
  background-color: body.1;
  position: relative;
  z-index: 20;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

interface ErrorPageProps {
  children: React.ReactNode
}

export const ErrorDisplay = () => {
  const { errorMessage, isFatal, clearError } = useError()
  if (!errorMessage) return null
  return (
    <Outer>
      <Background isFatal={isFatal} />

      <Wrapper>
        <LogoWrapper>
          <Logo />
        </LogoWrapper>
        <Heading
          color="body.6"
          family="sans"
          weight={2}
          textTransform="none"
          letterSpacing="initial"
          level={4}
        >
          {errorMessage}
        </Heading>
        {!isFatal ? (
          <Button onClick={clearError} mt={3} level={2}>
            Ok
          </Button>
        ) : null}
      </Wrapper>
    </Outer>
  )
}
