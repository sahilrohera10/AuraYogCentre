import React from "react";
import img from "../assets/img4.png";

const About = () => {
  return (
    <div
      style={{ background: "blanchedalmond" }}
      className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4"
    >
      <div className="flex flex-col lg:flex-row justify-between gap-8">
        <div className="w-full lg:w-5/12 flex flex-col justify-center">
          <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 pb-4 text-left">
            We, Discover Serenity Within: Your Journey to Balance, Strength, and
            Inner Peace Starts Here.
          </h1>
          <p className="font-normal text-base leading-6 text-gray-600  text-left">
            Aura yog centre, Shalimar Bagh is a well being centre with an aim of
            spreading the Teaching and practice of an authentic and ancient
            system of yoga thereby promoting health, well being, freedom from
            stress and more balanced and visionary individual. <br /> We have
            daily yoga classes, special courses, annual programmes and retreats,
            yoga teacher training courses, zumba, individual and group
            meditation sessions, yoga counseling and consultation, dance and
            yoga classes for children and teenagers; Catering to the needs of
            all age groups.
          </p>
        </div>
        <div className="w-full lg:w-8/12 ">
          <img
            style={{ borderRadius: "20px" }}
            className="w-full h-full"
            src={img}
            alt="A group of People"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
