import { HStack, Input, IconButton, KeyboardAvoidingView } from 'native-base'
import { useState } from 'react'
import SendIcon from '../icons/SendIcon'
import { useChat } from 'context/ChatContext'
import { Platform } from 'react-native'

export default function Form() {
  const [input, setInput] = useState('')
  const { handleSubmit } = useChat()
  return (
    <KeyboardAvoidingView
      keyboardVerticalOffset={70}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <HStack
        bgColor='rbga(255,255,255,0.1)'
        safeAreaBottom
        justifyContent='center'
        p={3}
      >
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
    </KeyboardAvoidingView>
  )
}
