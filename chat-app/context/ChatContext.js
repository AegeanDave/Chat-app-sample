import React, { useContext, createContext, useState, useCallback } from 'react'
import axios from 'axios'
import { SERVER_BASE_URL } from '@env'

import { TopicList } from 'constants'

const ChatContext = createContext(null)

// This hook can be used to access the user info.
export const useChat = () => useContext(ChatContext)

export function Provider(props) {
  const [records, setRecords] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [randomTopics, setRandomTopics] = useState(
    TopicList.sort(() => 0.5 - Math.random()).slice(0, 4)
  )

  const handleRandomSelect = useCallback(() => {
    setRandomTopics(TopicList.sort(() => 0.5 - Math.random()).slice(0, 4))
  }, [randomTopics])

  const handleSubmit = async input => {
    setRecords(pre => [...pre, { role: 'user', content: input }])
    setIsLoading(true)
    try {
      const response = await axios.post(`${SERVER_BASE_URL}/users/chat`, {
        input: [...records, { role: 'user', content: input }]
      })
      setRecords(pre => [...pre, response.data.choices[0].message])
      setIsLoading(pre => !pre)
    } catch (error) {
      if (error.message === 'Network Error') {
        setRecords(pre => [
          ...pre,
          { role: 'assistant', content: 'Assistant offline' }
        ])
      } else {
        setRecords(pre => [
          ...pre,
          { role: 'assistant', content: 'Stop! My brain is burning' }
        ])
      }
      setIsLoading(pre => !pre)
    }
  }
  return (
    <ChatContext.Provider
      value={{
        records,
        setRecords,
        randomTopics,
        isLoading,
        handleRandomSelect,
        handleSubmit
      }}
    >
      {props.children}
    </ChatContext.Provider>
  )
}
