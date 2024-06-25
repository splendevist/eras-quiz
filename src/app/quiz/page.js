"use client"
import Image from "next/image";
import { useState } from "react";

import { bgImage, question, colour } from "../lib/data.js";

export default function Quiz() {
  const [count, setCount] = useState(0);

  function increaseCount() {
    if (count < bgImage.length - 1) {
      setCount(count + 1);
      console.log("next question");
    }
  }

  function decreaseCount() {
    if (count > 0) {
      setCount(count - 1);
      console.log("previous question");
    }
  }

  return (
    <div className="h-4/5 flex flex-col items-center justify-around">
      <div className="bg-white h-5/6 w-1/3 z-10 relative flex flex-col items-center justify-around rounded-lg">
        {/* image */}
        <Image src={bgImage[count]} alt="alt" width={400} height={200} />
        <h3>{count + 1}. {question[count]}</h3>
        <div className="grid grid-cols-2">
          <button className={`border-2 border-${colour[count]} rounded-md p-4 m-4`}>This is an answer</button>
          <button className={`border-2 border-${colour[count]} rounded-md p-4 m-4`}>This is an answer</button>
          <button className={`border-2 border-${colour[count]} rounded-md p-4 m-4`}>This is an answer</button>
          <button className={`border-2 border-${colour[count]} rounded-md p-4 m-4`}>This is an answer</button>
        </div>
      </div>
      <div className="flex z-10">
        <button
          onClick={decreaseCount}
          className="rounded-full w-8 h-8 flex justify-center items-center m-6 bg-white"
        >
          &lt;
        </button>
        <button
          onClick={increaseCount}
          className="rounded-full w-8 h-8 flex justify-center items-center m-6 bg-white"
        >
          &gt;
        </button>
      </div>
      <Image src={bgImage[count]} alt="gradient background" fill={true} />
    </div>
  );
}