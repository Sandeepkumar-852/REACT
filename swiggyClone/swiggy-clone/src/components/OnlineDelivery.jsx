import { useEffect,useState } from "react";
import Card from "./Card";

const OnlineDelivery=()=>{
  const [data,setData]=useState([]);

  const fetchTopRestaurant=async ()=>{
    const response = await fetch("http://localhost:5000/top-restaurant-chains");
    const apiData=await response.json();
    setData(apiData);
  }

  useEffect(() => {
    fetchTopRestaurant();
  }, []);

  return(
    <div className="max-w-[1200px] mx-auto px-2">
        <div className="text-[25px] font-bold">
          Restaurants with food online delivery
        </div>
        <div className="max-w-[1280px] mx-auto flex my-4 gap-3 shadow rounded-[15px]">
          <div className="p-3 rounded-md shadow">Filter</div>
          <div className="p-3 rounded-md shadow">Sort By</div>
        </div>
        <div className="md:grid grid-cols-4 gap-4">
        {
          data.map(
            (d,i)=>{
              return <Card {...d} key={i}/>
            }
          )
        }
        </div>
      </div>
      
  )
}

export default OnlineDelivery;