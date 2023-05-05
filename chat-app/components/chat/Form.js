import { HStack, IconButton, KeyboardAvoidingView, TextArea } from 'native-base'
import { useState } from 'react'
import { SendIcon, SoundIcon } from '../index'
import VoiceRecordForm from './VoiceRecordForm'
import { useChat } from 'context/ChatContext'
import { Platform } from 'react-native'

export default function Form() {
  const [input, setInput] = useState('')
  const [isVoice, setIsVoice] = useState(false)
  const { handleSubmit, isLoading } = useChat()
  return (
    <KeyboardAvoidingView
      keyboardVerticalOffset={70}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <HStack
        // bgColor='rbga(255,255,255,0.1)'
        safeAreaBottom
        space={2}
        justifyContent='center'
        alignItems='flex-end'
        pl={4}
        pr={4}
      >
        {isVoice ? (
          <VoiceRecordForm
            setInput={setInput}
            setIsVoice={setIsVoice}
          ></VoiceRecordForm>
        ) : (
          <>
            <IconButton
              disabled={isLoading}
              size='sm'
              icon={<SoundIcon size='xl' />}
              onPress={() => {
                setIsVoice(true)
              }}
            ></IconButton>
            <TextArea
              h={10}
              fontSize={16}
              value={input}
              flex={1}
              onChangeText={text => setInput(text)}
              placeholder='Type your message'
            ></TextArea>
          </>
        )}
        <IconButton
          disabled={!input || isLoading}
          size='sm'
          icon={<SendIcon size='xl' disabled={!input || isLoading} />}
          onPress={() => {
            setInput('')
            handleSubmit(input)
          }}
        ></IconButton>
      </HStack>
    </KeyboardAvoidingView>
  )
}
