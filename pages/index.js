import { Container, Box, Heading, Image } from '@chakra-ui/react'

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
        <h1>Hello World, I am learning Frontend Development from Craftzdog.</h1>
      </Box>
      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Rhaqim
          </Heading>
          <p>Learner, Gamer, Developer...</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          align="center"
        >
          <Image
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            maxWidth="100px"
            display="inline-block"
            borderRadius="full"
            src="/images/sukunaWeb.jpg"
            alt="Profile Image"
          />
        </Box>
      </Box>
    </Container>
  )
}

export default Page
