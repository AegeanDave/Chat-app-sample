import { Box, ScrollView, VStack } from 'native-base'
import { Form, MessageBox } from 'components'
import { useChat } from 'context/ChatContext'
import { useState, useRef } from 'react'

export default function Room() {
  const { records, isLoading } = useChat()
  const ref = useRef(null)

  return (
    <Box flex={1} bg='#fff' safeAreaTop>
      <VStack flex={1}>
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
      </VStack>
      <Form></Form>
    </Box>
  )
}
