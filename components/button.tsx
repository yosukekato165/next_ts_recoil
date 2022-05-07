import { Button } from '@chakra-ui/react'
import { FC } from 'react'

type Props = {
  onClick: () => void
}

export const RoundedOutlineButton: FC<Props> = ({ onClick }) => {
  return (
    <Button colorScheme="blue" onClick={onClick}>
      Button
    </Button>
  )
}
