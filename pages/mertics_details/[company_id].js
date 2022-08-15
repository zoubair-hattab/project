import React from "react";
import Title from "@/components/title";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Image from "next/image";

const Mertics = () => {
  return (
    <>
      <Title pageName={"Company Name"} />
      <Navbar />
      <div className="py-3">
        <div className="container">
          <div className="row">
            <div className="col-md-4 text-center">
              <Image
                src="/images/sta_palceholder_1.jpg"
                alt="Statistic Placeholder Image"
                width={"250"}
                height={"250"}
              />
            </div>
            <div className="col-md-8">
              <p className="text-bodoni d-flex justify-content-center align-items-center h-100">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                eleifend malesuada tell us et eleifend. Sed non scelerisque
                turpis. Etiam non diam leo. Donec feugiat interdum velit, sit
                amet vulputate leo facilisis vel. Suspendisse potenti. tincidunt
                vel leo. Integer varius, eget cursusipsum nulla ac ipsum.
              </p>
            </div>
          </div>

          <div className="row">
            <div className="col-md-4 text-center">
              <Image
                src="/images/sta_palceholder_1.jpg"
                alt="Statistic Placeholder Image"
                width={"250"}
                height={"250"}
              />
            </div>
            <div className="col-md-8">
              <p className="text-bodoni d-flex justify-content-center align-items-center h-100">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                eleifend malesuada tell us et eleifend. Sed non scelerisque
                turpis. Etiam non diam leo. Donec feugiat interdum velit, sit
                amet vulputate leo facilisis vel. Suspendisse potenti. tincidunt
                vel leo. Integer varius, eget cursusipsum nulla ipsum.
              </p>
            </div>
          </div>

          <div className="row">
            <div className="col-md-4 text-center">
              <Image
                src="/images/sta_palceholder_2.jpg"
                alt="Statistic Placeholder Image"
                width={"350"}
                height={"250"}
              />
            </div>
            <div className="col-md-8">
              <p className="text-bodoni d-flex justify-content-center align-items-center h-100">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                eleifend malesuada tell us et eleifend. Sed non scelerisque
                turpis. Etiam non diam leo. Donec feugiat interdum velit, sit
                amet vulputate leo facilisis vel. Suspendisse potenti. tincidunt
                vel leo. Integer varius, eget cursusipsum nulla ac ipsum.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Mertics;


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

// export async function getStaticProps(context) {
//   const response = await fetch("https://jsonplaceholder.typicode.com/users")
//   const data = await response.json();
//   return {
//     props: {
//       data
//     },
//   }
// }