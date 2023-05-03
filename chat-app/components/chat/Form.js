import { HStack, Input, IconButton } from 'native-base'
import { useState } from 'react'
import SendIcon from '../icons/SendIcon'
import { useChat } from 'context/ChatContext'

export default function Form() {
  const [input, setInput] = useState('')
  const { handleSubmit } = useChat()
  return (
    <HStack bg='rbga(255,255,255,0)' padding={3} safeAreaBottom>
      <Input
        value={input}
        onChangeText={text => setInput(text)}
        placeholder='Type your message'
        variant='rounded'
        w='100%'
        InputRightElement={
          <IconButton
            disabled={!input}
            icon={<SendIcon />}
            onPress={() => {
              setInput('')
              handleSubmit(input)
            }}
          ></IconButton>
        }
      ></Input>
    </HStack>
  )
}
