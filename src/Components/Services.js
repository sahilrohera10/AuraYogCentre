import React from "react";

const data = [
  {
    key: 1,
    name: "Yoga",
    img: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    key: 2,
    name: "Meditation",
    img: "https://www.hindustantimes.com/ht-img/img/2023/05/21/550x309/_0623df8a-ca39-11e9-9a71-0afbe126130e_1684645951004.jpg",
  },
  {
    key: 3,
    name: "Zumba",
    img: "https://www.verywellfit.com/thmb/SaUyT2h2ujEDx4zCAU0ilFclWqI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/4688722-GettyImages-950806258-06e1e050ab184f3694fd96017c9a42ee.jpg",
  },
  {
    key: 4,
    name: "Aerobics",
    img: "https://media.istockphoto.com/id/841069776/photo/happy-people-in-an-aerobics-class-at-the-gym.jpg?s=612x612&w=0&k=20&c=Msbb_TNBDZWWZfnuaZubcgE7Qa-qimYrl4D3aFQv9PY=",
  },
  {
    key: 5,
    name: "Dance",
    img: "https://images.squarespace-cdn.com/content/v1/5ac09f2bc3c16a6451f0ce9c/1660717725757-N2EPJZHSGIV08HDV5QI6/IMG_3812.jpg?format=2500w",
  },
  {
    key: 6,
    name: "Healing",
    img: "https://miro.medium.com/v2/resize:fit:1400/1*In2NZu43jjWFpkrlRbWfVA.jpeg",
  },
  {
    key: 7,
    name: "Naturopathy",
    img: "https://img.freepik.com/free-photo/variety-spices-are-cutting-board-with-green-vegetable-background_1340-23417.jpg",
  },
  {
    key: 8,
    name: "Massage",
    img: "https://hips.hearstapps.com/hmg-prod/images/spa-woman-female-enjoying-massage-in-spa-centre-royalty-free-image-492676582-1549988720.jpg",
  },
];

const Services = () => {
  return (
    <div
      style={{ background: "blanchedalmond" }}
      className=" 2xl:container 2xl:mx-auto"
    >
      <div className="text-center lg:py-10 md:py-8 py-6">
        <p className=" w-10/12 mx-auto md:w-full  font-semibold lg:text-4xl text-3xl lg:leading-9 md:leading-7 leading-9 text-center text-gray-800">
          Services
        </p>
      </div>
      <div className=" py-6 lg:px-20 md:px-6 px-4">
        {/* <hr className=" w-full bg-gray-200 my-6" /> */}

        <div className=" grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 lg:gap-y-12 lg:gap-x-8 sm:gap-y-10 sm:gap-x-6 gap-y-6 lg:mt-4 mt-4">
          {data.map((d) => (
            <div key={d.key} className=" relative ">
              <div className=" relative group">
                <div className=" flex justify-center items-center opacity-0 bg-gradient-to-t from-gray-800 via-gray-800 to-opacity-30 group-hover:opacity-50 absolute top-0 left-0 h-full w-full"></div>
                <img
                  style={{ maxHeight: "24vh", borderRadius: "20px" }}
                  className=" w-full"
                  src={d.img}
                  alt="A girl Posing Img"
                />
                <div className=" absolute bottom-0 p-8 w-full opacity-0 group-hover:opacity-100">
                  <button className=" font-medium text-base leading-4 text-gray-800 bg-white py-3 w-full">
                    Register
                  </button>
                  <button className=" bg-transparent font-medium text-base leading-4 border-2 border-white py-3 w-full mt-2 text-white">
                    Book Demo
                  </button>
                </div>
              </div>
              <p className=" font-bold text-xl leading-5 text-gray-800 md:mt-6 mt-4">
                {d.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
