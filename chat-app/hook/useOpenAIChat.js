import { useEffect, useState } from 'react'

const apiKey = process.env.OPENAI_API_KEY

// This hook will protect the route access based on user authentication.
function useOpenAIChat(input) {
  const [response, setResponse] = useState(null)

  useEffect(() => {}, [input])
}

export default useOpenAIChat
