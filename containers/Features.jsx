import { H2 } from "@/components/Text";

function Features({ features, bg }) {
  return (
    <section>
      {features.map((feature) => (
        <div
          className="lg:container lg:mx-auto spacing xs:py-8 lg:py-20"
          id="feature-container"
        >
          <lord-icon
            src={`https://cdn.lordicon.com/${feature.icon[0].text}.json`}
            trigger="loop"
            colors={`primary:#111111,secondary:${bg}`}
            style={{ width: "64px", height: "64px" }}
          />
          <H2>{feature.heading[0].text}</H2>
          <p className="xs:text-14 md:text-16 lg:text-18 xl:text-20 font-light mt-4 max-w-65 mb-4 leading-relaxed">
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
                  className="xs:w-4/5 lg:w-1/4 mx-auto  xs:mr-4 lg:mx-auto"
                />
              ))}
            </div>
          ) : (
            <img
              src={feature.image.url}
              alt=""
              className={`max-h-${
                feature.heading[0].text === "UI/UX Design" ? "auto" : "120"
              } mx-auto mt-10`}
            />
          )}
        </div>
      ))}
    </section>
  );
}

export default Features;
