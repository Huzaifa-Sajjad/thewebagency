import { useEffect, useContext } from "react";
import { gsap, Power3 } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Card from "@/components/Card";
import { MouseContext } from "@/context/mouseContext";

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
    <div className="lg:container lg:mx-auto md:px-20">
      <h2 className="text-22 leading-none font-medium text-primary text-right pr-4 border-r-4 border-primary">
        Featured Projects
      </h2>
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
        <button
          onMouseEnter={setHoverCursor}
          onMouseLeave={setNormalCursor}
          className="xs:text-16 md:text-16 lg:text:20 xl:text-22 bg-primary border-2 border-primary text-white w-max px-9 py-3 cursor-none"
        >
          Contact Us
        </button>
        <button
          onMouseEnter={setHoverCursor}
          onMouseLeave={setNormalCursor}
          className="xs:text-16 md:text-16 lg:text:20 xl:text-22 text-primary border-2 border-primary w-max px-9 py-3 ml-4 hover:bg-primary hover:text-white transition-all duration-500 cursor-none"
        >
          View All
        </button>
      </div>
    </div>
  );
}

export default FeaturedProjects;
