import Link from 'next/link';
import Head from 'next/head'
import Layout from '../components/Layout/'
import Hero from '../components/Hero/';
import WhoAreWeCard from '../components/WhoAreWeCard/';
import WhatDoWeDoCard from '../components/WhatDoWeDoCard/';
import WorkWithUsCard from '../components/WorkWithUsCard/';
import FacebookCard from '../components/FacebookCrad/';
import VideoCard from '../components/VideoCard/'
import ActivityCard from '../components/ActivityCard/'
import StoryCard from '../components/StoryCard/'

const Index = () => (
  <Layout>
    <Head>
    </Head>
    <Hero/>
    <WhoAreWeCard/>
    <WhatDoWeDoCard/>
    <WorkWithUsCard/>
    <FacebookCard/>
    <VideoCard
      url = "https://player.vimeo.com/video/316874134"
    />
    {/* <ActivityCard/> */}
    <StoryCard/>
    <WorkWithUsCard/>
  </Layout>
);

export default Index;
