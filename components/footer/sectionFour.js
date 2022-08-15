import React from "react";
import Link from "next/link";
import { BsFacebook, BsTelegram } from "react-icons/bs";
import {
  AiOutlineInstagram,
  AiOutlineTwitter,
  AiFillYoutube,
} from "react-icons/ai";

const SectionFour = () => {
  return (
    <ul className="list-unstyled">
      <li className="text-bodani">Join Our Telegram Cummunity</li>
      <li className="mt-2">
        <span className="me-2">
          <BsTelegram fontSize={25} />
        </span>
        <span>https://t.me/linkexample</span>
      </li>
      <li className="mt-4">Socials</li>
      <li>
        <ul className={`list-unstyled d-inline-flex mt-2`}>
          <li>
            <Link href="#" passHref>
              <a className="text-black me-2">
                <BsFacebook fontSize={"22"} />
              </a>
            </Link>
          </li>
          <li>
            <Link href="#" passHref>
              <a className="text-black me-2">
                <AiOutlineInstagram fontSize={"24"} />
              </a>
            </Link>
          </li>
          <li>
            <Link href="#" passHref>
              <a className="text-black me-2">
                <AiOutlineTwitter fontSize={"24"} />
              </a>
            </Link>
          </li>
          <li>
            <Link href="#" passHref>
              <a className="text-black me-2">
                <AiFillYoutube fontSize={"24"} />
              </a>
            </Link>
          </li>
        </ul>
      </li>
    </ul>
  );
};

export default SectionFour;
