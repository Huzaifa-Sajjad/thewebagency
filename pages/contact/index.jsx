import { useEffect, useState } from "react";
import axios from "axios";
import { Power3, gsap } from "gsap";
import Layout from "@/components/Layout";
import { Title, Lead } from "@/components/Text";
import { ButtonPrimary } from "@/components/Button";
import Wrapper from "@/components/Wrapper";

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
      .to("#app-loader", {
        height: 0,
        ease: Power3.easeOut,
        display: "none",
        duration: 1,
      })
      .from(
        header,
        {
          opacity: 0,
          y: 35,
          ease: Power3.easeInOut,
          duration: 1,
        },
        0.6
      )
      .from(
        "#contact-hero h1",
        {
          opacity: 0,
          y: 50,
          ease: Power3.easeInOut,
          duration: 1,
        },
        0.8
      )
      .from("#contact-hero p", {
        opacity: 0,
        y: 50,
        ease: Power3.easeInOut,
        duration: 0.5,
      });
  }, []);

  return (
    <Layout>
      <section>
        <div className="lg:container lg:mx-auto spacing" id="contact-hero">
          <Wrapper>
            <Title className="font-medium leading-tight max-w-28">
              Let us help you craft your next digital product.
            </Title>
            <Lead className="xs:my-8 lg:my-12">
              Tell us all about project right here, or send us an email at{" "}
              <a
                className="font-medium text-primary cursor-pointer"
                href="mailto:hello@thewebagency.io"
                target="_blank"
              >
                hello@thewebagency.io
              </a>
            </Lead>
            <div className="grid grid-cols-4">
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
                      className="xs:w-full lg:w-auto"
                    >
                      {loading ? "Processing..." : "Let's Talk"}
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
