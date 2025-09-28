import BlogFooter from "@components/BlogFooter";
import BlogHeader from "@components/BlogHeader";
import CodeBlock from "@/components/CodeBlock";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blogs",
  description: "Irfan Sandy's personal blogs"
};

export default function Template() {
  return (
    <div id="top" className="flex min-h-screen flex-col mx-4 md:mx-0 items-center">
      <BlogHeader date="1 January 1970" readTime="10" title="Lorem Ipsum Dolor Sit Amet" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer cursus arcu in iaculis laoreet. Sed convallis, justo ut scelerisque congue, ipsum risus mollis lectus" imageLink="/blog/blog1/blog-cover.png" />
      <div className="flex flex-col gap-8 md:w-[75rem] w-full mt-8 items-center">
        <hr className="border-t-2 text-background-accent max-w-[75rem] w-full"></hr>
        <div className="max-w-[66.5625rem]">
          <p className="text-base md:text-xl font-normal text-secondary-text leading-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a enim neque. Quisque molestie odio et erat feugiat tincidunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus rhoncus at magna id pretium. In finibus ullamcorper eros sit amet ultrices. Suspendisse auctor est vitae pulvinar vestibulum. Aliquam molestie tincidunt tempus. Nulla cursus urna ac purus aliquam, imperdiet ornare tellus cursus. In at auctor tortor, quis blandit sapien. Praesent vestibulum cursus orci, sed aliquet ante laoreet vitae. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nulla nec massa eu augue maximus porttitor. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            <br/><br/>Nullam dignissim id est et tempus. Praesent sit amet tellus leo. Aliquam erat volutpat. Quisque elementum purus tortor, eu suscipit arcu mattis nec. Aenean id semper nulla. Cras imperdiet porttitor metus quis sagittis. Nullam non purus a risus accumsan viverra. Sed gravida facilisis leo in accumsan. Duis id accumsan velit. Praesent porta rutrum pretium. Proin orci neque, gravida eu rutrum id, tincidunt eget dui. Nunc varius, enim vitae mollis posuere, neque risus euismod libero, porttitor cursus dolor nisl quis ante. Quisque consequat venenatis justo, vel tempus turpis lobortis vitae. Nam aliquet elit eget magna pellentesque mollis. Phasellus nec sapien sit amet odio efficitur dignissim.
            <br/><br/>Donec sem metus, elementum et sapien in, sagittis pellentesque urna. Aenean hendrerit augue et urna aliquet, in tempus enim accumsan. Vestibulum vestibulum arcu nisl, eu blandit tellus malesuada a. Curabitur tempus nunc vehicula condimentum placerat. Vestibulum blandit sit amet felis eu ultrices. Cras efficitur nisl vitae quam laoreet, nec volutpat magna pellentesque. Suspendisse diam sapien, condimentum at erat ut, auctor semper magna. Aliquam ultrices egestas nunc id convallis. Integer facilisis turpis eu gravida placerat. Proin in feugiat lorem. Phasellus ut justo a magna pellentesque tincidunt. Sed viverra augue tortor, ac pretium odio maximus ac.
            <br/><br/>Vivamus non augue placerat, semper nisl non, condimentum sapien. Phasellus sapien purus, tempor nec mauris non, blandit dapibus magna. In interdum maximus sapien. Etiam varius sapien lobortis nisi molestie laoreet. Suspendisse aliquet eget est ut dignissim. Proin efficitur nisl vitae pharetra egestas. Duis sagittis ac lacus sit amet interdum. Nunc consequat ut dolor in fermentum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi iaculis dolor mauris, eget volutpat leo ornare vel. Vivamus vulputate facilisis nisl vel auctor. Praesent ornare posuere justo, a imperdiet justo bibendum ut. Phasellus imperdiet velit eu risus hendrerit sagittis. Nunc vitae tortor in lectus elementum sagittis. Curabitur scelerisque lectus id nisl facilisis, a maximus arcu vehicula. Donec faucibus a lacus ac cursus.
            <br/><br/>Etiam tincidunt bibendum laoreet. Phasellus dictum felis sit amet ullamcorper ornare. Sed et vulputate ligula. Quisque pellentesque auctor sapien eget feugiat. Mauris ante libero, pulvinar fringilla turpis vitae, mollis imperdiet augue. Suspendisse posuere velit arcu, sit amet luctus est tincidunt ut. Curabitur lacinia ex nec elit cursus, non pulvinar sapien blandit. Donec at sem eu velit condimentum rhoncus a et diam. Aliquam auctor mauris vitae leo lacinia, in ornare enim scelerisque. Aenean dolor leo, bibendum a mauris ut, bibendum tempus quam.
            <br/><br/>Curabitur a metus blandit magna faucibus pharetra. Quisque sollicitudin, erat id maximus hendrerit, diam arcu interdum erat, a finibus nulla ipsum vel magna. Aenean hendrerit cursus tellus, sit amet scelerisque quam suscipit sit amet. Donec congue purus ac enim congue dignissim. Cras non elementum diam, quis tempus metus. Aenean pellentesque augue orci, id molestie felis vestibulum eget. Phasellus interdum diam nisi, in auctor eros pellentesque sit amet. Nam ornare vulputate dui, eu scelerisque tellus. Nam urna felis, mollis at condimentum et, sagittis et erat. Mauris nisl risus, egestas a dapibus vel, volutpat non lacus. Pellentesque tempor est vestibulum, commodo ante et, pretium sem. Sed et velit a ex laoreet varius ut in dui.
          </p>
        </div>
        <CodeBlock languageItem="cpp" codeItems=
{`#include <stdio.h>
int main() {
  const float pi = 3.14159f;
  float base;
  float base1;
  float base2;
  float height;
  float side_length;
  float radius;
}`} file="app.cpp" />
        <hr className="border-t-2 text-background-accent max-w-[75rem] w-full"></hr>
      </div>
      <BlogFooter />
    </div>
  )
}