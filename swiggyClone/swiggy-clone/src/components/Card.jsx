import React from "react";

const Card = (props) => {
  return (
    <div className="w-full md:w-[273px] shrink-0 mb-3">
      <div className="group h-[182px] rounded-[15px] overflow-hidden relative">
        <img
          src={"http://localhost:5000/images/"+ props.image}
          className="group-hover:scale-110 object-cover w-full h-full"
          alt=""
        />
        <div className="image-overlay absolute w-full h-full top-0 flex items-end p-2 md:text-[25px] text-white tracking-tighter font-bold">
          {props.offer}
        </div>
        
      </div>
      <div className="font-bold mt-3 text-xl">
          {props.title}
        </div>
        <div>
        {props.rating}
        <span className="ml-2"> {props.minTime}-{props.maxTime} mins</span>
        </div>
        <div>
          {props.name}
          <br/>
          {props.place}
        </div>
    </div>
  );
};

export default Card;
