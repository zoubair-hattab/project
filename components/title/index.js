import React from "react";
import Head from "next/head";
const Title = ({ pageName }) => {
  return (
    <Head>
      <title>{!pageName ? "CloudFunding" : `CloudFunding | ${pageName}`}</title>
    </Head>
  );
};

export default Title;
