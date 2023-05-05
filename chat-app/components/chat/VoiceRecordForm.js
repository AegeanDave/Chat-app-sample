import { IconButton, Button, Slide } from 'native-base'
import { useEffect, useState } from 'react'
import { KeyboardIcon } from '../icons'
import Voice from '@react-native-voice/voice'

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
    console.log(111)
    try {
      await Voice.stop()
      setIsLoading(false)
    } catch (error) {
      console.log('error', error)
    }
  }

  useEffect(() => {
    Voice.onSpeechEnd = speechEndHandler
    Voice.onSpeechResults = speechResultsHandler
    return () => {
      Voice.destroy().then(Voice.removeAllListeners)
    }
  }, [])

  const speechResultsHandler = result => {
    setInput(result.value)
    setIsVoice(false)
  }

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
      {isLoading ? (
        <Button flex={1} onPress={stopRecording}>
          Stop
        </Button>
      ) : (
        <Button flex={1} onPress={startRecording}>
          Start To Record
        </Button>
      )}
      <Slide in={isLoading} placement='top'></Slide>
    </>
  )
}
