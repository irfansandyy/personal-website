import BlogCard from "@components/BlogCard";
import BlogFooter from "@components/BlogFooter";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blogs",
  description: "Irfan Sandy's personal blogs",
  icons: "/web-icon.png"
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
        <BlogCard href="/blog/word-of-zuul" date="27 October 2025" readTime="20" title="Word of Zuul" description="Membuat sebuah game petualangan berbasis teks sederhana menggunakan bahasa pemrograman java" imageLink="/blog/word-of-zuul/blog-cover.jpeg" />
        <hr className="border-t-2 border-background-accent max-w-[62.5rem] w-full"></hr>
        <BlogCard href="/blog/snack-vending-machine" date="14 October 2025" readTime="15" title="Membuat Snack Vending Machine Menggunakan Java" description="Vending Machine yang Bisa Menambah, Menyimpan, dan Menghapus Pesanan. Dan Bisa Memproses Pembayaran" imageLink="/blog/snack-vending-machine/blog-cover.webp" />
        <hr className="border-t-2 border-background-accent max-w-[62.5rem] w-full"></hr>
        <BlogCard href="/blog/tech-support-system" date="13 October 2025" readTime="12" title="Membuat Tech Support System dengan Library" description="Membuat Tech Support System Menggunakan Library yang Tersedia di Java" imageLink="/blog/tech-support-system/blog-cover.jpg" />
        <hr className="border-t-2 border-background-accent max-w-[62.5rem] w-full"></hr>
        <BlogCard href="/blog/latihan-object-grouping" date="06 October 2025" readTime="10" title="Latihan Object Grouping dengan Java" description="Membuat aplikasi to do list menggunakan Java untuk berlatih Object Grouping" imageLink="/blog/latihan-object-grouping/blog-cover.png" />
        <hr className="border-t-2 border-background-accent max-w-[62.5rem] w-full"></hr>
        <BlogCard href="/blog/aplikasi-sistem-akademik" date="29 September 2025" readTime="20" title="Aplikasi Sistem Akademik dengan Java" description="Membuat aplikasi sistem akademik menggunakan Java mulai dari struktur hingga implementasinya" imageLink="/blog/aplikasi-sistem-akademik/blog-cover.jpg" />
        <hr className="border-t-2 border-background-accent max-w-[62.5rem] w-full"></hr>
        <BlogCard href="/blog/clock-display-java" date="16 September 2025" readTime="16" title="Clock Display Menggunakan Java" description="Membuat display clock lengkap beserta tanggal dan suhu menggunakan java" imageLink="/blog/clock-display-java/blog-cover.jpeg" />
        <hr className="border-t-2 border-background-accent max-w-[62.5rem] w-full"></hr>
        <BlogCard href="/blog/project-ticket-machine" date="9 September 2025" readTime="12" title="Proyek Ticket Machine dengan Java" description="Membuat sebuah Ticket Machine simpel dengan menggunakan Java" imageLink="/blog/project-ticket-machine/blog-cover.jpg" />
        <hr className="border-t-2 border-background-accent max-w-[62.5rem] w-full"></hr>
        <BlogCard href="/blog/meningkatkan-skill-typewriting" date="2 September 2025" readTime="6" title="Meningkatkan Skill Typewriting" description="Latihan meningkatkan skill typewriting dengan menggunakan typing club" imageLink="/blog/meningkatkan-skill-typewriting/blog-cover.png" />
        <hr className="border-t-2 border-background-accent w-full"></hr>
      </div>
      <BlogFooter isBlog={false}/>
    </div>
  )
}