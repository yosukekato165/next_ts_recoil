import { Box, Flex } from '@chakra-ui/react'
import { TextInput } from './textInput'
import { RoundedOutlineButton } from './button'
import { ChangeEvent, FC } from 'react'

type ModalProps = {
  isModalOpen: boolean
  closeModal: () => void
  editText: string
  setEditValueToEditText: (e: string) => void
  setEditTextToRecoilState: () => void
}
// TODO: 引数減らせないかな？
export const Modal: FC<ModalProps> = ({
  isModalOpen,
  closeModal,
  editText,
  setEditValueToEditText,
  setEditTextToRecoilState
}) => {
  return (
    <>
      <Box
        position="fixed"
        top="0"
        left="0"
        w="100%"
        h="100%"
        display={isModalOpen ? 'block' : 'none'}
        bg="blue"
        opacity="0.3"
        cursor="pointer"
        onClick={closeModal}
      />
      <Box
        position="fixed"
        top="50%"
        left="50%"
        transform="translateX(-50%) translateY(-50%)"
        w="700px"
        h="400px"
        border="solid 2px white"
        borderRadius="40px"
        display={isModalOpen ? 'flex' : 'none'}
        justifyContent="center"
        alignItems="center"
      >
        <Flex w="600px">
          <TextInput value={editText} onChange={(e) => setEditValueToEditText(e.target.value)} />
          <RoundedOutlineButton onClick={setEditTextToRecoilState} />
        </Flex>
      </Box>
    </>
  )
}
