import { H3, Para } from "@/components/Text";
import { ButtonPrimary } from "@/components/Button";

function Card({ logo, statement, cover, isPortfolio }) {
  return (
    <div
      className={`py-20 px-10 mr-4 relative overflow-hidden bg-cover bg-center ${
        isPortfolio ? "w-full" : "sm-card"
      }`}
      style={{
        backgroundImage: `url(${cover.url})`,
        flexShrink: 0,
        minHeight: "400px",
      }}
    >
      <div className="absolute top-0 left-0 h-full w-full bg-primary bg-opacity-40 flex justify-center items-center card-content hover:bg-opacity-70">
        <div className="h-full absolute w-full flex flex-col justify-evenly items-between text-center p-4">
          <H3 className="text-white">AnyTree</H3>
          <Para className="text-white mx-auto">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          </Para>
          <ButtonPrimary className="mx-auto">View Case</ButtonPrimary>
        </div>
        <img
          src={logo.url}
          alt=""
          className="h-20 w-auto drop-shadow-xl transition-all duration-1000"
        />
      </div>
    </div>
  );
}

export default Card;
