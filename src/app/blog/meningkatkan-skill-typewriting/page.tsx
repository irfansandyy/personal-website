import BlogFooter from "@components/BlogFooter";
import BlogHeader from "@components/BlogHeader";
import * as CN from "@components/BlogConstants";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Meningkatkan Skill Typewriting",
  description: "Cara saya meningkatkan skill typewriting dengan menggunakan typing club",
  icons: "/web-icon.png"
};

export default function MeningkatkanSkillTypewriting() {
  return (
    <div id="top" className={CN.BLOGTOP}>
      <BlogHeader date="2 September 2025" readTime="10" title="Meningkatkan Skill Typewriting" description="Latihan meningkatkan skill typewriting dengan menggunakan typing club" imageLink="/blog/meningkatkan-skill-typewriting/blog-cover.png" />
      <div className={CN.BLOGDIV}>
        <hr className={CN.BLOGHR}></hr>
        <div className={CN.BLOGCONTENTS}>
          <h2 className={CN.BLOGH2}>Pengantar</h2>
          <p className={CN.BLOGP}>
            Pelajaran pertama yang harus dipelajari seorang programmer adalah kemampuan mengetik. Karena setiap hari programmer harus bersentuhan dengan keyboard atau papan ketik. Dengan kemampuan mengetik 10 jari kita bisa jauh lebih cepat dan efisien dalam membuat sebuah program komputer.
            <br /><br />
            Memiliki keterampilan mengetik 10 jari tidaklah susah yang terpenting adalah ketekunan dan keuletan Anda dalam proses belajar mengetik, walaupun dalam tahap awal Anda langsung menggunakan teknik yang lebih jauh lebih hebat yaitu 11 jari (alias menggunakan dua telunjuk sakti tangan Anda). Anda tidaklah perlu malu pada tahap awal proses pembelajaran yang mungkin nantinya akan memakan waktu cukup lama, akan tetapi jika Anda bisa dengan tekun dan giat dalam mengulang-ulang proses belajar mengetik Anda, maka bukan tidak mungkin dalam beberapa hari saja Anda sudah bisa mampu menaklukkan keyboard komputer Anda.
            <br /><br />
            Website yang bisa digunakan untuk latihan mengetik banyak, salah satunya: <a href="https://monkeytype.com/" className={CN.BLOGU}>Monkeytype</a>.
          </p>
          <h2 className={CN.BLOGH2}><br />Hasil Latihan</h2>
          <p className={CN.BLOGP}>
            Berikut adalah hasil latihan saya dalam meningkatkan skill typewriting menggunakan Monkeytype:
          </p>
          <Image src="/blog/meningkatkan-skill-typewriting/result-1.png" alt="Hasil Latihan" width={797} height={477} />
          <h3 className={CN.BLOGH3}>Latihan 1: <br /></h3>
          <ul className={CN.BLOGUL}>
            <li>WPM: 74</li>
            <li>Akurasi: 94%</li>
            <li>Konsistensi: 70%</li>
            <li>Karakter: 244/5/0/1</li>
          </ul>
          <Image src="/blog/meningkatkan-skill-typewriting/result-2.png" alt="Hasil Latihan" width={797} height={477} />
          <h3 className={CN.BLOGH3}>Latihan 2: <br /></h3>
          <ul className={CN.BLOGUL}>
            <li>WPM: 72</li>
            <li>Akurasi: 95%</li>
            <li>Konsistensi: 68%</li>
            <li>Karakter: 252/0/0/0</li>
          </ul>
          <Image src="/blog/meningkatkan-skill-typewriting/result-3.png" alt="Hasil Latihan" width={797} height={477} />
          <h3 className={CN.BLOGH3}>Latihan 3: <br /></h3>
          <ul className={CN.BLOGUL}>
            <li>WPM: 95</li>
            <li>Akurasi: 100%</li>
            <li>Konsistensi: 84%</li>
            <li>Karakter: 258/0/0/0</li>
          </ul>
          <h2 className={CN.BLOGH2}><br />Penutup</h2>
          <p className={CN.BLOGP}>
            Dari hasil diatas saya dua kali konsisten dan sekali mendapatkan hasil anomali, mungkin karena saya terlalu bersemangat sehingga saya mengetik dengan sangat cepat. Menurut data dari <a href="https://wordsrated.com/typing-speed-statistics/" className={CN.BLOGU}>Words Rated</a>, 60 WPM sudah termasuk jauh diatas rata-rata industri.
            <br /><br />
            Selain itu, menurut <a href="https://www.predictiveindex.com/blog/good-wpm-typing-speed/" className={CN.BLOGU}>The Predictive Index</a>, WPM di atas 60 sudah dianggap cepat dan cukup kompetitif dalam dunia kerja modern. Dengan latihan rutin, saya optimis angka ini dapat terus meningkat.
          </p>
          <h2 className={CN.BLOGH2}><br />Kesimpulan</h2>
          <p className={CN.BLOGP}>
            Menguasai skill typewriting bukan hanya soal menambah kecepatan mengetik, tetapi juga meningkatkan efisiensi, mengurangi kesalahan, dan membantu menjaga fokus ketika mengerjakan sesuatu, khususnya pemrograman. Latihan teratur dengan tools seperti TypingClub dan Monkeytype akan sangat membantu mempercepat perkembangan kemampuan mengetik 10 jari.
          </p>
        </div>
        <hr className={CN.BLOGHR}></hr>
      </div>
      <BlogFooter />
    </div>
  )
}