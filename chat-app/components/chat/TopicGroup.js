import React from 'react'
import { EvilIcons } from '@expo/vector-icons'
import { useChat } from 'context/ChatContext'
import { Box, Heading, VStack, IconButton } from 'native-base'
import PressableCard from './PressableCard'

export default function TopicGroup() {
  const { randomTopics, handleRandomSelect } = useChat()
  return (
    <Box justifyContent='space-between' alignItems='center' p={5} flex={1}>
      <Heading mb={5} mt={5}>
        Interesting topics to start
      </Heading>
      <VStack w='100%' space={4} justifyContent='center'>
        {randomTopics.map((item, index) => (
          <PressableCard
            item={item}
            key={`topic_${index}`}
            index={index}
          ></PressableCard>
        ))}
      </VStack>
      <IconButton
        alignSelf='flex-end'
        mb={3}
        onPress={handleRandomSelect}
        icon={<EvilIcons name='refresh' size={24} color='black' />}
      ></IconButton>
    </Box>
  )
}
