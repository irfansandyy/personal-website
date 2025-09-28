import BlogFooter from "@components/BlogFooter";
import BlogHeader from "@components/BlogHeader";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blogs",
  description: "Irfan Sandy's personal blogs"
};

export default function Template() {
  return (
    <div>
      <BlogHeader date="1 January 1970" readTime="10" title="Lorem Ipsum Dolor Sit Amet" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer cursus arcu in iaculis laoreet. Sed convallis, justo ut scelerisque congue, ipsum risus mollis lectus" imageLink="/blog/blog1/blog-cover.png" />
      <BlogFooter />
    </div>
  )
}