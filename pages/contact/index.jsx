import Layout from "../../components/Layout";
import { useEffect } from "react";
import { Power3, gsap } from "gsap";
import { H1, Lead } from "@/components/Text";

import { ButtonPrimary } from "@/components/Button";

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
                <H1>Let's Talk</H1>
                <Lead>
                  Tell us all about project right here, or send us an email at{" "}
                  <span className="font-medium text-primary cursor-pointer">
                    info@thewebagency.io
                  </span>
                </Lead>
                <form>
                  <label htmlFor="name">Name & Company</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Jhon from ABC .inc"
                  />
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="abc@example.com"
                  />
                  <label htmlFor="budget">Project Budget</label>
                  <input
                    type="text"
                    name="budget"
                    placeholder="$ xxx xxx xxx"
                  />
                  <label htmlFor="description">Project Description</label>
                  <textarea
                    type="text"
                    name="description"
                    placeholder="Project Details"
                    rows="4"
                  />
                  <ButtonPrimary>Send</ButtonPrimary>
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
