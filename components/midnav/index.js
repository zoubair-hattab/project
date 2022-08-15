import React, { useState, useEffect, useRef } from "react";
import Upcoming from "@/components/midSection/upComing";
import Ongoing from "@/components/midSection/onGoing";
import Past from "@/components/midSection/past";
import Link from "next/link";
import styles from "@/styles/show_component.module.css"

import { GoThreeBars } from "react-icons/go"
const MidiSection = () => {
  const [link, setLink] = useState("upcoming");
  const [sticky, setSticky] = useState(false);
  const [screenWidth, setScreenWidth] = useState(0)
  const HandleNavigation = (componentName) => {
    setLink(componentName);
  };

  const midRef = useRef();

  useEffect(() => {
    document.addEventListener("scroll", function () {
      if (midRef.current != null) {
        if (scrollY >= midRef.current.offsetTop - 30) {
          setSticky(true);
        } else if (scrollY <= midRef.current.offsetTop - 30) {
          setSticky(false);
        } else {
          setSticky(false);
        }
      }
    });
    setScreenWidth(window.innerWidth)
    window.addEventListener("resize", () => {
      setScreenWidth(window.innerWidth)
    })
  }, [screenWidth]);
  return (
    <>
      <nav className={`${screenWidth <= 991.98 ? "" : `${sticky ? `${styles.fixed}` : ""}`} navbar navbar-expand-lg bg-white`}>
        <div className="container">
          <a className="navbar-brand" href="#"></a>
          <button className="navbar-toggler btn" type="button" data-bs-toggle="collapse"
            data-bs-target="#middleNavBar" aria-controls="middleNavBar"
            aria-expanded="false" aria-label="Toggle navigation">
            <GoThreeBars />
          </button>
          <div className="collapse navbar-collapse text-center" id="middleNavBar">
            <ul className="navbar-nav w-100">

              <div className="d-lg-flex">
                <li className="nav-item">
                  <a
                    className={`nav-link text-bodoni text-decoration-none me-5 cf-grey65 ${link == "upcoming" ? "text-black" : ""
                      }`}
                    onClick={() => HandleNavigation("upcoming")}
                  >
                    Upcoming
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className={`nav-link text-bodoni text-decoration-none me-5 cf-grey65 ${link == "ongoing" ? "text-black" : ""
                      }`}
                    onClick={() => HandleNavigation("ongoing")}
                  >
                    Ongoing
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className={`nav-link text-bodoni text-decoration-none me-5 cf-grey65 ${link == "past" ? "text-black" : ""
                      }`}
                    onClick={() => HandleNavigation("past")}
                  >
                    Past
                  </a>
                </li>
              </div>

              <div className="d-flex justify-content-lg-end w-100">
                <Link href="/faq">
                  <a className="text-bodoni text-black nav-link mx-auto">
                    What is CloudFunding?
                  </a>
                </Link>
              </div>

            </ul>
          </div>
        </div>
      </nav>


      <div className="container" ref={midRef}>
        {link == "upcoming" ? (
          <Upcoming />
        ) : link == "ongoing" ? (
          <Ongoing />
        ) : link == "past" ? (
          <Past />
        ) : (
          <Upcoming />
        )}
      </div>
    </>
  );
};

export default MidiSection;
