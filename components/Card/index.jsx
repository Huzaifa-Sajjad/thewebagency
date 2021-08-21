import { useRef, useState, useEffect } from "react";
import { useRouter } from "next/router";
import { gsap, Power3 } from "gsap";
import { CardButton } from "@/components/Button";

function Card({ uid, logo, bg, cover, name, statement, workPage }) {
  const router = useRouter();
  let container = useRef(null);
  const [screenWidth, setScreenWidth] = useState(false);
  const timeline = new gsap.timeline();

  useEffect(() => {
    setScreenWidth(window.innerWidth);
  }, []);

  const handleMouseEnter = () => {
    if (screenWidth >= 1200) {
      timeline.to(container, {
        y: 0,
        duration: 1,
        ease: Power3.easeInOut,
      });
    }
  };

  const handleMouseLeave = () => {
    if (screenWidth >= 1200) {
      timeline.to(container, {
        y: 70,
        duration: 1,
        ease: Power3.easeInOut,
      });
    }
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

  return (
    <div
      className={`py-20 px-10 mr-4 relative overflow-hidden bg-cover bg-center rounded ${
        workPage ? "work-card" : "sm-card"
      }`}
      style={{
        backgroundImage: `url(${cover.url})`,
        flexShrink: 0,
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className="absolute top-0 left-0 h-full w-full flex flex-col justify-end items-start card-content py-6 px-8"
        style={{
          backgroundImage: `linear-gradient(rgba(${hexToRgb(
            bg
          )},0) 60%,  rgba(${hexToRgb(bg)},0)60%,   rgba(${hexToRgb(
            bg
          )},0.75)75%,  rgba(${hexToRgb(bg)},1)100% )`,
        }}
      >
        <div ref={(el) => (container = el)} className="content-wrapper">
          <div>
            <img
              src={logo.url}
              alt=""
              className="xs:h-12 lg:h-14 w-auto drop-shadow-xl mb-4"
            />
            <h2 className="text-white text-18 font-medium uppercase mb-2">
              {name}
            </h2>
            <p className="text-16 text-white mb-5">{statement}</p>
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
