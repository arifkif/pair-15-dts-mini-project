import React from "react";
import { BASE_IMG_URL } from "../config/config";
import { NavLink } from "react-router-dom";
import { Button } from "./Button/Button";

const MoiveCard = (props) => {
  const link = "/" + props.id;
  return (
    <NavLink to={link}>
      <div className="flex justify-center">
        <div className="rounded-lg shadow-lg max-w-sm px-3 sm:py-3">
          <img src={`${BASE_IMG_URL}w500/${props.image}`} alt="" />
        </div>
      </div>
      <Button className="mb-5 md:mb-0 ">Watch</Button>
    </NavLink>
  );
};

export default MoiveCard;
