import { HStack, Avatar, Center, Skeleton, Text } from 'native-base'

export default function MessageBox({ item, isLoading }) {
  const isAI = item.role === 'ai' || item.role === 'assistant'
  if (isLoading) {
    return (
      <HStack
        space={2}
        justifyContent={isAI ? 'flex-start' : 'flex-end'}
        bg='rbga(255,255,255,0)'
        padding={4}
        maxW='100%'
      >
        <Avatar bg='green.500'>{item.role.toUpperCase()}</Avatar>
        <Center bg='primary.500' rounded='md' shadow={3} padding={3}>
          <HStack space={2}>
            <Skeleton size={1} rounded='full'></Skeleton>
            <Skeleton size={1} rounded='full'></Skeleton>
            <Skeleton size={1} rounded='full'></Skeleton>
          </HStack>
        </Center>
      </HStack>
    )
  }
  return (
    <HStack
      space={3}
      bg='rbga(255,255,255,0)'
      reversed={isAI ? false : true}
      justifyContent={isAI ? 'flex-start' : 'flex-end'}
      padding={4}
    >
      <Avatar bg='green.500'>{item.role.toUpperCase()}</Avatar>
      <Center
        bg={isAI ? 'lightBlue.600' : 'lightBlue.200'}
        rounded='md'
        shadow={3}
        padding={3}
        maxW='70%'
      >
        <Text color={isAI ? 'lightBlue.50' : 'darkBlue'}>
          {item.text || item.content}
        </Text>
      </Center>
    </HStack>
  )
}
