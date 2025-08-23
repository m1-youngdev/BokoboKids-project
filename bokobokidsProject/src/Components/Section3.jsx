import React from "react";
import bookImg from "../assets/winds-of-napata-img.jpg";

function Section3() {
  return (
    <div>
      <section className="section3 flex flex-col items-center-safe justify-between">
        <h2 className="text-[40px] font-bold text-[#2E251F]">Featured Story</h2>
        <div className="w-screen flex justify-center gap-[50px]">
          <div className="imgContainer w-5/12 border-4 border-[#FFFFFF] shadow-gray-500 shadow-xl rounded-[15px]">
            <img src= {bookImg} alt="Winds Of Napata " className="winds-of-napata width-4/4 rounded-[15px] "/>
          </div>
          <div className="w-5/12">
            <h2 className="TWoN text-[35px] font-bold text-[#2E251F]">The winds of Napata</h2>
            <p className="text-[20px] font-semibold mb-[30px]">by Dr. Kheftusa Akhiba Ankh</p>
            <p className="text-[18px] mb-[15px]">
              Journey through ancient Nubian kingdoms where children discover
              the power of their heritage and identity. This captivating tale
              weaves together history, culture, and adventure in a story that
              speaks to young hearts.
            </p>
            <p className="text-[18px] mb-[25px]">
              Perfect for children aged 8-12, this beautifully illustrated book
              helps young readers understand their place in the world while
              celebrating the rich tapestry of African culture and wisdom.
            </p>
            <ul className="flex gap-[168px] list-disc list-inside mb-[20px]">
              <li>Cultural Identity</li>
              <li>Historical Adventure</li>
            </ul>
            <ul className="flex gap-[140px] list-disc list-inside mb-[30px]">
              <li>Beautiful Illustration</li>
              <li>Educational Value</li>
            </ul>
            <div className="btns">
              <button className="bg-[#ECAF5B] w-[150px] h-[40px] rounded-[10px] mr-[30px] my-[30px]">Buy the Book</button>
              <button className="border-2 border-[#ECAF5B] w-[150px] h-[40px] rounded-[10px] mr-[15px] my-[30px]">Read Preview</button>
            </div>
            <div className="bg-[#FAF8F0] w-4/4 p-[30px] rounded-[12px] mb-[30px] border border-gray-200">
              <p className="text-[18px] italic mb-[10px]">
                "Every child deserves to see themselves reflected in the stories
                they read, to understand their heritage, and to dream of their
                limitless potential."
              </p>
              <p className="text-[18px] italic text-[#756357] font-semibold">— Dr. Kheftusa Akhiba Ankh</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Section3;
