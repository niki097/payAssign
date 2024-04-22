import React from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const FaqSection = () => {
  return (
    <>
      <div className="w-100 pt-5 my-3 faq">
        <h1 className="text-3xl font-bold text-center">
          Frequently Asked Questions (FAQ)
        </h1>
      </div>
      <section className="faq_question bg-white pb-8 pt-10 rounded-lg grid w-full">
        <div className="">
          <details className="bg-backgroundLightBlue rounded p-5 mb-4 relative open:shadow-lg mb-1 bg-none open:bg-white duration-300">
            <summary className="list-none font-semibold relative text-l cursor-pointer pr-7">
            Lorem ipsum dolor sit amet consectetur.
              <div className="absolute top-0 text-xl right-0 rounded-full px-1 py-0.5 cursor-pointer visible open:invisible">
                <MdOutlineKeyboardArrowDown />
              </div>
            </summary>
            <p className="text-s pt-3">
             Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti quasi ratione neque!
              <br />
              <br />
              Lorem ipsum dolor sit amet consectetur.
            </p>
          </details>
          <details className="bg-backgroundLightBlue rounded p-5 mb-4 relative open:shadow-lg mb-1 bg-none open:bg-white duration-300">
            <summary className="list-none font-semibold relative text-l cursor-pointer pr-7">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              <div className="absolute top-0 text-xl right-0 rounded-full px-1 py-0.5 cursor-pointer visible open:invisible">
                <MdOutlineKeyboardArrowDown />
              </div>
            </summary>
            <p className="text-s pt-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, velit.
              <br />
              <br />
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            </p>
          </details>
          <details className="bg-backgroundLightBlue rounded p-5 mb-4 relative open:shadow-lg mb-1 bg-none open:bg-white duration-300">
            <summary className="list-none font-semibold relative text-l cursor-pointer pr-7">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, ipsum.
              <div className="absolute top-0 text-xl right-0 rounded-full px-1 py-0.5 cursor-pointer visible open:invisible">
                <MdOutlineKeyboardArrowDown />
              </div>
            </summary>
            <p className="text-s pt-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis impedit aut ea?
              <br />
              <br />
             Lorem ipsum dolor, sit amet consectetur adipisicing.
            </p>
          </details>
          <details className="bg-backgroundLightBlue rounded p-5 mb-4 relative open:shadow-lg mb-1 bg-none open:bg-white duration-300">
            <summary className="list-none font-semibold relative text-l cursor-pointer pr-7">
              Lorem ipsum dolor sit amet, consectetur adipisicing.
              <div className="absolute top-0 text-xl right-0 rounded-full px-1 py-0.5 cursor-pointer visible open:invisible">
                <MdOutlineKeyboardArrowDown />
              </div>
            </summary>
            <p className="text-s pt-3">
             Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur, numquam.
              <br />
              <br />
             Lorem ipsum dolor sit, amet consectetur adipisicing.
            </p>
          </details>
        </div>
      </section>
    </>
  );
};

export default FaqSection;
