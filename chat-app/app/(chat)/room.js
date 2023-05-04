import { Box, Heading, ScrollView, VStack } from 'native-base'
import { Form, MessageBox, PressableCard } from 'components'
import { useChat } from 'context/ChatContext'
import { useRef } from 'react'
import { TopicList } from 'constants'

export default function Room() {
  const { records, isLoading } = useChat()
  const ref = useRef(null)
  return (
    <Box flex={1} bg='#fff'>
      <VStack flex={1}>
        {records.length > 0 ? (
          <ScrollView
            ref={ref}
            onContentSizeChange={() => {
              ref.current.scrollToEnd({ animation: true })
            }}
          >
            {records.map((item, index) => (
              <MessageBox item={item} key={`chat_${index}`} />
            ))}
            {isLoading && <MessageBox item={{ role: 'ai' }} isLoading={true} />}
          </ScrollView>
        ) : (
          <Box justifyContent='center' alignItems='center' p={5} flex={1}>
            <Heading mb={5}>Interesting topics to start</Heading>
            <VStack w='100%' space={4}>
              {TopicList.sort(() => 0.5 - Math.random())
                .slice(0, 4)
                .map((item, key) => (
                  <PressableCard
                    item={item}
                    key={`topic_${key}`}
                  ></PressableCard>
                ))}
            </VStack>
          </Box>
        )}
      </VStack>
      <Form></Form>
    </Box>
  )
}
