import BlogFooter from "@components/BlogFooter";
import BlogHeader from "@components/BlogHeader";
import CodeBlock from "@/components/CodeBlock";
import * as CN from "@components/BlogConstants";
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Membuat Online Shop dengan Testing Menggunakan Java",
  description: "Membuat aplikasi online shop menggunakan Java dengan pendekatan test-driven development",
  icons: "/web-icon.png"
};

export default function Template() {
  return (
    <div id="top" className={CN.BLOGTOP}>
      <BlogHeader date="3 November 2025" readTime="10" title="Membuat Online Shop dengan Testing Menggunakan Java" description="Membuat aplikasi online shop menggunakan Java dengan pendekatan test-driven development" imageLink="/blog/online-shop-project/blog-cover.jpg" />
      <div className={CN.BLOGDIV}>
        <hr className={CN.BLOGHR}></hr>
        <div className={CN.BLOGCONTENTS}>
          <h2 className={CN.BLOGH2}>Important Link</h2>
          <p className={CN.BLOGP}>
            <a href="https://github.com/irfansandyy/university-projects/tree/main/object-oriented-programming/online-shop-project" target="_blank" rel="noopener noreferrer" className={CN.BLOGU}>GitHub Repository Here</a>
          </p>
          <h2 className={CN.BLOGH2}>Pengantar</h2>
          <p className={CN.BLOGP}>
            Testing adalah salah satu aktivitas yang harus dilakukan sebagai bagian dari tahap pembangunan perangkat lunak. Tujuannya adalah untuk mencari sebanyak-banyaknya kesalahan, error maupun defect. Testing dilakukan dengan mengacu pada test plan dan test cases. Idealnya, testing dilakukan oleh tester, bukan oleh programmer, sehingga lebih obyektif. <br /><br />
            Debugging adalah aktivitas yang dilakukan untuk mencari posisi kesalahan dan memperbaikinya apabila dari hasil testing diperoleh indikasi adanya error atau defect. Debugging biasanya dilakukan oleh programmer-nya. Debugging bisa sangat menghabiskan waktu. Untuk itu, perlu diterapkan cara dan strategi yang tepat. Kita bisa memilih satu dari tiga cara: <br />
          </p>
          <ul className={CN.BLOGUL}>
            <li>Brute force: biasanya kita tambahkan print atau write dimana-mana untuk melacak kesalahan</li>
            <li>Backtracking: source code dianalisis untuk mencari kemungkinan penyebab kesalahan; bergerak dari suatu posisi hingga akhirnya ditemukan posisi kesalahannya</li>
            <li>Cause elimination: menggunakan partisi biner terhadap bagian program untuk memperkecil kemungkinan posisi kesalahan</li>
          </ul>
          <h2 className={CN.BLOGH2}><br />Kode Program</h2>
          <p className={CN.BLOGP}>
            Berikut adalah kode lengkap untuk membuat online shop dan testing sederhana menggunakan library yang tersedia di Java:
          </p>
          <CodeBlock languageItem="java" file="Comment.java" codeItems={`public class Comment {
    private String author;
    private String text;
    private int rating;
    private int upvotes;
    private int downvotes;
    
    public Comment(String author, String text, int rating) {
        this.author = author;
        this.text = text;
        this.rating = rating;
        this.upvotes = 0;
        this.downvotes = 0;
    }
    
    public String getAuthor() {
        return author;
    }
    
    public String getText() {
        return text;
    }
    
    public int getRating() {
        return rating;
    }
    
    public int getUpvotes() {
        return upvotes;
    }
    
    public int getDownvotes() {
        return downvotes;
    }

    public int getVoteCount() {
        return upvotes - downvotes;
    }

    public void upvote() {
        upvotes++;
    }

    public void downvote() {
        downvotes++;
    }
    
    public String getFullDetails() {
        return "Author: " + author + "\\nRating: " + rating + "\\nComment: " + text + "\\nUpvotes: " + upvotes + "\\nDownvotes: " + downvotes;
    }
}`} />
          <h3 className={CN.BLOGH3}>Penjelasan Kode</h3>
          <p className={CN.BLOGP}>
            Kode di atas mendefinisikan kelas Comment yang merepresentasikan komentar pada item penjualan di online shop. Kelas ini memiliki atribut untuk menyimpan informasi tentang penulis komentar, teks komentar, rating, jumlah upvote, dan jumlah downvote. <br /><br />
            Kelas ini juga menyediakan metode untuk mendapatkan informasi tersebut, menambah upvote dan downvote, serta mendapatkan detail lengkap komentar. <br /><br />
            Dengan menggunakan kelas Comment ini, kita dapat membuat sistem komentar yang memungkinkan pengguna untuk memberikan ulasan dan menilai item penjualan di online shop.
          </p>
          <CodeBlock languageItem="java" file="SalesItem.java" codeItems={`import java.util.ArrayList;
import java.util.Iterator;

public class SalesItem {
    private String name;
    private int price;
    private ArrayList<Comment> comments;
    
    public SalesItem(String name, int price) {
        this.name = name;
        this.price = price;
        comments = new ArrayList<Comment>();
    }
    
    public String getName() {
        return name;
    }
    
    public int getPrice() {
        return price;
    }
    
    public int getNumberOfComments() {
        return comments.size();
    }
    
    public boolean addComment(String author, String text, int rating) {
        if (ratingInvalid(rating)) return false;
        if (findCommentByAuthor(author) != null) return false;
        comments.add(new Comment(author, text, rating));
        return true;
    }
    
    public void removeComment(int index) {
        if (index >= 0 && index < comments.size()) comments.remove(index);
    }
    
    public void upvoteComment(int index) {
        if (index >= 0 && index < comments.size()) comments.get(index).upvote();
    }
    
    public void downvoteComment(int index) {
        if (index >= 0 && index < comments.size()) comments.get(index).downvote();
    }
    
    public void showInfo() {
        System.out.println("*** " + name + " ***");
        System.out.println("Price: " + priceString(price));
        System.out.println();
        System.out.println("Customer comments:");
        for (Comment comment : comments) {
            System.out.println("-----------------------------------");
            System.out.println(comment.getFullDetails());
        }
        System.out.println();
        System.out.println("=====================================");
    }
    
    public Comment findMostHelpfulComment() {
        Iterator<Comment> it = comments.iterator();
        Comment best = it.next();
        while (it.hasNext()) {
            Comment current = it.next();
            if (current.getVoteCount() > best.getVoteCount()) {
                best = current;
            }
        }
        return best;
    }
    
    private boolean ratingInvalid(int rating) {
        return rating < 1 || rating > 5;
    }
    
    public Comment findCommentByAuthor(String author) {
        for (Comment comment : comments) {
            if (comment.getAuthor().equals(author)) {
                return comment;
            }
        }
        return null;
    }
    
    public Comment findCommentByText (String text) {
        for (Comment comment : comments) {
            if (comment.getText().equals(text)) {
                return comment;
            }
        }
        return null;
    }
    
    private String priceString(int price) {
        int dollars = price / 100;
        int cents = price - (dollars * 100);
        if (cents <= 9) return "$" + dollars + ".0" + cents;
        else return "$" + dollars + "." + cents;
    }
}`} />
          <h3 className={CN.BLOGH3}>Penjelasan Kode</h3>
          <p className={CN.BLOGP}>
            Kode di atas mendefinisikan kelas SalesItem yang merepresentasikan item penjualan di online shop. Kelas ini memiliki atribut untuk menyimpan nama item, harga item, dan daftar komentar yang terkait dengan item tersebut. <br /><br />
            Kelas ini juga menyediakan metode untuk mendapatkan informasi tentang item, menambahkan komentar baru, menghapus komentar, memberikan upvote dan downvote pada komentar, menampilkan informasi item beserta komentarnya, serta mencari komentar yang paling membantu berdasarkan jumlah suara. <br /><br />
            Dengan menggunakan kelas SalesItem ini, kita dapat membuat sistem penjualan online shop yang memungkinkan pengguna untuk memberikan ulasan dan menilai item penjualan.
          </p>
          <CodeBlock languageItem="java" file="SalesItemTest.java" codeItems={`import static org.junit.Assert.*;
import org.junit.After;
import org.junit.Before;
import org.junit.Test;

public class SalesItemTest
{
    public SalesItemTest(){}

    @Before
    public void setUp() {}
    
    @After
    public void tearDown() {}
    
    @Test
    public void testAddComment()
    {
        SalesItem salesIte1 = new SalesItem("Item1", 12999);
        assertEquals(true, salesIte1.addComment("Felix", "Absolutely loved it", 5));
        assertEquals(1, salesIte1.getNumberOfComments());
    }

    @Test
    public void testIllegalRating()
    {
        SalesItem salesIte1 = new SalesItem("Item1", 12999);
        assertEquals(false, salesIte1.addComment("BadUser", "Terrible product", 0));
    }

    @Test
    public void testDuplicateAuthor()
    {
        SalesItem salesIte1 = new SalesItem("Item1", 12999);
        assertEquals(true, salesIte1.addComment("Felix", "Absolutely loved it", 5));
        assertEquals(false, salesIte1.addComment("Felix", "Could be better", 3));
    }

    @Test
    public void testInit()
    {
        SalesItem salesIte1 = new SalesItem("Sample Item", 1500);
        assertEquals("Sample Item", salesIte1.getName());
        assertEquals(1500, salesIte1.getPrice());
    }

    @Test
    public void addComment()
    {
        SalesItem salesIte1 = new SalesItem("Advanced Gardening Guide", 4999);
        assertEquals(true, salesIte1.addComment("Sam", "Easy to follow, my plants thrive!", 4));
    }
}`} />
          <h3 className={CN.BLOGH3}>Penjelasan Kode</h3>
          <p className={CN.BLOGP}>
            Kode di atas adalah kelas pengujian (test class) untuk kelas SalesItem menggunakan framework JUnit. Kelas ini berisi beberapa metode pengujian yang memverifikasi fungsionalitas dari kelas SalesItem. <br /><br />
            Setiap metode pengujian diawali dengan anotasi @Test, yang menandakan bahwa metode tersebut adalah sebuah pengujian. Metode-metode ini menggunakan berbagai assert statements untuk memeriksa apakah hasil yang diperoleh sesuai dengan yang diharapkan. <br /><br />
            Dengan menjalankan kelas pengujian ini, kita dapat memastikan bahwa kelas SalesItem berfungsi dengan benar dan sesuai dengan spesifikasi yang diinginkan.
          </p>
          <h2 className={CN.BLOGH2}><br />Hasil</h2>
          <h3 className={CN.BLOGH3}>Struktur Proyek</h3>
          <Image src="/blog/online-shop-project/project-structure.png" alt="Structure" width={795} height={592} />
          <h3 className={CN.BLOGH3}><br />Hasil Testing</h3>
          <Image src="/blog/online-shop-project/test-results.png" alt="Testing Results" width={536} height={520} />
          <h2 className={CN.BLOGH2}><br />Kesimpulan</h2>
          <p className={CN.BLOGP}>
            Dengan menggunakan pendekatan test-driven development (TDD) dalam pengembangan aplikasi online shop menggunakan Java, kita dapat memastikan bahwa setiap fitur yang dikembangkan telah diuji secara menyeluruh sebelum diimplementasikan. <br /><br />
            Pendekatan TDD membantu meningkatkan kualitas kode, mengurangi bug, dan memastikan bahwa aplikasi berfungsi sesuai dengan kebutuhan pengguna. Selain itu, dengan menulis tes terlebih dahulu, kita dapat lebih fokus pada tujuan fungsionalitas yang ingin dicapai, sehingga menghasilkan kode yang lebih terstruktur dan mudah dipelihara.
          </p>
        </div>
        <hr className={CN.BLOGHR}></hr>
      </div>
      <BlogFooter />
    </div>
  )
}