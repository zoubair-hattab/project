import React from "react";
import styles from "@/styles/progress_bar.module.css";
const index = () => {
  return (
    <div>
      <div className="d-flex justify-content-between text-roboto">
        <p>999%</p>
        <p>999</p>
      </div>
      <div className="w-100">
        <div className={`${styles.progressCore} progress`}>
          <div
            className={`${styles.bar} progress-bar`}
            role="progressbar"
            style={{ width: "25%" }}
            aria-valuenow="25"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>
      </div>
      <div className="d-flex justify-content-between text-roboto">
        <p>
          ETH Locked
        </p>
        <p>
          ETH Goal
        </p>
      </div>
    </div>
  );
};

export default index;

// import React from "react";
// import style from "@/styles/progress_bar.module.css";
// const index = () => {
//   return (
    // <div className="d-flex justify-content-between">
    //   <div className="">
    //     <p className="text-bodoni">999% ETH LOCKED</p>
    //   </div>
    //   <div className="w-50">
    //     <div className={`${style.progressCore} progress`}>
    //       <div
    //         className={`${style.bar} progress-bar`}
    //         role="progressbar"
    //         style={{ width: "25%" }}
    //         aria-valuenow="25"
    //         aria-valuemin="0"
    //         aria-valuemax="100"
    //       ></div>
    //     </div>
    //   </div>
    //   <div className="">
    //     <p className="text-bodoni"> 999 ETH GOAL</p>
    //   </div>
    // </div>
//   );
// };

// export default index;