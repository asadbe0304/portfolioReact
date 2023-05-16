import React from "react";
import { motion, useTransform, useScroll } from "framer-motion";

import Wrapper from "./Wrapper";
import flag from "../assets/uz-flag.png";
import pe1 from "../assets/sec-2-p-e-1.png";
import pe2 from "../assets/sec-2-p-e-2.png";
import Div from "./Div";

const AboutMe = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [100, 0], { clamp: false });
  const y2 = useTransform(scrollY, [0, 500], [0, -200], { clamp: false });
  return (
    <div
      id="about"
      className="w-full py-[50px] md:py-[100px] bg-white text-black relative overflow-hidden"
    >
      {/* BACKGROUND ELEMENTS START */}
      <span className="sec-2-bg-gradient" />
      <motion.img className="sec-2-p-e-1" style={{ y: y1 }} src={pe1} />
      <motion.img className="sec-2-p-e-2" style={{ y: y2 }} src={pe2} />
      {/* BACKGROUND ELEMENTS END */}

      <Wrapper>
        {/* HEADING START */}
        <Div className="text-[40px] md:text-[90px] 2xl:text-[120px] leading-[52px] md:leading-[95px] 2xl:leading-[123px] font-oswald uppercase mb-[25px] md:mb-[40px] 2xl:mb-[60px] flex flex-col relative">
          <span>A Frontend Dev</span>
          <span className="flex items-center gap-2">
            <span>Based</span>
            <img
              src={flag}
              alt=""
              className="w-[70px] md:w-[150px] 2xl:w-[190px] block mt-1 md:mt-2"
            />
            <span>In Uzbekistan</span>
          </span>
        </Div>
        {/* HEADING END */}

        {/* PARAGRAPH START */}
        <Div className="max-w-[759px] 2xl:max-w-[959px] text-[16px] 2xl:text-[20px] leading-[24px] 2xl:leading-[32px] mb-[20px] md:mb-[30px] 2xl:mb-[50px] relative">
          As a frontend developer, I am passionate about creating dynamic and
          interactive web applications. With a strong foundation in frontend
          development including HTML, CSS and JavaScript, I am experienced in
          developing responsive web interfaces that meet user requirements.
        </Div>
        {/* PARAGRAPH END */}

        {/* PARAGRAPH START */}
        <Div className="max-w-[759px] 2xl:max-w-[959px] text-[16px] 2xl:text-[20px] leading-[24px] 2xl:leading-[32px] mb-[20px] md:mb-[30px] 2xl:mb-[50px] relative">
          I'm using React and I feel comfortable using various JavaScript
          libraries and frameworks such as Nextjs and have experience using
          version control systems such as Git. My strong problem solving skills
          and attention to detail have allowed me to quickly identify and
          resolve issues during development.
        </Div>
        {/* PARAGRAPH END */}

        {/* PARAGRAPH START */}
        <Div className="max-w-[759px] 2xl:max-w-[959px] text-[16px] 2xl:text-[20px] leading-[24px] 2xl:leading-[32px] relative">
          I am committed to learning and improving my skills as a developer and
          contributing to the team's success. I am always learning and adapting
          to new technologies to keep up with the latest industry trends.
        </Div>
        {/* PARAGRAPH END */}
      </Wrapper>
    </div>
  );
};

export default AboutMe;
