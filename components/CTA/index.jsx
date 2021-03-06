import { Fragment } from "react";
import { useRouter } from "next/router";
import { H3 } from "@/components/Text";
import { ButtonPrimary } from "@/components/Button";
import { SchedulerButton } from "@/components/Scheduler";
import NavLink from "@/components/NavLink";

function CTA({ hasBg }) {
  const router = useRouter();

  const changeRoute = () => {
    router.push("/contact");
  };

  return (
    <Fragment>
      <section
        className={`xs:py-16 lg:py-28 ${hasBg ? "bg-grayBg" : "bg-white"}`}
      >
        <div className="lg:container mx-auto spacing flex flex-col items-center">
          <h3 className="xs:text-20 md:text-22 lg:text-24 xl:text-26 text-black font-medium">
            Need help with a project?
          </h3>
          <h2 className="xs:text-36 md:text-44 lg:text-52 xl:text-56 text-black font-bold">
            Let’s talk!
          </h2>
          <p className="xs:text-14 md:text-14 lg:text-16 xl:text-18 text-black font-light xs:max-w-55 lg:max-w-65 text-center xs:leading-loose lg:leading-relaxed xs:my-6 lg:mt-10 lg:mb-12 cursor-none">
            Are you planning to launch your start-up, develop an MVP to go from
            concept to investment or take your business to next level? Don't
            worry we have your back. Our process wraps around your unique
            business needs.
          </p>
          <div className="flex flex-wrap justify-center items-center">
            <ButtonPrimary
              className="xs:mr-0 lg:mr-4 xs:w-full lg:w-auto"
              handleClick={changeRoute}
            >
              Contact Us
            </ButtonPrimary>
            <SchedulerButton className="xs:mt-4 lg:mt-0 xs:w-full lg:w-auto" />
          </div>
        </div>
      </section>
      <section className="border-t border-gray border-opacity-20 xs:py-8 lg:py-20">
        <div className="lg:container mx-auto spacing">
          <div className="flex flex-wrap xs:flex-col lg:flex-row xs:items-center lg:justify-between">
            <H3 className="xs:text-center lg:text-left">
              Still have a doubt? See how we have helped others.
            </H3>
            <span className="xs:text-16 md:text-18 lg:text-20 xl:text-22 text-black font-regular cursor-none xs:mt-4 lg:mt-0">
              <NavLink target="/work">Check our work</NavLink>
            </span>
          </div>
        </div>
      </section>
    </Fragment>
  );
}

export default CTA;
