import BlogFooter from "@components/BlogFooter";
import BlogHeader from "@components/BlogHeader";
import CodeBlock from "@/components/CodeBlock";
import * as CN from "@components/BlogConstants";
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Vehicle Rental Shop",
  description: "Creating a Vehicle Rental Shop Management System in Java using Object-Oriented Programming principles",
  icons: "/web-icon.png"
};

export default function VehicleRentalShop() {
  return (
    <div id="top" className={CN.BLOGTOP}>
      <BlogHeader date="8 November 2025" readTime="15" title="Vehicle Rental Shop" description="Creating a Vehicle Rental Shop Management System in Java using Object-Oriented Programming principles and inheritance" imageLink="/blog/vehicle-rental-shop/blog-cover.avif" />
      <div className={CN.BLOGDIV}>
        <hr className={CN.BLOGHR}></hr>
        <div className={CN.BLOGCONTENTS}>
          <h2 className={CN.BLOGH2}>Important Link</h2>
          <p className={CN.BLOGP}>
            <a href="https://github.com/irfansandyy/university-projects/tree/main/object-oriented-programming/vehicle-rental-shop" target="_blank" rel="noopener noreferrer" className={CN.BLOGU}>GitHub Repository Here</a>
          </p>
          <h2 className={CN.BLOGH2}>Pengantar</h2>
          <p className={CN.BLOGP + CN.BLOGCODE}>
            Pada proyek ini, saya membuat sebuah sistem manajemen penyewaan kendaraan menggunakan bahasa pemrograman Java. Sistem ini dirancang dengan menerapkan prinsip-prinsip Pemrograman Berorientasi Objek (OOP) dan konsep pewarisan (inheritance) untuk mengelola berbagai jenis kendaraan yang tersedia untuk disewa.
          </p>
          <h2 className={CN.BLOGH2}><br />Fitur Utama</h2>
          <p className={CN.BLOGP + CN.BLOGCODE}>
            Sistem ini mencakup fitur-fitur utama seperti penambahan kendaraan baru, penghapusan kendaraan, pencarian kendaraan berdasarkan kriteria tertentu, serta proses penyewaan dan pengembalian kendaraan. Setiap jenis kendaraan memiliki atribut dan metode khusus yang sesuai dengan karakteristiknya.
          </p>
          <h2 className={CN.BLOGH2}><br />Struktur Kelas</h2>
          <Image src="/blog/vehicle-rental-shop/class-structure.png" alt="Class Structure Diagram" width={673} height={368} />
          <h2 className={CN.BLOGH2}><br />Kode Program</h2>
          <p className={CN.BLOGP}>
            Berikut adalah kode lengkap untuk membuat vehicle rental shop dengan Inheritance dalam Java:
          </p>
          <CodeBlock languageItem="java" file="InputReader.java" codeItems={`import java.util.Scanner;

public class InputReader
{
    private Scanner scanner;

    public InputReader() {
        scanner = new Scanner(System.in);
    }

    public String readString(String prompt) {
        System.out.print(prompt);
        return scanner.nextLine();
    }

    public void close() {
        scanner.close();
    }
}`} />
          <h3 className={CN.BLOGH3}>Penjelasan Kode</h3>
          <p className={CN.BLOGP + CN.BLOGCODE}>
            Kode di atas menunjukkan implementasi kelas InputReader yang bertanggung jawab untuk membaca input dari pengguna. Kelas ini menggunakan Scanner untuk mengambil input string dari konsol. Metode readString menerima sebuah prompt sebagai parameter dan menampilkan prompt tersebut sebelum membaca input dari pengguna. Metode close digunakan untuk menutup Scanner setelah selesai digunakan. Kelas ini dapat digunakan dalam sistem penyewaan kendaraan untuk mendapatkan informasi dari pengguna, seperti nama kendaraan, jenis kendaraan, dan detail lainnya. Dengan menggunakan kelas InputReader, kita dapat memisahkan logika input dari logika bisnis utama dalam sistem penyewaan kendaraan, sehingga membuat kode lebih terstruktur dan mudah dipelihara.
          </p>
          <CodeBlock languageItem="java" file="Vehicle.java" codeItems={`public class Vehicle
{
    private String make;
    private String model;
    private int year;

    public Vehicle(String make, String model, int year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    public String getMake() {
        return make;
    }

    public String getModel() {
        return model;
    }

    public int getYear() {
        return year;
    }

    public void showDetail() {
        System.out.println("Make: " + make);
        System.out.println("Model: " + model);
        System.out.println("Year: " + year);
    }
}`} />    
          <h3 className={CN.BLOGH3}>Penjelasan Kode</h3>
          <p className={CN.BLOGP + CN.BLOGCODE}>
            Kode di atas menunjukkan implementasi kelas Vehicle yang merupakan kelas induk (superclass) untuk berbagai jenis kendaraan dalam sistem penyewaan kendaraan. Kelas ini memiliki atribut make, model, dan year yang menyimpan informasi dasar tentang kendaraan. Konstruktor Vehicle digunakan untuk menginisialisasi atribut-atribut tersebut saat objek Vehicle dibuat. Metode getMake, getModel, dan getYear adalah metode akses (getter) yang mengembalikan nilai atribut masing-masing. Metode showDetail menampilkan detail kendaraan ke konsol. Kelas Vehicle dapat diperluas oleh kelas-kelas turunan (subclass) seperti Car, Motorcycle, dan Bike yang akan menambahkan atribut dan metode khusus sesuai dengan karakteristik masing-masing jenis kendaraan.
          </p>
          <CodeBlock languageItem="java" file="Car.java" codeItems={`public class Car extends Vehicle
{
    private int numberOfDoors;
    private int numberOfSeats;
    private int numberOfWheels;
    private boolean isElectric;

    public Car(String make, String model, int year, int numberOfDoors, int numberOfSeats, int numberOfWheels, boolean isElectric) {
        super(make, model, year);
        this.numberOfDoors = numberOfDoors;
        this.numberOfSeats = numberOfSeats;
        this.numberOfWheels = numberOfWheels;
        this.isElectric = isElectric;
    }

    public int getNumberOfDoors() {
        return numberOfDoors;
    }

    public int getNumberOfSeats() {
        return numberOfSeats;
    }

    public int getNumberOfWheels() {
        return numberOfWheels;
    }

    public boolean isElectric() {
        return isElectric;
    }

    @Override
    public void showDetail() {
        super.showDetail();
        System.out.println("Number of Doors: " + numberOfDoors);
        System.out.println("Number of Seats: " + numberOfSeats);
        System.out.println("Number of Wheels: " + numberOfWheels);
        System.out.println("Is Electric: " + isElectric);
    }
}`} />
          <h3 className={CN.BLOGH3}>Penjelasan Kode</h3>
          <p className={CN.BLOGP + CN.BLOGCODE}>
            Kode di atas menunjukkan implementasi kelas Car yang merupakan subclass dari kelas Vehicle. Kelas Car menambahkan atribut khusus seperti numberOfDoors, numberOfSeats, numberOfWheels, dan isElectric untuk menyimpan informasi tambahan tentang mobil. Konstruktor Car memanggil konstruktor superclass Vehicle menggunakan super() untuk menginisialisasi atribut-atribut dasar kendaraan, kemudian menginisialisasi atribut khusus mobil. Metode getNumberOfDoors, getNumberOfSeats, getNumberOfWheels, dan isElectric adalah metode akses (getter) yang mengembalikan nilai atribut masing-masing. Metode showDetail di-override untuk menampilkan detail mobil, termasuk informasi dasar dari kelas Vehicle serta informasi tambahan khusus mobil. Dengan cara ini, kelas Car dapat mewarisi sifat-sifat umum dari kelas Vehicle sambil menambahkan fitur-fitur khusus yang relevan dengan mobil.
          </p>
          <CodeBlock languageItem="java" file="Motorcycle.java" codeItems={`public class Motorcycle extends Vehicle
{
    private boolean isElectric;
    private int engineCapacity;

    public Motorcycle(String make, String model, int year, boolean isElectric, int engineCapacity) {
        super(make, model, year);
        this.isElectric = isElectric;
        this.engineCapacity = engineCapacity;
    }

    public boolean isElectric() {
        return isElectric;
    }

    public int getEngineCapacity() {
        return engineCapacity;
    }

    @Override
    public void showDetail() {
        super.showDetail();
        System.out.println("Is Electric: " + isElectric);
        System.out.println("Engine Capacity: " + engineCapacity + " cc");
    }
}`} />  
          <h3 className={CN.BLOGH3}>Penjelasan Kode</h3>
          <p className={CN.BLOGP + CN.BLOGCODE}>
            Kode di atas menunjukkan implementasi kelas Motorcycle yang merupakan subclass dari kelas Vehicle. Kelas Motorcycle menambahkan atribut khusus seperti isElectric dan engineCapacity untuk menyimpan informasi tambahan tentang sepeda motor. Konstruktor Motorcycle memanggil konstruktor superclass Vehicle menggunakan super() untuk menginisialisasi atribut-atribut dasar kendaraan, kemudian menginisialisasi atribut khusus sepeda motor. Metode isElectric dan getEngineCapacity adalah metode akses (getter) yang mengembalikan nilai atribut masing-masing. Metode showDetail di-override untuk menampilkan detail sepeda motor, termasuk informasi dasar dari kelas Vehicle serta informasi tambahan khusus sepeda motor. Dengan cara ini, kelas Motorcycle dapat mewarisi sifat-sifat umum dari kelas Vehicle sambil menambahkan fitur-fitur khusus yang relevan dengan sepeda motor.
          </p>
          <CodeBlock languageItem="java" file="Bike.java" codeItems={`public class Bike extends Vehicle
{
    private String type;
    private boolean hasCarrier;

    public Bike(String make, String model, int year, String type, boolean hasCarrier) {
        super(make, model, year);
        this.type = type;
        this.hasCarrier = hasCarrier;
    }

    public String getType() {
        return type;
    }

    public boolean hasCarrier() {
        return hasCarrier;
    }

    @Override
    public void showDetail() {
        super.showDetail();
        System.out.println("Type: " + type);
        System.out.println("Has Carrier: " + hasCarrier);
    }
}`} />
          <h3 className={CN.BLOGH3}>Penjelasan Kode</h3>
          <p className={CN.BLOGP + CN.BLOGCODE}>
            Kode di atas menunjukkan implementasi kelas Bike yang merupakan subclass dari kelas Vehicle. Kelas Bike menambahkan atribut khusus seperti type dan hasCarrier untuk menyimpan informasi tambahan tentang sepeda. Konstruktor Bike memanggil konstruktor superclass Vehicle menggunakan super() untuk menginisialisasi atribut-atribut dasar kendaraan, kemudian menginisialisasi atribut khusus sepeda. Metode getType dan hasCarrier adalah metode akses (getter) yang mengembalikan nilai atribut masing-masing. Metode showDetail di-override untuk menampilkan detail sepeda, termasuk informasi dasar dari kelas Vehicle serta informasi tambahan khusus sepeda. Dengan cara ini, kelas Bike dapat mewarisi sifat-sifat umum dari kelas Vehicle sambil menambahkan fitur-fitur khusus yang relevan dengan sepeda.
          </p>
          <CodeBlock languageItem="java" file="Main.java" codeItems={`import java.util.ArrayList;
import java.util.HashMap;

public class Main
{
    private ArrayList<Vehicle> vehicleList = new ArrayList<>();
    private HashMap<Vehicle, String> rentor = new HashMap<>();
    private InputReader inputReader = new InputReader();

    public static void main(String[] args) {
        Main app = new Main();

        app.addCar("Toyota", "Camry", 2020, 4, 5, 4, false);
        app.addCar("Tesla", "Model S", 2021, 4, 5, 4, true);
        app.addMotorcycle("Harley-Davidson", "Street 750", 2019, false, 750);
        app.addMotorcycle("Zero Motorcycles", "SR/F", 2022, true, 110);
        app.addBike("Giant", "Escape 3", 2021, "Road Bike", true);
        app.addBike("Trek", "Marlin 7", 2020, "Mountain Bike", false);

        app.Run();
    }

    public void Run(){
        while(true){
            showGreetings();
            String input = inputReader.readString("> ");
            if(input.equals("1")){
                showList();
            }
            else if(input.equals("2")){
                showRentor();
            }
            else if(input.equals("3")){
                System.out.print("Enter the index of the vehicle to rent: ");
                int index = Integer.parseInt(inputReader.readString(""));
                System.out.print("Enter the name of the renter: ");
                String renterName = inputReader.readString("");
                addRentor(index, renterName);
            }
            else if(input.equals("4")){
                inputReader.close();
                return;
            }
        }
    }

    public void addCar(String make, String model, int year, int numberOfDoors, int numberOfSeats, int numberOfWheels, boolean isElectric) {
        Car car = new Car(make, model, year, numberOfDoors, numberOfSeats, numberOfWheels, isElectric);
        vehicleList.add(car);
    }

    public void addMotorcycle(String make, String model, int year, boolean isElectric, int engineCapacity){
        Motorcycle motorcycle = new Motorcycle(make, model, year, isElectric, engineCapacity);
        vehicleList.add(motorcycle);
    }

    public void addBike(String make, String model, int year, String type, boolean hasCarrier){
        Bike bike = new Bike(make, model, year, type, hasCarrier);
        vehicleList.add(bike);
    }

    public void addRentor(int index, String rentorName) {
        if (index >= 0 && index < vehicleList.size()) {
            Vehicle v = vehicleList.get(index);
            if (!rentor.containsKey(v)) {
                rentor.put(v, rentorName);
                System.out.println("Vehicle successfully rented to " + rentorName);
            } else {
                System.out.println("Vehicle is already rented");
            }
        } else {
            System.out.println("Vehicle index out of range");
        }
    }

    public void showList(){
        System.out.println("========= Available Vehicles =========");
        for (Vehicle v : vehicleList) {
            if (!rentor.containsKey(v)) { 
                v.showDetail();
                System.out.println("--------------------");
            }
        }
    }
    
    public void showRentor() {
        System.out.println("========= Rented Vehicles =========");
        for (Vehicle v : rentor.keySet()) {
            v.showDetail();
            System.out.println("Rented by: " + rentor.get(v));
            System.out.println("--------------------");
        }
    }

    public void showGreetings(){
        System.out.println("Welcome to vehicle rental shop");
        System.out.println("Choose an option: ");
        System.out.println("1. Show available vehicles");
        System.out.println("2. Show list of renters");
        System.out.println("3. Rent a vehicle");
        System.out.println("4. Exit");
    }
}`} />
          <h3 className={CN.BLOGH3}>Penjelasan Kode</h3>
          <p className={CN.BLOGP + CN.BLOGCODE}>
            Kode di atas menunjukkan implementasi kelas Main yang berfungsi sebagai titik masuk utama untuk aplikasi sistem penyewaan kendaraan. Kelas ini mengelola daftar kendaraan yang tersedia untuk disewa dan informasi penyewa menggunakan ArrayList dan HashMap. Metode main adalah metode statis yang membuat instance dari kelas Main, menambahkan beberapa kendaraan ke dalam daftar, dan memulai aplikasi dengan memanggil metode Run. Metode Run menampilkan menu interaktif kepada pengguna, memungkinkan mereka untuk melihat daftar kendaraan yang tersedia, melihat daftar penyewa, menyewa kendaraan, atau keluar dari aplikasi. Metode addCar, addMotorcycle, dan addBike digunakan untuk menambahkan kendaraan baru ke dalam daftar. Metode addRentor memungkinkan pengguna untuk menyewa kendaraan dengan memasukkan indeks kendaraan dan nama penyewa. Metode showList menampilkan daftar kendaraan yang tersedia untuk disewa, sedangkan metode showRentor menampilkan daftar kendaraan yang telah disewa beserta nama penyewanya. Metode showGreetings menampilkan menu utama kepada pengguna. Kelas Main mengintegrasikan semua komponen sistem penyewaan kendaraan dan menyediakan antarmuka pengguna untuk berinteraksi dengan sistem.
          </p>
          <h2 className={CN.BLOGH2}><br />Hasil</h2>
          <h3 className={CN.BLOGH3}>Vehicle List</h3>
          <Image src="/blog/vehicle-rental-shop/vehicle-list.png" alt="Vehicle List" width={670} height={742} />
          <h3 className={CN.BLOGH3}><br />Vehicle Rent</h3>
          <Image src="/blog/vehicle-rental-shop/vehicle-rent.png" alt="Vehicle Rent" width={669} height={354} />
          <h3 className={CN.BLOGH3}><br />Rent List</h3>
          <Image src="/blog/vehicle-rental-shop/rent-list.png" alt="Rent List" width={673} height={303} />
          <h2 className={CN.BLOGH2}><br />Kesimpulan</h2>
          <p className={CN.BLOGP + CN.BLOGCODE}>
            Proyek Vehicle Rental Shop ini berhasil mengimplementasikan sistem manajemen penyewaan kendaraan menggunakan prinsip Pemrograman Berorientasi Objek dan konsep pewarisan. Dengan struktur kelas yang terorganisir, sistem ini dapat dengan mudah diperluas untuk menambahkan jenis kendaraan baru di masa depan. Penggunaan OOP memungkinkan kode yang lebih bersih, modular, dan mudah dipelihara.
          </p>
        </div>
        <hr className={CN.BLOGHR}></hr>
      </div>
      <BlogFooter />
    </div>
  )
}