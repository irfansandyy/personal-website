import BlogFooter from "@components/BlogFooter";
import BlogHeader from "@components/BlogHeader";
import CodeBlock from "@/components/CodeBlock";
import Image from "next/image";
import * as CN from "@components/BlogConstants";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Proyek Ticket Machine",
  description: "Membuat sebuah Ticket Machine dengan bahasa Java"
};

export default function ProyekTicketMachine() {
  return (
    <div id="top" className={CN.BLOGTOP}>
      <BlogHeader date="9 September 2025" readTime="10" title="Proyek Ticket Machine dengan Java" description="Membuat sebuah Ticket Machine simpel dengan menggunakan Java" imageLink="/blog/project-ticket-machine/blog-cover.jpg" />
      <div className={CN.BLOGDIV}>
        <hr className={CN.BLOGHR}></hr>
        <div className={CN.BLOGCONTENTS}>
          <h2 className={CN.BLOGH2}>Pengenalan</h2>
          <p className={CN.BLOGP}>
            Java merupakan bahasa yang sangat populer dan termasuk bahasa yang tahan terhadap waktu karena bentuknya yaitu object oriented dan juga karena ekosistemnya yang luas. Dengan paradigma pemrograman berorientasi objek, Java memudahkan pengembangan aplikasi yang terstruktur dan mudah dipelihara. Pada proyek ini, kita akan membuat sebuah Ticket Machine sederhana menggunakan Java untuk memahami konsep dasar seperti class, objek, dan method.
            <br /><br />
            Pada bagian ini, kita akan mempelajari cara mendefinisikan field (price, balance, total), menulis konstruktor yang memvalidasi input, membuat method akses (getter/setter) serta perilaku inti (insertMoney, printTicket), dan menambahkan validasi sederhana untuk mencegah nilai negatif.
            <br /><br />
            Di bawah ini adalah implementasi lengkapnya:
          </p>
          <h2 className={CN.BLOGH2}><br />Source Code</h2>
          <CodeBlock languageItem="java" file="TicketMachine.java" codeItems=
{`public class TicketMachine {
    private int price;
    private int balance;
    private int total;

    public static void main(String[] args) {
        TicketMachine konser = new TicketMachine(20);
        konser.insertMoney(20);
        konser.printTicket();
    }

    public TicketMachine(int ticketCost) {
        if (ticketCost > 0) {
            price = ticketCost;
        } else {
            price = 20;
        }
        balance = 0;
        total = 0;
    }

    public int getPrice() {
        return price;
    }

    public int getBalance() {
        return balance;
    }

    public void setBalance(int amount) {
        if (amount > 0) balance = amount;
    }

    public void insertMoney(int amount) {
        if (amount > 0) balance = balance + amount;
        else System.out.println("Use a positive amount: " + amount);
    }

    public void printTicket() {
        if (balance >= price) {
            System.out.println("##################");
            System.out.println("# The Java Line");
            System.out.println("# Ticket");
            System.out.println("# " + price + " cents.");
            System.out.println("##################");
            System.out.println();

            total = total + balance;
            balance = balance - price;
        } else {
            System.out.println("You must insert at least: " + (price - balance) + " more cents.");
        }
    }
}`} />
          <h2 className={CN.BLOGH2}><br />Penjelasan Kode</h2>
          <p className={CN.BLOGP + CN.BLOGCODE}>
            <strong>Gambaran umum:</strong> TicketMachine menyimpan <code>price</code> (harga tiket), <code>balance</code> (uang yang dimasukkan), dan <code>total</code> (uang terkumpul). Field dibuat privat untuk enkapsulasi; akses melalui method publik.
            <br /><br />
            <strong>main:</strong> Contoh pemakaian: membuat mesin dengan harga 20, memasukkan 20, lalu mencetak tiket.
            <br /><br />
            <strong>Konstruktor:</strong> Menerima <code>ticketCost</code>. Jika &gt; 0, set ke <code>price</code>, jika tidak gunakan default 20. <code>balance</code> dan <code>total</code> diinisialisasi 0.
            <br /><br />
            <strong>Aksesors:</strong> <code>getPrice()</code> dan <code>getBalance()</code> mengembalikan nilai saat ini. <code>setBalance(int amount)</code> hanya mengubah saldo jika <code>amount</code> positif.
            <br /><br />
            <strong>insertMoney(int amount):</strong> Menambah <code>balance</code> jika <code>amount</code> positif; jika tidak, menampilkan pesan peringatan.
            <br /><br />
            <strong>printTicket():</strong> Jika <code>balance ≥ price</code>, mencetak tiket (ASCII), lalu mengurangi <code>balance</code> sebesar <code>price</code> dan menambah <code>total</code>. Jika saldo kurang, menampilkan jumlah kekurangan.
            <br /><br />
            <strong>Catatan:</strong> Secara logis, <code>total</code> sebaiknya ditambah dengan <code>price</code> per tiket (bukan <code>balance</code>) agar hanya harga tiket yang dicatat sebagai pemasukan transaksi.
          </p>
          <h2 className={CN.BLOGH2}><br />Hasil</h2>
          <p className={CN.BLOGP}>
            Saat menjalankan program, output yang dihasilkan adalah sebagai berikut (asumsi harga tiket adalah 20 dan kita memasukkan 20):
          </p>
          <Image src="/blog/project-ticket-machine/hasil-run.png" alt="Output Ticket Machine" width={680} height={159} />
          <h2 className={CN.BLOGH2}><br />Kesimpulan</h2>
          <p className={CN.BLOGP}>
            Proyek TicketMachine menunjukkan penerapan dasar OOP di Java melalui enkapsulasi field, konstruktor yang memvalidasi input, dan metode yang merepresentasikan perilaku objek (insertMoney, printTicket). Contoh ini memberi fondasi untuk pengembangan fitur lanjutan seperti validasi yang lebih ketat, transaksi berulang, pengembalian kembalian, serta pencatatan pemasukan yang akurat (menambah total sebesar price per tiket). Ke depan, solusi dapat ditingkatkan dengan antarmuka pengguna dan pengujian unit agar lebih andal dan mudah dipelihara.
          </p>
        </div>
        <hr className={CN.BLOGHR}></hr>
      </div>
      <BlogFooter />
    </div>
  )
}