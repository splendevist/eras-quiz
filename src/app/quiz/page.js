"use client"
import Image from "next/image";
import { useState } from "react";
import { bgImage, question, colour, answers, hover } from "../lib/data.js";

export default function Quiz() {
  const [count, setCount] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [active, setActive] = useState(false);

  function increaseCount() {
    if (selectedAnswer !== null && count < bgImage.length - 1) {
      setCount(count + 1);
      setSelectedAnswer(null); // Reset the selected answer for the next question
      setActive(false); // Disable the button until a new answer is selected
      console.log("next question");
    }
  }

  function decreaseCount() {
    if (count > 0) {
      setCount(count - 1);
      console.log("previous question");
    }
  }

  const handleAnswerChange = (event) => {
    const answer = event.target.value;
    setSelectedAnswer(answer);
    setActive(true); // Enable the button when an answer is selected
  };

  return (
    <div className="h-4/5 flex flex-col items-center justify-evenly">
      <div className="bg-white h-5/6 w-1/3 px-4 z-10 relative flex flex-col items-center justify-around rounded-lg">
        <Image src="/green-bg.avif" alt="alt" width={400} height={200} />
        <h3 className="text-xl text-center">{question[count]}</h3>
        <form className="w-full flex flex-col items-center">
          <div className="grid grid-cols-2 w-full justify-items-center">
            {answers[count].map((answer, index) => (
              <label 
                key={index} 
                className={`w-2/3 text-l border-2 flex justify-center align-center rounded-md p-4 m-4 cursor-pointer text-center ${selectedAnswer === answer ? `${colour[count]}` : "border-black"}`}
              >
                <input 
                  type="radio" 
                  name="answer" 
                  value={answer} 
                  onChange={handleAnswerChange}
                  className="hidden"
                />
                <span className="inline-block w-full h-full ">
                  {answer}
                </span>
              </label>
            ))}
          </div>
          <button 
            type="button" 
            onClick={increaseCount}
            disabled={!active} // Disable the button if no answer is selected
            className={`font-bold rounded-full py-2 px-4 h-8 flex justify-center items-center my-4 ${active ? "bg-white text-black border-2 border-black" : "bg-gray-300 text-gray-400"}`}
          >
            {count === bgImage.length - 1 ? "Get Results" : "Next Question"}
          </button>
        </form>
      </div>
      <Image src={bgImage[count]} alt="gradient background" fill={true} />
    </div>
  );
}