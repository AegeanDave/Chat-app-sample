import React, { ReactNode } from 'react'
import { Text } from 'native-base'

interface Props {
  children: ReactNode
}
const CustomerService = ({ children }: Props) => (
  <Text style={{ color: '#1559b7' }}>{children}</Text>
)

export default CustomerService
