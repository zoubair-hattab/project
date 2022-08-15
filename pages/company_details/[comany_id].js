import React from "react";
import Title from "@/components/title";
import Nav from "@/components/nav";
import Footer from "@/components/footer";
import ProgressBar from "@/components/progress_bar";
import CountDown from "@/components/countDown";
import DetailsCompanyEth from "@/components/details_company_eth";
import style from "@/styles/company_details.module.css";
const Details = () => {
  return (
    <>
      <Title pageName={"Company Name"} />
      <Nav />
      <div className=" py-3">
        <div className="container">
          <div className="h5 text-center text-bodoni">Compains’Name</div>
          <div className="d-flex justify-content-end my-3">
            <div className="text-bodoni text-white rounded-pill p-2 bg-gray5">
              Categorie
            </div>
          </div>
          <p className="text-bodoni">
            something about the compaign Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Nam eleifend malesuada tell us et eleifend. Sed non
            scelerisque turpis. Etiam non diam leo. Donec feugiat interdum
            velit, sit amet vulputate leo facilisis vel. Suspendisse potenti.
            tincidunt vel leo. Integer varius, eget cursusipsum nulla ac ipsum.
            Pellentesque habitant morbi tristique senectus et netus et malesuada
            fames ac turpis egestas. Ma
          </p>
          <div className="d-flex justify-content-center">
            <div className="w-75">
              <div className="my-3">
                <ProgressBar />
              </div>
              <div className="d-lg-flex d-md-flex justify-content-between">
                <div className="rounded-2 text-center text-bodoni bg-gray88  w-25 d-flex justify-content-center align-items-center">
                  <div>
                    <p>Compaign ends in</p>
                    <CountDown />
                  </div>
                </div>
                <DetailsCompanyEth />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="">
        <div className={`${style.progressCore} progress`}>
          <div
            className={`${style.bar} progress-bar`}
            role="progressbar"
            style={{ width: "25%" }}
            aria-valuenow="25"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>
        <div className="container">
          <div className="fw-bold text-bodoni mt-2">Project details</div>
        </div>
      </div>

      <div className="py-5 text-center">
        <div className="container w-75">
          <p className="text-bodoni">
            something about the compaign Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Nam eleifend malesuada tell us et eleifend. Sed non
            scelerisque turpis. Etiam non diam leo. Donec feugiat interdum
            velit, sit amet vulputate leo facilisis vel. Suspendisse potenti.
            tincidunt vel leo. Integer varius, eget cursusipsum nulla ac ipsum.
            Pellentesque habitant morbi tristique senectus et netus et malesuada
            fames ac turpis egestas. Ma
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Details;


// export async function getStaticPaths() {
//   const response = await fetch("https://jsonplaceholder.typicode.com/users")
//   const data = await response.json();
//   const params = data.map(d, () => {
//     return [
//       { params: { ... } }
//     ]
//   })
//   return {
//     paths: params,
//     fallback: true
//   };
// }

// export async function getStaticProps() {
//   const response = await fetch("https://jsonplaceholder.typicode.com/users")
//   const data = await response.json();
//   return {
//     props: {
//       data
//     },
//   }
// }


