import React from "react";

function Section1() {
  return (
    <>
      <div className="section-1 w-2/4 m-auto my-[100px] flex flex-col items-center justify-center align-middle">
        <h2 className="font-bold text-4xl text-center m-[20px]">
          Wisdom Meets Modern Technology
        </h2>
        <h3 className="m-[10px] text-amber-800 text-[20px] font-semibold">
          Bridging Worlds
        </h3>
        <p className="text-center">
          Innovative approaches to learning that honor our past while preparing
          children for a bright future.
        </p>
      </div>
      <div className="flex flex-col justify-items-center items-center-safe ">
        <div className="w-3/4 rounded-2xl shadow-xl mb-[20px] items-center-safe justify-items-center p-[30px]">
          <h2 className="font-bold text-2xl text-center m-[10px]">
            Join the Movement
          </h2>
          <p className="text-center text-[18px]">
            Be part of a community that values cultural heritage, wisdom
            traditions, and innovative learning approaches that prepare our
            children for tommorow.
          </p>

          <div className="w-8/12 bg-green-400 p-[20px] flex flex-col justify-items-center items-center-safe m-[20px] rounded-2xl">
            <h4 className="font-semibold text-[20px] text-center italic m-[10px] text-white">
              "If it takes a village to raise a child, it will take a Bokobokids
              village to raise the next generation of global citizens."
            </h4>
            <p className="font-semibold text-[18px] text-center italic text-white">
              -Bokobokids Village Philosophy
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-items-center items-center-safe">
        <div className="cardHolder1 w-3/4 flex justify-between m-[50px]">
        {/* Card  */}
          <div className="card w-[320px] rounded-xl bg-blue-400 flex flex-col items-center-safe py-[20px] lg:10/12 md:10/12">
            <div className="w-[70px] h-[70px] rounded-lg shadow-md m-[20px]"></div>
            <h3 className="m-[10px] font-semibold text-[20px]">
              Inner Well-being
            </h3>
            <p className="m-[10px] text-center ">
              Nurturing emotional intelligence and self awareness through
              African wisdom traditions
            </p>
          </div>

          <div className="card w-[320px] rounded-xl bg-red-400 flex flex-col items-center-safe py-[20px] lg:10/12 md:10/12">
            <div className="w-[70px] h-[70px] rounded-lg shadow-md m-[20px]"></div>
            <h3 className="m-[10px] font-semibold text-[20px]">
              Welcoming Community
            </h3>
            <p className="m-[10px] text-center ">
              Building connections and belonging in our global village of learning
            </p>
          </div>

          <div className="card w-[320px] rounded-xl bg-purple-400 flex flex-col items-center-safe py-[20px]">
            <div className="w-[70px] h-[70px] rounded-lg shadow-md m-[20px]"></div>
            <h3 className="m-[10px] font-semibold text-[20px]">
              Global Citizens
            </h3>
            <p className="m-[10px] text-center ">
              Preparing children to understand and contribute to our interconnected world
            </p>
          </div>
          {/* Cards  */}
        </div>
      </div>
    </>
  );
}

export default Section1;
