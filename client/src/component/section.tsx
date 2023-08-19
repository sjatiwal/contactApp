import React, { useState } from "react";
import { Link } from "react-router-dom";
import { RiMenuFill } from "react-icons/ri";

const Section = () => {
  const [display, setDisplay] = useState(true);
  return (
    <div>
      <div
        className="absolute top-11 left-2 z-40 block md:hidden"
        onClick={() => setDisplay(!display)}
      >
        <RiMenuFill />
      </div>
      <div
        className={`flex flex-col bg-slate-200 z-20 absolute h-screen pt-24 top-0 ${
          display ? "block" : "hidden"
        } w-36 md:block`}
      >
        <div className=" pl-2 py-2 hover:bg-slate-400">
          <Link to="/">Contact</Link>
        </div>
        <div className="mt-4  pl-2 py-2 hover:bg-slate-400">
          <Link to="/chart&Map">Charts and Maps</Link>
        </div>
      </div>
    </div>
  );
};

export default Section;
