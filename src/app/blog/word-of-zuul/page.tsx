import BlogFooter from "@components/BlogFooter";
import BlogHeader from "@components/BlogHeader";
import CodeBlock from "@/components/CodeBlock";
import * as CN from "@components/BlogConstants";
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Word of Zuul",
  description: "Membuat sebuah game petualangan berbasis teks sederhana menggunakan bahasa pemrograman java",
  icons: "/web-icon.png"
};

export default function WordOfZuul() {
  return (
    <div id="top" className={CN.BLOGTOP}>
      <BlogHeader date="27 October 2025" readTime="20" title="Word of Zuul" description="Membuat sebuah game petualangan berbasis teks sederhana menggunakan bahasa pemrograman java" imageLink="/blog/word-of-zuul/blog-cover.jpeg" />
      <div className={CN.BLOGDIV}>
        <hr className={CN.BLOGHR}></hr>
        <div className={CN.BLOGCONTENTS}>
        <h2 className={CN.BLOGH2}>Important Link</h2>
          <p className={CN.BLOGP}>
            <a href="https://github.com/irfansandyy/university-projects/tree/main/object-oriented-programming/word-of-zuul" target="_blank" rel="noopener noreferrer" className={CN.BLOGU}>GitHub Repository Here</a>
          </p>
          <h2 className={CN.BLOGH2}>Pengantar</h2>
          <p className={CN.BLOGP}>
            Cohesion dan Coupling merupakan ukuran untuk  menilai rancangan class yang dibuat untuk perangkat lunak. Pada saat software dibuat, developer biasanya membagi software/perangkat lunak menjadi modul-modul yang kecil untuk  memastikan bahwa modul yang dirancang menganut prinsip
            &quot;Loose Coupling, High Cohesion&quot;<br /><br />

            Coupling  adalah derajat  ketergantungan suatu modul terhadap modul lainnya. Kita harus pastikan bahwa suatu modul seminimal mungkin tergantung atau berpengaruh terhadap modul lainnya. Tujuannya jika ada update secara internal di dalam suatu modul, modul-modul lainnya tidak akan terlalu kena pengaruh.<br /><br />

            Selain itu Coupling juga dapat diartikan sebagai sebuah ukuran untuk mengukur berapa kuatnya sebuah element terhubung dengan element lain.Ukuran ini dipakai juga untuk mengetahui seberapa kuat informasi yang dimilikinya,atau ketergantungan ke elemen lain. Sebagai contoh jika anda bayangkan jika anda mengubah 1 modul A, tapi karena modul lain memiliki ketergatungan terhadap modul A,maka efek perubahan ini mungkin saja punya impact terhadap modul lain. Karena itu low coupling sangat penting dalam perencanaan software.<br /><br />

            Sedangkan kohesi adalah keterikatan fungsi-fungsi di dalam suatu modul. Maksudnya adalah modul yang dibuat memiliki fungsi-fungsi yang serupa untuk satu tanggung jawab. Karena itu high cohesion sangat penting dalam perancangan software.<br /><br />

            Modul kohesi melakukan suatu tugas tunggal pada suatu prosedur perangkat lunak yang memerlukan sedikit interaksi dengan prosedur yang sedang dilakukan di bagian lain dari suatu program. Karena itu high cohesion sangat penting dalam perancangan software.<br /><br />
          </p>
          <h2 className={CN.BLOGH2}><br />Kode Program</h2>
          <p className={CN.BLOGP}>
            Berikut adalah kode lengkap untuk membuat tech support system sederhana menggunakan library yang tersedia di Java:
          </p>
          <CodeBlock languageItem="java" file="Command.java" codeItems={`public class Command
{
    private String commandWord;
    private String secondWord;

    public Command(String firstWord, String secondWord)
    {
        commandWord = firstWord;
        this.secondWord = secondWord;
    }

    public String getCommandWord()
    {
        return commandWord;
    }

    public String getSecondWord()
    {
        return secondWord;
    }

    public boolean isUnknown()
    {
        return (commandWord == null);
    }

    public boolean hasSecondWord()
    {
        return (secondWord != null);
    }
}`} />
          <h3 className={CN.BLOGH3}>Penjelasan Kode</h3>
          <p className={CN.BLOGP}>
            Kode di atas merupakan implementasi dari kelas Command dalam bahasa pemrograman Java. Kelas ini digunakan untuk merepresentasikan perintah yang diberikan oleh pengguna dalam sebuah aplikasi berbasis teks, seperti game petualangan.<br /><br />
            Kelas Command memiliki dua atribut utama, yaitu commandWord dan secondWord. Atribut commandWord menyimpan kata perintah utama yang diberikan oleh pengguna, sedangkan atribut secondWord menyimpan kata kedua yang mungkin menyertai perintah tersebut.<br /><br />
            Konstruktor Command menerima dua parameter, yaitu firstWord dan secondWord, yang digunakan untuk menginisialisasi atribut commandWord dan secondWord.<br /><br />
            Kelas ini juga menyediakan beberapa metode, antara lain:<br />
          </p>
          <ul className={CN.BLOGUL + CN.BLOGCODE + CN.BLOGP}>
            <li><code>getCommandWord</code>: Mengembalikan kata perintah utama.</li>
            <li><code>getSecondWord</code>: Mengembalikan kata kedua.</li>
            <li><code>isUnknown</code>: Mengembalikan true jika kata perintah utama tidak dikenali (null).</li>
            <li><code>hasSecondWord</code>: Mengembalikan true jika ada kata kedua yang disertakan dalam perintah.</li>
          </ul>
          <p className={CN.BLOGP}>
            Dengan menggunakan kelas Command ini, aplikasi dapat dengan mudah memproses perintah yang diberikan oleh pengguna dan mengambil tindakan yang sesuai berdasarkan perintah tersebut.
          </p>
          <CodeBlock languageItem="java" file="CommandWords.java" codeItems={`public class CommandWords
{
    private static final String validCommands[] = {
        "go", "quit", "help", "look"
    };

    public CommandWords() {}

    public boolean isCommand(String aString) 
    {
        for (int i = 0; i < validCommands.length; i++) 
        {
            if (validCommands[i].equals(aString))
                return true;
        }
        return false;
    }
}`} />  
          <h3 className={CN.BLOGH3}>Penjelasan Kode</h3>
          <p className={CN.BLOGP + CN.BLOGCODE}>
            Kode di atas merupakan implementasi dari kelas <code>CommandWords</code> dalam bahasa pemrograman Java. Kelas ini digunakan untuk merepresentasikan daftar kata perintah yang valid dalam sebuah aplikasi berbasis teks, seperti game petualangan.<br /><br />
            Kelas <code>CommandWords</code> memiliki satu atribut utama, yaitu <code>validCommands</code>, yang merupakan array dari string yang menyimpan kata-kata perintah yang diizinkan. Konstruktor <code>CommandWords</code> tidak melakukan apa-apa, karena semua inisialisasi sudah dilakukan secara statis.<br /><br />
            Kelas ini juga menyediakan metode <code>isCommand</code>, yang menerima sebuah string sebagai parameter dan memeriksa apakah string tersebut merupakan kata perintah yang valid dengan membandingkannya dengan elemen-elemen dalam array <code>validCommands</code>. Jika ditemukan kecocokan, metode ini akan mengembalikan nilai true; jika tidak, akan mengembalikan false.
          </p>
          <CodeBlock languageItem="java" file="Room.java" codeItems={`public class Room
{
    public String description;
    public Room northExit;
    public Room southExit;
    public Room eastExit;
    public Room westExit;

    public Room(String description) 
    {
        this.description = description;
    }

    public void setExits(Room north, Room east, Room south, Room west)
    {
        if(north != null) northExit = north;
        if(east != null) eastExit = east;
        if(south != null) southExit = south;
        if(west != null) westExit = west;
    }

    public String getDescription()
    {
        return description;
    }
}`} />   
          <h3 className={CN.BLOGH3}>Penjelasan Kode</h3>
          <p className={CN.BLOGP + CN.BLOGCODE}>
            Kode di atas merupakan implementasi dari kelas <code>Room</code> dalam bahasa pemrograman Java. Kelas ini digunakan untuk merepresentasikan sebuah ruangan dalam sebuah aplikasi berbasis teks, seperti game petualangan.<br /><br />
            Kelas <code>Room</code> memiliki beberapa atribut utama, yaitu <code>description</code>, <code>northExit</code>, <code>southExit</code>, <code>eastExit</code>, dan <code>westExit</code>. Atribut <code>description</code> menyimpan deskripsi dari ruangan tersebut, sedangkan atribut-atribut lainnya menyimpan referensi ke ruangan-ruangan yang terhubung ke arah utara, selatan, timur, dan barat.<br /><br />
            Konstruktor <code>Room</code> menerima satu parameter, yaitu <code>description</code>, yang digunakan untuk menginisialisasi atribut <code>description</code>.<br /><br />
            Kelas ini juga menyediakan metode <code>setExits</code>, yang menerima empat parameter berupa objek <code>Room</code> untuk mengatur pintu keluar ke arah utara, timur, selatan, dan barat. Jika salah satu parameter bernilai null, maka pintu keluar tersebut tidak akan diatur.<br /><br />
            Selain itu, kelas ini menyediakan metode <code>getDescription</code>, yang mengembalikan deskripsi dari ruangan tersebut.
          </p>
          <CodeBlock languageItem="java" file="Parser.java" codeItems={`import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class Parser
{
    private CommandWords commands;

    public Parser()
    {
        commands = new CommandWords();
    }

    public Command getCommand() 
    {
        String inputLine = "";
        String word1;
        String word2;

        System.out.println("> ");

        BufferedReader reader = new BufferedReader(new InputStreamReader(System.in));
        try {
            inputLine = reader.readLine();
        } catch (java.io.IOException exc) {
            System.out.println("There was an error during reading: " + exc.getMessage());
        }

        StringTokenizer tokenizer = new StringTokenizer(inputLine);

        if (tokenizer.hasMoreTokens()) word1 = tokenizer.nextToken();
        else word1 = null;
        if (tokenizer.hasMoreTokens()) word2 = tokenizer.nextToken();
        else word2 = null;

        if (commands.isCommand(word1)) return new Command(word1, word2);
        else return new Command(null, word2);
    }
}`} />
          <h3 className={CN.BLOGH3}>Penjelasan Kode</h3>
          <p className={CN.BLOGP + CN.BLOGCODE}>
            Kode di atas merupakan implementasi dari kelas <code>Parser</code> dalam bahasa pemrograman Java. Kelas ini digunakan untuk membaca dan memproses input perintah dari pengguna dalam sebuah aplikasi berbasis teks, seperti game petualangan.<br /><br />
            Kelas <code>Parser</code> memiliki satu atribut utama, yaitu <code>commands</code>, yang merupakan objek dari kelas <code>CommandWords</code> yang berfungsi untuk memeriksa apakah kata perintah yang diberikan oleh pengguna valid atau tidak.<br /><br />
            Konstruktor <code>Parser</code> menginisialisasi atribut <code>commands</code> dengan membuat objek baru dari kelas <code>CommandWords</code>.<br /><br />
            Kelas ini juga menyediakan metode <code>getCommand</code>, yang bertugas untuk membaca input perintah dari pengguna. Metode ini menggunakan <code>BufferedReader</code> untuk membaca baris input dari konsol. Setelah membaca input, metode ini memecah input menjadi kata-kata menggunakan <code>StringTokenizer</code>.<br /><br />
            Metode <code>getCommand</code> kemudian memeriksa apakah kata pertama (word1) adalah perintah yang valid dengan menggunakan metode <code>isCommand</code> dari objek <code>commands</code>. Jika valid, metode ini mengembalikan objek <code>Command</code> yang berisi kata perintah dan kata kedua (word2). Jika tidak valid, metode ini mengembalikan objek <code>Command</code> dengan kata perintah bernilai null.
          </p>
          <CodeBlock languageItem="java" file="Game.java" codeItems={`public class Game
{
    private Parser parser;
    private Room currentRoom;

    public Game()
    {
        createRooms();
        parser = new Parser();
    }

    private void createRooms()
    {
        Room outside, theatre, pub, lab, office;
        outside = new Room("outside the main entrance of the university");
        theatre = new Room("in a lecture theatre");
        pub = new Room("in the campus pub");
        lab = new Room("in a computing lab");
        office = new Room("in the computing admin office");

        outside.setExits(null, theatre, lab, pub);
        theatre.setExits(null, null, null, outside);
        pub.setExits(null, outside, null, null);
        lab.setExits(outside, office, null, null);
        office.setExits(null, null, null, lab);

        currentRoom = outside;
    }

    public void play()
    {
        printWelcome();

        boolean finished = false;
        while(!finished) {
            Command command = parser.getCommand();
            finished = processCommand(command);
        }

        System.out.println("Thank you for playing. Good bye.");
    }

    private void printWelcome()
    {
        System.out.println();
        System.out.println("Welcome to Adventure!");
        System.out.println("Adventure is a new, incredibly boring adventure game.");
        System.out.println("Type 'help' if you need help.");
        System.out.println();
        System.out.println("You are " + currentRoom.getDescription());
        System.out.println("Exits: ");
        if (currentRoom.northExit != null) System.out.println("north ");
        if (currentRoom.eastExit != null) System.out.println("east ");
        if (currentRoom.southExit != null) System.out.println("south ");
        if (currentRoom.westExit != null) System.out.println("west ");
        System.out.println();
    }

    private boolean processCommand(Command command)
    {
        boolean wantToQuit = false;
        
        if(command.isUnknown()) {
            System.out.println("I don't know what you mean...");
            return false;
        }

        String commandWord = command.getCommandWord();
        if(commandWord.equals("help")) printHelp();
        else if(commandWord.equals("go")) goRoom(command);
        else if(commandWord.equals("quit")) wantToQuit = quit(command);
        return wantToQuit;
    }

    private void printHelp()
    {
        System.out.println("You are lost. You are alone. You wander");
        System.out.println("around at the university.");
        System.out.println();
        System.out.println("Your command words are:");
        System.out.println("    go quit help");
    }

    private void goRoom(Command command)
    {
        if(!command.hasSecondWord()) {
            System.out.println("Go where?");
            return;
        }

        String direction = command.getSecondWord();

        Room nextRoom = null;
        if(direction.equals("north")) nextRoom = currentRoom.northExit;
        if(direction.equals("east")) nextRoom = currentRoom.eastExit;
        if(direction.equals("south")) nextRoom = currentRoom.southExit;
        if(direction.equals("west")) nextRoom = currentRoom.westExit;

        if(nextRoom == null) System.out.println("There is no door!");
        else {
            currentRoom = nextRoom;
            System.out.println("You are " + currentRoom.getDescription());
            System.out.println("Exits: ");
            if (currentRoom.northExit != null) System.out.println("north ");
            if (currentRoom.eastExit != null) System.out.println("east ");
            if (currentRoom.southExit != null) System.out.println("south ");
            if (currentRoom.westExit != null) System.out.println("west ");
            System.out.println();
        }
    }

    private boolean quit(Command command)
    {
        if(command.hasSecondWord()) {
            System.out.println("Quit what?");
            return false;
        } else return true;
    }
}`} />
          <h3 className={CN.BLOGH3}>Penjelasan Kode</h3>
          <p className={CN.BLOGP + CN.BLOGCODE}>
            Kode di atas merupakan implementasi dari kelas <code>Game</code> dalam bahasa pemrograman Java. Kelas ini digunakan untuk mengelola logika utama dari sebuah aplikasi berbasis teks, seperti game petualangan.<br /><br />
            Kelas <code>Game</code> memiliki dua atribut utama, yaitu <code>parser</code> dan <code>currentRoom</code>. Atribut <code>parser</code> adalah objek dari kelas <code>Parser</code> yang digunakan untuk membaca input perintah dari pengguna, sedangkan atribut <code>currentRoom</code> menyimpan referensi ke ruangan saat ini tempat pemain berada.<br /><br />
            Konstruktor <code>Game</code> memanggil metode <code>createRooms</code> untuk membuat dan mengatur ruangan-ruangan dalam permainan, serta menginisialisasi objek <code>parser</code>.<br /><br />
            Metode <code>createRooms</code> membuat beberapa objek <code>Room</code> yang merepresentasikan ruangan-ruangan dalam permainan, mengatur pintu keluar antar ruangan, dan menetapkan ruangan awal tempat pemain berada.<br /><br />
            Metode <code>play</code> adalah metode utama yang menjalankan permainan. Metode ini mencetak pesan sambutan, kemudian memasuki loop utama di mana ia terus-menerus membaca perintah dari pengguna dan memprosesnya hingga pemain memutuskan untuk keluar dari permainan.<br /><br />
            Metode <code>printWelcome</code> mencetak pesan sambutan dan deskripsi ruangan saat ini beserta pintu keluar yang tersedia.<br /><br />
            Metode <code>processCommand</code> memproses perintah yang diberikan oleh pengguna. Jika perintah tidak dikenali, ia mencetak pesan kesalahan. Jika perintah dikenali, ia memanggil metode yang sesuai berdasarkan kata perintah.<br /><br />
            Metode <code>printHelp</code> mencetak pesan bantuan yang berisi informasi tentang situasi pemain dan daftar kata perintah yang tersedia.<br /><br />
            Metode <code>goRoom</code> mengatur perpindahan pemain ke ruangan berikutnya berdasarkan arah yang diberikan dalam perintah. Jika tidak ada pintu keluar ke arah tersebut, ia mencetak pesan kesalahan.<br /><br />
            Metode <code>quit</code> memeriksa apakah pemain ingin keluar dari permainan. Jika ada kata kedua dalam perintah, ia mencetak pesan kesalahan; jika tidak, ia mengembalikan true untuk menandakan bahwa pemain ingin keluar.
          </p>
          <h2 className={CN.BLOGH2}><br />Hasil</h2>
          <h3 className={CN.BLOGH3}>Run Kode</h3>
          <Image src="/blog/word-of-zuul/hasil.png" alt="Results" width={766} height={750} />
          <h2 className={CN.BLOGH2}><br />Kesimpulan</h2>
          <p className={CN.BLOGP}>
            Dengan memahami konsep cohesion dan coupling serta mengimplementasikannya dalam kode program, kita dapat menciptakan perangkat lunak yang lebih terstruktur, mudah dipelihara, dan fleksibel terhadap perubahan di masa depan. Prinsip-prinsip ini sangat penting dalam pengembangan perangkat lunak modern dan harus selalu dipertimbangkan oleh setiap pengembang.
          </p>
        </div>
        <hr className={CN.BLOGHR}></hr>
      </div>
      <BlogFooter />
    </div>
  )
}