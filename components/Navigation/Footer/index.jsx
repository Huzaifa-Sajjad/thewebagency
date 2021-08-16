import { useContext } from "react";
import { MouseContext } from "@/context/mouseContext";
import NavLink from "@/components/NavLink";

function Footer() {
  const date = new Date();
  const year = date.getFullYear();
  const { setHoverCursor, setNormalCursor } = useContext(MouseContext);

  return (
    <section className="xs:py-10 lg:py-20 bg-primary">
      <div className="lg:container mx-auto spacing">
        <div className="grid grid-cols-12 gap-y-7 items-center">
          <div className="xs:col-span-12 lg:col-span-6">
            <div className="flex items-center xs:justify-center lg:justify-start">
              <img
                className="xs:h-6 md:h-8 lg:h-10 w-auto mr-4"
                src="https://images.prismic.io/thewebagency/3fbe043f-332e-4849-b707-8c03c2b2b119_TWA+logo3.png?auto=compress,format"
                alt=""
              />
              <h3 className="xs:text-18 md:text-20 lg:text-22 text-white">
                The Web Agency
              </h3>
            </div>
          </div>
          <div className="xs:col-span-12 lg:col-span-6">
            <div className="flex flex-wrap items-center xs:justify-center lg:justify-end">
              <a
                href="https://www.linkedin.com/company/thewebagency-io"
                target="_blank"
                onMouseEnter={setHoverCursor}
                onMouseLeave={setNormalCursor}
              >
                <svg
                  id="Bold"
                  enableBackground="new 0 0 24 24"
                  height="512"
                  viewBox="0 0 24 24"
                  width="512"
                  fill="#fff"
                  xmlns="http://www.w3.org/2000/svg"
                  className="xs:h-4 lg:h-6 w-auto mr-4"
                >
                  <path d="m23.994 24v-.001h.006v-8.802c0-4.306-.927-7.623-5.961-7.623-2.42 0-4.044 1.328-4.707 2.587h-.07v-2.185h-4.773v16.023h4.97v-7.934c0-2.089.396-4.109 2.983-4.109 2.549 0 2.587 2.384 2.587 4.243v7.801z" />
                  <path d="m.396 7.977h4.976v16.023h-4.976z" />
                  <path d="m2.882 0c-1.591 0-2.882 1.291-2.882 2.882s1.291 2.909 2.882 2.909 2.882-1.318 2.882-2.909c-.001-1.591-1.292-2.882-2.882-2.882z" />
                </svg>
              </a>
              <a
                href="https://www.facebook.com/thewebagency.io"
                target="_blank"
                onMouseEnter={setHoverCursor}
                onMouseLeave={setNormalCursor}
              >
                <svg
                  id="Bold"
                  enableBackground="new 0 0 24 24"
                  height="512"
                  viewBox="0 0 24 24"
                  width="512"
                  fill="#fff"
                  xmlns="http://www.w3.org/2000/svg"
                  className="xs:h-4 lg:h-6 w-auto mr-4"
                >
                  <path d="m15.997 3.985h2.191v-3.816c-.378-.052-1.678-.169-3.192-.169-3.159 0-5.323 1.987-5.323 5.639v3.361h-3.486v4.266h3.486v10.734h4.274v-10.733h3.345l.531-4.266h-3.877v-2.939c.001-1.233.333-2.077 2.051-2.077z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/thewebagency.io/"
                target="_blank"
                onMouseEnter={setHoverCursor}
                onMouseLeave={setNormalCursor}
              >
                <svg
                  height="511pt"
                  viewBox="0 0 511 511.9"
                  width="511pt"
                  xmlns="http://www.w3.org/2000/svg"
                  className="xs:h-4 lg:h-6 w-auto mr-6"
                  fill="#fff"
                >
                  <path d="m510.949219 150.5c-1.199219-27.199219-5.597657-45.898438-11.898438-62.101562-6.5-17.199219-16.5-32.597657-29.601562-45.398438-12.800781-13-28.300781-23.101562-45.300781-29.5-16.296876-6.300781-34.898438-10.699219-62.097657-11.898438-27.402343-1.300781-36.101562-1.601562-105.601562-1.601562s-78.199219.300781-105.5 1.5c-27.199219 1.199219-45.898438 5.601562-62.097657 11.898438-17.203124 6.5-32.601562 16.5-45.402343 29.601562-13 12.800781-23.097657 28.300781-29.5 45.300781-6.300781 16.300781-10.699219 34.898438-11.898438 62.097657-1.300781 27.402343-1.601562 36.101562-1.601562 105.601562s.300781 78.199219 1.5 105.5c1.199219 27.199219 5.601562 45.898438 11.902343 62.101562 6.5 17.199219 16.597657 32.597657 29.597657 45.398438 12.800781 13 28.300781 23.101562 45.300781 29.5 16.300781 6.300781 34.898438 10.699219 62.101562 11.898438 27.296876 1.203124 36 1.5 105.5 1.5s78.199219-.296876 105.5-1.5c27.199219-1.199219 45.898438-5.597657 62.097657-11.898438 34.402343-13.300781 61.601562-40.5 74.902343-74.898438 6.296876-16.300781 10.699219-34.902343 11.898438-62.101562 1.199219-27.300781 1.5-36 1.5-105.5s-.101562-78.199219-1.300781-105.5zm-46.097657 209c-1.101562 25-5.300781 38.5-8.800781 47.5-8.601562 22.300781-26.300781 40-48.601562 48.601562-9 3.5-22.597657 7.699219-47.5 8.796876-27 1.203124-35.097657 1.5-103.398438 1.5s-76.5-.296876-103.402343-1.5c-25-1.097657-38.5-5.296876-47.5-8.796876-11.097657-4.101562-21.199219-10.601562-29.398438-19.101562-8.5-8.300781-15-18.300781-19.101562-29.398438-3.5-9-7.699219-22.601562-8.796876-47.5-1.203124-27-1.5-35.101562-1.5-103.402343s.296876-76.5 1.5-103.398438c1.097657-25 5.296876-38.5 8.796876-47.5 4.101562-11.101562 10.601562-21.199219 19.203124-29.402343 8.296876-8.5 18.296876-15 29.398438-19.097657 9-3.5 22.601562-7.699219 47.5-8.800781 27-1.199219 35.101562-1.5 103.398438-1.5 68.402343 0 76.5.300781 103.402343 1.5 25 1.101562 38.5 5.300781 47.5 8.800781 11.097657 4.097657 21.199219 10.597657 29.398438 19.097657 8.5 8.300781 15 18.300781 19.101562 29.402343 3.5 9 7.699219 22.597657 8.800781 47.5 1.199219 27 1.5 35.097657 1.5 103.398438s-.300781 76.300781-1.5 103.300781zm0 0" />
                  <path d="m256.449219 124.5c-72.597657 0-131.5 58.898438-131.5 131.5s58.902343 131.5 131.5 131.5c72.601562 0 131.5-58.898438 131.5-131.5s-58.898438-131.5-131.5-131.5zm0 216.800781c-47.097657 0-85.300781-38.199219-85.300781-85.300781s38.203124-85.300781 85.300781-85.300781c47.101562 0 85.300781 38.199219 85.300781 85.300781s-38.199219 85.300781-85.300781 85.300781zm0 0" />
                  <path d="m423.851562 119.300781c0 16.953125-13.746093 30.699219-30.703124 30.699219-16.953126 0-30.699219-13.746094-30.699219-30.699219 0-16.957031 13.746093-30.699219 30.699219-30.699219 16.957031 0 30.703124 13.742188 30.703124 30.699219zm0 0" />
                </svg>
              </a>
              <a
                href="https://www.dribbble.com/thewebagency"
                target="_blank"
                onMouseEnter={setHoverCursor}
                onMouseLeave={setNormalCursor}
              >
                <svg
                  version="1.1"
                  id="Capa_1"
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="438.533px"
                  height="438.533px"
                  viewBox="0 0 438.533 438.533"
                  className="xs:h-4 lg:h-6 w-auto"
                  fill="#fff"
                >
                  <g>
                    <path
                      d="M409.133,109.203c-19.608-33.592-46.205-60.189-79.798-79.796C295.736,9.801,259.058,0,219.273,0
		c-39.781,0-76.47,9.801-110.063,29.407c-33.595,19.604-60.192,46.201-79.8,79.796C9.801,142.8,0,179.489,0,219.267
		c0,39.78,9.804,76.463,29.407,110.062c19.607,33.592,46.204,60.189,79.799,79.798c33.597,19.605,70.283,29.407,110.063,29.407
		s76.47-9.802,110.065-29.407c33.593-19.602,60.189-46.206,79.795-79.798c19.603-33.596,29.403-70.284,29.403-110.062
		C438.533,179.485,428.732,142.795,409.133,109.203z M219.27,31.977c47.201,0,88.41,15.607,123.621,46.82l-3.569,4.993
		c-1.427,2.002-4.996,5.852-10.704,11.565c-5.709,5.708-11.943,11.136-18.699,16.274c-6.762,5.14-15.94,10.992-27.555,17.559
		c-11.611,6.567-23.982,12.328-37.117,17.276c-21.887-40.355-45.296-76.709-70.231-109.064
		C190.055,33.784,204.805,31.977,219.27,31.977z M72.524,103.06c18.271-23.026,40.537-40.73,66.806-53.1
		c23.601,31.405,46.82,67.381,69.662,107.921c-57.862,15.227-115.532,22.841-173.014,22.838
		C42.072,151.98,54.253,126.091,72.524,103.06z M44.54,286.794c-8.376-21.412-12.563-43.923-12.563-67.527
		c0-2.666,0.098-4.665,0.286-5.996c68.905,0,132.955-8.848,192.149-26.553c6.092,11.8,11.136,22.364,15.133,31.693
		c-0.771,0.38-1.999,0.806-3.713,1.283c-1.719,0.476-2.953,0.806-3.721,0.999l-10.561,3.711
		c-7.236,2.666-16.708,7.235-28.409,13.703c-11.704,6.478-24.123,14.182-37.257,23.13c-13.134,8.949-26.696,20.797-40.684,35.553
		c-13.99,14.75-25.743,30.591-35.26,47.53C64.713,327.381,52.914,308.2,44.54,286.794z M219.27,406.56
		c-44.54,0-84.32-14.277-119.343-42.825l4.283,3.142c6.661-14.66,16.462-28.746,29.408-42.257
		c12.944-13.511,25.41-24.413,37.401-32.695c11.991-8.274,25.028-16.077,39.115-23.414c14.084-7.323,23.691-11.991,28.835-13.983
		c5.14-1.998,9.233-3.572,12.278-4.716l0.568-0.287h0.575c18.647,48.916,31.977,96.313,39.968,142.184
		C268.756,401.611,244.397,406.557,219.27,406.56z M376.876,320.479c-14.086,21.796-31.696,39.834-52.817,54.104
		c-7.81-43.776-19.985-88.415-36.549-133.902c37.877-5.907,76.8-3.142,116.771,8.274
		C400.092,274.841,390.955,298.687,376.876,320.479z M403.706,216.698c-1.903-0.378-4.285-0.81-7.139-1.283
		c-2.854-0.473-6.331-1.047-10.424-1.713c-4.087-0.666-8.662-1.283-13.702-1.855c-5.045-0.571-10.421-1.093-16.136-1.569
		c-5.708-0.478-11.8-0.855-18.268-1.143c-6.479-0.284-13.042-0.428-19.705-0.428c-6.656,0-13.657,0.193-20.981,0.571
		c-7.326,0.375-14.414,1.049-21.265,1.999c-0.575-0.953-1.287-2.524-2.143-4.714c-0.855-2.187-1.479-3.855-1.848-4.997
		c-3.621-7.994-7.81-17.036-12.573-27.121c13.134-5.333,25.652-11.469,37.555-18.418c11.892-6.949,21.402-13.131,28.544-18.555
		c7.139-5.43,13.895-11.188,20.27-17.277c6.379-6.09,10.513-10.323,12.423-12.703c1.906-2.384,3.713-4.714,5.424-6.995l0.287-0.288
		c27.788,33.88,41.974,72.897,42.538,117.059L403.706,216.698z"
                    />
                  </g>
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-12 gap-y-7 items-center xs:mt-8 lg:mt-12">
          <div className="xs:col-span-12 lg:col-span-6">
            <div className="flex flex-wrap items-center xs:justify-center lg:justify-start">
              <span className="text-white xs:text-14 md:text-16 lg:text-18 xs:mr-4 lg:mr-10">
                <NavLink target="/" isWhite>
                  Home
                </NavLink>
              </span>

              <span className="text-white xs:text-14 md:text-16 lg:text-18 xs:mr-4 lg:mr-10">
                <NavLink target="/about" isWhite>
                  About
                </NavLink>
              </span>

              <span className="text-white xs:text-14 md:text-16 lg:text-18 xs:mr-4 lg:mr-10">
                <NavLink target="/work" isWhite>
                  Work
                </NavLink>
              </span>

              <span className="text-white xs:text-14 md:text-16 lg:text-18 xs:mr-4 lg:mr-10">
                <NavLink target="/work" isWhite>
                  Contact us
                </NavLink>
              </span>
            </div>
          </div>
          <div className="xs:col-span-12 lg:col-span-6">
            <div className="flex flex-wrap items-center xs:justify-center lg:justify-end leading-loose">
              <span className="text-white xs:text-14 md:text-16 lg:text-18 mr-2">
                &copy; {year} TWA. All Rights Reserved
              </span>
              <div className="flex items-center">
                <svg
                  version="1.1"
                  id="Layer_1"
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  viewBox="0 0 512 512"
                  className="w-auto h-5 mr-2"
                  fill="#fff"
                >
                  <g>
                    <g>
                      <path
                        d="M256,0C161.896,0,85.333,76.563,85.333,170.667c0,28.25,7.063,56.26,20.49,81.104L246.667,506.5
			c1.875,3.396,5.448,5.5,9.333,5.5s7.458-2.104,9.333-5.5l140.896-254.813c13.375-24.76,20.438-52.771,20.438-81.021
			C426.667,76.563,350.104,0,256,0z M256,256c-47.052,0-85.333-38.281-85.333-85.333c0-47.052,38.281-85.333,85.333-85.333
			s85.333,38.281,85.333,85.333C341.333,217.719,303.052,256,256,256z"
                      />
                    </g>
                  </g>
                </svg>
                <span className="text-white xs:text-14 md:text-16 lg:text-18">
                  Hesse, Germany
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
