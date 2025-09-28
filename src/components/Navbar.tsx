"use client"

import NavbarText from "./NavbarText";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const pathname = usePathname();
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    let lastY = window.scrollY;

    const onScroll = () => {
      const y = window.scrollY;
      const delta = Math.abs(y - lastY);
      if (delta < 5) return;

      if (y <= 10) {
        setHidden(false);
      } else if (y > lastY) {
        setHidden(true);
      } else {
        setHidden(false);
      }

      lastY = y;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`fixed left-0 right-0 top-4 md:top-8 mx-auto w-[90%] flex flex-row justify-center gap-1.5 pt-1 pb-1 px-2 bg-navbar rounded-xl max-w-max max-h-max transition-transform duration-300 ease-out will-change-transform ${hidden ? "-translate-y-[150%]" : "translate-y-0"}`}>
      <Link href="/">
        <NavbarText isActive={pathname == "/"} text="Home" />
      </Link>
      <Link href="/blog">
        <NavbarText isActive={pathname != "/"} text="Blog" />
      </Link>
    </header>
  );
}