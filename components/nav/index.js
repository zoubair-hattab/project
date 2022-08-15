import React from "react";
import Link from "next/link";
import Button from "../button";
import Image from "next/image";
const Nav = ({ component, black = false }) => {
  return (
    <nav className="position-relative sticky-top container py-2">
      <div className="d-flex justify-content-between">
        <div style={{ width: "200px", height: "41px" }}>
          <Link href="/">
            <a className="text-black text-decoration-none">
              {
                black ? <Image
                  src={"/images/black-logo.png"}
                  layout="responsive"
                  width={"200"}
                  height={"41"}
                  className="img-fluid"
                  alt="logo cloud funding"
                /> :
                  <Image
                    src={"/images/white-logo.png"}
                    layout="responsive"
                    width={"200"}
                    height={"41"}
                    className="img-fluid"
                    alt="logo cloud funding"
                  />
              }
            </a>
          </Link>
        </div>
        <div className="">
          {
            !component ? <Link href="#" passHref>
              <a>
                <Button
                  classStyle={"bg-white text-black rounded-pill text-bodoni"}
                  variant={"btn-white"}
                >
                  Your Delegation
                </Button>
              </a>
            </Link> : component
          }
        </div>
      </div>
    </nav>
  );
};

export default Nav;
