"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useLayoutEffect, useState } from "react";
import { motion } from "framer-motion";
import { default as menuIcon } from "@/assets/icons/icon-hamburger.svg";
import { default as closeMenuIcon } from "@/assets/icons/icon-close.svg";

const animVariants = {
  open: {
    display: "block",
    opacity: 1,
    transition: {
      duration: 0.1,
    },
  },
  closed: {
    opacity: 0,
    transition: {
      duration: 0.1,
    },
    transitionEnd: {
      display: "none",
    },
  },
};

const listVariants = {
  open: {
    y: "0",
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.2,
    },
  },
  closed: {
    y: "-100px",
    opacity: 0,
    scale: 0.5,
    transition: {
      duration: 0.2,
    },
  },
};

const MobileNav = () => {
  const [menuVisible, setMenuVisible] = useState(false);

  useLayoutEffect(() => {
    const onScreenResize = () => {
      console.log("resize");
      if (window.innerWidth > 767) {
        setMenuVisible(false);
      }
    };
    window.addEventListener("resize", onScreenResize);

    return () => window.removeEventListener("resize", onScreenResize);
  }, []);

  useEffect(() => {
    if (menuVisible) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [menuVisible]);

  return (
    <nav className="flex items-center md:hidden">
      <button onClick={() => setMenuVisible((prev) => !prev)}>
        <Image
          src={menuVisible ? closeMenuIcon : menuIcon}
          alt="menu icon"
          width={16}
          height={16}
        />
      </button>
      <motion.div
        className="absolute w-[100%] h-mobile-menu z-10 left-0 top-[4.125rem] bg-gradient-to-b from-white via-white to-transparent"
        initial={{ display: "none" }}
        variants={animVariants}
        animate={menuVisible ? "open" : "closed"}
      >
        <motion.ul
          className="flex items-center flex-col gap-7 px-6 py-10 text-dark-grey-blue text-center"
          variants={listVariants}
          animate={menuVisible ? "open" : "closed"}
          initial={{ y: "-100px" }}
          onClick={() => setMenuVisible(false)}
        >
          <li>
            <Link href="/" className="font-fraunces text-h4">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about-us" className="font-fraunces text-h4">
              About Us
            </Link>
          </li>
          <li>
            <Link href="/create-your plan" className="font-fraunces text-h4">
              Create Your Plan
            </Link>
          </li>
        </motion.ul>
      </motion.div>
    </nav>
  );
};

export default MobileNav;
