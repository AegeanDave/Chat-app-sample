import { Link, useRouter } from 'expo-router'
import {
  Box,
  Button,
  Heading,
  Text,
  Image,
  Container,
  ChevronRightIcon
} from 'native-base'
import Logo from 'assets/images/logo.png'

export default function Index() {
  const router = useRouter()
  return (
    <Box flex={1} bg='#F8F8F9' alignItems='center' justifyContent='center'>
      <Container alignItems='center' padding={3}>
        <Heading mb={5} size='2xl' textAlign='center'>
          ASK FOR ALL YOUR NEEDS
        </Heading>
        <Text textAlign='center'>
          Using this program to get your answers instantly
        </Text>
      </Container>
      <Image size={220} source={Logo} alt='logo'></Image>
      <Button
        size='lg'
        variant='rounded'
        mt={10}
        pl={10}
        pr={10}
        endIcon={<ChevronRightIcon size='md' color='white' />}
        onPress={() => {
          router.push('/room')
        }}
      >
        <Heading color='white' size='md'>
          GO TO CHAT
        </Heading>
      </Button>
    </Box>
  )
}
