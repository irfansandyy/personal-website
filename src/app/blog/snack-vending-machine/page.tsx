import BlogFooter from "@components/BlogFooter";
import BlogHeader from "@components/BlogHeader";
import CodeBlock from "@/components/CodeBlock";
import * as CN from "@components/BlogConstants";
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Snack Vending Machine",
  description: "Membuat Vending Machine yang Bisa Menambah, Menyimpan, dan Menghapus Pesanan",
  icons: "/web-icon.png"
};

export default function TechSupportSystem() {
  return (  
    <div id="top" className={CN.BLOGTOP}>
      <BlogHeader date="14 October 2025" readTime="15" title="Membuat Snack Vending Machine Menggunakan Java" description="Vending Machine yang Bisa Menambah, Menyimpan, dan Menghapus Pesanan. Dan Bisa Memproses Pembayaran" imageLink="/blog/snack-vending-machine/blog-cover.webp" />
      <div className={CN.BLOGDIV}>
        <hr className={CN.BLOGHR}></hr>
        <div className={CN.BLOGCONTENTS}>
          <h2 className={CN.BLOGH2}>Important Link</h2>
          <ul className={CN.BLOGUL}>
            <li>
              <a href="https://github.com/irfansandyy/university-projects/tree/main/object-oriented-programming/ets-vending-machine" target="_blank" rel="noopener noreferrer" className={CN.BLOGU}>GitHub Repository Here</a>
            </li>
            <li>
              <a href="https://youtu.be/kbxLKbIBZ_U?si=6EooahKepclblVQr" target="_blank" rel="noopener noreferrer" className={CN.BLOGU}>YouTube Video Here</a>
            </li>
          </ul>
          <h2 className={CN.BLOGH2}><br />Video Youtube</h2>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/kbxLKbIBZ_U?si=_M1qbPCJimM20A-B" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
          <h2 className={CN.BLOGH2}><br />Pengantar</h2>
          <p className={CN.BLOGP + CN.BLOGCODE}>
            Pada pertemuan ke 8 ini atau pertemuan ETS. Kita disuruh membuat sebuah sistem Snack Vending Machine menggunakan Java. Sistem Vending Snack Machine adalah aplikasi yang mensimulasikan mesin penjual otomatis untuk makanan dan minuman. Pengguna dapat memilih jenis produk, melakukan pembayaran, dan menerima produk yang telah disiapkan oleh mesin.
          </p>
          <h2 className={CN.BLOGH2}><br />Alur Program (Flow)</h2>
          <ul className={CN.BLOGUL}>
            <li>Mesin aktif → menampilkan menu pilihan produk.</li>
            <li>Pengguna memilih jenis produk</li>
            <li>Mesin menampilkan total harga.</li>
            <li>Pengguna melakukan pembayaran.</li>
            <li>Mesin memverifikasi pembayaran → jika cukup → mengeluarkan produk</li>
            <li>Transaksi disimpan ke log.</li>
            <li>Jika stok habis → admin diingatkan untuk refill.</li>
          </ul>
          <h2 className={CN.BLOGH2}><br />Fitur Mesin</h2>
          <p className={CN.BLOGP + CN.BLOGCODE}>
            Fitur dari Vending Machine ini adalah pengguna bisa melakukan pembelian sebuah snack berdasarkan jumlah. Admin akan diberitahu jika jumlah snack sama dengan 0. Pengguna juga bisa menghapus atau cancel snack yang akan dipesan. Dan vending machine ini bisa melakukan pembayaran dan melakukan pengembalian uang. Terakhir vending machine ini bisa menampilkan log atau sejarah pembelian pengguna.
          </p>
          <h2 className={CN.BLOGH2}><br />Gambaran Class</h2>
          <Image src="/blog/snack-vending-machine/classes.png" alt="class" width={541} height={282}/>
          <ul className={CN.BLOGUL + CN.BLOGCODE}>
            <li>Kelas <code>Product</code> memiliki deskripsi produk seperti nama produk, stock, dan harga produk</li>
            <li>Kelas <code>Transaction</code> memiliki detail mengenai sebuah transaksi seperti barang yang dibeli, jumlahnya, total harganya, dan pembayarannya</li>
            <li>Kelas <code>VendingMachine</code> merupakan inti dari sistemnya, dimana disitu tersimpan log transaksi, stok semua barang sekarang, menu untuk melakukan pembelian, penghapusan, dan pembayaran</li>
          </ul>
          <h2 className={CN.BLOGH2}><br />Output Vending Machine</h2>
          <Image src="/blog/snack-vending-machine/output.png" alt="output" width={546} height={618} />
          <h2 className={CN.BLOGH2}><br />Kode Program</h2>
          <p className={CN.BLOGP + CN.BLOGCODE}>
            Berikut adalah kode lengkap untuk membuat snack vending machine sederhana menggunakan library yang tersedia di Java:
          </p>
          <CodeBlock languageItem="java" file="Product.java" codeItems={`public class Product {
    private String name;
    private int price;
    private int stock;

    public Product(String name, int price, int stock) {
        this.name = name;
        this.price = price;
        this.stock = stock;
    }

    public String getName() {
        return name;
    }

    public int getPrice() {
        return price;
    }

    public int getStock() {
        return stock;
    }

    public boolean checkStock(int stock) {
        return this.stock >= stock;
    }

    public void addStock(int stock) {
        this.stock += stock;
    }

    public boolean reduceStock(int stock) {
        if (checkStock(stock)) {
            this.stock -= stock;
            return true;
        }
        return false;
    }
}`} /> 
          <h3 className={CN.BLOGH3}>Penjelasan Kode</h3>
          <p className={CN.BLOGP + CN.BLOGCODE}>
            Kode di atas mendefinisikan kelas Product yang merepresentasikan produk dalam vending machine. Kelas ini memiliki atribut nama, harga, dan stok produk. Ada juga metode untuk mendapatkan informasi produk, memeriksa stok, menambah stok, dan mengurangi stok. Metode checkStock memastikan bahwa stok yang diminta tersedia sebelum mengurangi stok. Metode addStock menambah jumlah stok produk, sedangkan reduceStock mengurangi stok jika stok yang diminta tersedia.
          </p>
          <CodeBlock languageItem="java" file="Transaction.java" codeItems={`import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.Scanner;

public class Transaction {
    private ArrayList<Product> orders;
    private LocalDateTime orderTime;
    private int totalPrice;

    public Transaction() {
        orders = new ArrayList<>();
        orderTime = LocalDateTime.now();
        totalPrice = 0;
    }

    public void addOrder(Product order) {
        orders.add(order);
    }

    public void removeOrder(int index) {
        orders.remove(index);
    }

    public Product getOrder(int index) {
        return orders.get(index);
    }

    public int getProductCount() {
        return orders.size();
    }

    public void printReceipt() {
        orderTime = LocalDateTime.now();
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss");
        String receipt = new String();
        totalPrice = 0;

        receipt += "\\n================== Pesanan ==================\\n";
        receipt += "Waktu Pesanan: " + orderTime.format(formatter) + "\\n";
        receipt += "=============================================\\n";
        receipt += "#\\tNama Produk\\tQty\\tHarga\\tTotal Harga\\n";

        for (int i = 0; i < orders.size(); i++) {
            Product p = orders.get(i);
            int productTotalPrice = p.getPrice() * p.getStock();
            totalPrice += productTotalPrice;
            receipt += (i + 1) + "\\t" + p.getName() + "\\t" + p.getStock() + "\\t" + p.getPrice() + "\\t" + productTotalPrice + "\\n";
        }

        receipt += "=============================================";
        receipt += "\\nTotal: \\t\\t\\t" + totalPrice + "\\n";
        receipt += "=============================================";
        System.out.println(receipt);
    }

    public void pay(Scanner scanner) {
        printReceipt();
        int money = 0;
        boolean isPaying = true;
        while(isPaying) {
            System.out.print("Masukkan Uang (0 untuk cancel): ");
            int inputMoney = scanner.nextInt();
            if(inputMoney <= 0) {
                System.out.println("Terimakasih telah mengunakan Monster Mart");
                if(money >= 0) System.out.println("Uang sebesar " + money + " telah dikembalikan");
                isPaying = false;
                break;
            } else money += inputMoney;
            if(totalPrice <= money) {
                System.out.println("Pembayaran anda berhasil");
                if(money - totalPrice != 0) System.out.println("Kembalian anda: " + (money - totalPrice));
                isPaying = false;
                break;
            } else System.out.println("Uang kurang" + (totalPrice - money) + ", silahkan masukkan uang lagi");
        }
    }
}`} />
          <h3 className={CN.BLOGH3}>Penjelasan Kode</h3>
          <p className={CN.BLOGP + CN.BLOGCODE}>
            Kode di atas mendefinisikan kelas Transaction yang merepresentasikan sebuah transaksi pembelian dalam vending machine. Kelas ini memiliki atribut orders (daftar produk yang dipesan), orderTime (waktu pesanan dibuat), dan totalPrice (total harga pesanan). Ada metode untuk menambah dan menghapus pesanan, mendapatkan pesanan berdasarkan indeks, dan mendapatkan jumlah produk yang dipesan. Metode printReceipt mencetak struk pesanan dengan detail produk, jumlah, harga, dan total harga. Metode pay menangani proses pembayaran, meminta pengguna untuk memasukkan uang, memeriksa apakah uang yang dimasukkan cukup, dan memberikan kembalian jika diperlukan.
          </p>
          <CodeBlock languageItem="java" file="VendingMachine.java" codeItems={`import java.util.ArrayList;
import java.util.Scanner;

public class VendingMachine {
    private ArrayList<Product> products;
    private ArrayList<Transaction> transactions;

    public VendingMachine() {
        this.products = new ArrayList<>();
        this.transactions = new ArrayList<>();
        initializeProducts();
    }

    public static void main(String[] args) {
        VendingMachine monsterMart = new VendingMachine();
        monsterMart.run();
    }

    public Product findProductByName(String name) {
        for (Product p : products) if (p.getName().equals(name)) return p;
        return null;
    }

    public void initializeProducts() {
        products.add(new Product("Air Putih", 6000, 20));
        products.add(new Product("Teh Botol", 7000, 15));
        products.add(new Product("Nescafe Kaleng", 8000, 12));
        products.add(new Product("Pocari Sweat", 10000, 10));
        products.add(new Product("Buavita", 9000, 8));
        products.add(new Product("Chitato Lite", 6000, 10));
        products.add(new Product("Roma Kelapa", 10000, 12));
        products.add(new Product("Silverqueen", 20000, 10));
        products.add(new Product("Roma Sari Gandum", 8000, 15));
        products.add(new Product("Sari Roti", 6000, 14));
    }

    public void printMenu() {
        String menu = new String();

        menu += "\\n\\n" + "=============== Menu ===============" + "\\n";
        menu += "#\\tNama Produk\\tStock\\tHarga\\n";

        for (int i = 0; i < products.size(); i++) {
            Product p = products.get(i);
            menu += (i + 1) + "\\t" + p.getName() + "\\t" + p.getStock() + "\\t" + p.getPrice() + "\\n";
        }

        menu += "====================================\\n";
        menu += "Pilih dari (1 - " + products.size() + ") ketik 0 untuk balik ke menu: ";
        System.out.print(menu);
    }

    public void processOrder(Scanner scanner) {
        boolean isOrdering = true;
        Transaction transaction = new Transaction();
        int orderSelection;
        while(isOrdering) {
            transaction.printReceipt();
            System.out.print("1. Tambah Pesanan\\n2. Hapus Pesanan\\n3. Bayar Pesanan\\n4. Batal\\nPilih dari (1-4): ");
            orderSelection = scanner.nextInt();
            int menuSelection;
            switch (orderSelection) {
                case 1:
                    boolean ordering = true;
                    while(ordering) {
                        int count = 0;
                        transaction.printReceipt();
                        printMenu();
                        menuSelection = scanner.nextInt();
                        if(menuSelection < 0 || menuSelection > products.size()) {
                            System.out.println("Pilihan tidak valid, silahkan coba lagi");
                            continue;
                        }
                        if(menuSelection == 0) {
                            ordering = false;
                            break;
                        }
                        Product p = products.get(menuSelection - 1);
                        System.out.print("Jumlah: ");
                        count = scanner.nextInt();
                        if(count <= 0) {
                            System.out.println("Jumlah tidak valid, silahkan cobal lagi");
                            continue;
                        } else if(!p.checkStock(count)) {
                            System.out.println("Stok tidak mencukupi, coba pesan lagi");
                            continue;
                        } else {
                            transaction.addOrder(new Product(p.getName(), p.getPrice(), count));
                            p.reduceStock(count);
                        }
                        if(p.getStock() == 0) System.out.println("\\nProduk " + p.getName() + " habis, segera isi stok\\n");
                    }
                    break;
                case 2:
                    boolean removing = true;
                    while(removing) {
                        transaction.printReceipt();
                        System.out.print("Pilih dari (1 - " + transaction.getProductCount() + ") ketik 0 untuk balik ke menu: ");
                        menuSelection = scanner.nextInt(); 
                        if(menuSelection < 0 || menuSelection > transaction.getProductCount()) {
                            System.out.println("Pilihan tidak valid, silahkan coba lagi");
                            continue;
                        }
                        if(menuSelection == 0) {
                            removing = false;
                            break;
                        }
                        Product p = transaction.getOrder(menuSelection - 1);
                        findProductByName(p.getName()).addStock(p.getStock());
                        p = null;
                        transaction.removeOrder(menuSelection - 1);
                    }
                    break;
                case 3:
                    transaction.pay(scanner);
                    transactions.add(transaction);
                    isOrdering = false;
                    break;
                case 4:
                    isOrdering = false;
                    break;
                default:
                    System.out.println("Pilihan tidak valid, silahkan coba lagi");
                    break;
            }
        }
    }

    public void showLog() {
        System.out.println("\\n=============== Log Transaksi ===============");

        if (transactions.isEmpty()) System.out.println("Belum ada transaksi yang tercatat.");
        else {
            for (Transaction t : transactions) {
                t.printReceipt();
            }
        }
        System.out.println("\\n\\n=============================================\\n");
    }

    public void run() {
        Scanner scanner = new Scanner(System.in);
        boolean isRunning = true;

        while(isRunning) {
            System.out.println("\\n\\n========== Monster Mart ==========");
            System.out.println("1. Pesan Produk");
            System.out.println("2. Lihat log transaksi");
            System.out.println("3. Keluar");
            System.out.println("==================================");
            System.out.print("Pilihan dari (1-3): ");
            
            int mainMenuSelection = scanner.nextInt();

            switch (mainMenuSelection) {
                case 1:
                    processOrder(scanner);
                    break;
                case 2:
                    showLog();
                    break;
                case 3:
                    isRunning = false;
                    System.out.println("\\nTerima kasih telah menggunakan Monster Mart!");
                    break;
                default:
                    System.out.println("Pilihan tidak valid, silakan coba lagi.");
                    break;
            }
        }
        scanner.close();
    }
}`} />
          <h3 className={CN.BLOGH3}>Penjelasan Kode</h3>
          <p className={CN.BLOGP + CN.BLOGCODE}>
            Kode di atas mendefinisikan kelas VendingMachine yang merupakan inti dari sistem vending machine. Kelas ini memiliki atribut products (daftar produk yang tersedia) dan transactions (daftar transaksi yang telah dilakukan). Ada metode untuk menginisialisasi produk, menampilkan menu produk, memproses pesanan, menampilkan log transaksi, dan menjalankan aplikasi. Metode main adalah titik masuk aplikasi yang membuat instance VendingMachine dan memulai proses dengan memanggil metode run. Metode run menampilkan menu utama, memungkinkan pengguna untuk memilih antara memesan produk, melihat log transaksi, atau keluar dari aplikasi. Metode processOrder menangani proses pemesanan, termasuk menambah, menghapus, dan membayar pesanan. Metode showLog menampilkan semua transaksi yang telah dilakukan.
          </p>
          <h2 className={CN.BLOGH2}><br />Kesimpulan</h2>
          <p className={CN.BLOGP + CN.BLOGCODE}>
            Dengan menggunakan library yang tersedia di Java, kita dapat dengan mudah membuat snack vending machine yang sederhana namun efektif. Kode di atas menunjukkan bagaimana kita dapat menggabungkan berbagai komponen seperti pembaca input, array list, dan looping untuk membuat simulasi sebuah snack vending machine. Dengan pendekatan ini, kita dapat memperluas dan menyesuaikan sistem sesuai kebutuhan, menambah banyak fitur, atau mengintegrasikan fitur tambahan untuk meningkatkan pengalaman pengguna.
          </p>
        </div>
        <hr className={CN.BLOGHR}></hr> 
      </div>
      <BlogFooter />
    </div>
  )
}