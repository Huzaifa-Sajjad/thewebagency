import { useEffect } from 'react';
import Prismic from '@prismicio/client';
import { Client } from '../../prismic-config';
import { Power3, Expo, gsap } from 'gsap';
import Layout from '@/components/Layout';
import Card from '@/components/Card';
import { Title, H6 } from '@/components/Text';
import Wrapper from '@/components/Wrapper';

export default function Work({ projects }) {
  // On Page Load Animations
  useEffect(() => {
    const timeline = gsap.timeline();
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
      )
      .from(
        '#work-hero h6',
        {
          opacity: 0,
          y: 20,
          ease: Power3.easeInOut,
          duration: 0.5,
        },
        1.8
      )
      .from('#work-hero h1', {
        opacity: 0,
        y: 50,
        ease: Power3.easeInOut,
        duration: 1,
      })
      .from('#work-cards', {
        opacity: 0,
        ease: Power3.easeInOut,
        duration: 0.5,
      });
  }, []);
  return (
    <Layout
      hasCTA
      invertCTA
      title='Work | Review our Portfolio'
      description='Review our portfolio by going through various busines case studies. See how we have helped others grow and then decide if we are a good fit for you.'
    >
      <section>
        <div className='lg:container lg:mx-auto spacing' id='work-hero'>
          <Wrapper>
            <H6 className='mb-4'>OUR PORTFOLIO</H6>
            <Title className='font-medium max-w-28 leading-tight'>
              Crafting such digital products which gurantee customer
              satisfaction, intutive user experiences and maximum results.
            </Title>
          </Wrapper>
        </div>
      </section>
      <section className='xs:py-8 lg:pt-12 lg-pb-20' id='work-cards'>
        <div className='lg:container lg:mx-auto spacing '>
          <div className='grid grid-cols-2 gap-4'>
            {projects.map((project) => (
              <div className='xs:col-span-2 md:col-span-1' key={project.uid}>
                <Card
                  logo={project.data.logo_small}
                  statement={project.data.statement[0].text}
                  cover={project.data.cover}
                  bg={project.data.bg}
                  uid={project.uid}
                  name={project.data.name[0].text}
                  workPage={true}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const client = Client();
  const doc = await client.query(
    Prismic.predicates.at('document.type', 'projects')
  );
  return {
    props: {
      projects: doc.results,
    },
  };
}
