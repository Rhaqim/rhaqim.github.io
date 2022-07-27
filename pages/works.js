import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Section from '../components/section'
import Layout from '../components/layouts/article'
import { WorkGridItem } from '../components/grid-item'
import AzeniaLogo from '../public/images/Azenia_logo.png'
import EquityLogo from '../public/images/Equity_Group_Logo.png'
import TuringLogo from '../public/images/Turing_logo.png'

const Works = () => {
  return (
    <Layout>
      <Container>
        <Heading as={'h3'} fontSize={20} mb={4}>
          Works
        </Heading>
        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section>
            <WorkGridItem title={'Azenia'} id={'Azenia'} thumbNail={AzeniaLogo}>
              Azenia is a Software Engineering recruitment platform for
              Developers across the world.
            </WorkGridItem>
          </Section>
          <Section>
            <WorkGridItem title={'Equity'} id={'Equity'} thumbNail={EquityLogo}>
              Equity Group Holdings is a global financial services company.
            </WorkGridItem>
          </Section>
          <Section>
            <WorkGridItem title={'Turing'} id={'Turing'} thumbNail={TuringLogo}>
              Turing is a global technology company.
            </WorkGridItem>
          </Section>
        </SimpleGrid>
      </Container>
    </Layout>
  )
}

export default Works
