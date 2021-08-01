import Layout from "../../components/Layout";
import { useEffect } from "react";
import { Power3, gsap } from "gsap";
import { H1, Lead } from "@/components/Text";

function Contact() {
  useEffect(() => {
    const timeline = gsap.timeline();
    const main = document.getElementById("main");
    const header = document.getElementById("header");
    gsap.to(main, { visibility: "visible" });
    timeline
      .to("#app-loader", {
        height: 0,
        ease: Power3.easeOut,
        display: "none",
        duration: 1.5,
      })
      .from(
        header,
        {
          opacity: 0,
          y: 35,
          ease: Power3.easeInOut,
          duration: 1,
        },
        0.2
      );
  }, []);
  return (
    <Layout>
      <section>
        <div className="lg:container lg:mx-auto px-6">
          <div className="grid grid-cols-4 flex justify-center ">
            <div className="lg:col-span-1"></div>
            <div className="xs:col-span-4 lg:col-span-2">
              <div className="flex flex-col justify-center py-20">
                <H1 className="xs:mb-2 lg:mb-14">Let's Talk</H1>
                <Lead className="xs:mb-10 ">
                  Tell us all about project right here, or send us an email at{" "}
                  <span className="font-medium text-primary cursor-pointer">
                    info@thewebagency.io
                  </span>
                </Lead>
                <form>
                  <label htmlFor="name">Name</label>
                  <input type="text" name="name" placeholder="Jhon Doe" />
                  <label htmlFor="company">Company</label>
                  <input type="text" name="company" placeholder="ABC inc." />
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="abc@example.com"
                  />
                  <label htmlFor="budget">Project Budget</label>
                  <input
                    type="text"
                    name="project_budget"
                    placeholder="$ XXX"
                  />
                  <label htmlFor="description">Project Description</label>
                  <textarea
                    type="text"
                    name="project_description"
                    placeholder="project_details"
                    rows="4"
                  />
                  <button
                    type="submit"
                    className="xs:text-16 md:text-16 lg:text:20 xl:text-22 bg-primary border-2 border-primary text-white w-max px-9 py-3 cursor-none"
                  >
                    Let's Talk
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default Contact;
