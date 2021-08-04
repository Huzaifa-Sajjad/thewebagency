import { useEffect, useContext } from "react";
import { gsap, Power3 } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Card from "@/components/Card";
import { ButtonOutline, ButtonPrimary } from "@/components/Button";
import { H2 } from "@/components/Text";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

function FeaturedProjects({ projects }) {
  useEffect(() => {
    const projectCards = document.querySelectorAll(".project-card");
    projectCards.forEach((project) => {
      gsap.from(project, {
        scrollTrigger: { trigger: project },
        opacity: 0,
        y: 100,
        duration: 1.5,
        ease: Power3.easeInOut,
      });
    });
  }, []);
  return (
    <div className="lg:container lg:mx-auto spacing">
      <div className="flex justify-between overflow-x-scroll card-wrapper pb-4">
        {projects.map((project, idx) => (
          <Card
            key={idx}
            logo={project.data.logo}
            statement={project.data.statement}
            cover={project.data.cover}
          />
        ))}
      </div>
      <div className="flex flex-wrap justify-center items-center xs:py-8 lg:py-14">
        <ButtonPrimary className="xs:w-full lg:w-auto">
          Contact Us
        </ButtonPrimary>
        <ButtonOutline className="xs:w-full lg:w-auto xs:mt-4 lg:mt-0 xs:ml-0 lg:ml-4">
          View All
        </ButtonOutline>
      </div>
    </div>
  );
}

export default FeaturedProjects;
