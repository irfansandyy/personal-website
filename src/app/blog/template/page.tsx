import BlogFooter from "@components/BlogFooter";
import BlogHeader from "@components/BlogHeader";
import CodeBlock from "@/components/CodeBlock";
import * as CN from "@components/BlogConstants";
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Blogs",
  description: "Irfan Sandy's personal blogs"
};

export default function Template() {
  return (
    <div id="top" className={CN.BLOGTOP}>
      <BlogHeader date="28 January 2006" readTime="5" title="Template Page" description="This is a template page, nothing to see here." imageLink="/fallback/fallback-cover.jpg" />
      <div className={CN.BLOGDIV}>
        <hr className={CN.BLOGHR}></hr>
        <div className={CN.BLOGCONTENTS}>
          <p className={CN.BLOGP + CN.BLOGCODE}>
            <strong>Ringkasan:</strong> Program ini <code>menghitung luas dan keliling</code> berbagai bentuk geometri.
          </p>
          <Image src="/fallback/fallback-cover.jpg" alt="Fallback Image" width={500} height={300} />
          <CodeBlock languageItem="cpp" codeItems={`#include <stdio.h>
int main() {
  const float pi = 3.14159f;
  float base;
  float base1;
  float base2;
  float height;
  float side_length;
  float radius;
}`} file="math.cpp" />
        </div>
        <hr className={CN.BLOGHR}></hr>
      </div>
      <BlogFooter />
    </div>
  )
}