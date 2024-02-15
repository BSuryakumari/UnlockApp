// Style your elements here
import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #0b0c1e;
  color: #ffffff;
`

export const LockImage = styled.img`
  max-width: 100%;
`

export const UnlockImage = styled.img`
  max-width: 100%;
`

export const StyledParagraph = styled.p`
  font-family: 'Roboto'
  font-size: 18px;
  margin: 16px 0;
`

export const UnlockButton = styled.button`
  background-color: #06b6d4;
  color: #ffffff;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  border: none;
  border-radius: 4px;
  outline: none;
`

export const LockButton = styled.button`
  background-color: #3c2940;
  color: #ffffff;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  border: none;
  border-radius: 4px;
  outline: none;
`
