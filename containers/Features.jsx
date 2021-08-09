import { H2, H4 } from "@/components/Text";
import { gsap, Expo } from "gsap";
import { CSSRulePlugin } from "gsap/dist/CSSRulePlugin";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useEffect } from "react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
  gsap.registerPlugin(CSSRulePlugin);
}

function Features({ features }) {
  useEffect(() => {
    const featureContainers = document.querySelectorAll("#feature-container");
    featureContainers.forEach((feature) => {
      if (feature.children[3].className === "image-wrapper") {
        const imageContainer = feature.children[3];
        const image = imageContainer.children[0];
        const timeline = gsap.timeline({
          scrollTrigger: {
            trigger: feature,
            start: "top center",
          },
        });
        timeline.from(image, {
          scale: 0.6,
          opacity: 0,
          y: 100,
          duration: 1,
          ease: Expo.easeIn,
        });
      }
    });
  }, []);
  return (
    <section>
      {features.map((feature) => (
        <div
          className="lg:container lg:mx-auto spacing xs:py-8 lg:py-20"
          id="feature-container"
        >
          <H4 className="uppercase">{feature.hint[0].text}</H4>
          <H2>{feature.heading[0].text}</H2>
          <p className="xs:text-16 lg:text-22 font-light mt-4 max-w-65 mb-4 leading-loose">
            {feature.text[0].text}
          </p>
          {feature.gallery.length > 0 ? (
            <div
              className="flex justify-between overflow-x-scroll card-wrapper pb-4 mb-20"
              style={{
                backgroundImage: `linear-gradient(#fff 15%, #f7f7fc 15%, #f7f7fc 85%, #fff 85% )`,
              }}
            >
              {feature.gallery.map((item) => (
                <img
                  src={item.url}
                  alt=""
                  className="xs:w-4/5 lg:w-1/4 mx-auto drop-shadow-lg xs:mr-4 lg:mx-auto"
                />
              ))}
            </div>
          ) : (
            <div className="image-wrapper">
              <img
                src={feature.image.url}
                alt=""
                className="max-h-120 mx-auto drop-shadow-lg mt-10"
              />
            </div>
          )}
        </div>
      ))}
    </section>
  );
}

export default Features;
