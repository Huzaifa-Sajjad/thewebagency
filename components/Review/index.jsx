import { useState, useContext } from "react";
import { gsap, Expo, Power3 } from "gsap";
import { MouseContext } from "@/context/mouseContext";

function Review({ reviews }) {
  const { setHoverCursor, setNormalCursor } = useContext(MouseContext);
  const [reviewCounter, setReviewCounter] = useState(0);
  const timeline = gsap.timeline({ paused: true });
  if (typeof window !== "undefined") {
    timeline
      .to("#review-container img", {
        scale: 0.7,
        opacity: 0,
        ease: Expo.easeInOut,
        duration: 0.7,
      })
      .to("#review-text", {
        opacity: 0,
        y: -35,
        ease: Power3.easeInOut,
        duration: 0.85,
        delay: -0.5,
      })
      .to("#review-client", {
        opacity: 0,
        y: 35,
        ease: Power3.easeInOut,
        duration: 0.5,
        delay: -0.5,
      })
      .to("#arrow-left", {
        opacity: 0,
        x: -50,
        ease: Power3.easeInOut,
        duration: 0.5,
        delay: -0.5,
      })
      .to("#arrow-right", {
        opacity: 0,
        x: 50,
        ease: Power3.easeInOut,
        duration: 0.5,
        delay: -0.5,
      });
  }
  const handleNext = () => {
    timeline.play();
    setTimeout(() => {
      setReviewCounter((curr) => curr + 1);
      timeline.reverse();
    }, timeline.totalDuration() * 1000);
  };
  const handlePrevious = () => {
    timeline.play();
    setTimeout(() => {
      setReviewCounter((curr) => curr - 1);
      timeline.reverse();
    }, timeline.totalDuration() * 1000);
  };

  return (
    <div id="review-container">
      <div className="grid grid-cols-12 md:gap-6 lg:gap-10 items-center">
        <div className="xs:col-span-12 md:col-span-4 lg:col-span-3">
          <img
            src={reviews[reviewCounter].data.cover.url}
            className="w-full xs:h-80 xs:object-cover md:h-full"
          />
        </div>
        <div className="xs:col-span-12 md:col-span-8 lg:col-span-9 h-full xs:mt-4 md:mt-0">
          <div className="h-full flex flex-col justify-between xs:text-center md:text-left">
            <div id="review-text">
              <svg
                width="60"
                height="80"
                viewBox="0 0 76 85"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 10.625V74.375L28.5 42.5V10.625H0Z" fill="#111111" />
                <path
                  d="M47.5 10.625V74.375L76 42.5V10.625H47.5Z"
                  fill="#111111"
                />
              </svg>

              <p className="xs:text-18 md:text-18 lg:text-20 xl:text-22 xs:max-w-55 lg:max-w-65 text-primary font-light">
                {reviews[reviewCounter].data.text[0].text}
              </p>
            </div>
            <div className="flex justify-between items-center">
              <div id="review-client">
                <h3 className="xs:text-20 md:text-22 lg:text-24 xl:text-26 text-primary font-normal">
                  {reviews[reviewCounter].data.name[0].text}
                </h3>
                <h5 className="xs:text-12 md:text-12 lg:text-14 xl:text-16 text-gray">
                  {reviews[reviewCounter].data.post[0].text}
                </h5>
              </div>
              <div className="flex items-center">
                <div
                  className="bg-primary h-10 w-10 text-white text-lg rounded-full flex justify-center items-center mr-2 hover:cursor-pointer hover:bg-gray"
                  id="arrow-left"
                  onClick={handlePrevious}
                  style={{
                    display: `${reviewCounter !== 0 ? "flex" : "none"}`,
                  }}
                  onMouseEnter={setHoverCursor}
                  onMouseLeave={setNormalCursor}
                >
                  <svg
                    version="1.1"
                    id="Capa_1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 447.243 447.243"
                    fill="#fff"
                    width="18px"
                  >
                    <g>
                      <g>
                        <path
                          d="M420.361,192.229c-1.83-0.297-3.682-0.434-5.535-0.41H99.305l6.88-3.2c6.725-3.183,12.843-7.515,18.08-12.8l88.48-88.48
			c11.653-11.124,13.611-29.019,4.64-42.4c-10.441-14.259-30.464-17.355-44.724-6.914c-1.152,0.844-2.247,1.764-3.276,2.754
			l-160,160C-3.119,213.269-3.13,233.53,9.36,246.034c0.008,0.008,0.017,0.017,0.025,0.025l160,160
			c12.514,12.479,32.775,12.451,45.255-0.063c0.982-0.985,1.899-2.033,2.745-3.137c8.971-13.381,7.013-31.276-4.64-42.4
			l-88.32-88.64c-4.695-4.7-10.093-8.641-16-11.68l-9.6-4.32h314.24c16.347,0.607,30.689-10.812,33.76-26.88
			C449.654,211.494,437.806,195.059,420.361,192.229z"
                        />
                      </g>
                    </g>
                  </svg>
                </div>
                <div
                  className="bg-primary h-10 w-10 text-white text-lg rounded-full flex justify-center items-center hover:cursor-pointer hover:bg-gray"
                  onClick={handleNext}
                  id="arrow-right"
                  style={{
                    display: `${
                      reviewCounter < reviews.length - 1 ? "flex" : "none"
                    }`,
                  }}
                  onMouseEnter={setHoverCursor}
                  onMouseLeave={setNormalCursor}
                >
                  <svg
                    version="1.1"
                    id="Layer_1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 492.004 492.004"
                    fill="#fff"
                    width="18px"
                  >
                    <g>
                      <g>
                        <path
                          d="M484.14,226.886L306.46,49.202c-5.072-5.072-11.832-7.856-19.04-7.856c-7.216,0-13.972,2.788-19.044,7.856l-16.132,16.136
			c-5.068,5.064-7.86,11.828-7.86,19.04c0,7.208,2.792,14.2,7.86,19.264L355.9,207.526H26.58C11.732,207.526,0,219.15,0,234.002
			v22.812c0,14.852,11.732,27.648,26.58,27.648h330.496L252.248,388.926c-5.068,5.072-7.86,11.652-7.86,18.864
			c0,7.204,2.792,13.88,7.86,18.948l16.132,16.084c5.072,5.072,11.828,7.836,19.044,7.836c7.208,0,13.968-2.8,19.04-7.872
			l177.68-177.68c5.084-5.088,7.88-11.88,7.86-19.1C492.02,238.762,489.228,231.966,484.14,226.886z"
                        />
                      </g>
                    </g>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Review;
