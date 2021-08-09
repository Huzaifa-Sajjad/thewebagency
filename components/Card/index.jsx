import { useRef } from "react";
import { useRouter } from "next/router";
import { gsap, Bounce } from "gsap";
import { CardButton } from "@/components/Button";

function Card({ uid, logo, bg, cover, name }) {
  let container = useRef(null);
  const timeline = new gsap.timeline();
  const handleMouseEnter = () => {
    timeline.to(container, {
      y: 0,
      duration: 1,
      ease: Bounce.easeInOut,
    });
  };
  const handleMouseLeave = () => {
    timeline.to(container, {
      y: 70,
      duration: 1,
      ease: Bounce.easeInOut,
    });
  };
  const hexToRgb = (hex) =>
    hex
      .replace(
        /^#?([a-f\d])([a-f\d])([a-f\d])$/i,
        (m, r, g, b) => "#" + r + r + g + g + b + b
      )
      .substring(1)
      .match(/.{2}/g)
      .map((x) => parseInt(x, 16));

  const router = useRouter();
  return (
    <div
      className={`py-20 px-10 mr-4 relative overflow-hidden bg-cover bg-center rounded casestudy-card sm-card`}
      style={{
        backgroundImage: `url(${cover.url})`,
        flexShrink: 0,
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className="absolute top-0 left-0 h-full w-full  flex  flex-col justify-between  items-start card-content py-6 px-8"
        style={{
          backgroundImage: `linear-gradient(rgba(${hexToRgb(
            bg
          )},0) 60%,  rgba(${hexToRgb(bg)},0)60%,   rgba(${hexToRgb(
            bg
          )},0.75)80%,  rgba(${hexToRgb(bg)},1)100% )`,
        }}
      >
        <img src={logo.url} alt="" className="h-16 w-auto drop-shadow-xl " />
        <div ref={(el) => (container = el)} className="content-wrapper">
          <div>
            <h2 className="text-white text-18 font-medium uppercase mb-2">
              {name}
            </h2>
            <p className="text-16 text-white mb-5">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            </p>
          </div>
          <CardButton handleClick={() => router.push(`/work/${uid}`)}>
            View Case
          </CardButton>
        </div>
      </div>
    </div>
  );
}

export default Card;
