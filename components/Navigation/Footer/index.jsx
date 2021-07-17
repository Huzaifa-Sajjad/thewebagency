function Footer() {
  return (
    <>
      <section className="bg-grayBg my-20">
        <div className="lg:container mx-auto  py-14 xs:px-2 text-center">
          <h3 className="xs:text-20 md:text-22 lg:text-24 xl:text-26 text-primary font-medium">
            Need help with a project?
          </h3>
          <h2 className="xs:text-36 md:text-44 lg:text-52 xl:text-56 text-primary font-bold">
            Let’s talk!
          </h2>
          <p className="xs:text-14 md:text-14 lg:text-16 xl:text-18 text-primary font-light xs:max-w-55 md:max-w-65 xl:max-w-75 mx-auto my-10">
            Get support on a large platform, flesh out your first MVP, go from
            concept to investment, or take your startup to the next level. Our
            process wraps around your unique business needs.
          </p>
          <button className="xs:text-16 md:text-16 lg:text-20 xl:text-22 bg-primary border-2 border-black text-white w-max px-14 py-4">
            Contact Us
          </button>
        </div>
      </section>
    </>
  );
}

export default Footer;
