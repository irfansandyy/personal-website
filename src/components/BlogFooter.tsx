"use client"

import Button from "./Button";
import { usePathname } from "next/navigation";

export default function BlogFooter( {isBlog = true} : {isBlog?: boolean} ) {
  const pathname = usePathname();

  return (
    <div className="flex flex-col gap-4 mt-8 mb-12 md:gap-8 md:mt-12 md:mb-16 items-center">
      <h3 className="text-2xl font-medium text-secondary-text text-center">Reached The End of Blog</h3>
      <div className="flex flex-row gap-4 md:gap-16">
        <Button text={isBlog ? "To Blogs" : "Home"} href={isBlog ? "/blog" : "/"} arrow="left" />
        <Button text={isBlog ? "To Top" : "Back to Top"} href={`${pathname}#top`} arrow="up" />
      </div>
    </div>
  );
}