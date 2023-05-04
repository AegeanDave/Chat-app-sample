import { useEffect, useState } from 'react'

function useOpenAIChat(input) {
  const [response, setResponse] = useState(null)

  useEffect(() => {}, [input])
}

export default useOpenAIChat
