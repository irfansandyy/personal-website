import BlogFooter from "@components/BlogFooter";
import BlogHeader from "@components/BlogHeader";
import CodeBlock from "@components/CodeBlock";
import Image from "next/image";
import * as CN from "@components/BlogConstants";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Aplikasi Sistem Akademik",
  description: "Membuat aplikasi sistem akademik dengan Java dari struktur hingga implementasinya",
  icons: "/web-icon.png"
};

export default function Template() {
  return (
    <div id="top" className={CN.BLOGTOP}>
      <BlogHeader date="29 September 2025" readTime="20" title="Aplikasi Sistem Akademik dengan Java" description="Membuat aplikasi sistem akademik menggunakan Java mulai dari struktur hingga implementasinya" imageLink="/blog/aplikasi-sistem-akademik/blog-cover.jpg" />
      <div className={CN.BLOGDIV}>
        <hr className={CN.BLOGHR}></hr>
        <div className={CN.BLOGCONTENTS}>
          <h2 className={CN.BLOGH2}>Link Penting</h2>
          <ul className={CN.BLOGUL}>
            <li><a href="https://github.com/irfansandyy/university-projects/tree/main/object-oriented-programming/FrsSystem" target="_blank" rel="noopener noreferrer" className={CN.BLOGU}>GitHub Repository Here</a></li>
            <li><a href="https://mvnrepository.com/artifact/com.google.code.gson/gson" target="_blank" rel="noopener noreferrer" className={CN.BLOGU}>Gson JAR Dependencies Here</a></li>
          </ul>
          <h2 className={CN.BLOGH2}><br />Pengantar</h2>
          <p className={CN.BLOGP + CN.BLOGCODE}>
            Pada proyek ini kita akan membuat sebuah aplikasi sistem akademik sederhana menggunakan bahasa pemrograman <a href="https://www.java.com/en/" target="_blank" rel="noopener noreferrer" className={CN.BLOGU}>Java</a> dan <a href="https://www.bluej.org/" target="_blank" rel="noopener noreferrer" className={CN.BLOGU}>BlueJ</a>. Aplikasi ini akan mencakup fitur-fitur dasar seperti manajemen data mahasiswa, mata kuliah, dan dosen. Tujuan dari proyek ini adalah untuk memberikan pemahaman tentang bagaimana merancang dan mengimplementasikan aplikasi berbasis Java dengan struktur yang baik. Disini kita akan menggunakan konsep <a href="https://en.wikipedia.org/wiki/Object-oriented_programming" target="_blank" rel="noopener noreferrer" className={CN.BLOGU}>OOP</a> (Object-Oriented Programming) untuk membuat kelas-kelas yang merepresentasikan entitas dalam sistem akademik. Disini kita juga menggunakan <a href="https://mvnrepository.com/artifact/com.google.code.gson/gson" target="_blank" rel="noopener noreferrer" className={CN.BLOGU}>Gson</a> untuk menyimpan data dalam format <a href="https://www.json.org/json-en.html" target="_blank" rel="noopener noreferrer" className={CN.BLOGU}>JSON</a>. Agar jika program direstart maka tidak hilang.
          </p>
          <h2 className={CN.BLOGH2}><br />Struktur Proyek</h2>
          <p className={CN.BLOGP}>
            Struktur proyek kita akan terdiri dari beberapa kelas utama:
          </p>
          <ul className={CN.BLOGUL}>
            <li><strong>Mahasiswa:</strong> Kelas ini akan menyimpan informasi tentang mahasiswa seperti nama, NIM, dan daftar mata kuliah yang diambil.</li>
            <li><strong>MataKuliah:</strong> Kelas ini akan menyimpan informasi tentang mata kuliah seperti kode mata kuliah, nama mata kuliah, dan dosen pengampu.</li>
            <li><strong>Dosen:</strong> Kelas ini akan menyimpan informasi tentang dosen seperti nama, NIDN, dan daftar mata kuliah yang diajarkan.</li>
            <li><strong>SistemAkademik:</strong> Kelas ini akan mengelola data dan interaksi antara kelas-kelas di atas, serta menyediakan metode untuk menyimpan dan memuat data menggunakan Gson.</li>
          </ul>
          <h2 className={CN.BLOGH2}><br />Implementasi Kode</h2>
          <p className={CN.BLOGP}>
            Berikut adalah implementasi kode untuk masing-masing kelas:
          </p>
          <CodeBlock languageItem="java" file="Mahasiswa.java" codeItems={`import java.util.ArrayList;

public class Mahasiswa
{
    private String nama;
    private String nim;
    private String jurusan;
    
    private Dosen dosenWali; 
    private ArrayList<MataKuliah> krs;

    public Mahasiswa(String nama, String nim, String jurusan)
    {
        this.nama = nama;
        this.nim = nim;
        this.jurusan = jurusan;
        this.krs = new ArrayList<>(); 
    }

    public String getNama() 
    {
        return this.nama;
    }
    
    public String getNim() 
    {
        return this.nim;
    }

    public boolean sudahAmbilMatkul(String kodeMk) 
    {
        for (MataKuliah mkDiKrs : this.krs) 
        {
            if (mkDiKrs.getKodeMk().equals(kodeMk)) 
            {
                return true;
            }
        }
        return false;
    }
    
    public void tambahMatkulKeKrs(MataKuliah matkul) 
    {
        if (!sudahAmbilMatkul(matkul.getKodeMk())) 
        {
            this.krs.add(matkul);
            System.out.println("'" + matkul.getNamaMk() + "' berhasil ditambahkan ke KRS " + this.nama);
        }
        else 
        {
            System.out.println("INFO: '" + matkul.getNamaMk() + "' sudah ada di KRS " + this.nama + ". Penambahan dilewati.");
        }
    }
    
    public void cetakKrs() 
    {
        System.out.println("--- KARTU RENCANA STUDI ---");
        System.out.println("Nama    : " + this.nama);
        System.out.println("NIM     : " + this.nim);
        System.out.println("-----------------------------");
        
        if (krs.isEmpty()) 
        {
            System.out.println("KRS masih kosong.");
        } 
        else 
        {
            for(MataKuliah mk : krs) 
            {
                System.out.println("- " + mk.getKodeMk() + " | " + mk.getNamaMk() + " (" + mk.getSks() + " SKS)");
            }
        }
        System.out.println("-----------------------------");
    }
}`}/>
          <h3 className={CN.BLOGH3}>Penjelasan Kode</h3>
          <p className={CN.BLOGP + CN.BLOGCODE}>
            Kelas <code>Mahasiswa</code> menyimpan informasi dasar tentang mahasiswa dan menyediakan metode untuk menambah mata kuliah ke KRS serta mencetak KRS. Metode <code>sudahAmbilMatkul</code> digunakan untuk memeriksa apakah mata kuliah sudah ada di KRS sebelum menambahkannya. Jika mata kuliah sudah ada, penambahan akan dilewati dengan menampilkan pesan informasi. Metode <code>tambahMatkulKeKrs</code> menambahkan mata kuliah ke daftar KRS jika belum ada, dan metode <code>cetakKrs</code> mencetak daftar mata kuliah yang diambil oleh mahasiswa. Kita juga menggunakan <code>ArrayList</code> untuk menyimpan daftar mata kuliah yang diambil oleh mahasiswa. Ini memungkinkan kita untuk menambah dan mengelola mata kuliah secara dinamis. Selain itu, kita juga menambahkan atribut <code>jurusan</code> dan <code>dosenWali</code> untuk menyimpan informasi tambahan tentang mahasiswa. Atribut <code>dosenWali</code> dapat dihubungkan dengan kelas <code>Dosen</code> untuk menyimpan informasi tentang dosen wali mahasiswa <br /><br />
          </p>
          <CodeBlock languageItem="java" file="Dosen.java" codeItems={`public class Dosen
{
    private String nama;
    private String kodeDosen;
    private String nidn;

    public Dosen(String nama, String kodeDosen, String nidn)
    {
        this.nama = nama;
        this.kodeDosen = kodeDosen;
        this.nidn = nidn;
    }

    public String getNama() 
    {
        return this.nama;
    }
    
    public String getKodeDosen() 
    {
        return this.kodeDosen;
    }
}`} />    
          <h3 className={CN.BLOGH3}>Penjelasan Kode</h3>
          <p className={CN.BLOGP + CN.BLOGCODE}>
            Kelas <code>Dosen</code> menyimpan informasi dasar tentang dosen seperti nama, kode dosen, dan NIDN. Kelas ini menyediakan metode untuk mendapatkan nama dan kode dosen. Atribut-atribut ini dapat digunakan untuk mengidentifikasi dosen dalam sistem akademik. Kode dosen dapat digunakan sebagai pengenal unik untuk setiap dosen, sementara NIDN adalah nomor identifikasi nasional yang diberikan kepada dosen di Indonesia. Dengan kelas ini, kita dapat membuat objek dosen yang menyimpan informasi penting tentang mereka, yang kemudian dapat dihubungkan dengan mata kuliah yang mereka ajarkan. <br /><br />
          </p>
          <CodeBlock languageItem="java" file="MataKuliah.java" codeItems={`public class MataKuliah
{
    private String kodeMk;
    private String namaMk;
    private int sks;
    private int kapasitas;
    
    private Dosen dosenPengampu;

    public MataKuliah(String kodeMk, String namaMk, int sks, int kapasitas, Dosen dosen)
    {
        this.kodeMk = kodeMk;
        this.namaMk = namaMk;
        this.sks = sks;
        this.kapasitas = kapasitas;
        this.dosenPengampu = dosen;
    }

    public String getNamaMk() 
    {
        return this.namaMk;
    }
    
    public String getKodeMk() 
    {
        return this.kodeMk;
    }
    
    public int getSks() 
    {
        return this.sks;
    }
}`} />
          <h3 className={CN.BLOGH3}>Penjelasan Kode</h3> 
          <p className={CN.BLOGP + CN.BLOGCODE}>
            Kelas <code>MataKuliah</code> menyimpan informasi tentang mata kuliah seperti kode mata kuliah, nama mata kuliah, jumlah SKS, kapasitas, dan dosen pengampu. Kelas ini menyediakan metode untuk mendapatkan nama mata kuliah, kode mata kuliah, dan jumlah SKS. Atribut-atribut ini penting untuk mengelola informasi tentang mata kuliah dalam sistem akademik. Kode mata kuliah digunakan sebagai pengenal unik untuk setiap mata kuliah, sementara nama mata kuliah memberikan deskripsi singkat tentang isi mata kuliah tersebut. Jumlah SKS menunjukkan beban studi yang terkait dengan mata kuliah tersebut. Kapasitas dapat digunakan untuk menentukan berapa banyak mahasiswa yang dapat mengambil mata kuliah tersebut pada satu waktu. Dosen pengampu adalah objek dari kelas <code>Dosen</code> yang mengajarkan mata kuliah tersebut. Dengan kelas ini, kita dapat membuat objek mata kuliah yang menyimpan informasi penting tentang mata kuliah, yang kemudian dapat dihubungkan dengan mahasiswa yang mengambilnya. <br /><br />
          </p>
          <CodeBlock languageItem="java" file="SistemAkademik.java" codeItems={`import java.util.ArrayList;
import java.util.Scanner;
import java.io.FileWriter;
import java.io.FileReader;
import java.io.IOException;
import java.io.Writer;
import java.io.Reader;
import com.google.gson.Gson;
import com.google.gson.GsonBuilder;

public class SistemAkademik {
    private ArrayList<Mahasiswa> daftarMahasiswa;
    private ArrayList<Dosen> daftarDosen;
    private ArrayList<MataKuliah> daftarMataKuliah;

    public SistemAkademik() {
        this.daftarMahasiswa = new ArrayList<>();
        this.daftarDosen = new ArrayList<>();
        this.daftarMataKuliah = new ArrayList<>();
    }

    public void tambahMahasiswa(Mahasiswa m) { daftarMahasiswa.add(m); }
    public void tambahDosen(Dosen d) { daftarDosen.add(d); }
    public void tambahMataKuliah(MataKuliah mk) { daftarMataKuliah.add(mk); }

    public Mahasiswa cariMahasiswa(String nim) {
        for (Mahasiswa m : daftarMahasiswa) {
            if (m.getNim().equals(nim)) { return m; }
        }
        return null;
    }
    
    public Dosen cariDosen(String kodeDosen) {
        for (Dosen d : daftarDosen) {
            if (d.getKodeDosen().equals(kodeDosen)) { return d; }
        }
        return null;
    }
    
    public MataKuliah cariMataKuliah(String kodeMk) {
         for (MataKuliah mk : daftarMataKuliah) {
            if (mk.getKodeMk().equals(kodeMk)) { return mk; }
        }
        return null;
    }
    
    public void tampilkanSemuaMahasiswa() {
        System.out.println("\\n--- DAFTAR MAHASISWA ---");
        if (daftarMahasiswa.isEmpty()) {
            System.out.println("Belum ada data mahasiswa.");
            return;
        }
        for (Mahasiswa m : daftarMahasiswa) {
            System.out.println("- NIM: " + m.getNim() + ", Nama: " + m.getNama());
        }
    }
    
    public void tampilkanSemuaDosen() {
        System.out.println("\\n--- DAFTAR DOSEN ---");
        if (daftarDosen.isEmpty()) {
            System.out.println("Belum ada data dosen.");
            return;
        }
        for (Dosen d : daftarDosen) {
            System.out.println("- Kode: " + d.getKodeDosen() + ", Nama: " + d.getNama());
        }
    }

    public void tampilkanSemuaMataKuliah() {
        System.out.println("\\n--- DAFTAR MATA KULIAH ---");
        if (daftarMataKuliah.isEmpty()) {
            System.out.println("Belum ada data mata kuliah.");
            return;
        }
        for (MataKuliah mk : daftarMataKuliah) {
            System.out.println("- Kode: " + mk.getKodeMk() + ", Nama: " + mk.getNamaMk() + " (" + mk.getSks() + " SKS)");
        }
    }

    public void prosesKrs(String nim, String kodeMk) {
        Mahasiswa mhs = cariMahasiswa(nim);
        MataKuliah mk = cariMataKuliah(kodeMk);
        
        if (mhs != null && mk != null) {
            mhs.tambahMatkulKeKrs(mk);
        } else {
            System.out.println("Gagal proses KRS: Mahasiswa atau Mata Kuliah tidak ditemukan.");
        }
    }
    
    public void simpanDataKeJson(String namaFile) {
        Gson gson = new GsonBuilder().setPrettyPrinting().create();
        try (Writer writer = new FileWriter(namaFile)) {
            gson.toJson(this, writer);
            System.out.println("-> Data berhasil disimpan ke file '" + namaFile + "'");
        } catch (IOException e) {
            System.err.println("Gagal menyimpan data ke JSON: " + e.getMessage());
        }
    }
    
    public static SistemAkademik muatDataDariJson(String namaFile) {
        Gson gson = new Gson();
        try (Reader reader = new FileReader(namaFile)) {
            SistemAkademik sistem = gson.fromJson(reader, SistemAkademik.class);
            System.out.println("-> Data berhasil dimuat dari file '" + namaFile + "'");
            return sistem;
        } catch (IOException e) {
            System.out.println("-> File '" + namaFile + "' tidak ditemukan atau gagal dibaca.");
            return null;
        }
    }
    
    public static void main(String[] args) {
        SistemAkademik sistem = new SistemAkademik();
        Scanner scanner = new Scanner(System.in);
        String namaFile = "akademik.json";
        SistemAkademik sistemDariFile = muatDataDariJson(namaFile);
        if (sistemDariFile != null) 
        {   
            System.out.println("Berhasil memuat data dari akademik.json\\n");
            sistem = sistemDariFile;
        } else {
            System.out.println("Gagal memuat data dari akademik.json\\n");
        }
        
        boolean berjalan = true;
        
        while (berjalan) {
            System.out.println("\\n===== MENU SISTEM AKADEMIK =====");
            System.out.println("1. Tambah Mahasiswa");
            System.out.println("2. Tambah Dosen");
            System.out.println("3. Tambah Mata Kuliah");
            System.out.println("4. Proses Pengisian KRS");
            System.out.println("5. Tampilkan Semua Data");
            System.out.println("6. Cetak KRS Mahasiswa");
            System.out.println("---------------------------------");
            System.out.println("7. Simpan Data ke File (JSON)");
            System.out.println("8. Muat Data dari File (JSON)");
            System.out.println("0. Keluar");
            System.out.print("Pilih menu: ");
            
            int pilihan = scanner.nextInt();
            scanner.nextLine();

            switch (pilihan) {
                case 1:
                    System.out.print("Masukkan Nama Mahasiswa: ");
                    String namaMhs = scanner.nextLine();
                    System.out.print("Masukkan NIM: ");
                    String nim = scanner.nextLine();
                    System.out.print("Masukkan Jurusan: ");
                    String jurusan = scanner.nextLine();
                    sistem.tambahMahasiswa(new Mahasiswa(namaMhs, nim, jurusan));
                    System.out.println("Mahasiswa berhasil ditambahkan.");
                    break;
                case 2:
                    System.out.print("Masukkan Nama Dosen: ");
                    String namaDosen = scanner.nextLine();
                    System.out.print("Masukkan Kode Dosen: ");
                    String kodeDosen = scanner.nextLine();
                    System.out.print("Masukkan NIDN: ");
                    String nidn = scanner.nextLine();
                    sistem.tambahDosen(new Dosen(namaDosen, kodeDosen, nidn));
                    System.out.println("Dosen berhasil ditambahkan.");
                    break;
                case 3:
                    System.out.print("Masukkan Kode Mata Kuliah: ");
                    String kodeMk = scanner.nextLine();
                    System.out.print("Masukkan Nama Mata Kuliah: ");
                    String namaMk = scanner.nextLine();
                    System.out.print("Masukkan SKS: ");
                    int sks = scanner.nextInt();
                    scanner.nextLine();
                    System.out.print("Masukkan Kapasitas: ");
                    int kapasitas = scanner.nextInt();
                    scanner.nextLine();
                    sistem.tampilkanSemuaDosen();
                    System.out.print("Masukkan Kode Dosen Pengampu: ");
                    String kdDosenPengampu = scanner.nextLine();
                    Dosen d = sistem.cariDosen(kdDosenPengampu);
                    if (d != null) {
                        sistem.tambahMataKuliah(new MataKuliah(kodeMk, namaMk, sks, kapasitas, d));
                        System.out.println("Mata Kuliah berhasil ditambahkan.");
                    } else {
                        System.out.println("Dosen tidak ditemukan, mata kuliah gagal ditambahkan.");
                    }
                    break;
                case 4:
                    sistem.tampilkanSemuaMahasiswa();
                    System.out.print("Masukkan NIM Mahasiswa yang akan mengisi KRS: ");
                    String nimKrs = scanner.nextLine();
                    sistem.tampilkanSemuaMataKuliah();
                    System.out.print("Masukkan Kode Mata Kuliah yang akan diambil: ");
                    String kodeMkKrs = scanner.nextLine();
                    sistem.prosesKrs(nimKrs, kodeMkKrs);
                    break;
                case 5:
                    sistem.tampilkanSemuaMahasiswa();
                    sistem.tampilkanSemuaDosen();
                    sistem.tampilkanSemuaMataKuliah();
                    break;
                case 6:
                    sistem.tampilkanSemuaMahasiswa();
                    System.out.print("Masukkan NIM Mahasiswa untuk mencetak KRS: ");
                    String nimCetak = scanner.nextLine();
                    Mahasiswa mhsCetak = sistem.cariMahasiswa(nimCetak);
                    if(mhsCetak != null) {
                        mhsCetak.cetakKrs();
                    } else {
                        System.out.println("Mahasiswa dengan NIM " + nimCetak + " tidak ditemukan.");
                    }
                    break;
                case 7:
                    sistem.simpanDataKeJson(namaFile);
                    break;
                case 8:
                    sistemDariFile = muatDataDariJson(namaFile);
                    if (sistemDariFile != null) {
                        sistem = sistemDariFile;
                    }
                    break;
                case 0:
                    berjalan = false;
                    System.out.println("Menyimpan data terakhir sebelum keluar...");
                    sistem.simpanDataKeJson(namaFile);
                    System.out.println("Terima kasih telah menggunakan program ini.");
                    break;
                default:
                    System.out.println("Pilihan tidak valid. Silakan coba lagi.");
            }
        }
        scanner.close();
    }
}`} />
          <h3 className={CN.BLOGH3}>Penjelasan Kode</h3>
          <p className={CN.BLOGP + CN.BLOGCODE}>
            Kelas <code>SistemAkademik</code> adalah inti dari aplikasi sistem akademik. Kelas ini mengelola daftar mahasiswa, dosen, dan mata kuliah menggunakan <code>ArrayList</code>. Kelas ini menyediakan metode untuk menambah entitas baru, mencari entitas berdasarkan atribut unik (seperti NIM untuk mahasiswa, kode dosen untuk dosen, dan kode mata kuliah untuk mata kuliah), serta menampilkan semua entitas yang ada. Metode <code>prosesKrs</code> memungkinkan mahasiswa untuk menambah mata kuliah ke KRS mereka. Kelas ini juga menyediakan metode untuk menyimpan dan memuat data ke/dari file JSON menggunakan pustaka Gson. Metode <code>simpanDataKeJson</code> menyimpan seluruh objek <code>SistemAkademik</code> ke file JSON, sedangkan metode <code>muatDataDariJson</code> memuat data dari file JSON dan mengembalikan objek <code>SistemAkademik</code>. Metode <code>main</code> berfungsi sebagai antarmuka pengguna berbasis teks yang memungkinkan pengguna untuk berinteraksi dengan sistem akademik melalui menu pilihan. Pengguna dapat menambah mahasiswa, dosen, dan mata kuliah, mengisi KRS, menampilkan data, mencetak KRS, serta menyimpan dan memuat data dari file JSON. Program ini berjalan dalam loop hingga pengguna memilih untuk keluar. <br />
          </p>
          <h2 className={CN.BLOGH2}><br />Hasil</h2>
          <h3 className={CN.BLOGH3}>Struktur Sistem Akademik</h3>
          <Image src="/blog/aplikasi-sistem-akademik/bluej-structure.png" alt="Structure" width={791} height={475} />
          <h3 className={CN.BLOGH3}><br />Menu Sistem Akademik</h3>
          <Image src="/blog/aplikasi-sistem-akademik/bluej-menu.png" alt="Menu" width={785} height={377} />
          <h3 className={CN.BLOGH3}><br />Data pada Sistem Akademik</h3>
          <Image src="/blog/aplikasi-sistem-akademik/database-list.png" alt="Database" width={785} height={513} />
          <h3 className={CN.BLOGH3}><br />Printout FRS Mahasiswa</h3>
          <Image src="/blog/aplikasi-sistem-akademik/frs-printout.png" alt="FRS Printout" width={785} height={351} />
          <h2 className={CN.BLOGH2}><br />Kesimpulan</h2>
          <p className={CN.BLOGP}>
            Proyek aplikasi sistem akademik ini memberikan gambaran tentang bagaimana merancang dan mengimplementasikan aplikasi berbasis Java dengan struktur yang baik menggunakan konsep OOP. Dengan menggunakan kelas-kelas yang terstruktur, kita dapat dengan mudah mengelola data mahasiswa, dosen, dan mata kuliah. Penggunaan pustaka Gson memungkinkan penyimpanan data dalam format JSON, sehingga data tetap tersimpan meskipun program direstart. Antarmuka pengguna berbasis teks memberikan cara sederhana bagi pengguna untuk berinteraksi dengan sistem akademik. Proyek ini dapat dikembangkan lebih lanjut dengan menambahkan fitur-fitur seperti validasi input, antarmuka pengguna grafis (GUI), atau integrasi dengan database yang lebih kompleks. <br /><br />
          </p>
        </div>
        <hr className={CN.BLOGHR}></hr>
      </div>
      <BlogFooter />
    </div>
  )
}