import { FC } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCube, faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { Box, ButtonGroup, Flex } from '@chakra-ui/react'

type Props = {
  list: string[]
  openModal: (e: number) => void
  deleteTodo: (e: number) => void
}

export const List: FC<Props> = ({ list, openModal, deleteTodo }) => {
  return (
    <ul>
      {list.map((e, i) => {
        return (
          <li key={i}>
            <Flex justifyContent={'space-between'}>
              {i + 1}. {e}
              <ButtonGroup gap="2">
                <Box onClick={() => openModal(i)} cursor="pointer">
                  <FontAwesomeIcon icon={faCube} />
                </Box>
                <Box onClick={() => deleteTodo(i)} cursor="pointer">
                  <FontAwesomeIcon icon={faTrashCan} />
                </Box>
              </ButtonGroup>
            </Flex>
          </li>
        )
      })}
    </ul>
  )
}
