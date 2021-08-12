import { useContext } from "react";
import { H2, H3, Para } from "@/components/Text";
import { MouseContext } from "@/context/mouseContext";

function Services() {
  const { setHoverCursor, setNormalCursor } = useContext(MouseContext);
  return (
    <section className="xs:py-8 lg:py-20">
      <div className="lg:container lg:mx-auto spacing">
        <H2 className="xs:mb-6 lg:mb-10">
          We offer everything you need to grow.
        </H2>
        <div className="grid grid-cols-2 gap-10">
          <div
            className="xs:col-span-2 md:col-span-1 shadow-md xs:py-4 lg:py-14 xs:px-6 lg:px-14 cursor-none service-card"
            onMouseEnter={setHoverCursor}
            onMouseLeave={setNormalCursor}
          >
            <H3>Web Applications/Sites</H3>
            <Para className="my-4">
              We provide you with your very own team that takes your concept
              from design to final development stage by making sure that all
              your requirements are meet.
            </Para>
          </div>
          <div
            className="xs:col-span-2 md:col-span-1 shadow-md xs:py-4 lg:py-14 xs:px-6 lg:px-14 cursor-none service-card"
            onMouseEnter={setHoverCursor}
            onMouseLeave={setNormalCursor}
          >
            <H3>Custom E-Commerce</H3>
            <Para className="my-4">
              Our deditcated team of designers & developers will work side by
              side with you to create a high converting online store that
              enhances your brand.
            </Para>
          </div>
          <div
            className="xs:col-span-2 md:col-span-1 shadow-md xs:py-4 lg:py-14 xs:px-6 lg:px-14 cursor-none service-card"
            onMouseEnter={setHoverCursor}
            onMouseLeave={setNormalCursor}
          >
            <H3>Product Design</H3>
            <Para className="my-4">
              You are known by your brand & product. So when it comes to product
              design our designers work closely with you to craft beautiful user
              experiences.
            </Para>
          </div>
          <div
            className="xs:col-span-2 md:col-span-1 shadow-md xs:py-4 lg:py-14 xs:px-6 lg:px-14 cursor-none service-card"
            onMouseEnter={setHoverCursor}
            onMouseLeave={setNormalCursor}
          >
            <H3>Digital Marketing</H3>
            <Para className="my-4">
              We don't just develop your brand but we help you to grow your
              reach. Our specialists will help you in lead generation, SEO &
              Social Media Marketing.
            </Para>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
