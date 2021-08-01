import { useEffect, useContext } from "react";
import { gsap, Power3 } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Card from "@/components/Card";
import { MouseContext } from "@/context/mouseContext";
import { ButtonOutline } from "@/components/Buttons";
import { Title, H2, H3, H4, Lead, Para } from "@/components/Text";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

function FeaturedProjects({ projects }) {
  const { setHoverCursor, setNormalCursor } = useContext(MouseContext);

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
    <div className="lg:container lg:mx-auto  spacing">
      <H2>Featured Projects</H2>
      {projects.map((project, idx) => (
        <Card
          key={idx}
          bg={project.data.bgcolor}
          textColor={project.data.textcolor}
          logo={project.data.logo}
          statement={project.data.statement}
          tags={project.data.tags}
          cover={project.data.cover}
        />
      ))}

      <div className="flex justify-center items-center py-14 border-b border-gray border-opacity-10">
        <ButtonPrimary>Contact Us</ButtonPrimary>
        <ButtonOutline>View All</ButtonOutline>
      </div>
    </div>
  );
}

export default FeaturedProjects;
