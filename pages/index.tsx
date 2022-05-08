import type { NextPage } from 'next'
import { Container, Flex } from '@chakra-ui/react'
import { useRecoilState } from 'recoil'
import { textState } from '../recoil/todo'
import { ChangeEvent, useState } from 'react'
import { RoundedOutlineButton } from '../components/button'
import { TextInput } from '../components/textInput'
import { List } from '../components/list'

const Home: NextPage = () => {
  const [text, setText] = useRecoilState(textState)
  const [inputText, setInputText] = useState('')

  // TODO 型定義をtype TextInput を使いたい
  const setInputValueToInputText = (e: ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value)
  }

  const setInputTextToRecoilState = () => {
    setText({ todos: [...text.todos, inputText] })
    setInputText('')
  }

  return (
    <Container w="700px" margin="20px auto">
      {/*  TODO: 文字列が入っていない時のバリデーションを追加する */}
      <Flex>
        <TextInput value={inputText} onChange={setInputValueToInputText} />
        <RoundedOutlineButton onClick={setInputTextToRecoilState} />
      </Flex>
      <br />
      <List list={text.todos} />
    </Container>
  )
}

export default Home
