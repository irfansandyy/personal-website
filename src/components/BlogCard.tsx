import Image from "next/image";
import Link from "next/link";

type blogProps = {
  date: string;
  readTime: string;
  title: string;
  description: string;
  imageLink: string;
	href: string;
};

export default function BlogCard( { date, readTime, title, description, imageLink, href } : blogProps ) {
  return (
    <Link href={href} className="relative z-0 group flex flex-col-reverse text-center gap-4 md:text-start md:flex-row md:gap-[2.8125rem] items-center justify-center rounded-2xl md:hover:scale-105 transition-transform transition-color duration-300">
			<div className="pointer-events-none absolute inset-0 -z-10 before:absolute before:-inset-2 md:before:-inset-3 before:rounded-2xl before:bg-card-hover before:opacity-0 group-hover:before:opacity-100 before:transition-opacity before:duration-300" />
			<div className="flex flex-col items-center md:items-start">
				<div className="flex flex-row gap-4 *:text-secondary-text text-base *:md:text-xl font-normal mb-4 md:mb-5">
					<span>{date}</span>
					<span>•</span>
					<span>{readTime} min read</span>
				</div>
				<h2 className="text-xl md:text-2xl font-bold mb-2">{title}</h2>
				<p className="text-base md:text-xl font-medium text-secondary-text max-w-[37.5rem] w-full leading-5 md:leading-normal">{description}</p>
			</div>
			<div>
				<Image src={imageLink} alt={title} width={240} height={160} className="rounded-2xl"/>
			</div>
		</Link>
  )
}