import Image from "next/image";

export default function BlogHeader( { date, readTime, title, description, imageLink } : { date: string; readTime: string; title: string; description: string; imageLink: string; } ) {
  return (
    <div className="flex flex-col gap-8 max-w-[66.5625rem] w-full">
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -z-10 hidden md:block" style={{ transform: 'translateY(-480px)' }}>
        <div className="relative" style={{ width: '1065px', height: '710px' }}>
          <Image src={imageLink} alt={title} fill className="block object-cover" priority sizes="1065px" />
          <div className="absolute inset-0" style={{  background: 'linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 100%)' }}/>
        </div>
      </div>
      <div className="mt-[6rem] md:mt-[15rem] flex flex-col gap-2 w-full text-center md:text-start">
        <h1 className="text-3xl md:text-5xl font-bold">{title}</h1>
        <p className="text-base md:text-xl font-medium text-secondary-text">{description}</p>
      </div>
      <div className="flex flex-row justify-between items-center w-full">
        <div className="flex flex-row gap-4">
          <Image src="/home/profile.png" alt="Profile" width={75} height={76} className="rounded-full w-[56px] h-[56px] md:w-[75px] md:h-[76px]" />
          <div className="flex flex-col gap-1 justify-center w-full">
            <h3 className="text-xl md:text-2xl font-semibold md:font-bold">Irfan Sandy</h3>
            <p className="text-base md:text-xl font-medium text-secondary-text">{date}</p>
          </div>
        </div>
        <p className="text-base md:text-xl font-normal text-secondary-text">{readTime} min read</p>
      </div>
    </div>
  )
}