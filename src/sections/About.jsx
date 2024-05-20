import React from "react";
import Image from "next/image";
import image from "../../public/images/image.png";
import about from "../../public/images/about.jpg";

const About = () => {
  return (
    <section id="about" className="text-gray-300 bg-[#3d3d3d] body-font">
      <div className="container px-5 py-24 mx-auto flex flex-col">
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
          <div className="rounded-lg shadow-2xl h-64 overflow-hidden">
            <Image
              alt="content"
              className="object-cover object-center h-full w-full"
              src={about}
            />
          </div>
          <div className="flex flex-col sm:flex-row mt-10">
            <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
              <div className="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
                <Image src={image} className="rounded-full" />
              </div>
              <div className="flex flex-col items-center text-center justify-center">
                <h2 className="font-medium title-font mt-4 text-gray-200 text-lg">
                  Lara Celic
                </h2>
                <div className="w-12 h-1 bg-[#02dea3] rounded mt-2 mb-4"></div>
                <p className="text-base">
                  I'm a frontend web developer from Novi Sad, Serbia.
                </p>
              </div>
            </div>
            <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
              <p className="leading-relaxed text-lg mb-4">
                I design and develop unique, accessible and user-friendly
                websites that convert visitors into customers and make
                businesses grow. When I create websites I strive for
                perfectionism and constant pushing of boundaries. Now that you
                know a bit more about me, check out my projects.
              </p>
              {/* <a className="text-indigo-500 inline-flex items-center">
                Learn More
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
