import { Input, Button, Flex } from '@chakra-ui/react'

export const TodoInput = () => {
  return (
    <>
      <Flex>
        <Input placeholder="Basic usage" />
        <Button colorScheme="blue">Button</Button>
      </Flex>
    </>
  )
}
