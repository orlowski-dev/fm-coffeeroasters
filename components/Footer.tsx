import Image from "next/image";
import Link from "next/link";
import { ReactElement } from "react";
import { IconBaseProps } from "react-icons";
import { FaFacebookSquare, FaTwitter, FaInstagram } from "react-icons/fa";

const links: { loc: string; icon: ReactElement<IconBaseProps> }[] = [
  { loc: "/", icon: <FaFacebookSquare /> },
  { loc: "/", icon: <FaTwitter /> },
  { loc: "/", icon: <FaInstagram /> },
];

const Footer = () => {
  return (
    <footer className="max-w-[1280px] mx-auto my-16">
      <div className="mx-6 px-6 py-14 bg-grey-blue flex flex-col items-center gap-14 lg:flex-row justify-between">
        <Image src="/brand/logo-white.svg" alt="logo" width={217} height={24} />
        <ul className="text-center flex flex-col gap-4 md:flex-row select-none">
          <li>
            <Link
              href="/"
              className="font-barlow text-nav-menu text-grey opacity-80 uppercase hover:text-white hover:opacity-100 transition-colors"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/"
              className="font-barlow text-nav-menu text-grey opacity-80 uppercase hover:text-white hover:opacity-100 transition-colors"
            >
              About us
            </Link>
          </li>
          <li>
            <Link
              href="/"
              className="font-barlow text-nav-menu text-grey opacity-80 uppercase hover:text-white hover:opacity-100 transition-colors"
            >
              Create your plan
            </Link>
          </li>
        </ul>
        <div className="flex gap-6 items-center">
          {links.map((link, index: number) => (
            <Link
              key={index}
              href={link.loc}
              target="_blank"
              className="text-[1.5rem] text-white transition-colors hover:text-pale-orange"
            >
              {link.icon}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
