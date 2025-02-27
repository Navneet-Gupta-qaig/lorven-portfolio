import Image from "next/image";
import Link from "next/link";
import React from "react";
import ContactUsForm from "./ContactUsForm";

const ContactUs = () => {
  return (
    <section
      id="contact"
      className="  w-full backdrop-blur-lg flex flex-col  justify-around items-center p-4 h-screen"
    >
      <ContactUsForm />

      <div className="flex flex-wrap w-full ">
        <div className="flex-1  flex flex-col  items-center justify-around gap-4 ">
          {/* Company Logo here */}
          <Image
            className="drop-shadow-lg"
            src="/lorven-logo-removebg-preview.png"
            alt="Company Logo"
            width={200}
            height={100}
          />
          <div className="flex space-x-4">
            <Link href="#" className="text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="36"
                height="36"
                viewBox="0,0,256,256"
              >
                <g>
                  <g transform="scale(10.66667,10.66667)">
                    <path d="M8,3c-2.757,0 -5,2.243 -5,5v8c0,2.757 2.243,5 5,5h8c2.757,0 5,-2.243 5,-5v-8c0,-2.757 -2.243,-5 -5,-5zM8,5h8c1.654,0 3,1.346 3,3v8c0,1.654 -1.346,3 -3,3h-8c-1.654,0 -3,-1.346 -3,-3v-8c0,-1.654 1.346,-3 3,-3zM17,6c-0.55228,0 -1,0.44772 -1,1c0,0.55228 0.44772,1 1,1c0.55228,0 1,-0.44772 1,-1c0,-0.55228 -0.44772,-1 -1,-1zM12,7c-2.757,0 -5,2.243 -5,5c0,2.757 2.243,5 5,5c2.757,0 5,-2.243 5,-5c0,-2.757 -2.243,-5 -5,-5zM12,9c1.654,0 3,1.346 3,3c0,1.654 -1.346,3 -3,3c-1.654,0 -3,-1.346 -3,-3c0,-1.654 1.346,-3 3,-3z"></path>
                  </g>
                </g>
              </svg>
            </Link>
            <Link href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="36"
                height="36"
                viewBox="0,0,256,256"
              >
                <g>
                  <g transform="scale(10.66667,10.66667)">
                    <path d="M12,2c-5.511,0 -10,4.489 -10,10c0,5.511 4.489,10 10,10c5.511,0 10,-4.489 10,-10c0,-5.511 -4.489,-10 -10,-10zM12,4c4.43012,0 8,3.56988 8,8c0,4.01447 -2.93468,7.31302 -6.78125,7.89844v-5.51367h2.32813l0.36523,-2.36524h-2.69336v-1.29297c0,-0.983 0.32023,-1.85547 1.24023,-1.85547h1.47656v-2.06445c-0.26,-0.035 -0.8087,-0.11133 -1.8457,-0.11133c-2.166,0 -3.43555,1.144 -3.43555,3.75v1.57422h-2.22656v2.36524h2.22656v5.49414c-3.78401,-0.63806 -6.6543,-3.90867 -6.6543,-7.87891c0,-4.43012 3.56988,-8 8,-8z"></path>
                  </g>
                </g>
              </svg>
            </Link>
            <Link href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="36"
                height="36"
                viewBox="0,0,256,256"
              >
                <g>
                  <g transform="scale(10.66667,10.66667)">
                    <path d="M5,3c-1.105,0 -2,0.895 -2,2v14c0,1.105 0.895,2 2,2h14c1.105,0 2,-0.895 2,-2v-14c0,-1.105 -0.895,-2 -2,-2zM5,5h14v14h-14zM7.7793,6.31641c-0.857,0 -1.37109,0.51517 -1.37109,1.20117c0,0.686 0.51416,1.19922 1.28516,1.19922c0.857,0 1.37109,-0.51322 1.37109,-1.19922c0,-0.686 -0.51416,-1.20117 -1.28516,-1.20117zM6.47656,10v7h2.52344v-7zM11.08203,10v7h2.52344v-3.82617c0,-1.139 0.81264,-1.30273 1.05664,-1.30273c0.244,0 0.89649,0.24473 0.89649,1.30273v3.82617h2.44141v-3.82617c0,-2.197 -0.97627,-3.17383 -2.19727,-3.17383c-1.221,0 -1.87226,0.40656 -2.19726,0.97656v-0.97656z"></path>
                  </g>
                </g>
              </svg>
            </Link>
            <Link href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="36"
                height="36"
                viewBox="0,0,256,256"
              >
                <g>
                  <g transform="scale(10.66667,10.66667)">
                    <path d="M22,3.999c-0.78,0.463 -2.345,1.094 -3.265,1.276c-0.027,0.007 -0.049,0.016 -0.075,0.023c-0.813,-0.802 -1.927,-1.299 -3.16,-1.299c-2.485,0 -4.5,2.015 -4.5,4.5c0,0.131 -0.011,0.372 0,0.5c-3.353,0 -5.905,-1.756 -7.735,-4c-0.199,0.5 -0.286,1.29 -0.286,2.032c0,1.401 1.095,2.777 2.8,3.63c-0.314,0.081 -0.66,0.139 -1.02,0.139c-0.581,0 -1.196,-0.153 -1.759,-0.617c0,0.017 0,0.033 0,0.051c0,1.958 2.078,3.291 3.926,3.662c-0.375,0.221 -1.131,0.243 -1.5,0.243c-0.26,0 -1.18,-0.119 -1.426,-0.165c0.514,1.605 2.368,2.507 4.135,2.539c-1.382,1.084 -2.341,1.486 -5.171,1.486h-0.964c1.788,1.146 4.065,2.001 6.347,2.001c7.43,0 11.653,-5.663 11.653,-11.001c0,-0.086 -0.002,-0.266 -0.005,-0.447c0,-0.018 0.005,-0.035 0.005,-0.053c0,-0.027 -0.008,-0.053 -0.008,-0.08c-0.003,-0.136 -0.006,-0.263 -0.009,-0.329c0.79,-0.57 1.475,-1.281 2.017,-2.091c-0.725,0.322 -1.503,0.538 -2.32,0.636c0.834,-0.5 2.019,-1.692 2.32,-2.636zM18,8.999c0,4.08 -2.957,8.399 -8.466,8.943c0.746,-0.529 1.466,-1.28 1.466,-1.28c0,0 -3,-2.662 -3.225,-6.14c1.035,0.316 2.113,0.477 3.225,0.477h2v-2.5c0,-0.001 0,-0.001 0,-0.001c0.002,-1.38 1.12,-2.498 2.5,-2.498c1.381,0 2.5,1.119 2.5,2.5c0,0 0,0.42 0,0.499z"></path>
                  </g>
                </g>
              </svg>
            </Link>
          </div>
        </div>
        <div className="flex-1 flex flex-col justify-around text-center md:text-left">
          <span className="flex items-center gap-4">
            <svg
              width="36"
              height="36"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M3 5.5C3 14.0604 9.93959 21 18.5 21C18.8862 21 19.2691 20.9859 19.6483 20.9581C20.0834 20.9262 20.3009 20.9103 20.499 20.7963C20.663 20.7019 20.8185 20.5345 20.9007 20.364C21 20.1582 21 19.9181 21 19.438V16.6207C21 16.2169 21 16.015 20.9335 15.842C20.8749 15.6891 20.7795 15.553 20.6559 15.4456C20.516 15.324 20.3262 15.255 19.9468 15.117L16.74 13.9509C16.2985 13.7904 16.0777 13.7101 15.8683 13.7237C15.6836 13.7357 15.5059 13.7988 15.3549 13.9058C15.1837 14.0271 15.0629 14.2285 14.8212 14.6314L14 16C11.3501 14.7999 9.2019 12.6489 8 10L9.36863 9.17882C9.77145 8.93713 9.97286 8.81628 10.0942 8.64506C10.2012 8.49408 10.2643 8.31637 10.2763 8.1317C10.2899 7.92227 10.2096 7.70153 10.0491 7.26005L8.88299 4.05321C8.745 3.67376 8.67601 3.48403 8.55442 3.3441C8.44701 3.22049 8.31089 3.12515 8.15802 3.06645C7.98496 3 7.78308 3 7.37932 3H4.56201C4.08188 3 3.84181 3 3.63598 3.09925C3.4655 3.18146 3.29814 3.33701 3.2037 3.50103C3.08968 3.69907 3.07375 3.91662 3.04189 4.35173C3.01413 4.73086 3 5.11378 3 5.5Z" />
            </svg>
            +123-456-7890
          </span>
          <span className="flex items-center gap-4">
            <svg
              width="36"
              height="36"
              viewBox="0 0 48 48"
              id="Layer_2"
              data-name="Layer 2"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                className="cls-1"
                d="M6.47,10.71a2,2,0,0,0-2,2h0V35.32a2,2,0,0,0,2,2H41.53a2,2,0,0,0,2-2h0V12.68a2,2,0,0,0-2-2H6.47Zm33.21,3.82L24,26.07,8.32,14.53"
              />
            </svg>
            contact@lorven.ai
          </span>
          <span className="flex items-center gap-4">
            <svg
              version="1.1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              height={36}
              width={36}
            >
              <path
                d="M12,2C6.5,2,2,6.5,2,12s4.5,10,10,10s10-4.5,10-10v-1c-0.6,0.9-1.2,1.7-1.7,2.4c-0.4,2.2-1.6,4.1-3.3,5.4
	c-0.1-0.3-0.2-0.7-0.3-1c-0.1-0.4-0.2-0.8-0.4-1.2c-0.1-0.4-0.2-0.8-0.4-1.1c-0.1-0.1-0.3-0.2-0.5-0.3c-0.7-0.2-1.6,0.1-2.1-0.6
	c-0.2-0.3-0.2-0.6-0.1-1c0.2-0.3,0.3-0.6,0.5-0.9c0.2-0.4,0.5-0.9,0.6-1.4c-0.8-1.2-1.6-2.6-2-3.9h-0.1c-0.1,0-0.1,0-0.2-0.1
	c-0.2-0.2-0.3-0.7-0.2-1c0-0.5,0.3-0.8,0.2-1.3c0-0.1-0.1-0.9-0.1-0.9c-0.3,0-0.8,0-0.7-0.5V3.5H12h0.5c0.2-0.6,0.6-1.1,0.9-1.5H12z
	 M18,2c-2.2,0-4,1.8-4,4s4,7,4,7s4-4.8,4-7S20.2,2,18,2z M18,4.5c0.8,0,1.5,0.7,1.5,1.5S18.8,7.5,18,7.5S16.5,6.8,16.5,6
	S17.2,4.5,18,4.5z M8,5.1c0.4,0,0.7,0,1,0.1s0.6,0.3,0.8,0.5s0.5,0.5,0.5,0.8c0,0.1,0,0.2-0.1,0.2C10.1,6.8,10,6.8,9.9,6.8
	c-0.3,0-0.6,0-0.8-0.1C9,6.6,8.8,6.4,8.6,6.3C8.1,6.1,7.2,7.4,7.1,7.8C7,8.1,7,8.8,7.5,8.9c0.3,0,1-0.6,1.2-0.8C8.9,8,9,7.9,9.2,7.8
	c0.8-0.1,1.4,0.6,1.6,1.3C11,9.9,9.6,10.5,9,10.7c-0.2,0.1-0.3-0.1-0.5,0c-0.5,0.2-1.1,0.9-1.1,1.4s-0.1,1-0.2,1.5
	c-0.1,0-0.2-0.1-0.2-0.1v-0.2c0-0.3-0.1-0.6-0.4-0.8c-0.1,0-0.1-0.1-0.2-0.1c-0.3-0.1-0.6-0.4-0.9-0.1c-0.2,0.2-0.4,0.5-0.4,0.8
	c0,0.1,0,0.2,0.1,0.3c0.2,0.1,0.4,0,0.6,0c0.1,0,0.2,0.2,0.3,0.3c0.2,0.3,0.3,0.8,0.7,0.8h0.7h1.3c0.3,0.1,0.8,0.2,1,0.4
	c0.1,0.2,0.1,0.4,0.2,0.6c0.4,0.5,1.1,0.5,1.7,0.7c0.2,0.1,0.3,0.2,0.3,0.4c0,0.3-0.1,0.7-0.2,1s-0.2,0.7-0.4,0.9s-0.4,0.3-0.6,0.4
	c-0.4,0.2-0.6,0.6-0.8,0.9c0,0-0.1,0.2-0.2,0.3c-0.8-0.2-1.5-0.5-2.2-1v-0.2c-0.1-0.4-0.2-0.7-0.3-1c-0.2-0.5-0.5-1.1-0.6-1.6
	c0-0.5,0.1-1-0.2-1.4c-0.3-0.5-1.1-0.5-1.6-0.8c-0.4-0.4-0.9-0.8-1.3-1.3V12c0-2.7,1.3-5.1,3.3-6.7C7.3,5.2,7.6,5.1,8,5.1z"
              />
              <rect fill="none" width="24" height="24" />
              <rect fill="none" width="24" height="24" />
            </svg>
            123 Main St, City, State, Zip
          </span>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
