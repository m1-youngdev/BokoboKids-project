import React from "react";

function Section2() {
  return (
    <>
      <div className="flex flex-col justify-items-center items-center-safe">
        <div className="w-3/4 flex flex-col justify-items-center items-center-safe">
          <h1 className="font-bold text-4xl m-[15px]">Ancient Wisdom</h1>
          <p className="text-center text-[18px]">
            Connecting mordern children to timeless African knowledge,
            traditions and cultural treasures that have shaped civilizations for
            thousands of years.
          </p>
        </div>

        <div className="cardHolder2 flex justify-between align-middle p-[20px]">
            {/* Cards */}
          <div className="card2 w-[300px] rounded-xl bg-[#A0522D80] px-[20px] py-[30px] shadow-lg">
            <div className="spin w-[50px] h-[50px] bg-[#ffffff33] rounded-lg my-[20px]"></div>
            <h2 className="font-bold text-2xl my-[20px]">
              Sacred Masks & Sculptures
            </h2>
            <p>
              Discover the spiritual significance and artistic mastery of
              traditional African masks and sculptures
            </p>
          </div>

          <div className="card2 w-[300px] rounded-xl bg-[#FFB6C180] px-[20px] py-[30px] shadow-lg">
            <div className="spin w-[50px] h-[50px] bg-[#ffffff33] rounded-lg my-[20px]"></div>
            <h2 className="font-bold text-2xl my-[20px]">
              Traditional Pottery & Crafts
            </h2>
            <p>
              Learn the ancient techniques and cultural stories behind beautiful
              African pottery and crafts
            </p>
          </div>

          <div className="card2 w-[300px] rounded-xl bg-blue-500 px-[20px] py-[30px] shadow-lg">
            <div className="spin w-[50px] h-[50px] bg-[#ffffff33] rounded-lg my-[20px]"></div>
            <h2 className="font-bold text-2xl my-[20px]">
              Musical Instruments
            </h2>
            <p>
              Explore the rhythms and melodies that have carried African stories
              for generations
            </p>
          </div>

          <div className="card2 w-[300px] rounded-xl bg-[#00008080] px-[20px] py-[30px] shadow-lg">
            <div className="spin w-[50px] h-[50px] bg-[#ffffff33] rounded-lg my-[20px]"></div>
            <h2 className="font-bold text-2xl my-[20px]">African Patterns</h2>
            <p>
              Understand the symbolic meanings and mathematical beauty of
              traditional African patterns
            </p>
          </div>
          {/* Cards  */}
        </div>

        <div className="bg-gradient-to-br from-[#A0522D80] to-[#A0522D33] rounded-xl w-[350px] m-[30px] p-[30px] flex flex-col justify-items-center items-center-safe align-middle shadow-lg">
          <h2 className="font-bold text-2xl">Living Heritage</h2>
          <p>Preserving the past, inspiring the future</p>
        </div>
      </div>
    </>
  );
}

export default Section2;
