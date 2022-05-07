import { Input } from '@chakra-ui/react'
import { ChangeEvent, FC } from 'react'

export type TextInput = {
  value: string
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

export const TextInput: FC<TextInput> = ({ value, onChange }) => {
  return <Input placeholder="Basic usage" type="text" value={value} onChange={onChange} />
}
