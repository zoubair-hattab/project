import React from "react";
import Link from "next/link";
const SectionOne = () => {
  return (
    <ul className="list-unstyled">
      <li>Explore Compaigns</li>
      <li className="mt-2">
        <Link href="#">
          <a className="text-decoration-none text-black">1st Category</a>
        </Link>
      </li>
      <li className="mt-1">
        <Link href="#">
          <a className="text-decoration-none text-black">2nd Category</a>
        </Link>
      </li>
      <li className="mt-1">
        <Link href="#">
          <a className="text-decoration-none text-black">3th Category</a>
        </Link>
      </li>
      <li className="mt-1">
        <Link href="#">
          <a className="text-decoration-none text-black">4th Category</a>
        </Link>
      </li>
      <li className="mt-1">
        <Link href="#">
          <a className="text-decoration-none text-black">5th Category</a>
        </Link>
      </li>
    </ul>
  );
};

export default SectionOne;
