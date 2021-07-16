import Tilt from "react-parallax-tilt";

function Card({ bg, textColor, logo, statement, tags, cover }) {
  const hexToRgb = (hex) =>
    hex
      .replace(
        /^#?([a-f\d])([a-f\d])([a-f\d])$/i,
        (m, r, g, b) => "#" + r + r + g + g + b + b
      )
      .substring(1)
      .match(/.{2}/g)
      .map((x) => parseInt(x, 16));
  return (
    <Tilt
      className="parallax-effect-glare-scale mt-10 h-full project-card"
      perspective={1000000}
      glareEnable={true}
      glareMaxOpacity={0.8}
      scale={0.98}
    >
      <div
        className="bg-local bg-cover px-6 xs:pt-6 lg:pt-4  grid grid-cols-6 items-center h-full"
        style={{
          background: `linear-gradient(to bottom,  rgba(${hexToRgb(
            bg
          )}, 0.4), ${bg})`,
        }}
      >
        <div className="xs:col-span-6 md:col-span-3">
          <img
            src={logo.url}
            alt=""
            className="h-20 w-auto mb-4 inner-element drop-shadow-xl"
          />
          <p
            className="text-base font-light xs:w-auto max-w-55"
            style={{ color: textColor }}
          >
            {statement[0].text}
          </p>
          <div className="flex items-center flex-wrap mt-6 xs:mx-auto md:mx-0 ">
            {tags.map((item, idx) => (
              <div
                key={idx}
                className="xs:px-2 lg:px-4 py-8 bg-opacity-50 text-center ml-2 mb-2 xs:text-xxs lg:text-xs font-light inner-element whitespace-nowrap"
                style={{
                  backgroundColor: `rgba(${hexToRgb(bg)},0.75)`,
                  color: textColor,
                }}
              >
                {item.tag[0].text}
              </div>
            ))}
          </div>
        </div>
        <div className="xs:col-span-6 md:col-span-3 max-h-120 h-full overflow-hidden inner-element mx-auto flex items-center">
          <img
            src={cover.url}
            className="object-contain max-h-120 filter inner-element xs:mt-4"
          />
        </div>
      </div>
    </Tilt>
  );
}

export default Card;
