import React from "react";
import g1 from "../assets/g1.png";
import g2 from "../assets/g2.png";
import g3 from "../assets/g3.png";
import g4 from "../assets/g4.png";
import g5 from "../assets/g5.png";
import g6 from "../assets/g6.png";
import g7 from "../assets/g7.png";

function Gallery() {
  return (
    <div
      style={{ background: "blanchedalmond" }}
      className=" py-20 flex flex-col items-center justify-center"
    >
      <div className="xl:w-1/2 w-11/12">
        <h1
          role="heading"
          tabIndex={0}
          className="text-4xl font-bold 2xl:leading-10 leading-0 text-center text-gray-800"
        >
          Touching hundreds of lives
        </h1>
      </div>
      <div className="2xl:px-20 lg:px-12 px-4 flex flex-wrap items-start mt-4">
        <div className="mt-24">
          <div className="flex items-end ">
            <img
              tabIndex={0}
              src={g1}
              alt="girl with blue background"
              className="w-20 h-20 rounded-lg mr-6"
            />
            <img
              tabIndex={0}
              src={g4}
              alt="guy winking"
              className="w-48 h-36 rounded-lg"
            />
          </div>
          <div className="flex items-center justify-end my-6">
            <img
              tabIndex={0}
              src={g3}
              alt="guy smiling"
              className="w-68 h-64 rounded-lg"
            />
          </div>
          <div className="flex items-start">
            <img
              tabIndex={0}
              src={g2}
              alt="girl with bluw background"
              className="w-48 h-48 rounded-lg"
            />
            {/* <img
              tabIndex={0}
              src="https://i.ibb.co/fnNqJrx/Rectangle-7.png"
              alt="guy with glasses"
              className="w-20 h-20 rounded-lg ml-6 flex-shrink-0 object-cover object-fit"
            /> */}
          </div>
        </div>
        <div className="ml-6 mt-32">
          <img
            tabIndex={0}
            src={g2}
            className="w-72 h-80 rounded-lg"
            alt="guy with sunglasses"
          />
          <div className="flex items-start mt-6">
            <img
              tabIndex={0}
              src={g7}
              alt="girl  laughing"
              className="w-48 h-48 rounded-lg"
            />
            {/* <img
              tabIndex={0}
              src="https://i.ibb.co/2Yj51CY/Rectangle-13.png"
              alt="guy with glasses"
              className="w-20 h-20 rounded-lg ml-6 object-cover object-fit"
            /> */}
          </div>
        </div>
        <div className="mt-14 ml-6">
          <div className="lg:flex ">
            <div>
              <img
                tabIndex={0}
                src={g1}
                alt="group of friends"
                className="w-80 h-76 rounded-lg object-center object-fit"
              />
            </div>
            <div>
              <div className="flex ml-6">
                {/* <img
                  tabIndex={0}
                  src="https://i.ibb.co/80jvpSv/Rectangle-16.png"
                  className="w-20 h-20 rounded-lg mt-14"
                  alt="man"
                /> */}
                {/* <img
                  tabIndex={0}
                  src="https://i.ibb.co/6PR2Y74/Rectangle-15.png"
                  className="w-20 h-24 rounded-lg ml-6"
                  alt="woman"
                /> */}
              </div>
              <img
                tabIndex={0}
                src={g2}
                alt="boy with blonde hair"
                className="ml-6 mt-6 w-48 h-32 rounded-lg"
              />
            </div>
          </div>
          <div className="mt-6 flex">
            <img
              tabIndex={0}
              className="w-48 h-48 rounded-lg"
              src={g5}
              alt="young girl with red hair"
            />
            <img
              tabIndex={0}
              className="w-72 h-56 rounded-lg ml-6"
              src={g6}
              alt="young girl with red hair"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Gallery;
