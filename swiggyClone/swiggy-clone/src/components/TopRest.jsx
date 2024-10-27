import { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import Card from "./Card";

const TopRest = () => {
  const [data, setData] = useState([]);

  const fetchTopRestaurant = async () => {
    const response = await fetch("http://localhost:5000/top-restaurant-chains");
    const apiData = await response.json();
    setData(apiData);
  };

  useEffect(() => {
    fetchTopRestaurant();
  }, []);
  return (
    <div className="max-w-[1200px] mx-auto ">
      <div className="flex items-center my-3 justify-between">
        <div className="text-[25px] font-bold">
          Top restaurant chains in Delhi
        </div>
        <div className="flex ">
          <div className="flex justify-center items-center w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2">
            <FaArrowLeft />
          </div>
          <div className="flex justify-center items-center w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2">
            <FaArrowRight />
          </div>
        </div>
      </div>
      <div className="flex gap-5 overflow-hidden">
        {
          data.map(
            (d,i)=>{
              return <Card {...d} key={i}/>
            }
          )
        }
      </div>
      <hr className="m-6 border-[2px]"/>
    </div>

  );
};

export default TopRest;
