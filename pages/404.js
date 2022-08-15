import React from "react";
import Link from "next/link";
import Image from "next/image";
import Button from "@/components/button";
import Title from "@/components/title";
import styles from "@/styles/notFound.module.css";
const NotFound = () => {
  return (
    <>
      <Title pageName={"Not Found 😞"} />
      <div className="container">
        <div
          className={`${styles.hieghtView} d-flex justify-content-center align-items-center`}
        >
          <div className="text-center">
            <Image
              src={"/images/notFoundPlaceholder.png"}
              alt="Not found Image"
              height={"400"}
              width={"500"}
            />

            <h3 className="text-bodoni pt-3">Page Not Found </h3>
            <p className="text-bodoni w-75 p-3 mx-auto">
              The page you are looking for might have been removed had its name
              changed or is temporarily unavailable.
            </p>
            <Link href={"/"} passHref>
              <a>
                <Button classStyle={"rounded-pill text-bodoni mt-3"}>
                  Go To Home
                </Button>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFound;
