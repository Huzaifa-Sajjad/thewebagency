import Layout from "../components/Layout";
import Card from "../components/Card";
import ReviewCard from "../components/Review";

export default function Home() {
  return (
    <Layout isFooter={true}>
      <section>
        <div className="lg:container lg:mx-auto">
          <div className="flex flex-col justify-center py-2 py-20 xs:px-2 md:px-10 lg:px-0">
            <h1 className="xs:text-3xl md:text-9xl leading-tight font-bold mt-4 -mb-0">
              The Best Digital Products.
            </h1>
            <h1 className="xs:text-3xl md:text-9xl leading-tight font-bold mt-2">
              On-Time. On-Budget. On-Point.
            </h1>
            <button className="border-2 border-black xs:text-xl md:text-3xl font-medium w-max px-9 py-2 mt-7">
              Let's Talk
            </button>
          </div>
        </div>
      </section>
      <section>
        <div className="lg:container lg:mx-auto lg:px-20 pb-12 xs:px-4">
          <h1 className="xs:text-xl md:text-3xl font-bold text-right pr-4 py-1 border-r-8 border-black">
            Featured Projects
          </h1>
          <Card image="/Home/cambo.png" name="CAMBOKICKS" bg={"/Home/bg.png"} />
          <Card image="/Home/coin.png" name="COINLINK" bg={"/Home/bg2.png"} />
          <Card
            image="/Home/twe3.png"
            name="THE WEDDING ESSENTIALS"
            bg={"/Home/bg.png"}
          />
          <div className="flex justify-center items-center py-14 border-b border-gray border-opacity-10">
            <button className="xs:text-base md:text-xl bg-primary border-2 border-primary text-white w-max px-9 py-3">
              Contact Us
            </button>
            <button className="xs:text-base md:text-xl border-2 border-black w-max px-9 py-3 ml-4">
              View All
            </button>
          </div>
        </div>
      </section>
      <section>
        <div className="lg:container lg:mx-auto  py-10 xs:px-2">
          <h1 className="xs:text-2xl md:text-6xl lg:text-7-xl font-bold mb-14">
            Whatever you need, we build
          </h1>
          <div className="grid grid-cols-2 xs:gap-4 md:gap-10">
            <div className="xs:col-span-2 md:col-span-1 shadow-md xs:py-6 lg:py-14 xs:px-10 lg:px-24 transition-all duration-700 ease-in-out hover:bg-primary hover:text-white">
              <h1 className="xs:text-2xl md:text-4xl font-medium mb-4">
                Mobile & Web App
              </h1>
              <p className="xs:text-base md:text-xl font-light">
                From the initial design to the final development stage, your
                dedicated team of specialists will build your application to
                reflect your business goals and user needs.
              </p>
            </div>
            <div className="xs:col-span-2 md:col-span-1 shadow-md xs:py-6 lg:py-14 xs:px-10 lg:px-24 transition-all duration-700 ease-in-out hover:bg-primary hover:text-white">
              <h1 className="xs:text-2xl md:text-4xl font-medium mb-4">
                Responsive Website
              </h1>
              <p className="xs:text-base md:text-xl font-light">
                Your website is your digital first impression. That's why you
                need a responsive and conversion-oriented site, matched with
                great user experience and world-class design.
              </p>
            </div>
            <div className="xs:col-span-2 md:col-span-1 shadow-md xs:py-6 lg:py-14 xs:px-10 lg:px-24 transition-all duration-700 ease-in-out hover:bg-primary hover:text-white">
              <h1 className="xs:text-2xl md:text-4xl font-medium mb-4">
                Custom eCommerce
              </h1>
              <p className="xs:text-base md:text-xl font-light">
                When it comes to eCommerce, user experience (UX) is paramount.
                Let us customize the perfect online store that matches your
                brand voice and your product
              </p>
            </div>
            <div className="xs:col-span-2 md:col-span-1 shadow-md xs:py-6 lg:py-14 xs:px-10 lg:px-24 transition-all duration-700 ease-in-out hover:bg-primary hover:text-white">
              <h1 className="xs:text-2xl md:text-4xl font-medium mb-4">
                Brand Identity
              </h1>
              <p className="xs:text-base md:text-xl font-light">
                Who you are informs what you build. That’s why we thread your
                digital product and your brand identity together, always
                instilling product integrity.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="lg:container lg:mx-auto py-10 xs:px-2">
          <h1 className="xs:text-2xl md:text-6xl lg:text-7-xl font-bold xs:mb-4 md:mb-10">
            Reveiws, Words On The Street
          </h1>
          <ReviewCard />
        </div>
      </section>
    </Layout>
  );
}
