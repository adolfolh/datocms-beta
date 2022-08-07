import Head from "next/head";
import { renderMetaTags, useQuerySubscription } from "react-datocms";
import Menu from "@/components/menu";
import Container from "@/components/container";
import Layout from "@/components/layout";
import Footer from "@/components/footer";
import Contact from "@/components/contact";
import { request } from "@/lib/datocms";
import { metaTagsFragment, responsiveImageFragment } from "@/lib/fragments";
import { Image } from "react-datocms";
import CoverImage from "@/components/cover-image";
import Sticker from "@/components/sticker";

export async function getStaticProps({ preview }) {
  const graphqlRequest = {
    query: `
      {
        site: _site {
          favicon: faviconMetaTags {
            ...metaTagsFragment
          }
        }
        home {
          seo: _seoMetaTags {
            ...metaTagsFragment
          }
          heroImage: coverImage {
            responsiveImage(imgixParams: {fm: jpg, fit: crop, w: 2000, h: 1200}) {
                ...responsiveImageFragment
            }
          }
        }
        allPosts(orderBy: date_DESC, first: 5) {
          title
          slug
          excerpt
          date
          coverImage {
            responsiveImage(imgixParams: {fm: jpg, fit: crop, w: 1000, h: 700 }) {
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

export default function Index({ subscription }) {
  const {
    data: { allPosts, site, home },
  } = useQuerySubscription(subscription);

  const morePosts = allPosts;
  const metaTags = home.seo.concat(site.favicon);
  
  return (
    <>
      <Head>{renderMetaTags(metaTags)}</Head>
      <Menu page="home"></Menu>
      <div className="sticky top-0 title z-0">
        <Container>
            <section className="h-screen flex-col md:flex-row flex items-center justify-center pt-32 md:pt-40 pb-0 md:pb-32">
                <h1 className="font-bold text-6xl md:text-9xl text-center">
                <span>data scientist</span> <br/>
                <span><i className="font-light font-accent">and </i></span>
                <span> developer</span> <br/>
                </h1>
                <p className="absolute bottom-16 text-sm">Scroll down</p>
            </section>
        </Container>
      </div>

      <Container>
        <div className="relative flex items-center justify-center pt-16 z-30 md:pt-40">
          <Image
              data={{
                  ...home.heroImage.responsiveImage,
                  alt: `Cover Image`,
              }}
              className={"rounded-md title relative"}
          />
        </div>
      </Container>
      
      <div className="title relative bg-white z-30">
        <Container>
          <div className="flex flex-col lg:flex-row items-center justify-center py-16 md:py-24">
            <div className="home-text-wrap md:pb-0">
              <div className="text-2xl md:text-5xl mb-8 font-accent leading-normal">
                <h2>Hi, I'm Adolfo. I'm a data scientist and engineer based in London, UK.</h2>
              </div>
              <div className="">
                <p className="font-light text-xl md:text-2xl leading-loose">
                  I have experience researching timeseries prediction, 
                  specifically volatility forecasting. 
                  I'm a recent graduate that believes 
                  analytical thinking and critical judgement are instrumental to the 
                  progress of data science and imperative to the 
                  application of machine learning.
                </p>
                <a href="/about" className="arrow-button max-w-full opacity-1 inline-block mt-10 !mb-0">
                  <div class="cta-text">Get to know me</div>
                  <div class="arrow-cta">
                    <svg width="37" height="17" viewBox="0 0 37 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path className="fill-accent-1" fill-rule="evenodd" clip-rule="evenodd" d="M27.5377 1.1906L28.1347 2.63918C29.0998 4.98087 30.8573 6.86515 33.0501 8.0001L0 8.0001V9.0001L33.05 9.0001C30.8572 10.135 29.0998 12.0193 28.1347 14.361L27.5377 15.8096L28.4623 16.1906L29.0593 14.742C30.287 11.763 32.9311 9.60166 36.0948 8.99103V8.00915C32.9311 7.39852 30.287 5.23713 29.0593 2.25815L28.4623 0.80957L27.5377 1.1906Z"></path>
                    </svg>
                  </div>
                </a>
              </div>
            </div>
            <div className="hidden lg:block">
              <Sticker />
            </div>
          </div>
        </Container>
      </div>

      <div className="title relative z-30">
        <Layout>
            <section>
              <h2 className="md:px-24 p-4 mb-8 text-6xl md:text-7xl font-medium tracking-tight leading-tight font-accent">
                projects.
              </h2>
              <div className="md:px-24 p-4 pt-0 md:flex md:flex-col">
                <p className="leading-loose font-light text-xl">
                  I have been working on some personal projects to learn 
                  more about different technologies. I like exploring data-centric 
                  projects and applying them to web applications. I also enjoy
                  carrying out research on artificial intelligence and machine 
                  learning.
                </p>
                  <a href="/work" className="arrow-button max-w-full opacity-1 inline-block  mt-10">
                    <div class="cta-text">See my work</div>
                    <div class="arrow-cta">
                      <svg width="37" height="17" viewBox="0 0 37 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path className="fill-accent-1" fill-rule="evenodd" clip-rule="evenodd" d="M27.5377 1.1906L28.1347 2.63918C29.0998 4.98087 30.8573 6.86515 33.0501 8.0001L0 8.0001V9.0001L33.05 9.0001C30.8572 10.135 29.0998 12.0193 28.1347 14.361L27.5377 15.8096L28.4623 16.1906L29.0593 14.742C30.287 11.763 32.9311 9.60166 36.0948 8.99103V8.00915C32.9311 7.39852 30.287 5.23713 29.0593 2.25815L28.4623 0.80957L27.5377 1.1906Z"></path>
                      </svg>
                    </div>
                  </a>
            </div>
            <div className="carousel px-8 md:px-0">
              {morePosts.map(post => (
                <div className="item">
                  <div>
                    <CoverImage className="max-h-80 h-auto" slug={post.slug} title={post.title} responsiveImage={post.coverImage.responsiveImage} />
                  </div>
                  <a style={{textDecoration: 'none'}} href={`/posts/${post.slug}`}>
                    <div className={'md:py-5 pb-10'}>
                      <a href={`/posts/${post.slug}`} className="arrow-button max-w-full opacity-1 inline-block">
                        <div class="cta-text">{post.title}</div>
                        <div class="arrow-cta">
                          <svg width="37" height="17" viewBox="0 0 37 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path className="fill-accent-1" fill-rule="evenodd" clip-rule="evenodd" d="M27.5377 1.1906L28.1347 2.63918C29.0998 4.98087 30.8573 6.86515 33.0501 8.0001L0 8.0001V9.0001L33.05 9.0001C30.8572 10.135 29.0998 12.0193 28.1347 14.361L27.5377 15.8096L28.4623 16.1906L29.0593 14.742C30.287 11.763 32.9311 9.60166 36.0948 8.99103V8.00915C32.9311 7.39852 30.287 5.23713 29.0593 2.25815L28.4623 0.80957L27.5377 1.1906Z"></path>
                          </svg>
                        </div>
                      </a>
                    </div>
                  </a>
                </div>
              ))}
            </div>
          </section>
        </Layout>
      </div>

      <Contact></Contact>
      <Footer></Footer>
    </>
  );
}
