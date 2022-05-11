import { FC, useCallback, useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCube, faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { Box, ButtonGroup, Flex } from '@chakra-ui/react'
import { useRecoilState } from 'recoil'
import { textState } from '../recoil/todo'

type Props = {
  list: string[]
  openModal: () => void
  deleteTodo: (e: number) => void
}

export const List: FC<Props> = ({ list, openModal, deleteTodo }) => {
  const [text, setText] = useRecoilState(textState)

  return (
    <ul>
      {list.map((e, i) => {
        return (
          <li key={i}>
            <Flex justifyContent={'space-between'}>
              {i + 1}. {e}
              <ButtonGroup gap="2">
                <Box onClick={openModal} cursor="pointer">
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
