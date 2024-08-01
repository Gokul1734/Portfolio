import React from "react";
import { ArrowCircleRightIcon } from "@heroicons/react/outline";
import { ArrowCircleLeftIcon } from "@heroicons/react/solid";
import { useState } from "react";
import cardData from "./projectsupload";
import "./CardCarousel.css"; // Import your CSS file for styling

// const HorizontalCarousel = () => {
//   const [activeIndex, setActiveIndex] = useState(0);

//   const handleNext = () => {
//     setActiveIndex((prev) => (prev + 1) % cardData.length);
//   };

//   const handlePrev = () => {
//     setActiveIndex((prev) => (prev - 1 + cardData.length) % cardData.length);
//   };

//   return (
//     <div className="horizontal-carousel">
//       <div
//         className="cards"
//         style={{ transform: `translateX(-${activeIndex * 100}%)` }}
//       >
//         {cardData.map((card) => (
//           <div key={card.id} className="card">
//             <h2>{card.title}</h2>
//             <p>{card.content}</p>
//           </div>
//         ))}
//       </div>
//       <button className="prev-button" onClick={handlePrev}>
//         Prev
//       </button>
//       <button className="next-button" onClick={handleNext}>
//         Next
//       </button>
//     </div>
//   );
// };

const ProjectDisplay = () => {
  // console.log(window.scrollY);
  const [ActiveIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % cardData.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + cardData.length) % cardData.length);
  };

  return (
    <div className="bg-black h-full">
      <div className="w-full p-10 h-full bg-black ">
        <div id="btw" className="flex justify-between m-5 mt-2">
          <h1 className="pt-12 ml-20 text-Primary">Projects</h1>
          <hr className=" h-5 border-white" />
          <div className="flex justify-end mr-10 mt-10 gap-2">
            <button onClick={handlePrev}>
              <ArrowCircleLeftIcon className="size-16 text-Primary" />
            </button>
            <button onClick={handleNext}>
              <ArrowCircleRightIcon className="size-16  text-Primary" />
            </button>
          </div>
        </div>
      </div>
      <div id="col-1" className="horizontal-carousel m-20 mt-0 container  h-screen">
        <div
          className="cards "
          style={{ transform: `translateX(-${ActiveIndex * 100}%)` }}
        >
          {cardData.map((card) => (
            <div key={card.id} className="card overflow-hidden">
              <h2 className="  text-Primary">{card.title}</h2>
              <img src={card.content} alt="" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectDisplay;
