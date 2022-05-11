import type { NextPage } from 'next'
import { Box, Container, Flex } from '@chakra-ui/react'
import { useRecoilState } from 'recoil'
import { textState } from '../recoil/todo'
import { ChangeEvent, useCallback, useEffect, useState } from 'react'
import { RoundedOutlineButton } from '../components/button'
import { TextInput } from '../components/textInput'
import { List } from '../components/list'

const Home: NextPage = () => {
  const [text, setText] = useRecoilState(textState)
  const [inputText, setInputText] = useState('')
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

  // TODO 型定義をtype TextInput を使いたい
  const setInputValueToInputText = (e: ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value)
  }

  const setInputTextToRecoilState = () => {
    setText({ todos: [...text.todos, inputText] })
    setInputText('')
  }

  return (
    <>
      <Container w="700px" margin="20px auto">
        {/*  TODO: 文字列が入っていない時のバリデーションを追加する */}
        <Flex>
          <TextInput value={inputText} onChange={setInputValueToInputText} />
          <RoundedOutlineButton onClick={setInputTextToRecoilState} />
        </Flex>
        <br />
        <List list={text.todos} openModal={openModal} deleteTodo={deleteTodo} />
      </Container>
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
    </>
  )
}

export default Home
