import { FC, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCube } from '@fortawesome/free-solid-svg-icons'
import { Box, Flex } from '@chakra-ui/react'

type Props = {
  list: string[]
}

export const List: FC<Props> = ({ list }) => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = () => {
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }
  // TODO: 削除ボタンを追加する
  return (
    <ul>
      {list.map((e, i) => {
        return (
          <li key={i}>
            <Flex justifyContent={'space-between'}>
              {i + 1}. {e}
              <Box onClick={openModal} cursor="pointer">
                <FontAwesomeIcon icon={faCube} />
              </Box>
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
