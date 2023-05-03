import { Slot, Stack } from 'expo-router'
import { Provider } from 'context/ChatContext'
import { Header } from 'components'

export default function Layout() {
  return (
    <Provider>
      <Header />
      <Slot></Slot>
    </Provider>
  )
}
