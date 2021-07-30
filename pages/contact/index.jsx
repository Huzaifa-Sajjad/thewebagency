import Layout from "../../components/Layout";
import { useEffect } from "react";
import { Power3, gsap } from "gsap";

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
                <h3 className="xs:text-12 font-light">Contact Us</h3>
                <h1 className="xs:text-30 md:text-36 lg:text-48 font-bold xs:mt-1 md:mt-4 -mb-0">
                  Let's Talk
                </h1>
                <p className="xs:text-20 md:text-24 font-light text-gray md:max-w-45 xs:my-6 md:my-14 border-l-4 pl-4">
                  Tell us all about project right here, or send us an email at{" "}
                  <span className="font-medium text-primary cursor-pointer">
                    info@thewebagency.io
                  </span>
                </p>
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
                  <button className="bg-primary border-2 border-primary text-lg shadow-lg block mx-auto text-white w-max px-14 py-3">
                    Send
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
