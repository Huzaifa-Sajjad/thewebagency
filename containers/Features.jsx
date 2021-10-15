import { H2 } from '@/components/Text';
import { OverlayScrollbarsComponent } from 'overlayscrollbars-react';
import { Img } from 'react-image';

function Features({ features, bg }) {
  return (
    <section>
      {features.map((feature, idx) => (
        <div
          className='lg:container lg:mx-auto spacing xs:pt-8 lg:pt-20'
          id='feature-container'
          key={idx}
        >
          <lord-icon
            src={`https://cdn.lordicon.com/${feature.icon[0].text}.json`}
            trigger='loop'
            colors={`primary:#111111,secondary:${bg}`}
            style={{ width: '64px', height: '64px' }}
          />
          <H2>{feature.heading[0].text}</H2>
          <p className='xs:text-14 md:text-16 lg:text-18 xl:text-20 font-light mt-4 max-w-65 mb-4 leading-relaxed'>
            {feature.text[0].text}
          </p>
          {feature.gallery.length > 0 ? (
            <div className='mb-20'>
              <OverlayScrollbarsComponent>
                <div className='flex pb-8 mt-6'>
                  {feature.gallery.map((item) => (
                    <img
                      src={item.url}
                      alt=''
                      className={`${
                        feature.heading[0].text === 'Mobile First Approach'
                          ? ' xs:w-4/5 lg:w-1/4 xs:mr-4'
                          : 'max-h-100 w-auto mx-auto mt-4'
                      }`}
                    />
                  ))}
                </div>
              </OverlayScrollbarsComponent>
            </div>
          ) : (
            <Img
              src={feature.image.url}
              alt=''
              className={`max-h-${
                feature.heading[0].text === 'UI/UX Design' ? 'auto' : '120'
              } mx-auto mt-10`}
            />
          )}
        </div>
      ))}
    </section>
  );
}

export default Features;
