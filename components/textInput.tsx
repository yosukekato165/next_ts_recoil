import { Input, Button, Flex } from '@chakra-ui/react'
import { useRecoilState } from 'recoil'
import { textState } from '../recoil/todo'
import { ChangeEvent, useState } from 'react'

export const TextInput = () => {
  const [text, setText] = useRecoilState(textState)
  const [inputText, setInputText] = useState('')

  const setInputValueToInputText = (e: ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value)
  }

  const setInputTextToRecoilState = () => {
    setText({ todos: [...text.todos, inputText] })
    setInputText('')
  }
  return (
    <>
      <Flex>
        <Input placeholder="Basic usage" type="text" value={inputText} onChange={setInputValueToInputText} />
        <Button colorScheme="blue" onClick={setInputTextToRecoilState}>
          Button
        </Button>
      </Flex>
      <br />
      <ul>
        {text.todos.map((e, i) => {
          return (
            <li key={i}>
              {i + 1}. {e}
            </li>
          )
        })}
      </ul>
    </>
  )
}
