import { HStack, Avatar, Center, Skeleton, Text } from 'native-base'
import { MaterialCommunityIcons, FontAwesome5 } from '@expo/vector-icons'
import Animated, { FadeInLeft, FadeInRight } from 'react-native-reanimated'

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
        <Avatar bg='green.300'>
          <MaterialCommunityIcons
            name='robot-angry-outline'
            size={24}
            color='#3F68AF'
          />
        </Avatar>
        <Center bg='lightBlue.600' rounded='md' shadow={3} padding={3}>
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
      {isAI ? (
        <Avatar bg='green.100'>
          <MaterialCommunityIcons
            name='robot-angry-outline'
            size={24}
            color='#3F68AF'
          />
        </Avatar>
      ) : (
        <Avatar bg='lightBlue.100'>
          <FontAwesome5 name='user-astronaut' size={24} color='indigo' />
        </Avatar>
      )}
      <Center
        bg={isAI ? 'lightBlue.600' : 'lightBlue.200'}
        rounded='md'
        shadow={3}
        padding={3}
        maxW='70%'
      >
        <Animated.View entering={isAI ? FadeInLeft : FadeInRight}>
          <Text color={isAI ? 'lightBlue.50' : 'darkBlue'}>
            {item.text || item.content}
          </Text>
        </Animated.View>
      </Center>
    </HStack>
  )
}
