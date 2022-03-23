import type { NextPage, GetStaticProps } from 'next'
import Career from '../components/organisms/Career'
import Hero from '../components/organisms/Hero'
import { HorizontalDivider } from '../core-ui/atoms/Divider/index.styles'
import Base from '../core-ui/Base'

interface Props {
  jobsData: any[]
}

const Home: NextPage<Props> = ({ jobsData }) => {
  return (
    <Base>
      <Hero />
      <HorizontalDivider />
      <Career jobsData={jobsData} />
    </Base>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const req = await fetch("https://api-ricoputra.vercel.app/jobs");
  const jobsData = await req.json();

  return {
    props: { jobsData }
  }
}

export default Home
