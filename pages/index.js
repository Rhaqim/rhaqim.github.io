import { Container, Box, Heading } from '@chakra-ui/react'

const Page = () => {
  return (
    <Container>
      <Box
        borderRadius="lg"
        bg="#75339c"
        p={3}
        align="center"
        color="white"
        mb={6}
      >
        <h1>
          Hello World, I am learning Frontend Development from Craftzdog.
        </h1>
      </Box>
      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Rhaqim
          </Heading>
          <p>Learner, Gamer, Developer...</p>
        </Box>
      </Box>
    </Container>
  )
}

export default Page
