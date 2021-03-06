import type { NextPage } from 'next'
import { Container, Flex } from '@chakra-ui/react'
import { useRecoilState } from 'recoil'
import { textState } from '../recoil/todo'
import { ChangeEvent, useCallback, useEffect, useState } from 'react'
import { RoundedOutlineButton } from '../components/button'
import { TextInput } from '../components/textInput'
import { List } from '../components/list'
import { Modal } from '../components/modal'
import { editItemAtIndex, removeItemAtIndex } from '../utils/array'

const Home: NextPage = () => {
  const [text, setText] = useRecoilState(textState)
  const [inputText, setInputText] = useState('')
  const [editText, setEditText] = useState('')
  const [editIndex, setEditIndex] = useState<number>()
  const [isModalOpen, setIsModalOpen] = useState(false)

  // TODO: コード綺麗にしたい
  // TODO: GraphQLとかでバックエンドと通信したい
  // TODO: getServerSideProps とか使いたい
  // TODO: ログイン機能入れたい
  // TODO: DarkMode 入れたい

  // 親コンポーネントがファットになりがち
  // 親コンポーネントに store としての機能を持たせてしまっているからな気がする。
  // どこまで recoil で管理するのか考えないとな

  const openModal = (i: number) => {
    setIsModalOpen(true)
    setEditText(text.todos[i])
    setEditIndex(i)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  const deleteTodo = (e: number) => {
    const newTodos = removeItemAtIndex(text.todos, e)
    setText({ todos: newTodos })
  }

  const setInputTextToRecoilState = () => {
    setText({ todos: [...text.todos, inputText] })
    setInputText('')
  }

  const setEditTextToRecoilState = () => {
    setText({ todos: [...text.todos, inputText] })
    const newTodos = editItemAtIndex(text.todos, editIndex, editText)

    setText({ todos: newTodos })
    setEditText('')
    closeModal()
  }

  return (
    <>
      <Container w="700px" margin="20px auto">
        {/*  TODO: 文字列が入っていない時のバリデーションを追加する */}
        {/* TODO: Modal の input と共通化出来ないのかな? */}
        <Flex>
          <TextInput value={inputText} onChange={(e) => setInputText(e.target.value)} />
          <RoundedOutlineButton onClick={setInputTextToRecoilState} />
        </Flex>
        <br />
        <List list={text.todos} openModal={openModal} deleteTodo={deleteTodo} />
      </Container>
      <Modal
        isModalOpen={isModalOpen}
        closeModal={closeModal}
        editText={editText}
        setEditValueToEditText={setEditText}
        setEditTextToRecoilState={setEditTextToRecoilState}
      />
      {/*  TODO: ページネーションを追加する*/}
    </>
  )
}

export default Home
