import Head from 'next/head'
import NavBar from '../navbar'
import NoSsr from '../no-ssr'
import { Box, Container } from '@chakra-ui/react'
import VoxelRaven from '../voxel-raven'

const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <title>Rhaqim's - Homepage</title>
      </Head>
      <NavBar path={router.asPath} />
      <Container maxW="container.md" pt={14}>
        <NoSsr>
          <VoxelRaven />
        </NoSsr>
        {children}
      </Container>
    </Box>
  )
}

export default Main
