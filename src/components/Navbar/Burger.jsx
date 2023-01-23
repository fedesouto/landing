import React from "react";
import { MdMenu, MdClose } from "react-icons/md";

const Burger = ({isActive, setIsActive}) => {
    const handleClick = () => {
        setIsActive(!isActive)
    }
  return (
    <button className="burger" onClick={handleClick}>
      {isActive? <MdClose /> : <MdMenu />}
    </button>
  );
};

export default Burger;
