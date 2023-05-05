import React from 'react'
import { Pressable, Text, Box, Flex } from 'native-base'
import { useChat } from 'context/ChatContext'
import Animated, {
  FadeInUp,
  FadeOutDown,
  Layout,
  FadingTransition
} from 'react-native-reanimated'

const PressableCard = props => {
  const { handleSubmit } = useChat()

  return (
    <Animated.View
      key={props.index}
      entering={FadeInUp.duration(800).delay(props.index * 150)}
      exiting={FadeOutDown.duration(500)}
      layout={FadingTransition.delay(props.index * 100)}
    >
      <Pressable onPress={() => handleSubmit(props.item)}>
        {({ isPressed }) => {
          return (
            <Box
              borderWidth='1'
              borderColor='coolGray.200'
              p='4'
              rounded='30'
              style={{
                transform: [
                  {
                    scale: isPressed ? 0.98 : 1
                  }
                ]
              }}
            >
              <Text mt='2' ml='2' fontSize='sm' color='coolGray.700'>
                {props.item}
              </Text>
              <Flex>
                <Text
                  mt='4'
                  mr='3'
                  fontSize={12}
                  fontWeight='medium'
                  color='darkBlue.800'
                  alignSelf='flex-end'
                >
                  Start With It
                </Text>
              </Flex>
            </Box>
          )
        }}
      </Pressable>
    </Animated.View>
  )
}

export default PressableCard
