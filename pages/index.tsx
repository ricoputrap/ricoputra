import type { NextPage, GetStaticProps } from 'next'
import Career from '../components/organisms/Career'
import Hero from '../components/organisms/Hero'
import { HOST } from '../config'
import { HorizontalDivider } from '../core-ui/atoms/Divider/index.styles'
import Base from '../core-ui/Base'

interface Props {
  jobs: any[]
}

const Home: NextPage<Props> = ({ jobs }) => {
  return (
    <Base>
      <Hero />
      <HorizontalDivider />
      <Career jobsData={jobs} />
    </Base>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const URL: string = HOST + "/api/jobs";

  const req = await fetch(URL);
  const jobsData = await req.json();
  const jobs = jobsData.data;

  return {
    props: { jobs }
  }
}

export default Home
