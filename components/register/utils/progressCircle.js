import React from "react";
import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import Image from "next/image";
import { BsCheckAll } from "react-icons/bs"
const ProgressCircle = ({ percentage }) => {
  return (
    <div className="mx-auto" style={{ width: 100, height: 100, backgroundColor: `${percentage == 100 ? "black" : "white"}`, borderRadius: "50%" }}>
      {percentage == 100 ? <EndSteps /> : <CircularProgressbarWithChildren
        value={percentage}
        styles={buildStyles({
          pathColor: "black",
        })}
      >
        <div className="d-flex justify-content-center align-items-center">
          <Image
            width="75"
            height="75"
            src="/images/progress_circle.png"
            alt="prgress circle image "
          />
          <div className="position-absolute fw-bold fs-5">
            {percentage}%
          </div>
        </div>
      </CircularProgressbarWithChildren>}
    </div>
  );
};

export default ProgressCircle;

export const EndSteps = () => {
  return (
    <div className="d-flex justify-content-center align-items-center" style={{
      width: "100px",
      height: "100px"
    }}>
      <BsCheckAll fontSize={"70"} color={"white"} />
    </div>
  )
}