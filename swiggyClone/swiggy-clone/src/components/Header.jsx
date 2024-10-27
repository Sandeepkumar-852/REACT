import { RxCaretDown } from "react-icons/rx";
import { IoIosSearch } from "react-icons/io";
import { CiDiscount1 } from "react-icons/ci";
import { IoIosHelpCircleOutline } from "react-icons/io";
import { PiSignInBold } from "react-icons/pi";
import { FaShoppingCart } from "react-icons/fa";
import { useState } from "react";


const Header = () => {
  const [toggle, setToggle] = useState(false);
  const showSideMenu = () => {
    setToggle(true);
    console.log("hi");
  };

  const hideSideMenu = () => {
    setToggle(false);
  };

  const links=[
    {
      icon:<IoIosSearch/>,
      name:"Search"
    },
    {
      icon:<CiDiscount1 />,
      name:"Offers",
      sup:"New"
    },
    {
      icon:<IoIosHelpCircleOutline />,
      name:"Help"
    },
    {
      icon:<PiSignInBold />,
      name:"Sign In"
    },
    {
      icon:<FaShoppingCart />,
      name:"Cart",
      sup:"(10)"
    }    
  ] 


  return (
    <>
      <div
        className="black-overlay w-full h-full fixed duration-500"
        onClick={hideSideMenu}
        style={{
          opacity: toggle ? 1 : 0,
          visibility: toggle ? "visible" : "hidden",
        }}
      >
        <div
          onClick={(e) => {
            e.stopPropagation();
          }}
          className="w-[400px] bg-white w-[500px] h-full absolute duration-[400ms]"
          style={{
            left: toggle ? "0%" : "-100%",
          }}
        ></div>
      </div>
      <header className="p-[15px] shadow-xl">
        <div className="max-w-[1200px] mx-auto  flex items-center">
          <div className="w-[100px]">
            <img
              src="./public/images/swiggylogo.png"
              alt=""
              className="w-full "
            />
          </div>
          <div className="">
            <span className="font-bold border-b border-b-[3px] border-black">
              Ratanada
            </span>{" "}
            Jodhpur, Rajasthan India{" "}
            <RxCaretDown
              onClick={showSideMenu}
              fontSize={25}
              className="inline text-[0.9rem]  text-[#fc8019] cursor-pointer"
            />
          </div>
          <nav className=" hidden md:flex list-none gap-10 ml-auto font-semibold text-[18px] ">
            {
              links.map(
                (link,index)=>{
                  return(<li key={index} className="flex items-center gap-2 hover:text-[#fc8019]">
                    {link.icon}
                    {link.name}
                    <sup>{link.sup}</sup>
                  </li>
                  )
                }
              )
            }
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
