"use client";
import { useEffect, useState } from "react";

const page = () => {
  const [numbers, setNumbers] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  const deletHandler = () => {
    numbers.pop();

    setNumbers([...numbers]);
  };
  useEffect(() => {
    deletHandler();
  }, []);
  return (
    <div className="text-cyan-800">
      {numbers.map((number, index) => {
        <p key={index}>{number}</p>;
      })}
      <button onClick={deletHandler}>add</button>
    </div>
  );
};
export default page;
