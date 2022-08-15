import React from "react";
import Link from "next/link";
const SectionsTwo = () => {
  return (
    <ul className="list-unstyled">
      <li>About</li>
      <li className="mt-2">
        <Link href="#">
          <a className="text-decoration-none text-black">About us</a>
        </Link>
      </li>
      <li className="mt-1">
        <Link href="#">
          <a className="text-decoration-none text-black">Careers</a>
        </Link>
      </li>
      <li className="mt-1">
        <Link href="#">
          <a className="text-decoration-none text-black">Blogs</a>
        </Link>
      </li>
      <li className="mt-1">
        <Link href="#">
          <a className="text-decoration-none text-black">Contacts</a>
        </Link>
      </li>
      <li className="mt-1">
        <Link href="/faq">
          <a className="text-decoration-none text-black">FAQ</a>
        </Link>
      </li>
    </ul>
  );
};

export default SectionsTwo;
