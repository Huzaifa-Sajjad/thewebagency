import Tilt from "react-parallax-tilt";

function Card({ image, name, bg }) {
  return (
    <>
      <Tilt
        className="parallax-effect-glare-scale mt-10"
        perspective={1000000}
        glareEnable={true}
        glareMaxOpacity={0.8}
        scale={0.98}
        tiltAxis="y"
      >
        <div
          className="bg-local bg-cover px-10 grid grid-cols-6 items-center items-center"
          style={{ backgroundImage: `url(${bg})` }}
        >
          <div className="xs:col-span-6 md:col-span-3">
            <h1 className="xs:text-2xl md:text-4xl font-semibold text-white w-full">
              {name}
            </h1>
            <p className="font-medium text-white xs:w-auto md:w-96">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi
              iste at ullam repellat corrupti aliquid temporibus quaerat
              blanditiis. Nobis, aperiam.
            </p>
            <div className="flex items-center mt-6 xs:mx-auto md:mx-0">
              <div className="px-4 py-8 bg-white bg-opacity-50  text-white">
                BRAND
              </div>
              <div className="px-4 py-8 bg-white bg-opacity-50 text-white ml-4">
                WEB
              </div>
            </div>
          </div>
          <div className="xs:col-span-6 md:col-span-3 max-h-120 overflow-hidden inner-element ">
            <img
              src={image}
              className="object-contain filter inner-element xs:mt-4"
            />
          </div>
        </div>
      </Tilt>
    </>
  );
}

export default Card;
