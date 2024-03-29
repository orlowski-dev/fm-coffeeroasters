import Image from "next/image";
import Link from "next/link";
import MobileNav from "./MobileNav";

const AppHeader = () => {
  return (
    <header className="max-w-[1280px] mx-auto  bg-white p-6 flex items-center justify-between sticky top-0 left-0 z-20">
      <Link href="/">
        <Image
          src="/brand/logo.svg"
          alt="logo"
          width={256}
          height={26}
          priority
          className="w-[163px] h-[18px] md:w-[256px] md:h-[26px]"
        />
      </Link>
      <MobileNav />
      <nav className="hidden md:block">
        <ul className="flex gap-7 text-grey select-none">
          <li>
            <Link
              href="/"
              className="font-berlow text-nav-menu uppercase hover:text-dark-grey-blue transition-colors"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/about-us"
              className="font-berlow text-nav-menu uppercase hover:text-dark-grey-blue transition-colors"
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              href="/create-your-plan"
              className="font-berlow text-nav-menu uppercase hover:text-dark-grey-blue transition-colors"
            >
              Create your plan
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default AppHeader;
