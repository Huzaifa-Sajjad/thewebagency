import { useEffect, useState } from "react";
import { Power3, Expo, gsap } from "gsap";
import axios from "axios";
import Layout from "@/components/Layout";
import { Title, Lead } from "@/components/Text";
import { ButtonPrimary } from "@/components/Button";
import Wrapper from "@/components/Wrapper";
import { SchedulerLink } from "@/components/Scheduler";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    project_budget: "",
    project_description: "",
  });
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = async (evt) => {
    evt.preventDefault();
    const payload = {
      fields: [
        { name: "name", value: formData.name },
        { name: "company", value: formData.company },
        { name: "email", value: formData.email },
        { name: "project_budget", value: formData.project_budget },
        { name: "project_description", value: formData.project_description },
      ],
    };

    //make call to hubspot form submission api
    try {
      setLoading(true);
      await axios.post(
        `https://api.hsforms.com/submissions/v3/integration/submit/${process.env.NEXT_PUBLIC_PORTAL_ID}/${process.env.NEXT_PUBLIC_FORM_ID}`,
        payload
      );
      setLoading(false);
    } catch (err) {
      setLoading(false);
      console.log(err);
    }
  };

  useEffect(() => {
    const timeline = gsap.timeline();
    const main = document.getElementById("main");
    const header = document.getElementById("header");
    gsap.to(main, { visibility: "visible" });
    timeline
      .to("#app-loader > img", {
        opacity: 0,
        duration: 0.75,
        ease: Power3.easeInOut,
      })
      .to(
        "#app-loader",
        {
          height: 0,
          ease: Expo.easeInOut,
          display: "none",
          duration: 1.5,
        },
        0.6
      )
      .from(
        header,
        {
          opacity: 0,
          y: 35,
          ease: Power3.easeInOut,
          duration: 1,
        },
        1.5
      )
      .from(
        "#contact-hero h1",
        {
          opacity: 0,
          y: 50,
          ease: Power3.easeInOut,
          duration: 1,
        },
        1.8
      )
      .from("#contact-hero p", {
        opacity: 0,
        y: 50,
        ease: Power3.easeInOut,
        duration: 0.5,
      })
      .from("#formWrapper", {
        opacity: 0,
        ease: Expo.easeInOut,
        duration: 0.5,
      });
  }, []);

  return (
    <Layout
      title="Contact | Let's discuss your project"
      description="Are you planning to launch your start-up, develop an MVP to go from concept to investment or take your business to next level? Don't worry we have your back. Our process wraps around your unique business needs. Schedule a call or reach us to us via email or filling our form."
    >
      <section>
        <div className="lg:container lg:mx-auto spacing" id="contact-hero">
          <Wrapper>
            <Title className="font-medium leading-tight max-w-28">
              Let us help you craft your next digital product.
            </Title>
            <Lead className="xs:my-8 lg:my-12">
              Tell us all about project right here, or send us an email at or{" "}
              <a
                className="font-medium text-primary cursor-pointer"
                href="mailto:hello@thewebagency.io"
                target="_blank"
              >
                hello@thewebagency.io
              </a>{" "}
              or <SchedulerLink className="font-medium line" />
            </Lead>
            <div className="grid grid-cols-4" id="formWrapper">
              <div className="xs:col-span-4 lg:col-span-3">
                <div className="flex flex-col">
                  <form onSubmit={handleFormSubmit}>
                    <label htmlFor="name">Name</label>
                    <input
                      type="text"
                      name="name"
                      placeholder="Jhon Doe"
                      required
                      onChange={handleInputChange}
                    />
                    <label htmlFor="company">Company</label>
                    <input
                      type="text"
                      name="company"
                      placeholder="ABC inc."
                      required
                      onChange={handleInputChange}
                    />
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      name="email"
                      placeholder="abc@example.com"
                      required
                      onChange={handleInputChange}
                    />
                    <label htmlFor="budget">Project Budget</label>
                    <input
                      type="text"
                      name="project_budget"
                      placeholder="$ XXX"
                      onChange={handleInputChange}
                    />
                    <label htmlFor="description">Project Description</label>
                    <textarea
                      type="text"
                      name="project_description"
                      placeholder="Tell us more about your project."
                      rows="4"
                      onChange={handleInputChange}
                    />
                    <ButtonPrimary
                      type="sumbit"
                      disabled={loading}
                      className="xs:w-full lg:w-auto disabled:bg-opacity-70 disabled:border-opacity-70"
                    >
                      {loading ? (
                        <lord-icon
                          src="https://cdn.lordicon.com/ymrqtsej.json"
                          trigger="loop"
                          colors="primary:#ffffff,secondary:#ffffff"
                          style={{ height: "48px", width: "auto" }}
                        />
                      ) : (
                        "Let's Talk"
                      )}
                    </ButtonPrimary>
                  </form>
                </div>
              </div>
            </div>
          </Wrapper>
        </div>
      </section>
    </Layout>
  );
}

export default Contact;
