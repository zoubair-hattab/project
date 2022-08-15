import React from "react";
import Link from "next/link";
const SectionThree = () => {
  return (
    <ul className="list-unstyled">
      <li>Help</li>
      <li className="mt-2">
        <Link href="#">
          <a className="text-decoration-none text-black">Our rules</a>
        </Link>
      </li>
      <li className="mt-1">
        <Link href="#">
          <a className="text-decoration-none text-black">Sefty</a>
        </Link>
      </li>
      <li className="mt-1">
        <Link href="#">
          <a className="text-decoration-none text-black">Support</a>
        </Link>
      </li>
      <li className="mt-1">
        <Link href="#">
          <a className="text-decoration-none text-black">Term of use</a>
        </Link>
      </li>
      <li className="mt-1">
        <Link href="#">
          <a className="text-decoration-none text-black">Privacy Policy</a>
        </Link>
      </li>
    </ul>
  );
};

export default SectionThree;
