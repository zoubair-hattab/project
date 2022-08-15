import React, { useState, useEffect, useRef } from "react";
import ShowComponentOngoing from "../show_component_ongoing";
import styles from "@/styles/show_component_ongoing.module.css";
const Ongoing = () => {
  const [isOnTop, setIsOnTop] = useState(false);
  const [isYieldPeriod, setIsYieldPeriod] = useState(false);

  const myRef = useRef();
  const boxRef = useRef();

  useEffect(() => {
    document.addEventListener("scroll", function () {
      HandleScrollerDescription();
    });
  }, []);

  const HandleScrollerDescription = () => {
    if (myRef.current != null) {
      if (myRef.current.offsetTop <= scrollY) {
        setIsOnTop(true);
      } else {
        setIsOnTop(false);
      }
    }
    if (boxRef.current != null) {
      if (boxRef.current.offsetTop - 100 <= scrollY) {
        setIsYieldPeriod(true);
      } else {
        setIsYieldPeriod(false);
      }
    }
  };

  return (
    <>
      <div
        className={`${isOnTop && !isYieldPeriod ? styles.fixed : styles.abslute
          } text-black rounded-2 bg-gray88 text-roboto p-2 fw-bold`}
      >
        Raise Period
      </div>
      <div ref={myRef}>
        <ShowComponentOngoing status={"1"} />
        <ShowComponentOngoing />
        <ShowComponentOngoing />
        <ShowComponentOngoing />
        <ShowComponentOngoing />
      </div>
      <div
        className={`${isOnTop && isYieldPeriod ? styles.fixed : styles.abslute} ${isOnTop && isYieldPeriod ? "text-black" : "cf-grey65"
          } rounded-2 bg-gray88 fw-bold text-roboto p-2`}
      >
        Yield Period
      </div>
      <div ref={boxRef}>
        <ShowComponentOngoing status={"3"} />
        <ShowComponentOngoing status={"3"} />
        <ShowComponentOngoing status={"3"} />
      </div>
    </>
  );
};

export default Ongoing;
