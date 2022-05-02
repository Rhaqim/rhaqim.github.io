import {
  Container,
  Box,
  Heading,
  Image,
  useColorModeValue,
  Link,
  Button
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import NextLink from 'next/link'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'

const Page = () => {
  return (
    <Layout>
      <Container>
        <Box
          borderRadius="lg"
          bg={useColorModeValue('#75339c', 'whiteAlpha.200')}
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
        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            Work
          </Heading>
          <Paragraph>
            I am a Django Backend Developer transitioning into a fullstack
            developer. I currently work at{' '}
            <Link href="https://azenia.com">Azenia</Link> on contract to _.
          </Paragraph>
          <Box align={'center'} my={4}>
            <NextLink href="/works">
              <Button rightIcon={<ChevronRightIcon />} colorScheme="purple">
                See Where I've Worked
              </Button>
            </NextLink>
          </Box>
        </Section>
        <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
            Bio
          </Heading>
          <BioSection>
            <BioYear>1995</BioYear>
            Born in Lagos, Nigeria.
          </BioSection>
          <BioSection>
            <BioYear>2019</BioYear>
            Graduated from the University of Benin with a Bachelor&apos;s in
            Computer Science.
          </BioSection>
          <BioSection>
            <BioYear>2020</BioYear>
            Started Learning Python at{' '}
            <Link href="https://univelcity.com">UnivelCity</Link>.
          </BioSection>
          <BioSection>
            <BioYear>2021</BioYear>
            Joined Azenia as a Django Backend Developer.
          </BioSection>
          <BioSection>
            <BioYear>2022</BioYear>
            Joined Turing as a Backend Developer.
          </BioSection>
        </Section>
        <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
            I ❤️
          </Heading>
          <Paragraph>
            Music , Art , and Technology. I also ejoy playing video games and
            learning new things. I am an AI enthusiast and a fan of the{' '}
            {'Tensorflow'} framework.
          </Paragraph>
        </Section>
      </Container>
    </Layout>
  )
}

export default Page
