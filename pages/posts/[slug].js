import Head from "next/head";
import { renderMetaTags, useQuerySubscription } from "react-datocms";
import Container from "@/components/container";
import Layout from "@/components/layout";
import MoreStories from "@/components/more-stories";
import PostBody from "@/components/post-body";
import PostHeader from "@/components/post-header";
import { request } from "@/lib/datocms";
import { metaTagsFragment, responsiveImageFragment } from "@/lib/fragments";
import Menu from "@/components/menu";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import CoverImage from "@/components/cover-image";
import Date from "@/components/date";
import SectionSeparator from "@/components/section-separator";
import Sticker from "@/components/sticker";

export async function getStaticPaths() {
  const data = await request({ query: `{ allPosts { slug } }` });

  return {
    paths: data.allPosts.map((post) => `/posts/${post.slug}`),
    fallback: false,
  };
}

export async function getStaticProps({ params, preview = false }) {
  const graphqlRequest = {
    query: `
      query PostBySlug($slug: String) {
        site: _site {
          favicon: faviconMetaTags {
            ...metaTagsFragment
          }
        }
        post(filter: {slug: {eq: $slug}}) {
          seo: _seoMetaTags {
            ...metaTagsFragment
          }
          title
          slug
          hyperlink
          category {
            name
          }
          content {
            value
            blocks {
              __typename
              ...on ImageBlockRecord {
                id
                image {
                  responsiveImage(imgixParams: {fm: jpg, fit: crop, w: 2000, h: 1000 }) {
                    ...responsiveImageFragment
                  }
                }
              }
            }
          }
          challenge {
            value
            blocks {
              __typename
              ...on ImageBlockRecord {
                id
                image {
                  responsiveImage(imgixParams: {fm: jpg, fit: crop, w: 2000, h: 1000 }) {
                    ...responsiveImageFragment
                  }
                }
              }
            }
          }
          goal {
            value
            blocks {
              __typename
              ...on ImageBlockRecord {
                id
                image {
                  responsiveImage(imgixParams: {fm: jpg, fit: crop, w: 2000, h: 1000 }) {
                    ...responsiveImageFragment
                  }
                }
              }
            }
          }
          process {
            value
            blocks {
              __typename
              ...on ImageBlockRecord {
                id
                image {
                  responsiveImage(imgixParams: {fm: jpg, fit: crop, w: 2000, h: 1000 }) {
                    ...responsiveImageFragment
                  }
                }
              }
            }
          }
          conclusion {
            value
            blocks {
              __typename
              ...on ImageBlockRecord {
                id
                image {
                  responsiveImage(imgixParams: {fm: jpg, fit: crop, w: 2000, h: 1000 }) {
                    ...responsiveImageFragment
                  }
                }
              }
            }
          }
          date
          duration
          result
          ogImage: coverImage{
            url(imgixParams: {fm: jpg, fit: crop, w: 2000, h: 1000 })
          }
          coverImage {
            responsiveImage(imgixParams: {fm: jpg, fit: crop, w: 2000, h: 1000 }) {
              ...responsiveImageFragment
            }
          }
        }

        morePosts: allPosts(orderBy: date_DESC, first: 2, filter: {slug: {neq: $slug}}) {
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

      ${responsiveImageFragment}
      ${metaTagsFragment}
    `,
    preview,
    variables: {
      slug: params.slug,
    },
  };

  return {
    props: {
      subscription: preview
        ? {
            ...graphqlRequest,
            initialData: await request(graphqlRequest),
            token: process.env.NEXT_EXAMPLE_CMS_DATOCMS_API_TOKEN,
          }
        : {
            enabled: false,
            initialData: await request(graphqlRequest),
          },
      preview,
    },
  };
}

export default function Post({ subscription, preview }) {
  const {
    data: { site, post, morePosts },
  } = useQuerySubscription(subscription);

  const metaTags = post.seo.concat(site.favicon);

  return (
    <>
      <Menu page="work"></Menu>
        <Head>{renderMetaTags(metaTags)}</Head>
        <div className="relative">
          <PostHeader
            title={post.title}
            coverImage={post.coverImage}
          />
          <Layout>
            <div className="mb-12 pb-6 text-lg flex flex-col md:flex-row md:justify-around border-b-white border-b-2 border-opacity-25 md:pl-0 pl-4">
              
            {post.date && <Date dateString={post.date} />}

              {post.duration &&
                <div className="flex flex-row md:flex-col items-center md:items-start">
                  <p className="uppercase text-sm">Duration</p>
                  <p className={"uppercase text-xs opacity-50 md:m-0 ml-2 font-extralight"}>
                    {post.duration}
                  </p>
                </div>
              }

              {post.result &&
                <div className="flex flex-row md:flex-col items-center md:items-start">
                  <p className="uppercase text-sm">Result</p>
                  <p className={"uppercase text-xs opacity-50 md:m-0 ml-2 font-extralight"}>
                    {post.result}
                  </p>
                </div>
              }

              {post.category &&
                <div className="flex flex-row md:flex-col items-center md:items-start">
                  <p className="uppercase text-sm">Category</p>
                  <p className={"uppercase text-xs opacity-50 md:m-0 ml-2 font-extralight"}>
                    {post.category.name}
                  </p>
                </div>
              }
            </div>
            <Container>
              <article>
                <PostBody 
                content={post.content} 
                challenge={post.challenge}
                goal={post.goal}
                process={post.process}
                conclusion={post.conclusion}
                hyperlink={post.hyperlink}
                />
              </article>
            </Container>
          </Layout>
        </div>
        
        <div className="bg-white flex flex-col justify-center align-center py-16">
          <Sticker></Sticker>
          <h1 className="text-center text-3xl font-accent pt-8">Thanks for reading!</h1>
        </div>

        <div className="relative ">
          <Layout>
            <Container>
              <div className="md:py-16">
              {morePosts.length > 0 && <MoreStories posts={morePosts} />}
              </div>
            </Container>
          </Layout>
        </div>
        <Contact></Contact>
        <Footer></Footer>
  </>
  );
}
