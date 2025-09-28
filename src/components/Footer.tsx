import SocialLinks from "./SocialLinks";

export default function Footer() {
  return (
    <footer className="pb-4 w-full flex flex-col items-center gap-4">
      <hr className="border-t-2 text-background-accent max-w-[75rem] w-full"></hr>
      <div className="w-full flex flex-col items-center gap-1 md:gap-2 md:justify-between max-w-[75rem] md:flex-row px-8 lg:px-0">
        <h2 className="text-xl font-medium text-secondary-text">Copyright © 2025 Irfan Sandy</h2>
        <SocialLinks width={30} height={30} className="text-secondary-text" />
      </div>
    </footer>
  );
}