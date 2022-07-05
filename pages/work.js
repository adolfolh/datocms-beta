import Head from "next/head";
import { renderMetaTags, useQuerySubscription } from "react-datocms";
import Menu from "@/components/menu";
import Container from "@/components/container";
import Intro from "@/components/intro";
import Layout from "@/components/layout";
import MoreStories from "@/components/more-stories";
import Footer from "@/components/footer";
import Contact from "@/components/contact";
import { request } from "@/lib/datocms";
import { metaTagsFragment, responsiveImageFragment } from "@/lib/fragments";

export async function getStaticProps({ preview }) {
  const graphqlRequest = {
    query: `
      {
        site: _site {
          favicon: faviconMetaTags {
            ...metaTagsFragment
          }
        }
        work {
          seo: _seoMetaTags {
            ...metaTagsFragment
          }
        }
        allPosts(orderBy: date_DESC, first: 20) {
          title
          slug
          excerpt
          date
          coverImage {
            responsiveImage(imgixParams: {fm: jpg, fit: crop, w: 800, h: 450 }) {
              ...responsiveImageFragment
            }
          }
        }
      }

      ${metaTagsFragment}
      ${responsiveImageFragment}
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

export default function Work({ subscription }) {
  const {
    data: { allPosts, site, work },
  } = useQuerySubscription(subscription);

  const metaTags = work.seo.concat(site.favicon);

  return (
    <>
      <Head>{renderMetaTags(metaTags)}</Head>
      <Menu page="work"></Menu>
      <div className="relative">
        <Container>
          <Intro page="work"></Intro>
        </Container>
      </div>

      <div className="relative">
        <Layout>
          <Container>
            {allPosts.length > 0 && <MoreStories posts={allPosts} />}
          </Container>
        </Layout>
      </div>
      <Contact></Contact>
      <Footer></Footer>
    </>
  );
}
