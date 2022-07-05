import Head from "next/head";
import { renderMetaTags, useQuerySubscription } from "react-datocms";
import Menu from "@/components/menu";
import Footer from "@/components/footer";
import Contact from "@/components/contact";
import { request } from "@/lib/datocms";
import { metaTagsFragment, responsiveImageFragment } from "@/lib/fragments";
import Layout from "@/components/layout";
import Container from "@/components/container";
import Intro from "@/components/intro";

export async function getStaticProps({ preview }) {
  const graphqlRequest = {
    query: `
      {
        site: _site {
          favicon: faviconMetaTags {
            ...metaTagsFragment
          }
        }
        about {
          seo: _seoMetaTags {
            ...metaTagsFragment
          }
        }
      }

      ${metaTagsFragment}
    `,
    preview,
  };

  return {
    props: {
      subscription: preview
        ? {
            ...graphqlRequest,
            initialData: await request(graphqlRequest),
            token: process.env.NEXT_EXAMPLE_CMS_DATOCMS_API_TOKEN,
            environment: process.env.NEXT_DATOCMS_ENVIRONMENT || null,
          }
        : {
            enabled: false,
            initialData: await request(graphqlRequest),
          },
    },

  };
}

export default function About({ subscription }) {
  const {
    data: { site, about },
  } = useQuerySubscription(subscription);

  const metaTags = about.seo.concat(site.favicon);
  
  return (
    <>
      <Head>{renderMetaTags(metaTags)}</Head>
      <Menu page="about"></Menu>
      <div className="relative">
        <Container>
          <Intro page="about"></Intro>
        </Container>
      </div>
      <Layout>
        <Container>
          <div className="text-accent-1">
            ● Bio
          </div>
          <div className="ml-0 text-2xl leading-loose font-light py-20">
            <p>
              I'm a recent graduate from the University of Nottingham (BSc Computer Science) 
              with a passion for data and machine learning.
            </p>
            <br/>
            <p>
              I'm currently living in London, UK 🌧 but I am from Marbella, Spain 🔆. I am 
              looking for a job in the data science sector. My hobbies include playing tennis, 
              trying my best at Kaggle Competitions, and obsessing over anything AI.
            </p>
            <br/>
            <p>
              My Computer Science studies provided me with insight into 
              the discipline of data science and aided in my grasp of machine learning. 
              I delved deeper into this topic in my final-year dissertation on Statistical 
              and Machine Learning forecasting techniques. 
            </p>
            <br/>
            <p>
              In terms of practical skills, I am capable of manipulating, cleaning, and 
              preparing data for analysis and reporting. I have worked with quality control 
              and validation measures in data analysis and reporting workflows. I have academic 
              and personal experience in data collection, modelling, evaluation, analysis and 
              visualisation. My favorite programming languages are Python and R.
            </p>
          </div>
        </Container>
      </Layout>
      <Contact></Contact>
      <Footer></Footer>
    </>
  );
}
