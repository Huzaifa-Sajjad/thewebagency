import Tilt from "react-tilt";

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
      className="Tilt mt-10 h-full project-card"
      options={{
        reverse: true, // reverse the tilt direction
        max: 25, // max tilt rotation (degrees)
        perspective: 9000, // Transform perspective, the lower the more extreme the tilt gets.
        scale: 1, // 2 = 200%, 1.5 = 150%, etc..
        speed: 300, // Speed of the enter/exit transition
        transition: true, // Set a transition on enter/exit.
        easing: "cubic-bezier(.03,.98,.52,.99)",
      }}
    >
      <div
        className="bg-local bg-cover px-6 xs:pt-6 lg:pt-4  grid grid-cols-6 items-center h-full"
        style={{
          background: `linear-gradient(to bottom,  rgba(${hexToRgb(
            bg
          )}, 0.4), ${bg})`,
        }}
      >
        <div className="xs:col-span-6 md:col-span-3 ">
          <img
            src={logo.url}
            alt=""
            className="h-20 w-auto mb-4 Tilt-inner drop-shadow-xl"
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
                className="xs:px-2 lg:px-4 py-8 bg-opacity-50 text-center ml-2 mb-2 xs:text-xxs lg:text-xs font-light Tilt-inner whitespace-nowrap"
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
        <div className="xs:col-span-6 md:col-span-3 max-h-120 h-full overflow-hidden Tilt-inner mx-auto flex items-center">
          <img
            src={cover.url}
            className="object-contain max-h-120 filter Tilt-inner xs:mt-4"
          />
        </div>
      </div>
    </Tilt>
  );
}

export default Card;
