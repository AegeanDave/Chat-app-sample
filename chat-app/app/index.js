import { Link } from 'expo-router'
import {
  Box,
  Button,
  Heading,
  Text,
  Image,
  Spacer,
  Container,
  ChevronRightIcon,
  ArrowForwardIcon
} from 'native-base'
import Logo from 'assets/images/logo.png'

export default function Index() {
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
      >
        <Link href='/room'>
          <Heading color='white' size='md'>
            GO TO CHAT
          </Heading>
        </Link>
      </Button>
    </Box>
  )
}
