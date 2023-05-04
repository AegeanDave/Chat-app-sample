import React from 'react'
import { Pressable, Text, Box, Flex } from 'native-base'

const PressableCard = props => {
  return (
    <Pressable>
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
  )
}

export default PressableCard
