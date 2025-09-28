import BlogFooter from "@components/BlogFooter";
import BlogHeader from "@components/BlogHeader";
import * as CN from "@components/BlogConstants";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Aplikasi Sistem Akademik",
  description: "Membuat aplikasi sistem akademik dengan Java dari struktur hingga implementasinya"
};

export default function Template() {
  return (
    <div id="top" className={CN.BLOGTOP}>
      <BlogHeader date="29 September 2025" readTime="20" title="Aplikasi Sistem Akademik dengan Java" description="Membuat aplikasi sistem akademik menggunakan Java mulai dari struktur hingga implementasinya" imageLink="/blog/aplikasi-sistem-akademik/blog-cover.jpg" />
      <div className={CN.BLOGDIV}>
        <hr className={CN.BLOGHR}></hr>
        <div className={CN.BLOGCONTENTS}>
          <p className={CN.BLOGP + CN.BLOGCODE}>
          </p>
        </div>
        <hr className={CN.BLOGHR}></hr>
      </div>
      <BlogFooter />
    </div>
  )
}