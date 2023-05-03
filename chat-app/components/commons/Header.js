import {
  HStack,
  IconButton,
  ChevronLeftIcon,
  Box,
  Text,
  Skeleton
} from 'native-base'
import { useRouter } from 'expo-router'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { useChat } from 'context/ChatContext'

export default function Header(props) {
  const router = useRouter()

  const { isLoading } = useChat()
  return (
    <Box safeAreaTop bgColor='white' shadow={1} zIndex={999}>
      <HStack padding={1} space={6}>
        <IconButton
          variant='ghost'
          icon={<ChevronLeftIcon />}
          onPress={() => router.back()}
        ></IconButton>
        <HStack space={4} alignItems='center'>
          <MaterialCommunityIcons
            name='robot-angry-outline'
            size={26}
            color='#3F68AF'
          />
          {isLoading ? (
            <HStack p={1} space={2}>
              <Skeleton size={2} rounded='full' color='blue.500'></Skeleton>
              <Skeleton size={2} rounded='full' color='blue.400'></Skeleton>
              <Skeleton size={2} rounded='full' color='blue.300'></Skeleton>
            </HStack>
          ) : (
            <Text color='#3F68AF' fontSize='lg'>
              Assistant
            </Text>
          )}
        </HStack>
      </HStack>
    </Box>
  )
}
