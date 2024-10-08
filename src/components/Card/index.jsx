import React from "react";


export const Card = () => {
  return (
    <div className="bg-white cursor-pointer w-56 h-60 rounded-lg border-2 border-black">
      <figure className="relative mb-4 w-full h-4/5">
        <span className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-black ml-1 mb-1 px-1">Electronics</span>
        <img className="w-full h-full object-cover rounded-tl-lg rounded-tr-lg" src="https://images.pexels.com/photos/1037992/pexels-photo-1037992.jpeg?auto=compress&cs=tinysrgb&w=800" alt="headphones" />
        <div className="absolute top-0 right-0 flex justify-center items-center rounded-full bg-white w-6 h-6 m-1 shadow-xl">
          +
        </div>
      </figure>
      <p className="flex justify-between">
        <span className="text-sm font-light p-1">Headphones</span>
        <span className="text-lg font-medium pr-1">$300</span>
      </p>
    </div>
  );
};
