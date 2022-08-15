import Title from "@/components/title";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Midnav from "@/components/midnav";
import React from "react";

const Home = () => {
  return (
    <>
      <Title pageName={"Home"} />
      <Navbar />
      <Midnav />
      <Footer />
    </>
  );
};

export default Home;


// export async function getStaticProps() {
//   const response = await fetch("https://jsonplaceholder.typicode.com/users")
//   const data = await response.json();
//   return {
//     props: {
//       data
//     },
//   }
// }