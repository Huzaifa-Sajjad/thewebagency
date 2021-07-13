import React from "react";

function Review() {
  return (
    <div>
      <div className="grid grid-cols-12 md:gap-10 items-center">
        <div className="xs:col-span-12 md:col-span-3">
          <img
            src="/Home/rev.png"
            className="w-full xs:h-80 xs:object-cover md:h-full"
          />
        </div>
        <div className="xs:col-span-12 md:col-span-9 h-full xs:mt-4 md:,mt-0">
          <div className="h-full flex flex-col justify-between xs:text-center md:text-left">
            <div>
              <svg
                width="60"
                height="80"
                viewBox="0 0 76 85"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 10.625V74.375L28.5 42.5V10.625H0Z" fill="#111111" />
                <path
                  d="M47.5 10.625V74.375L76 42.5V10.625H47.5Z"
                  fill="#111111"
                />
              </svg>

              <p className="md:text-xl md:max-w-65">
                The web agency team is excellent. They put in an incredible
                amount of effort on our project and delivered something we're
                really happy with. Would highly recommend.
              </p>
            </div>
            <div>
              <h1 className="text-xl font-semibold">Mark Solomon</h1>
              <h1 className="text-base xs:font-light md:font-normal text-gray">
                Co-founder, CEO of Marble
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Review;
