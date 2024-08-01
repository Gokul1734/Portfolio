import React from "react";
import profile from "../../images/profile.png";
// import Animated from "../animated";

const hero = () => {
  return (
    <div id="col"  className=" text-left mt-24 mx-10 h-2/3 place-items-start p-10 px-20 text-Primary flex gap-20 ">
      <div id="colin" className="w-3/5">
        <h1 id="h1" className=" text-7xl h-auto w-max darker-grotesque font-bold">
          Hi, I am Gokul
        </h1>
        <h2 className="pb-5 text-3xl pt-2 josefin-sans w-max">
          A Full Stack Developer
        </h2>
        <p id="para" className=" text-left w-10/12 ">
          As a Computer Science and Engineering graduate from SRM University, I
          bring a strong foundation in technology and a passion for crafting
          innovative solutions. With expertise in JavaScript, Tailwind CSS,
          Firebase, and Python for problem-solving and data analytics, I am
          equipped to tackle diverse challenges in web development and
          application design. My focus lies in creating user-centric experiences
          that seamlessly blend functionality with aesthetics. Whether it's
          building responsive websites or developing robust applications, I am
          dedicated to delivering impactful solutions that exceed expectations
          and drive meaningful outcomes.
        </p>
      </div>
      <div className=" scale-75">
        <img className="ml-0 mt-0" src={profile} alt="" />
      </div>
    </div>
  );
};

export default hero;
