import { Slot } from 'expo-router'
import { Provider } from 'context/ChatContext'

export default function Layout() {
  return (
    <Provider>
      <Slot />
    </Provider>
  )
}
