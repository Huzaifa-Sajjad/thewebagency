function Footer() {
  return (
    <>
      <section className="bg-grayBg my-20">
        <div className="lg:container mx-auto  py-14 xs:px-2 text-center">
          <h3 className="xs:text-3xl md:text-7-xl font-semibold mb-10">
            Need help with a project?
          </h3>
          <h1 className="xs:text-7xl md:text-9xl font-bold mb-10">
            Let’s talk!
          </h1>
          <p className="xs:text-lg md:text-xl font-light mb-14 max-w-75 m-auto">
            Get support on a large platform, flesh out your first MVP, go from
            concept to investment, or take your startup to the next level. Our
            process wraps around your unique business needs.
          </p>
          <button className="xs:text-base md:text-xl bg-primary border-2 border-black text-white w-max px-14 py-4">
            Contact Us
          </button>
        </div>
      </section>
    </>
  );
}

export default Footer;
