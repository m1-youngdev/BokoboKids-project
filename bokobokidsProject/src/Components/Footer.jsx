import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaSquareInstagram,
  FaYoutube,
  FaEnvelope,
  FaHeart 
} from "react-icons/fa6";

function Footer() {
  return (
    <>
      <footer className="mt-[50px]">
        <div className="footer-div w-screen flex p-[25px] gap-[15px] items-center-safe align-middle justify-between">
          <div className="footer-part-1 footer-divs w-4/12">
           <div className="footer-logo flex gap-[10px] items-center-safe justify-items-center-safe mb-[25px]">
             <div className="w-[45px] h-[45px] bg-gradient-to-br from-[#A0522D] to-[#A0522D33] rounded-full text-[25px] font-bold text-white flex justify-center-safe items-center-safe">B</div>
            <h3 className="text-[24px] font-bold text-[#2E251F] mb-[15px]">Bokobokids</h3>
           </div>
            <div className="about">
              <h3 className="text-[22px] font-bold text-[#2E251F] mb-[15px]">About</h3>
              <p className="text-[18px] text-[#2E251FAA]">
                We are a platform of storytellers using the arts to promote
                African descendant heritage and foster inner well-being in
                children of all ages.
              </p>
            </div>
          </div>

          <div className="products footer-divs w-4/12">
            <h3 className="text-[22px] font-bold text-[#2E251F] mb-[15px]">Products</h3>
            <ul>
              <li className="product-list text-[18px] text-[#2E251FAA]">The legend of the first rainbow</li>
              <li className="product-list text-[18px] text-[#2E251FAA]">The lady of the sea</li>
            </ul>
          </div>

          <div className="contact-info footer-divs w-4/12">
            <h3 className="text-[22px] font-bold text-[#2E251F] mb-[15px]">Follow Us</h3>
            <div className="Icons flex gap-[15px]">
              <a
                href="#"
                className=" social-links w-[45px] h-[45px] bg-[#FAF8F0] border border-gray-300 flex justify-center-safe items-center-safe rounded-full"
              >
                {" "}
                <FaFacebookF className="icon1 text-[20px] text-[#ECAF5BAA]" />{" "}
              </a>
              <a
                href="#"
                className=" social-links w-[45px] h-[45px] bg-[#FAF8F0] border border-gray-300 flex justify-center-safe items-center-safe rounded-full"
              >
                {" "}
                <FaTwitter className="icon2 text-[20px] text-[#ECAF5BAA]" />{" "}
              </a>
              <a
                href="#"
                className="social-links w-[45px] h-[45px] bg-[#FAF8F0] border border-gray-300 flex justify-center-safe items-center-safe rounded-full"
              >
                {" "}
                <FaSquareInstagram className="icon3 text-[20px] text-[#ECAF5BAA]" />{" "}
              </a>
              <a
                href="#"
                className=" social-links w-[45px] h-[45px] bg-[#FAF8F0] border border-gray-300 flex justify-center-safe items-center-safe rounded-full"
              >
                {" "}
                <FaYoutube className="icon4 text-[20px] text-[#ECAF5BAA]" />{" "}
              </a>
              <a
                href="#"
                className="social-links w-[45px] h-[45px] bg-[#FAF8F0] border border-gray-300 flex justify-center-safe items-center-safe rounded-full"
              >
                {" "}
                <FaEnvelope className="icon5 text-[20px] text-[#ECAF5BAA]" />{" "}
              </a>
            </div>
          </div>
        </div>

        <div className="footer-end mt-[40px] flex justify-between p-[25px]">
            <div>
              <p className="flex text-[16px] text-[#2E251FAA]"> &copy; 2024. All rights reserved. With <span className="m-[5px]"><FaHeart className="text-[18px] text-red-600"/></span> from Bokobokids Village.</p>
            </div>
            <div className=" footer-end-links flex gap-[15px]">
              <a href="#" className="text-[16px] text-[#2E251FAA]">Contact Us</a>
              <span className="text-[16px] text-[#2E251FAA]">|</span>
              <a href="#" className="text-[16px] text-[#2E251FAA]">Privacy Policy</a>
            </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
