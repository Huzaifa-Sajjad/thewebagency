import { useEffect } from "react";
import { gsap, Power3 } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Card from "@/components/Card";
import { ButtonOutline, ButtonPrimary } from "@/components/Button";
import Link from "next/link";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

function FeaturedProjects({ projects }) {
  useEffect(() => {
    const projectCards = document.querySelectorAll(".project-card");
    projectCards.forEach((project, idx) => {
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
            bg={project.data.bg}
            uid={project.uid}
            name={project.data.name[0].text}
          />
        ))}
      </div>
      <div className="flex flex-wrap justify-center items-center xs:py-8 lg:py-14">
        <Link href="/contact">
          <ButtonPrimary className="xs:w-full md:w-auto">
            Contact Us
          </ButtonPrimary>
        </Link>
        <Link href="/work">
          <ButtonOutline className="xs:w-full md:w-auto xs:ml-0 md:ml-4">
            View All
          </ButtonOutline>
        </Link>
      </div>
    </div>
  );
}

export default FeaturedProjects;
