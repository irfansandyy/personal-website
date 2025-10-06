import BlogFooter from "@components/BlogFooter";
import BlogHeader from "@components/BlogHeader";
import CodeBlock from "@/components/CodeBlock";
import Image from "next/image";
import * as CN from "@components/BlogConstants";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Object Grouping",
  description: "Membuat aplikasi to do list menggunakan Java untuk berlatih Object Grouping",
  icons: "/web-icon.png"
};

export default function Template() {
  return (
    <div id="top" className={CN.BLOGTOP}>
      <BlogHeader date="06 October 2025" readTime="10" title="Latihan Object Grouping dengan Java" description="Membuat aplikasi to do list menggunakan Java untuk berlatih Object Grouping" imageLink="/blog/latihan-object-grouping/blog-cover.png" />
      <div className={CN.BLOGDIV}>
        <hr className={CN.BLOGHR}></hr>
        <div className={CN.BLOGCONTENTS}>
          <h2 className={CN.BLOGH2}>Important Link</h2>
          <p className={CN.BLOGP}>
            <a href="https://github.com/irfansandyy/university-projects/tree/main/object-oriented-programming/ObjectGrouping" target="_blank" rel="noopener noreferrer" className={CN.BLOGU}>GitHub Repository Here</a>
          </p>
          <h2 className={CN.BLOGH2}><br />Pengantar</h2>
          <p className={CN.BLOGP + CN.BLOGCODE}>
            Pada latihan kali ini, saya membuat sebuah aplikasi to do list sederhana menggunakan bahasa pemrograman Java. Tujuan dari latihan ini adalah untuk berlatih konsep Object Grouping dalam pemrograman berorientasi objek. Aplikasi ini memungkinkan pengguna untuk menambahkan, menghapus, dan menampilkan tugas-tugas yang perlu diselesaikan. Setiap tugas direpresentasikan sebagai objek yang memiliki atribut seperti deskripsi tugas dan status penyelesaian. Dengan menggunakan konsep Object Grouping, saya dapat mengelompokkan tugas-tugas tersebut dalam sebuah daftar, sehingga memudahkan pengelolaan dan manipulasi data. Latihan ini membantu saya memahami bagaimana mengorganisir kode dengan lebih baik dan meningkatkan keterampilan pemrograman berorientasi objek saya
          </p>
          <h2 className={CN.BLOGH2}><br />Kode Program</h2>
          <p className={CN.BLOGP + CN.BLOGCODE}>
            Berikut adalah kode program lengkap dari aplikasi to do list yang saya buat:
          </p>
          <CodeBlock languageItem="java" file="Task.java" codeItems={`import java.util.ArrayList;
import java.util.Scanner;

class Task {
    private String title;
    private String description;

    public Task(String title, String description) {
        this.title = title;
        this.description = description;
    }

    public String getTitle() {
        return title;
    }

    public String getDescription() {
        return description;
    }

    @Override
    public String toString() {
        return "Judul: " + title + " | Deskripsi: " + description;
    }
}`} />
          <h3 className={CN.BLOGH3}>Penjelasan Kode</h3>
          <p className={CN.BLOGP + CN.BLOGCODE}>
            Kelas <code>Task</code> merepresentasikan sebuah tugas dalam aplikasi to do list. Setiap tugas memiliki atribut <code>title</code> dan <code>description</code>. Kelas ini juga menyediakan metode untuk mengakses informasi tentang tugas dan menampilkan representasi string dari tugas. Dengan menggunakan kelas ini, kita dapat dengan mudah membuat dan mengelola daftar tugas dalam aplikasi <br /><br />
          </p>
          <CodeBlock languageItem="java" file="PersonalOrganizer.java" codeItems={`import java.util.ArrayList;
import java.util.Scanner;

public class PersonalOrganizer {
    public static void main(String[] args) {
        ArrayList<Task> tasks = new ArrayList<>();
        Scanner scanner = new Scanner(System.in);
        int choice;

        do {
            System.out.println("\\n=== Personal Organizer ===");
            System.out.println("1. Tambah Tugas");
            System.out.println("2. Lihat Semua Tugas");
            System.out.println("3. Hapus Tugas");
            System.out.println("4. Keluar");
            System.out.print("Pilih menu: ");
            choice = scanner.nextInt();
            scanner.nextLine();

            switch (choice) {
                case 1:
                    System.out.print("Masukkan judul tugas: ");
                    String title = scanner.nextLine();
                    System.out.print("Masukkan deskripsi tugas: ");
                    String description = scanner.nextLine();
                    tasks.add(new Task(title, description));
                    System.out.println("Tugas berhasil ditambahkan!");
                    break;

                case 2:
                    System.out.println("\\nDaftar Tugas:");
                    if (tasks.isEmpty()) {
                        System.out.println("Tidak ada tugas.");
                    } else {
                        for (int i = 0; i < tasks.size(); i++) {
                            System.out.println((i + 1) + ". " + tasks.get(i));
                        }
                    }
                    break;

                case 3:
                    System.out.print("Masukkan nomor tugas yang akan dihapus: ");
                    int index = scanner.nextInt();
                    if (index > 0 && index <= tasks.size()) {
                        tasks.remove(index - 1);
                        System.out.println("Tugas berhasil dihapus!");
                    } else {
                        System.out.println("Nomor tugas tidak valid.");
                    }
                    break;

                case 4:
                    System.out.println("Terima kasih! Keluar dari aplikasi.");
                    break;

                default:
                    System.out.println("Pilihan tidak valid, coba lagi.");
            }
        } while (choice != 4);
        scanner.close();
    }
}`} />    
          <h3 className={CN.BLOGH3}>Penjelasan Kode</h3>
          <p className={CN.BLOGP + CN.BLOGCODE}>
            Kelas <code>PersonalOrganizer</code> adalah kelas utama yang menjalankan aplikasi to do list. Di dalam metode <code>main</code>, kita membuat sebuah daftar tugas menggunakan <code>ArrayList</code> untuk menyimpan objek-objek <code>Task</code>. Aplikasi ini menyediakan menu interaktif yang memungkinkan pengguna untuk menambahkan tugas baru, melihat semua tugas yang ada, menghapus tugas berdasarkan nomor urut, dan keluar dari aplikasi. Dengan menggunakan konsep Object Grouping, kita dapat mengelola daftar tugas dengan mudah dan efisien. Aplikasi ini memberikan pengalaman pengguna yang sederhana namun efektif dalam mengorganisir tugas-tugas sehari-hari <br /><br />
          </p>
          <h2 className={CN.BLOGH2}>Hasil</h2>
          <h3 className={CN.BLOGH3}>Input Tugas</h3>
          <Image src="/blog/latihan-object-grouping/input-tugas.png" alt="Input Tugas" width={478} height={512} />
          <h3 className={CN.BLOGH3}><br />Daftar Tugas</h3>
          <Image src="/blog/latihan-object-grouping/daftar-tugas.png" alt="Daftar Tugas" width={478} height={208} />
          <h3 className={CN.BLOGH3}><br />Hapus Tugas</h3>
          <Image src="/blog/latihan-object-grouping/hapus-tugas.png" alt="Hapus Tugas" width={478} height={341} />
          <h2 className={CN.BLOGH2}><br />Kesimpulan</h2>
          <p className={CN.BLOGP + CN.BLOGCODE}>
            Latihan membuat aplikasi to do list menggunakan Java ini sangat bermanfaat untuk memahami konsep Object Grouping dalam pemrograman berorientasi objek. Dengan mengelompokkan tugas-tugas dalam sebuah daftar, saya dapat mengelola dan memanipulasi data dengan lebih efisien. Aplikasi ini memberikan pengalaman praktis dalam mengimplementasikan konsep-konsep dasar pemrograman berorientasi objek, seperti enkapsulasi dan penggunaan kelas. Selain itu, latihan ini juga membantu meningkatkan keterampilan pemrograman saya secara keseluruhan. Saya merasa lebih percaya diri dalam menggunakan Java untuk membuat aplikasi sederhana yang dapat digunakan dalam kehidupan sehari-hari. Latihan ini menjadi langkah awal yang baik untuk memperdalam pemahaman saya tentang pemrograman berorientasi objek dan mengembangkan kemampuan saya sebagai seorang programmer.
          </p>
        </div>
        <hr className={CN.BLOGHR}></hr>
      </div>
      <BlogFooter />
    </div>
  )
}