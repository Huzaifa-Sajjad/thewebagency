import Card from "@/components/Card";
import { ButtonOutline, ButtonPrimary } from "@/components/Button";
import router from "next/router";

function FeaturedProjects({ projects }) {
  const handleLinkClick = () => {
    router.push("/work");
  };
  return (
    <div className="lg:container lg:mx-auto spacing">
      <div className="flex overflow-x-scroll card-wrapper pb-4">
        {projects.map((project, idx) => (
          <Card
            key={idx}
            logo={project.data.logo_small}
            statement={project.data.statement[0].text}
            cover={project.data.cover}
            bg={project.data.bg}
            uid={project.uid}
            name={project.data.name[0].text}
          />
        ))}
      </div>
      <div className="flex flex-wrap justify-center items-center xs:py-8 lg:py-14">
        <ButtonPrimary
          className="xs:w-full md:w-auto"
          handleClick={() => router.push("/contact")}
        >
          Contact Us
        </ButtonPrimary>

        <ButtonOutline
          className="xs:w-full md:w-auto xs:ml-0 md:ml-4 xs:mt-4 lg:mt-0"
          handleClick={handleLinkClick}
        >
          View All
        </ButtonOutline>
      </div>
    </div>
  );
}

export default FeaturedProjects;
