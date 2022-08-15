import Link from "next/link";
import Image from "next/image";
import Button from "@/components/button";
import CountDown from "@/components/countDown";
import Progressbar from "@/components/progress_bar";
import styles from "@/styles/show_component_ongoing.module.css";

const ShowComponentOngoing = ({ status = 2 }) => {
  return (
    <div className="rounded-20 bg-white my-3 py-3">
      <div className="row">
        <div className="col-md-4 col-lg-3">
          <div className="d-flex justify-content-center align-items-center text-center h-100">
            <div>
              <Link href={`/company_details/1`} passHref>
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

              <Link href={`/company_details/1`}>
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
        <div className={`col-md-8 col-lg-9 pe-lg-5 pe-md-5 ${styles.padding10}`}>
          <div className={`${styles.flexSmallReverse}`}>
            <div className={`${styles.row} d-flex justify-content-between`}>
              <div className={`${styles.colAuto} ${styles.displayNone}`}>
                <p className="h4 text-uppercase text-bodoni">Compaign Title</p>
                <p className="mt-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididut ut labore et dolore magna aliqua.
                </p>
              </div>
              <div className={`${styles.colAuto}`}>
                {status == 3 ? (
                  <Link href={`/mertics_details/1`} passHref>
                    <a>
                      <Button
                        classStyle={`${status == 1 ? "bg-mainly-red text-white" : "bg-gray88"
                          } rounded-pill text-bodoni d-block my-2 mx-auto`}
                      >
                        View Mertics
                      </Button>
                    </a>
                  </Link>
                ) : (
                  <Button
                    classStyle={`${status == 1 ? "bg-mainly-red text-white" : "bg-gray88"
                      } rounded-pill text-bodoni d-block my-2 mx-auto`}
                  >
                    Contribute
                  </Button>
                )}
              </div>
            </div>



            <div className="mt-lg-4 mt-sm-2">
              <div className={`${styles.displayUnset} `}>
                <p className="h4 text-uppercase text-bodoni text-center">Compaign Title</p>
                <p className="my-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididut ut labore et dolore magna aliqua.
                </p>
              </div>
              <div className={`${styles.flexSmallReverse} d-flex justify-content-between`}>

                <div
                  className={`text-bodoni rounded-2 ${styles.width25} p-2 mt-2 me-lg-3 me-md-lg mx-auto text-center ${status == 1 ? "bg-mainly-red text-white" : "bg-gray88"
                    }`}
                >
                  <p>Compaign ends in</p>
                  <CountDown />
                </div>

                <div className={`${styles.width75}`}>
                  <Progressbar />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowComponentOngoing;


{/* <div className="mb-5 bg-white py-5 rounded-20">
<div className="row">
  <div className="col-md-3">
    <div className="text-center">
      <Link href={`/company_details/1`} passHref>
        <a rel="noopener noreferrer" traget="_blank">
          <Image
            src={"/images/placeholder_image.jpg"}
            alt="image-placeholder"
            className="rounded-circle d-block"  
            width={"200"}
            height={"200"}
          />
        </a>
      </Link>

      <Link href={`/company_details/1`}>
        <a className={`cf-grey65 d-block href-hover`}>Learn more</a>
      </Link>
    </div>
  </div>

  <div className="col-md-8">

    
</div>
</div> */}