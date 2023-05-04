import { IconButton, Button, Slide } from 'native-base'
import { useEffect, useState } from 'react'
import { KeyboardIcon } from 'components'
import Voice from '@react-native-community/voice'

export default function VoiceRecordForm({ setInput, setIsVoice }) {
  const [isLoading, setIsLoading] = useState(false)

  const speechEndHandler = e => {
    console.log('stop handler', e)
    setIsLoading(false)
  }

  const startRecording = async () => {
    setIsLoading(true)
    try {
      await Voice.start('en-Us')
    } catch (error) {
      console.log('error', error)
    }
  }
  const stopRecording = async () => {
    try {
      await Voice.stop()
      setIsLoading(false)
    } catch (error) {
      console.log('error', error)
    }
  }

  useEffect(() => {
    Voice.onSpeechEnd = speechEndHandler
    Voice.onSpeechResults = e => {
      const text = e.value[0]
      setInput(text)
      setIsVoice(false)
    }
    return () => {
      Voice.destroy().then(Voice.removeAllListeners)
    }
  }, [])
  return (
    <>
      <IconButton
        disabled={isLoading}
        size='sm'
        icon={<KeyboardIcon size='xl' />}
        onPress={() => {
          setIsVoice(false)
        }}
      ></IconButton>

      <Button flex={1} onPressIn={startRecording} onPressOut={stopRecording}>
        Hold To Record
      </Button>

      <Slide in={isLoading} placement='top'></Slide>
    </>
  )
}
