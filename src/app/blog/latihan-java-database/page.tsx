import BlogFooter from "@components/BlogFooter";
import BlogHeader from "@components/BlogHeader";
import CodeBlock from "@/components/CodeBlock";
import * as CN from "@components/BlogConstants";
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Latihan Java Database",
  description: "Menggunakan Java untuk menghubungkan dan berinteraksi dengan database MySQL dengan JDBC Driver",
  icons: "/web-icon.png"
};

export default function latihanJavaDatabase() {
  return (
    <div id="top" className={CN.BLOGTOP}>
      <BlogHeader date="1 December 2025" readTime="10" title="Latihan Java Database" description="Menggunakan Java untuk menghubungkan dan berinteraksi dengan database MySQL dengan JDBC Driver" imageLink="/blog/latihan-java-database/blog-cover.jpg" />
      <div className={CN.BLOGDIV}>
        <hr className={CN.BLOGHR}></hr>
        <div className={CN.BLOGCONTENTS}>
          <h2 className={CN.BLOGH2}>Important Links</h2>
          <p className={CN.BLOGP}>
            <a href="https://github.com/irfansandyy/university-projects/tree/main/object-oriented-programming/latihan-java-database" target="_blank" rel="noopener noreferrer" className={CN.BLOGU}>Latihan Java Database</a>
          </p>
          <h2 className={CN.BLOGH2}><br />Pengantar</h2>
          <p className={CN.BLOGP + CN.BLOGCODE}>
            Pada latihan kali ini, kita akan belajar bagaimana cara menghubungkan aplikasi Java dengan database MySQL menggunakan JDBC Driver. Kita juga akan mempelajari cara melakukan operasi dasar seperti membuat database, membuat tabel, serta melakukan operasi CRUD (Create, Read, Update, Delete) pada data di dalam tabel.
            <br /><br />
            Untuk latihan ini, kita akan menggunakan database MySQL dengan nama <code>perpustakaan</code> yang berisi tabel <code>buku</code> untuk menyimpan informasi tentang buku-buku di perpustakaan.
            <br /><br />
          </p>
          <h2 className={CN.BLOGH2}>Script SQL Untuk Membuat Database</h2>
            <p className={CN.BLOGP}>
              Berikut adalah script lengkap untuk membuat database perpustakaan menggunakan MySQL:
            </p>
          <CodeBlock languageItem="sql" file="perpustakaan.sql" codeItems={`DROP DATABASE IF EXISTS perpustakaan;

CREATE DATABASE perpustakaan DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;

USE \`perpustakaan\`;

CREATE TABLE \`buku\` ( 
    \`id_buku\` INT NOT NULL AUTO_INCREMENT , 
    \`judul\` VARCHAR(45) NOT NULL , 
    \`pengarang\` VARCHAR(45) NOT NULL , 
    PRIMARY KEY (\`id_buku\`)
);

INSERT INTO \`buku\` (\`judul\`, \`pengarang\`) 
VALUES ('Belajar Pemrograman Java dari Nol', 'Petani Kode'), ('Pemrograman Java Menggunakan Linux', 'Petani Kode');`} />
          <h3 className={CN.BLOGH3}><br />Penjelasan Script SQL</h3>
          <p className={CN.BLOGP + CN.BLOGCODE}>
            Berikut adalah penjelasan dari setiap bagian script SQL di atas:
            <br />
            1. Baris pertama menghapus database perpustakaan jika sudah ada sebelumnya untuk memastikan kita memulai dari awal.
            <br />
            2. Baris kedua membuat database baru dengan nama perpustakaan dan mengatur karakter set serta collation.
            <br />
            3. Baris ketiga memilih database perpustakaan untuk digunakan.
            <br />
            4. Baris keempat hingga kesembilan membuat tabel buku dengan kolom id_buku, judul, dan pengarang. Kolom id_buku diatur sebagai primary key dan auto-increment.
            <br />
            5. Baris kesepuluh hingga kedua belas memasukkan dua data buku ke dalam tabel buku.
            <br /><br />
            Dengan script SQL di atas, kita telah berhasil membuat database perpustakaan beserta tabel buku dan beberapa data awal. Selanjutnya, kita dapat menggunakan JDBC Driver di Java untuk menghubungkan aplikasi kita dengan database ini dan melakukan operasi CRUD pada tabel buku.
          </p>
          <h2 className={CN.BLOGH2}><br />Kode Program Belajar MySQL</h2>
          <p className={CN.BLOGP}>
            Berikut adalah kode lengkap untuk belajar menghubungkan Java dengan MySQL menggunakan JDBC Driver:
          </p>
          <CodeBlock languageItem="java" file="BelajarJavaMysql.java" codeItems={`import java.sql.DriverManager;
import java.sql.Connection;
import java.sql.Statement;
import java.sql.ResultSet;

public class BelajarJavaMysql {
    static final String JDBC_DRIVER = "com.mysql.cj.jdbc.Driver";
    static final String DB_URL = "jdbc:mysql://localhost/perpustakaan?useSSL=false&serverTimezone=UTC";
    static final String USER = "root";
    static final String PASS = "";

    static Connection conn;
    static Statement stmt;
    static ResultSet rs;

    public static void main(String[] args) {
        try {
            Class.forName(JDBC_DRIVER);
            conn = DriverManager.getConnection(DB_URL, USER, PASS);
            stmt = conn.createStatement();
            rs = stmt.executeQuery("SELECT * FROM buku");

            while (rs.next()) {
                System.out.println("ID Buku   : " + rs.getInt("id_buku"));
                System.out.println("Judul     : " + rs.getString("judul"));
                System.out.println("Pengarang : " + rs.getString("pengarang"));
                System.out.println("-----------------------------------");
            }

            stmt.close();
            conn.close();

        } catch (Exception e) {
            System.out.println("--- TERJADI KESALAHAN KONEKSI ---");
            e.printStackTrace();
        }
    }
}`} />
          <h3 className={CN.BLOGH3}><br />Penjelasan Kode Diatas</h3>
          <p className={CN.BLOGP + CN.BLOGCODE}>
            Berikut adalah penjelasan dari setiap bagian kode di atas:
            <br />
            1. Impor library JDBC yang diperlukan untuk menghubungkan Java dengan database MySQL.
            <br />
            2. Deklarasi variabel untuk menyimpan informasi koneksi seperti JDBC driver, URL database, username, dan password.
            <br />
            3. Membuat koneksi ke database menggunakan DriverManager dan mendapatkan objek Connection.
            <br />
            4. Membuat objek Statement untuk mengeksekusi query SQL.
            <br />
            5. Menjalankan query SELECT untuk mengambil semua data dari tabel buku dan menyimpannya dalam objek ResultSet.
            <br />
            6. Menggunakan loop while untuk membaca setiap baris data dari ResultSet dan mencetak informasi buku ke konsol.
            <br />
            7. Menutup objek Statement dan Connection setelah selesai digunakan.
            <br />
            8. Menangani exception yang mungkin terjadi selama proses koneksi dan eksekusi query.
            <br /><br />
            Dengan kode di atas, kita dapat menghubungkan aplikasi Java dengan database MySQL, mengambil data dari tabel buku, dan menampilkannya di konsol. Pastikan untuk menyesuaikan informasi koneksi seperti URL database, username, dan password sesuai dengan konfigurasi database MySQL yang Anda gunakan.
          </p>
          <h2 className={CN.BLOGH2}><br />Kode Program Java CRUD</h2>
          <p className={CN.BLOGP}>
            Berikut adalah kode lengkap untuk belajar CRUD di Java menggunakan JDBC Driver:
          </p>
          <CodeBlock languageItem="java" file="BelajarJavaMysql.java" codeItems={`import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.sql.DriverManager;
import java.sql.Connection;
import java.sql.Statement;
import java.sql.ResultSet;

public class JavaCRUD {
    static final String JDBC_DRIVER = "com.mysql.cj.jdbc.Driver";
    static final String DB_URL = "jdbc:mysql://localhost/perpustakaan?useSSL=false&serverTimezone=UTC";
    static final String USER = "root";
    static final String PASS = "";

    static Connection conn;
    static Statement stmt;
    static ResultSet rs;
    static InputStreamReader inputStreamReader = new InputStreamReader(System.in);
    static BufferedReader input = new BufferedReader(inputStreamReader);

    public static void main(String[] args) {
        try {
            Class.forName(JDBC_DRIVER);

            conn = DriverManager.getConnection(DB_URL, USER, PASS);
            stmt = conn.createStatement();

            while (!conn.isClosed()) {
                showMenu();
            }

            stmt.close();
            conn.close();

        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    static void showMenu() {
        System.out.println("\\n========= MENU UTAMA =========");
        System.out.println("1. Insert Data");
        System.out.println("2. Show Data");
        System.out.println("3. Edit Data");
        System.out.println("4. Delete Data");
        System.out.println("0. Keluar");
        System.out.println("");
        System.out.print("PILIHAN> ");

        try {
            int pilihan = Integer.parseInt(input.readLine());
            switch (pilihan) {
                case 0:
                    System.exit(0);
                    break;
                case 1:
                    insertBuku();
                    break;
                case 2:
                    showData();
                    break;
                case 3:
                    updateBuku();
                    break;
                case 4:
                    deleteBuku();
                    break;
                default:
                    System.out.println("Pilihan salah!");
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    static void showData() {
        try {
            rs = stmt.executeQuery("SELECT * FROM buku");

            System.out.println("+--------------------------------+");
            System.out.println("|        DATA PERPUSTAKAAN       |");
            System.out.println("+--------------------------------+");

            while (rs.next()) {
                int idBuku = rs.getInt("id_buku");
                String judul = rs.getString("judul");
                String pengarang = rs.getString("pengarang");

                System.out.println(String.format("%d. %s -- (%s)", idBuku, judul, pengarang));
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    static void insertBuku() {
        try {
            System.out.print("Judul: ");
            String judul = input.readLine().trim();
            System.out.print("Pengarang: ");
            String pengarang = input.readLine().trim();
            stmt.execute(String.format("INSERT INTO buku (judul, pengarang) VALUE('%s', '%s')", judul, pengarang));
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    static void updateBuku() {
        try {
            System.out.print("ID yang mau diedit: ");
            int idBuku = Integer.parseInt(input.readLine());
            System.out.print("Judul: ");
            String judul = input.readLine().trim();
            System.out.print("Pengarang: ");
            String pengarang = input.readLine().trim();
            stmt.execute(String.format("UPDATE buku SET judul='%s', pengarang='%s' WHERE id_buku=%d", judul, pengarang, idBuku));

        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    static void deleteBuku() {
        try {
            System.out.print("ID yang mau dihapus: ");
            int idBuku = Integer.parseInt(input.readLine());
            
            stmt.execute(String.format("DELETE FROM buku WHERE id_buku=%d", idBuku));

            System.out.println("Data telah terhapus...");

        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}`} />
          <h3 className={CN.BLOGH3}><br />Penjelasan Kode Diatas</h3>
          <p className={CN.BLOGP + CN.BLOGCODE}>
            Berikut adalah penjelasan dari setiap bagian kode di atas: 
            <br />
            1. Impor library JDBC dan library untuk membaca input dari pengguna.
            <br />
            2. Deklarasi variabel untuk menyimpan informasi koneksi, objek JDBC, dan objek untuk membaca input.
            <br />
            3. Membuat koneksi ke database dan objek Statement.
            <br />
            4. Menampilkan menu utama dan menangani pilihan pengguna menggunakan loop while.
            <br />
            5. Implementasi metode untuk menampilkan data, memasukkan data baru, memperbarui data, dan menghapus data dari tabel buku.
            <br />
            6. Setiap metode menggunakan perintah SQL yang sesuai untuk melakukan operasi CRUD pada tabel buku.
            <br /><br />
            Dengan kode di atas, kita dapat membuat aplikasi Java sederhana yang dapat melakukan operasi CRUD pada database MySQL menggunakan JDBC Driver. Pengguna dapat memasukkan, melihat, memperbarui, dan menghapus data buku melalui antarmuka berbasis teks di konsol.
          </p>
          <h2 className={CN.BLOGH2}><br />Hasil</h2>
          <h3 className={CN.BLOGH3}>Project Structure</h3>
          <Image src="/blog/latihan-java-database/project-structure.png" alt="Project Structure" width={856} height={656} />
          <h3 className={CN.BLOGH3}>Belajar Java MySQL Output</h3>
          <Image src="/blog/latihan-java-database/belajar-java-mysql.png" alt="Belajar Java MySQL Output" width={843} height={904} />
          <h3 className={CN.BLOGH3}>Java CRUD Output</h3>
          <Image src="/blog/latihan-java-database/java-crud.png" alt="Java CRUD Output" width={843} height={1105} />
          <h3 className={CN.BLOGH3}>Database Table</h3>
          <Image src="/blog/latihan-java-database/database.png" alt="Database Table" width={835} height={277} />
          <h2 className={CN.BLOGH2}>Kesimpulan</h2>
          <p className={CN.BLOGP}>
            Dalam latihan ini, kita telah belajar bagaimana cara menghubungkan aplikasi Java dengan database MySQL menggunakan JDBC Driver. Kita juga telah mempelajari cara melakukan operasi dasar seperti membuat database, membuat tabel, serta melakukan operasi CRUD (Create, Read, Update, Delete) pada data di dalam tabel.
            <br /><br />
            Dengan pemahaman ini, kita dapat mengembangkan aplikasi Java yang lebih kompleks yang memerlukan interaksi dengan database untuk menyimpan dan mengambil data. Pastikan untuk selalu menangani exception yang mungkin terjadi selama proses koneksi dan eksekusi query untuk memastikan aplikasi berjalan dengan lancar.
          </p>
        </div>
        <hr className={CN.BLOGHR}></hr>
      </div>
      <BlogFooter />
    </div>
  )
}