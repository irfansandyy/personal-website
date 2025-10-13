import BlogFooter from "@components/BlogFooter";
import BlogHeader from "@components/BlogHeader";
import CodeBlock from "@/components/CodeBlock";
import * as CN from "@components/BlogConstants";
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Tech Support System",
  description: "Membuat Tech Support System Menggunakan Library yang Tersedia di Java",
  icons: "/web-icon.png"
};

export default function TechSupportSystem() {
  return (
    <div id="top" className={CN.BLOGTOP}>
      <BlogHeader date="13 October 2025" readTime="12" title="Membuat Tech Support System dengan Library" description="Membuat Tech Support System Menggunakan Library yang Tersedia di Java" imageLink="/blog/tech-support-system/blog-cover.jpg" />
      <div className={CN.BLOGDIV}>
        <hr className={CN.BLOGHR}></hr>
        <div className={CN.BLOGCONTENTS}>
          <h2 className={CN.BLOGH2}>Important Link</h2>
          <p className={CN.BLOGP}>
            <a href="https://github.com/irfansandyy/university-projects/tree/main/object-oriented-programming/TechSupport" target="_blank" rel="noopener noreferrer" className={CN.BLOGU}>GitHub Repository Here</a>
          </p>
          <h2 className={CN.BLOGH2}>Pengantar</h2>
          <p className={CN.BLOGP}>
            Pada era digital saat ini, sistem dukungan teknis (tech support system) menjadi komponen penting dalam memberikan layanan pelanggan yang efisien dan responsif. Dengan banyaknya perangkat lunak dan perangkat keras yang digunakan oleh individu dan organisasi, kebutuhan akan sistem dukungan teknis yang handal semakin meningkat. Dalam artikel ini, kita akan membahas bagaimana cara membuat tech support system menggunakan library yang tersedia di Java
            <br /><br />
            Pada bagian ini, kita akan mempelajari cara membuat tech support system menggunakan beberapa library populer di Java, seperti Scanner, ArrayList, HashMap, dan Random. Library ini akan membantu kita dalam membuat reponse dari pertanyaan user
            <br /><br />
            Dibawah ini adalah implementasi lengkapnya:
          </p>
          <h2 className={CN.BLOGH2}><br />Kode Program</h2>
          <p className={CN.BLOGP}>
            Berikut adalah kode lengkap untuk membuat tech support system sederhana menggunakan library yang tersedia di Java:
          </p>
          <CodeBlock languageItem="java" file="InputReader.java" codeItems={`import java.util.Scanner;

public class InputReader {
    private Scanner reader;

    public InputReader() {
        reader = new Scanner(System.in);
    }

    public String getInput() {
        System.out.print("> ");
        String inputLine = reader.nextLine().trim().toLowerCase();
        
        return inputLine;
    }
}`} /> 
          <h3 className={CN.BLOGH3}>Penjelasan Kode</h3>
          <p className={CN.BLOGP + CN.BLOGCODE}>
            Kode di atas adalah implementasi dari kelas <code>InputReader</code> yang bertanggung jawab untuk membaca input dari pengguna. Kelas ini menggunakan <code>Scanner</code> untuk membaca input dari <code>System.in</code>. Metode <code>getInput()</code> akan meminta pengguna untuk memasukkan teks, dan kemudian mengembalikan teks tersebut setelah menghapus spasi di awal dan akhir serta mengubahnya menjadi huruf kecil.
          </p>
          <CodeBlock languageItem="java" file="Responder.java" codeItems={`import java.util.HashMap;
import java.util.ArrayList;
import java.util.Random;

public class Responder { 
    private HashMap<String, String> responseMap;
    private ArrayList<String> defaultResponses;
    private Random randomGenerator;

    public Responder() {
        responseMap = new HashMap<>();
        defaultResponses = new ArrayList<>();
        fillResponseMap();
        fillDefaultResponses();
        randomGenerator = new Random();
    }

    public String generateResponse(String inputLine) {
        String response = responseMap.get(inputLine);
        if(response != null) return response;
        else return pickDefaultResponse();
    }

    private void fillResponseMap() {
        responseMap.put("tidak bisa akses frs", "Pastikan Anda mengakses FRS sesuai jadwal yang telah ditentukan.\\n" + "Jika masih terkendala, hubungi Bantuan Akademik.\\n");
        responseMap.put("kuota penuh", "Kuota mata kuliah tersebut sudah penuh. Anda dapat mencari kelas lain dengan jadwal berbeda.\\n" + "Anda juga bisa menghubungi dosen wali atau departemen terkait kemungkinan penambahan kuota.\\n");
        responseMap.put("gagal login", "Login gagal. Mohon periksa kembali username dan password Anda.\\n" + "Jika Anda lupa password, silakan gunakan fitur 'Lupa Password'.\\n");
        responseMap.put("menambah mata kuliah", "Silahkan masuk ke menu 'Pengisian FRS', cari mata kuliah yang diinginkan, \\n" + "lalu klik tombol 'Ambil' pada kelas yang tersedia.\\n");
        responseMap.put("drop mata kuliah", "Masuk ke daftar mata kuliah yang sudah Anda ambil di laman FRS,\\n" + "kemudian klik tombol 'Drop'. Perhatikan batas waktu drop mata kuliah yang berlaku.\\n");
        responseMap.put("frs belum disetujui", "Status FRS Anda masih 'Menunggu Persetujuan'. Silakan hubungi Dosen Wali Anda\\n " + "untuk meminta persetujuan agar FRS dapat segera diproses.\\n");
        responseMap.put("info", "Jadwal pengisian FRS semester ini adalah dari 10 Agustus 2025 hingga 14 Agustus 2025.\\n" + "Untuk panduan lengkap dan informasi lebih lanjut, silakan kunjungi laman akademik.\\n");
        responseMap.put("jadwal bentrok", "Sistem mendeteksi adanya jadwal yang bentrok. Anda tidak bisa mengambil dua mata kuliah pada waktu yang bersamaan. \\n" + "Silakan pilih kelas lain untuk salah satu mata kuliah tersebut.\\n");
        responseMap.put("kuota kelas", "Anda dapat melihat sisa kuota yang tersedia pada setiap kelas saat melakukan pencarian mata kuliah. \\n" + "Informasi kuota biasanya ditampilkan dalam format 'Terisi / Total Kuota' (contoh: 12/40).\\n");
        responseMap.put("ipk kurang", "Jumlah SKS maksimal yang dapat Anda ambil bergantung pada IPK semester sebelumnya. \\n" + "Jika IPK Anda tidak memenuhi syarat untuk jumlah SKS yang Anda pilih, sistem akan menolaknya.\\n" + "Silakan konsultasi dengan Dosen Wali Anda.\\n");
    }

    private void fillDefaultResponses() {
        defaultResponses.add("Maaf, saya tidak mengerti maksud Anda. Bisa gunakan kata kunci yang lebih spesifik?");
        defaultResponses.add("Saya kurang paham dengan pertanyaan Anda. Mohon coba ulangi dengan kalimat yang berbeda.");
        defaultResponses.add("Hmm, sepertinya kata kunci tersebut tidak ada dalam sistem kami. Mungkin Anda bisa mencoba kata lain?");
        defaultResponses.add("Input Anda tidak dikenali. Silakan coba lagi atau gunakan kata kunci bantuan seperti 'Info'.");
        defaultResponses.add("Perintah yang Anda masukkan tidak valid. Silakan merujuk pada daftar perintah yang tersedia.");
        defaultResponses.add("Maaf, sistem tidak dapat memproses permintaan Anda. Pastikan input yang Anda berikan sudah benar.");
        defaultResponses.add("Wah, sepertinya itu di luar jangkauan saya. Ada lagi yang bisa dibantu terkait FRS?");
        defaultResponses.add("Aduh, saya tidak ketemu jawaban untuk itu. Coba tanya tentang 'jadwal' atau 'kuota' mungkin?");
        defaultResponses.add("Saya rasa saya butuh informasi lebih lanjut mengenai itu.");
    }

    private String pickDefaultResponse() {
        int index = randomGenerator.nextInt(defaultResponses.size());
        return defaultResponses.get(index);
    }
}`} />
          <h3 className={CN.BLOGH3}>Penjelasan Kode</h3>
          <p className={CN.BLOGP + CN.BLOGCODE}>
            Kode di atas adalah implementasi dari kelas <code>Responder</code> yang bertanggung jawab untuk menghasilkan respons berdasarkan input pengguna. Kelas ini menggunakan <code>HashMap</code> untuk menyimpan pasangan pertanyaan dan jawaban, serta <code>ArrayList</code> untuk menyimpan respons default jika pertanyaan tidak ditemukan dalam peta respons. Kelas ini juga menggunakan <code>Random</code> untuk memilih respons default secara acak.
            <br /><br />
            Metode <code>generateResponse(String inputLine)</code> akan mencari respons yang sesuai dalam peta respons. Jika ditemukan, respons tersebut akan dikembalikan; jika tidak, metode akan memanggil <code>pickDefaultResponse()</code> untuk mendapatkan respons default secara acak.
            <br /><br />
            Metode <code>fillResponseMap()</code> mengisi peta respons dengan pasangan pertanyaan dan jawaban yang telah ditentukan. Metode <code>fillDefaultResponses()</code> mengisi daftar respons default dengan beberapa pilihan yang telah ditentukan.
            <br /><br />
            Metode <code>pickDefaultResponse()</code> menggunakan objek <code>Random</code> untuk memilih indeks acak dari daftar respons default dan mengembalikan respons yang sesuai.
          </p>
          <CodeBlock languageItem="java" file="SupportSystem.java" codeItems={`public class SupportSystem {
    private InputReader reader;
    private Responder responder;
    
    public SupportSystem() {
        reader = new InputReader();
        responder = new Responder();
    }

    public static void main(String[] Args) {
        SupportSystem app = new SupportSystem();
        app.run();
    }

    public void run() {
        boolean finished = false;
        printWelcome();

        while(!finished) {
            String input = reader.getInput();

            if(input.equals("selesai")) finished = true;
            else {
                String response = responder.generateResponse(input);
                System.out.println(response);
            }
        }
        printGoodbye();
    }

    private void printWelcome() {
        System.out.println("==============================================");
        System.out.println("Selamat Datang di Sistem Bantuan Akademik");
        System.out.println("==============================================");
        System.out.println();
        System.out.println("Silakan sampaikan kendala atau pertanyaan Anda.");
        System.out.println("Kami siap membantu menyelesaikan masalah yang Anda hadapi.");
        System.out.println("Ketik 'selesai' untuk keluar dari sistem.");
    }

    private void printGoodbye() {
        System.out.println("Senang berbicara dengan anda...");
    }
}`} />
          <h3 className={CN.BLOGH3}>Penjelasan Kode</h3>
          <p className={CN.BLOGP + CN.BLOGCODE}>
            Kode di atas adalah implementasi dari kelas <code>SupportSystem</code> yang merupakan inti dari aplikasi tech support system. Kelas ini menggabungkan <code>InputReader</code> dan <code>Responder</code> untuk membaca input pengguna dan menghasilkan respons yang sesuai.
            <br /><br />
            Konstruktor <code>SupportSystem()</code> menginisialisasi objek <code>InputReader</code> dan <code>Responder</code>.
            <br /><br />
            Metode <code>main(String[] Args)</code> adalah titik masuk aplikasi. Metode ini membuat instance dari <code>SupportSystem</code> dan memanggil metode <code>run()</code>.
            <br /><br />
            Metode <code>run()</code> menjalankan loop utama aplikasi. Pertama, metode ini mencetak pesan sambutan dengan memanggil <code>printWelcome()</code>. Kemudian, dalam loop while, metode ini terus membaca input dari pengguna menggunakan <code>reader.getInput()</code>. Jika pengguna memasukkan &quot;selesai&quot;, loop akan berhenti dan aplikasi akan keluar. Jika tidak, metode ini akan menghasilkan respons menggunakan <code>responder.generateResponse(input)</code> dan mencetak respons tersebut ke konsol.
            <br /><br />
            Metode <code>printWelcome()</code> mencetak pesan sambutan yang memberikan informasi kepada pengguna tentang cara menggunakan sistem. Metode <code>printGoodbye()</code> mencetak pesan perpisahan saat pengguna keluar dari sistem. <br /><br />
          </p>
          <h2 className={CN.BLOGH2}>Hasil</h2>
          <h3 className={CN.BLOGH3}>Greeting Screen</h3>
          <Image src="/blog/tech-support-system/welcome.png" alt="Welcome" width={409} height={182} />
          <h3 className={CN.BLOGH3}><br />Responses</h3>
          <Image src="/blog/tech-support-system/responses.png" alt="Responses" width={425} height={604} />
          <h3 className={CN.BLOGH3}><br />Closing Screen</h3>
          <Image src="/blog/tech-support-system/closing.png" alt="Closing" width={317} height={53} />
          <h2 className={CN.BLOGH2}><br />Kesimpulan</h2>
          <p className={CN.BLOGP}>
            Dengan menggunakan library yang tersedia di Java, kita dapat dengan mudah membuat tech support system yang sederhana namun efektif. Kode di atas menunjukkan bagaimana kita dapat menggabungkan berbagai komponen seperti pembaca input, penghasil respons, dan logika aplikasi utama untuk menciptakan sistem dukungan teknis yang dapat membantu pengguna dengan pertanyaan dan masalah mereka. Dengan pendekatan ini, kita dapat memperluas dan menyesuaikan sistem sesuai kebutuhan, menambahkan lebih banyak respons, atau mengintegrasikan fitur tambahan untuk meningkatkan pengalaman pengguna.
          </p>
        </div>
        <hr className={CN.BLOGHR}></hr> 
      </div>
      <BlogFooter />
    </div>
  )
}