import Layout from '@/components/Layout';
import { useEffect } from 'react';
import { Power3, gsap } from 'gsap';
import Prismic from '@prismicio/client';
import { Title } from '@/components/Text';
import Wrapper from '@/components/Wrapper';
import { Client } from '../../prismic-config';
import Features from '@/containers/Features';

function CaseStudy({ post }) {
  // On Page Load Animations
  useEffect(() => {
    const timeline = gsap.timeline();
    const main = document.getElementById('main');
    const header = document.getElementById('header');
    gsap.to(main, { visibility: 'visible' });
    timeline
      .to('#app-loader > img', {
        opacity: 0,
        duration: 0.75,
        ease: Power3.easeInOut,
      })
      .to(
        '#app-loader',
        {
          height: 0,
          ease: Power3.easeInOut,
          duration: 1.5,
          pointerEvents: 'none',
        },
        0.6
      )
      .from(
        header,
        {
          opacity: 0,
          y: 35,
          ease: Power3.easeInOut,
          duration: 1,
        },
        1.5
      );
  }, []);
  return (
    <Layout
      hasCTA
      invertCTA
      layoutBg={post.bg}
      title={`Case Study | ${post.name[0].text}`}
      description={post.lead[0].text}
      image={post.features[0].image.url}
    >
      <section>
        <div className='lg:container lg:mx-auto spacing'>
          <Wrapper>
            <Title className='font-medium leading-snug mb-4'>
              {post.name[0].text}
            </Title>
            <div className='flex xs:py-4 lg:py-12 flex-wrap xs:max-w-full lg:max-w-3/4'>
              {post.tags.map((tag) => (
                <div
                  className='xs:text-12 lg:text-14 xs:px-4 lg:px-6 py-2 rounded text-white text-center mr-3 xs:mb-3 lg:mb-4 w-max'
                  style={{ backgroundColor: post.bg }}
                  key={tag.tag_name[0].text}
                >
                  {tag.tag_name[0].text}
                </div>
              ))}
            </div>
          </Wrapper>
        </div>
      </section>
      <section className='bg-grayBg'>
        <div className='lg:container lg:mx-auto spacing py-20'>
          <ul className='casestudy-list'>
            {post.points.map((point) => (
              <li key={point.label[0].text}>
                <div>
                  <h5 className='text-lightGray xs:text-12 md:text-14 font-medium'>
                    {point.label[0].text}
                  </h5>
                  <p className='xs:text-16 md:text-18 lg:text-20 font-regular'>
                    {point.field[0].text}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section className='xs:py-8 lg:py-20'>
        <div className='lg:container lg:mx-auto spacing'>
          <p className='sm:text-20 lg:text-24 font-medium text-center max-w-55 mx-auto'>
            {post.lead[0].text}
          </p>
          <img
            src={post.cover.url}
            alt=''
            className='max-h-120 mx-auto drop-shadow-lg mt-10'
          />
        </div>
      </section>
      <Features features={post.features} bg={post.bg} />
    </Layout>
  );
}

export async function getStaticPaths() {
  const client = Client();
  const doc = await client.query(
    Prismic.predicates.at('document.type', 'projects'),
    { orderings: '[document.first_publication_date desc]' }
  );
  const projects = doc.results;

  const paths = projects.map((project) => ({
    params: { id: project.uid },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const doc = await Client().getByUID('projects', params.id);
  return {
    props: {
      post: doc.data,
    },
  };
}

export default CaseStudy;
