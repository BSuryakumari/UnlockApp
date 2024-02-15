// Write your code here
import {useState} from 'react'

import {
  LockImage,
  UnlockImage,
  StyledParagraph,
  UnlockButton,
  LockButton,
  Container,
} from './styledComponents'


const Unlock = () => {
  const [isLocked, setIsLocked] = useState(true)

  const handleUnlock = () => {
    setIsLocked(false)
  }

  const handleLock = () => {
    setIsLocked(true)
  }

  return (

    <Container>
      {isLocked ? (
        <LockImage
          src="https://assets.ccbp.in/frontend/hooks/lock-img.png"
          alt="lock"
        />
      ) : (
        <UnlockImage
          src="https://assets.ccbp.in/frontend/hooks/unlock-img.png"
          alt="unlock"
        />
      )}
      <StyledParagraph>
        Your Device is {isLocked ? 'Locked' : 'Unlocked'}
      </StyledParagraph>
      {isLocked ? (
        <UnlockButton onClick={handleUnlock}>Unlock</UnlockButton>
      ) : (
        <LockButton onClick={handleLock}>Lock</LockButton>
      )}
    </Container>
  )
}

export default Unlock
