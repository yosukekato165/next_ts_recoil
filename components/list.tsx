import { FC, useCallback, useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCube, faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { Box, ButtonGroup, Flex } from '@chakra-ui/react'
import { useRecoilState } from 'recoil'
import { textState } from '../recoil/todo'

type Props = {
  list: string[]
}

export const List: FC<Props> = ({ list }) => {
  const [text, setText] = useRecoilState(textState)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const escFunction = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isModalOpen) {
        setIsModalOpen(false)
      }
    },
    [isModalOpen]
  )

  useEffect(() => {
    document.addEventListener('keydown', escFunction)
  }, [escFunction])

  const openModal = () => {
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }
  const removeItemAtIndex = (arr: any[], index: number) => {
    return [...arr.slice(0, index), ...arr.slice(index + 1)]
  }

  const deleteTodo = (e: number) => {
    const newTodos = removeItemAtIndex(text.todos, e)

    setText({ todos: newTodos })
  }

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
            <Box
              position="fixed"
              top="0"
              left="0"
              w="100%"
              h="100%"
              display={isModalOpen ? 'block' : 'none'}
              bg="blue"
              opacity="0.3"
              onClick={closeModal}
            />
          </li>
        )
      })}
    </ul>
  )
}
