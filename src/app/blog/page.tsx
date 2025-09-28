import BlogCard from "@components/BlogCard";
import BlogFooter from "@components/BlogFooter";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blogs",
  description: "Irfan Sandy's personal blogs"
};

export default function Blog() {
  return (
    <div id="top" className="flex min-h-screen flex-col mt-28 md:mt-32 mx-6 md:mx-0">
      <div className="flex flex-col gap-4 md:gap-6 [&_span]:text-primary text-center items-center mb-12 md:mb-24">
        <h1 className="text-5xl md:text-[4rem] font-bold">My <span>Blogs</span></h1>
        <p className="text-2xl md:text-[1.75rem] font-bold max-w-[37.5rem] w-full leading-7 md:leading-8">Place where I <span>post</span> my <span>assignments</span>, what I&apos;m <span>up to</span>, or about my <span>daily life</span></p>
      </div>
      <div className="flex flex-col w-full max-w-[75rem] md:w-[75rem] gap-8 md:gap-12 items-center">
        <hr className="border-t-2 border-background-accent w-full"></hr>
        <BlogCard href="/blog/template" date="1 January 1970" readTime="10" title="Lorem ipsum dolor sit amet" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer cursus arcu in iaculis laoreet. Sed convallis, justo ut scelerisque congue, ipsum risus mollis lectus" imageLink="/blog/blog1/blog-cover.png" />
        <hr className="border-t-2 border-background-accent max-w-[62.5rem] w-full"></hr>
        <BlogCard href="/" date="1 January 1970" readTime="10" title="Lorem ipsum dolor sit amet" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer cursus arcu in iaculis laoreet. Sed convallis, justo ut scelerisque congue, ipsum risus mollis lectus" imageLink="/blog/blog1/blog-cover.png" />
        <hr className="border-t-2 border-background-accent max-w-[62.5rem] w-full"></hr>
        <BlogCard href="/" date="1 January 1970" readTime="10" title="Lorem ipsum dolor sit amet" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer cursus arcu in iaculis laoreet. Sed convallis, justo ut scelerisque congue, ipsum risus mollis lectus" imageLink="/blog/blog1/blog-cover.png" />
        <hr className="border-t-2 border-background-accent max-w-[62.5rem] w-full"></hr>
        <BlogCard href="/" date="1 January 1970" readTime="10" title="Lorem ipsum dolor sit amet" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer cursus arcu in iaculis laoreet. Sed convallis, justo ut scelerisque congue, ipsum risus mollis lectus" imageLink="/blog/blog1/blog-cover.png" />
        <hr className="border-t-2 border-background-accent max-w-[62.5rem] w-full"></hr>
        <BlogCard href="/" date="1 January 1970" readTime="10" title="Lorem ipsum dolor sit amet" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer cursus arcu in iaculis laoreet. Sed convallis, justo ut scelerisque congue, ipsum risus mollis lectus" imageLink="/blog/blog1/blog-cover.png" />
        <hr className="border-t-2 border-background-accent w-full"></hr>
      </div>
      <BlogFooter isBlog={false}/>
    </div>
  )
}