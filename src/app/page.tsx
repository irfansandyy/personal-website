import Button from "@/components/Button";
import Image from "next/image";
import SocialLinks from "@/components/SocialLinks";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col mt-56 md:mt-68 mx-6 md:mx-0">
      <div className="w-full md:max-w-[67.5rem] flex flex-col md:flex-row gap-60 md:gap-36 justify-between items-center">
        <div className="flex flex-col md:flex-1 [&_span]:text-primary w-full gap-2 md:gap-6 items-center md:items-start text-center md:text-start">
          <h1 className="self-stretch text-5xl md:text-[4rem] font-bold"><span>Hi</span>, I&apos;m Sandy</h1>
          <p className="text-xl md:text-2xl font-medium max-w-xl md:max-w-none">
            I&apos;m a <span>lifelong learner and explorer</span>, working with <span>embedded system</span>, and currently learning to <span>design and create</span> the perfect website
          </p>
          <div className="flex flex-row gap-4 md:gap-16 pt-12 md:pt-[5.625rem]">
            <Button arrow="down" text="About Me" href="#about" />
            <Button arrow="right" text="My Blogs" href="/blog" />
          </div>
          <div className="pt-4 md:pt-8">
            <SocialLinks width={40} height={40} className="text-background-accent" />
          </div>
        </div>
        <div className="flex flex-col items-center max-w-[21.5625rem] w-full h-[28.25rem] border-2 border-solid border-background-accent bg-background transition-all duration-300 ease-in-out hover:transform hover:-translate-y-2 hover:shadow-xl hover:shadow-background-accent hover:border-background-accent relative before:absolute before:inset-0 before:bg-gradient-to-r before:from-background-accent/30 before:via-background-accent/50 before:to-background-accent/30 before:rounded-sm before:blur-md before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-300 before:-z-10 before:scale-110">
          <Image src="/home/profile.png" alt="Profile Picture" width={305} height={309} className="pt-[1.875rem] pb-3.5" />
          <div className="flex flex-row items-center gap-4 pb-3">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none" className="transition-transform duration-300 ease-in-out hover:scale-110">
              <path d="M17.6 17.42C20.805 16.695 23.2 13.825 23.2 10.4C23.2 6.42501 19.975 3.20001 16 3.20001C12.025 3.20001 8.80005 6.42501 8.80005 10.4C8.80005 13.825 11.195 16.695 14.4 17.42V27.2C14.4 28.085 15.115 28.8 16 28.8C16.885 28.8 17.6 28.085 17.6 27.2V17.42ZM16.4 8.00001C14.855 8.00001 13.6 9.25501 13.6 10.8C13.6 11.465 13.065 12 12.4 12C11.735 12 11.2 11.465 11.2 10.8C11.2 7.93001 13.53 5.60001 16.4 5.60001C17.065 5.60001 17.6 6.13501 17.6 6.80001C17.6 7.46501 17.065 8.00001 16.4 8.00001Z" fill="#E9D015"/>
            </svg>
          <h2 className="text-xl font-normal">Surabaya, Indonesia</h2>
          </div>
          <div className="flex flex-row items-center gap-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none" className="transition-transform duration-300 ease-in-out hover:scale-110">
              <path d="M4.0001 12.99L14.4601 17.295C14.9501 17.495 15.4701 17.6 16.0001 17.6C16.5301 17.6 17.0501 17.495 17.5401 17.295L29.6601 12.305C30.1101 12.12 30.4001 11.685 30.4001 11.2C30.4001 10.715 30.1101 10.28 29.6601 10.095L17.5401 5.10499C17.0501 4.90499 16.5301 4.79999 16.0001 4.79999C15.4701 4.79999 14.9501 4.90499 14.4601 5.10499L2.3401 10.095C1.8901 10.28 1.6001 10.715 1.6001 11.2V26C1.6001 26.665 2.1351 27.2 2.8001 27.2C3.4651 27.2 4.0001 26.665 4.0001 26V12.99ZM6.4001 16.575V22.4C6.4001 25.05 10.7001 27.2 16.0001 27.2C21.3001 27.2 25.6001 25.05 25.6001 22.4V16.57L18.4551 19.515C17.6751 19.835 16.8451 20 16.0001 20C15.1551 20 14.3251 19.835 13.5451 19.515L6.4001 16.57V16.575Z" fill="#E9D015"/>
            </svg>
          <h2 className="text-xl font-normal">Computer Science @ ITS</h2>
        </div>
      </div>
    </div>
    <div id="about" className="flex flex-row gap-12 items-center justify-center mt-[16rem] md:mt-[23.5rem] mb-[12rem] md:mb-[26.5rem]">
      <Image src="/home/profile.png" alt="Profile Picture" width={305} height={309} className="hidden md:block rounded-[16rem]" />
      <div className="flex flex-col gap-[2.625rem] [&_span]:text-primary text-center md:text-start">
        <h2 className="text-2xl md:text-[2rem] font-bold self-stretch">A <span>lifelong learner</span>, driven by <span>passion</span> and <span>purpose</span></h2>
        <p className="text-xl md:text-2xl font-medium self-stretch max-w-[44.125rem] text-secondary-text">I&apos;m a Computer Science student at ITS with a strong interest in technology, organizations, and community service. I enjoy working in teams, adapting to challenges, and solving problems with efficiency and detail. While I sometimes struggle with confidence and overthinking, I&apos;m passionate about entrepreneurship, robotics, automotive, and programming.</p>
      </div>
    </div>
  </div>
  );
}
