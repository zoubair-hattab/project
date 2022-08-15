import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Button from "@/components/button";
import CountDown from "@/components/countDown";
import styles from "@/styles/show_component.module.css"
const ShowComponent = () => {
  const [fullText, setFullText] = useState(false)
  return (
    <div className="rounded-20 bg-white my-3 py-3">
      <div className="row">
        <div className="col-md-4 col-lg-3">
          <div className="d-flex justify-content-center align-items-center text-center h-100">
            <div>
              <Link href={`https://www.google.com`} passHref>
                <a rel="noopener noreferrer" target="_blank">
                  <Image
                    src={"/images/placeholder_image.jpg"}
                    alt="image-placeholder"
                    className="rounded-circle"
                    width={"200"}
                    height={"200"}
                  />
                </a>
              </Link>

              <Link href={`https://www.google.com`}>
                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  className={`cf-grey65 d-block ${styles.hrefHover} `}
                >
                  Learn more
                </a>
              </Link>
            </div>
          </div>
        </div>

        <div className="col-md-5 col-lg-6">
          <div className="">
            <p className={`${styles.textCenter} h4 text-uppercase text-bodoni`}>Compaign Title</p>
            <p className={`${styles.paddingText} mt-lg-4 my-2`}>
              {
                `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                  enim ad minim veniam, quis nostrud exercitation ullamco laboris
                  nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                  in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                  nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                  sunt in culpa qui officia deserunt mollit anim id est laborum.`
              }
            </p>
          </div>
        </div>

        <div className="col-md-3 col-lg-3">
          <div className="d-flex justify-content-center align-items-center h-100 ">
            <div className={`${styles.flexSmallReverse}`}>
              <Button classStyle={`${styles.widthShowComponent} rounded-pill text-bodoni my-2 bg-gray88`}>
                Set Alarm
              </Button>
              <div className="text-bodoni my-2 rounded-2 bg-spaces p-2">
                <CountDown />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowComponent;







