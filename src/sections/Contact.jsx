import React from "react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="relative z-10 overflow-hidden bg-[#3d3d3d] px-4 md:px-8 py-12"
    >
      <div className="container max-w-screen-2xl mx-auto">
        <div className="-mx-4 flex flex-wrap lg:justify-between">
          <div className="w-full px-4 lg:w-1/2 xl:w-6/12">
            <div className="mb-12 max-w-[570px] lg:mb-0">
              <span className="text-gray-200 mb-4 block text-base font-semibold">
                Contact me
              </span>
              <h2 className="text-gray-200 mb-6 text-[32px] font-bold uppercase sm:text-[40px] lg:text-[36px] xl:text-[40px]">
                GET IN TOUCH WITH ME
              </h2>
              <p className="text-gray-300 mb-9 text-base leading-relaxed">
                If you are interested in cooperation or have any kind of
                question - send me a message!
              </p>

              <div className="mb-8 flex w-full max-w-[370px]">
                <div className="bg-gray-200 text-gray-200 mr-6 flex h-[60px] w-full max-w-[60px] items-center justify-center overflow-hidden rounded bg-opacity-5 sm:h-[70px] sm:max-w-[70px]">
                  <svg
                    width="28"
                    height="19"
                    viewBox="0 0 28 19"
                    className="fill-current"
                  >
                    <path d="M25.3636 0H2.63636C1.18182 0 0 1.16785 0 2.6052V16.3948C0 17.8322 1.18182 19 2.63636 19H25.3636C26.8182 19 28 17.8322 28 16.3948V2.6052C28 1.16785 26.8182 0 25.3636 0ZM25.3636 1.5721C25.5909 1.5721 25.7727 1.61702 25.9545 1.75177L14.6364 8.53428C14.2273 8.75886 13.7727 8.75886 13.3636 8.53428L2.04545 1.75177C2.22727 1.66194 2.40909 1.5721 2.63636 1.5721H25.3636ZM25.3636 17.383H2.63636C2.09091 17.383 1.59091 16.9338 1.59091 16.3499V3.32388L12.5 9.8818C12.9545 10.1513 13.4545 10.2861 13.9545 10.2861C14.4545 10.2861 14.9545 10.1513 15.4091 9.8818L26.3182 3.32388V16.3499C26.4091 16.9338 25.9091 17.383 25.3636 17.383Z" />
                  </svg>
                </div>
                <div className="w-full">
                  <h4 className="text-gray-200 mb-1 text-xl font-bold">
                    Email Address
                  </h4>
                  <p className="text-gray-300 text-base">
                    laraa.celic7@gmail.com
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full px-4 lg:w-1/2 xl:w-5/12">
            <div className="relative rounded-lg bg-white p-8 shadow-2xl sm:p-12">
              <form>
                <div className="mb-6">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="text-gray-300 border-[f0f0f0] focus:border-gray-200 w-full rounded border py-3 px-[14px] text-base outline-none focus-visible:shadow-none"
                  />
                </div>
                <div className="mb-6">
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="text-gray-300 border-[f0f0f0] focus:border-gray-200 w-full rounded border py-3 px-[14px] text-base outline-none focus-visible:shadow-none"
                  />
                </div>

                <div className="mb-6">
                  <textarea
                    rows="6"
                    placeholder="Your Message"
                    className="text-gray-300 border-[f0f0f0] focus:border-gray-200 w-full resize-none rounded border py-3 px-[14px] text-base outline-none focus-visible:shadow-none"
                  ></textarea>
                </div>
                <div>
                  <button
                    type="submit"
                    className="bg-[#02dea3] uppercase w-full rounded border p-3 text-white transition hover:bg-opacity-90"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
