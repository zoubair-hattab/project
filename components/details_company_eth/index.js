import React from "react";
import style from "@/styles/company_details.module.css";
const index = () => {
  return (
    <div className={`text-bodoni d-flex mt-4 justify-content-between`}>
      <div>
        <p>999 ETH</p>
        <p>Raised</p>
      </div>
      <div className={`${style.horezantalLine} mx-4`}></div>
      <div className="">
        <p>999 ETH</p>
        <p>Min Goal</p>
      </div>
      <div className={`${style.horezantalLine} mx-4`}></div>
      <div className="">
        <p>999 ETH</p>
        <p>Ultimate Goal</p>
      </div>
    </div>
  );
};

export default index;
