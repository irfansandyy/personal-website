import BlogFooter from "@components/BlogFooter";
import BlogHeader from "@components/BlogHeader";
import CodeBlock from "@/components/CodeBlock";
import * as CN from "@components/BlogConstants";
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Abstract Class in Java",
  description: "Creating an Abstract Class in Java for Foxes and Rabbits Simulation",
  icons: "/web-icon.png"
};

export default function AbstractClassJava() {
  return (
    <div id="top" className={CN.BLOGTOP}>
      <BlogHeader date="15 November 2025" readTime="30" title="Abstract Class in Java" description="Creating an Abstract Class in Java for Foxes and Rabbits Simulation" imageLink="/blog/abstract-class-java/blog-cover.png" />
      <div className={CN.BLOGDIV}>
        <hr className={CN.BLOGHR}></hr>
        <div className={CN.BLOGCONTENTS}>
          <h2 className={CN.BLOGH2}>Important Link</h2>
          <p className={CN.BLOGP}>
            <a href="https://github.com/irfansandyy/university-projects/tree/main/object-oriented-programming/abstract-living-creatures" target="_blank" rel="noopener noreferrer" className={CN.BLOGU}>Abstract Animal Repository</a>
            <br /><br />
            <a href="https://github.com/irfansandyy/university-projects/tree/main/object-oriented-programming/foxes-and-rabbit" target="_blank" rel="noopener noreferrer" className={CN.BLOGU}>Rabbits and Foxes Repository</a>
          </p>
          <h2 className={CN.BLOGH2}>Pengantar</h2>
          <p className={CN.BLOGP}>
            Pada proyek Object Oriented Programming kali ini, saya membuat simulasi ekosistem sederhana yang terdiri dari rubah dan kelinci. Proyek ini bertujuan untuk menerapkan konsep kelas abstrak dalam pemrograman berorientasi objek menggunakan bahasa Java.
          </p>
          <h2 className={CN.BLOGH2}><br />Kelas Abstrak</h2>
          <p className={CN.BLOGP}>
            Kelas abstrak adalah kelas yang tidak dapat diinstansiasi secara langsung, melainkan digunakan sebagai dasar untuk kelas turunan. Kelas ini dapat berisi metode abstrak (tanpa implementasi) yang harus diimplementasikan oleh kelas turunan, serta metode konkret (dengan implementasi).
          </p>
          <h2 className={CN.BLOGH2}><br />Implementasi Kelas Abstrak dalam Simulasi</h2>
          <p className={CN.BLOGP + CN.BLOGCODE}>
            Dalam simulasi ini, saya membuat kelas abstrak bernama <code>Animal</code> yang berfungsi sebagai dasar untuk kelas turunan <code>Fox</code> dan <code>Rabbit</code>. Kelas <code>Animal</code> memiliki atribut dan metode umum yang dimiliki oleh semua hewan dalam simulasi.
          </p>
          <h2 className={CN.BLOGH2}><br />Kode Program Abstract Living Creatures</h2>
          <p className={CN.BLOGP}>
            Berikut adalah kode lengkap untuk membuat abstract living creatures dengan class abstraction dalam Java:
          </p>
          <CodeBlock languageItem="java" file="LivingCreatures.java" codeItems={`public abstract class LivingCreatures
{
    protected String name;
    public abstract void eat();
    public abstract void sleep();
    public abstract void breathe();
    public void grow() {
        System.out.println(name + " is growing.");
    }
}`} />
          <h3 className={CN.BLOGH3}>Penjelasan Kode</h3>
          <p className={CN.BLOGP + CN.BLOGCODE}>
            Pada kode di atas, kelas <code>LivingCreatures</code> dideklarasikan sebagai kelas abstrak dengan kata kunci <code>abstract</code>. Kelas ini memiliki atribut <code>name</code> dan tiga metode abstrak: <code>eat()</code>, <code>sleep()</code>, dan <code>breathe()</code>. Selain itu, terdapat metode konkret <code>grow()</code> yang memberikan implementasi umum untuk semua makhluk hidup.
          </p>
          <CodeBlock languageItem="java" file="Animal.java" codeItems={`public class Animal extends LivingCreatures
{
    public Animal() {
        this.name = "Animal";
    }

    @Override
    public void eat() {
        System.out.println(name + " can be a carnivore, herbivore, or omnivore.");
    }

    @Override
    public void sleep() {
        System.out.println(name + " sleeps variably depending on the species.");
    }

    @Override
    public void breathe() {
        System.out.println(name + " usually breathes using lungs or gills.");
    }
}`} />
          <h3 className={CN.BLOGH3}>Penjelasan Kode</h3>
          <p className={CN.BLOGP + CN.BLOGCODE}>
            Kelas <code>Animal</code> adalah kelas turunan dari <code>LivingCreatures</code> yang mengimplementasikan metode abstrak yang ada di kelas induk. Kelas ini memberikan implementasi umum untuk semua hewan, seperti pola makan, tidur, dan cara bernapas.
          </p>
          <CodeBlock languageItem="java" file="Human.java" codeItems={`public class Human extends LivingCreatures
{
    public Human() {
        this.name = "Human";
    }

    @Override
    public void eat() {
        System.out.println(name + " eats any type of food, it is a omnivore.");
    }

    @Override
    public void sleep() {
        System.out.println(name + " sleeps for about 7-9 hours a day.");
    }

    @Override
    public void breathe() {
        System.out.println(name + " breathes using lungs, and needs oxygen.");
    }
}`} />
          <h3 className={CN.BLOGH3}>Penjelasan Kode</h3>
          <p className={CN.BLOGP + CN.BLOGCODE}>
            Kelas <code>Human</code> juga merupakan kelas turunan dari <code>LivingCreatures</code> yang mengimplementasikan metode abstrak sesuai dengan karakteristik manusia, seperti pola makan, tidur, dan cara bernapas.
          </p>
          <CodeBlock languageItem="java" file="Plant.java" codeItems={`public class Plant extends LivingCreatures
{
    public Plant() {
        this.name = "Plant";
    }

    @Override
    public void eat() {
        System.out.println(name + " makes its own food through photosynthesis.");
    }

    @Override
    public void sleep() {
        System.out.println(name + " does not sleep but has periods of rest.");
    }

    @Override
    public void breathe() {
        System.out.println(name + " takes in carbon dioxide and releases oxygen.");
    }
}`} />
          <h3 className={CN.BLOGH3}>Penjelasan Kode</h3>
          <p className={CN.BLOGP + CN.BLOGCODE}>
            Kelas <code>Plant</code> adalah kelas turunan dari <code>LivingCreatures</code> yang mengimplementasikan metode abstrak sesuai dengan karakteristik tumbuhan, seperti cara mendapatkan makanan, pola istirahat, dan cara bernapas.
          </p>
          <CodeBlock languageItem="java" file="Main.java" codeItems={`public class Main
{   
    public static void main(String[] args) {
        Main main = new Main();
        main.run();
    }

    public void checkLivingCreatures(LivingCreatures creatures) {
        creatures.eat();
        creatures.sleep();
        creatures.breathe();
    }

    public void run() {
        LivingCreatures animal = new Animal();
        LivingCreatures plant = new Plant();
        LivingCreatures human = new Human();

        checkLivingCreatures(animal);
        System.out.println();
        checkLivingCreatures(plant);
        System.out.println();
        checkLivingCreatures(human);
    }
}`} />
          <h3 className={CN.BLOGH3}>Penjelasan Kode</h3>
          <p className={CN.BLOGP + CN.BLOGCODE}>
            Kelas <code>Main</code> berfungsi sebagai titik masuk program. Di dalam metode <code>run()</code>, objek dari kelas turunan dibuat dan metode <code>checkLivingCreatures()</code> dipanggil untuk menampilkan perilaku masing-masing makhluk hidup.
          </p>
          <h2 className={CN.BLOGH2}><br />Kode Program Rabbits and Foxes</h2>
          <p className={CN.BLOGP}>
            Berikut adalah kode lengkap untuk membuat Rabbits and Foxes dengan class abstraction dalam Java:
          </p>
          <CodeBlock languageItem="java" file="Animal.java" codeItems={`public abstract class Animal
{
    private int age;
    private boolean alive;
    private Field field;
    private Location location;

    public Animal(Field field, Location location) {
        age = 0;
        alive = true;
        this.field = field;
        setLocation(location);
    }

    public boolean isAlive() {
        return alive;
    }

    public void setDead() {
        alive = false;
        if(location != null) {
            field.clear(location);
            location = null;
            field = null;
        }
    }

    public Field getField() {
        return field;
    }

    public Location getLocation() {
        return location;
    }

    public void setLocation(Location newLocation) {
        if(location != null) {
            field.clear(location);
        }

        location = newLocation;
        field.place(this, newLocation);
    }

    public abstract void act(java.util.List<Animal> newAnimals);
}`} />
          <h3 className={CN.BLOGH3}>Penjelasan Kode</h3>
          <p className={CN.BLOGP + CN.BLOGCODE}>
            Pada kode di atas, kelas <code>Animal</code> dideklarasikan sebagai kelas abstrak dengan atribut umum seperti umur, status hidup, lokasi, dan metode abstrak <code>act()</code> yang harus diimplementasikan oleh kelas turunan.
          </p>
          <CodeBlock languageItem="java" file="Rabbit.java" codeItems={`public class Rabbit extends Animal
{
    public Rabbit(Field field, Location location) {
        super(field, location);
    }

    @Override
    public void act(java.util.List<Animal> newAnimals) {
        if (isAlive()) {
            Location newLocation = getField().freeAdjacentLocation(getLocation());
            if (newLocation != null) {
                setLocation(newLocation);
            } else {
                setDead();
            }
        }
    }
}`} />
          <h3 className={CN.BLOGH3}>Penjelasan Kode</h3>
          <p className={CN.BLOGP + CN.BLOGCODE}>
            Kelas <code>Rabbit</code> adalah kelas turunan dari <code>Animal</code> yang mengimplementasikan metode <code>act()</code> untuk menentukan perilaku kelinci dalam simulasi, seperti bergerak ke lokasi baru atau mati jika tidak ada ruang.
          </p>
          <CodeBlock languageItem="java" file="Fox.java" codeItems={`public class Fox extends Animal
{
    public Fox(Field field, Location location) {
        super(field, location);
    }

    @Override
    public void act(java.util.List<Animal> newAnimals) {
        if (isAlive()) {
            Location newLocation = findFood();
            if (newLocation == null) {
                newLocation = getField().freeAdjacentLocation(getLocation());
            }
            if (newLocation != null) {
                setLocation(newLocation);
            } else {
                setDead();
            }
        }
    }

    private Location findFood() {
        java.util.List<Location> adjacent = getField().adjacentLocations(getLocation());
        for (Location loc : adjacent) {
            Object animal = getField().getObjectAt(loc);
            if (animal instanceof Rabbit) {
                Rabbit rabbit = (Rabbit) animal;
                rabbit.setDead();
                return loc;
            }
        }
        return null;
    }
}`} />
          <h3 className={CN.BLOGH3}>Penjelasan Kode</h3>
          <p className={CN.BLOGP + CN.BLOGCODE}>
            Kelas <code>Fox</code> adalah kelas turunan dari <code>Animal</code> yang mengimplementasikan metode <code>act()</code> untuk menentukan perilaku rubah dalam simulasi, termasuk mencari makanan (kelinci) dan bergerak ke lokasi baru atau mati jika tidak ada ruang.
          </p>
          <CodeBlock languageItem="java" file="Field.java" codeItems={`import java.util.List;
import java.util.ArrayList;

public class Field
{
    private Object[][] field;

    public Field(int depth, int width) {
        field = new Object[depth][width];
    }

    public void clear(Location location) {
        field[location.getRow()][location.getCol()] = null;
    }

    public void place(Object obj, Location location) {
        field[location.getRow()][location.getCol()] = obj;
    }

    public int getDepth() {
        return field.length;
    }

    public int getWidth() {
        return field[0].length;
    }

    public Object getObjectAt(Location location) {
        return field[location.getRow()][location.getCol()];
    }

    public Location freeAdjacentLocation(Location location) {
        List<Location> free = new ArrayList<>();
        List<Location> adjacent = adjacentLocations(location);
        for (Location loc : adjacent) {
            if (getObjectAt(loc) == null) {
                free.add(loc);
            }
        }
        return free.isEmpty() ? null : free.get(0);
    }

    public List<Location> adjacentLocations(Location location) {
        List<Location> locations = new ArrayList<>();
        int row = location.getRow();
        int col = location.getCol();
        for (int dr = -1; dr <= 1; dr++) {
            for (int dc = -1; dc <= 1; dc++) {
                if (dr == 0 && dc == 0) continue;
                int newRow = row + dr;
                int newCol = col + dc;
                if (newRow >= 0 && newRow < field.length && newCol >= 0 && newCol < field[0].length) {
                    locations.add(new Location(newRow, newCol));
                }
            }
        }
        return locations;
    }

    public void printField() {
        for (int row = 0; row < getDepth(); row++) {
            for (int col = 0; col < getWidth(); col++) {
                Object obj = field[row][col];
                if (obj == null) {
                    System.out.print(".");
                } else if (obj instanceof Rabbit) {
                    System.out.print("R");
                } else if (obj instanceof Fox) {
                    System.out.print("F");
                } else {
                    System.out.print("?");
                }
            }
            System.out.println();
        }
    }
}`} />
          <h3 className={CN.BLOGH3}>Penjelasan Kode</h3>
          <p className={CN.BLOGP + CN.BLOGCODE}>
            Kelas <code>Field</code> mengelola area simulasi, termasuk penempatan hewan, pembersihan lokasi, dan pencarian lokasi kosong di sekitar hewan.
          </p>
          <CodeBlock languageItem="java" file="Location.java" codeItems={`public class Location
{
    private int row;
    private int col;

    public Location(int row, int col) {
        this.row = row;
        this.col = col;
    }

    public int getRow() {
        return row;
    }

    public int getCol() {
        return col;
    }
}`} />
          <h3 className={CN.BLOGH3}>Penjelasan Kode</h3>
          <p className={CN.BLOGP + CN.BLOGCODE}>
            Kelas <code>Location</code> menyimpan informasi tentang posisi hewan dalam bidang simulasi, termasuk baris dan kolom.
          </p>
          <CodeBlock languageItem="java" file="Simulator.java" codeItems={`import java.util.List;
import java.util.ArrayList;

public class Simulator
{
    private Field field;
    private List<Animal> animals;

    public static void main(String[] args) {
        Simulator simulator = new Simulator(30, 30);
        simulator.field.printField();
        simulator.simulate(10);
        System.out.println("==============================");
        simulator.field.printField();
    }

    public Simulator(int width, int height) {
        field = new Field(height, width);
        animals = new ArrayList<>();
        populate();
    }

    public void simulate(int steps) {
        for (int step = 0; step < steps; step++) {
            List<Animal> newAnimals = new ArrayList<>();
            for (Animal animal : animals) {
                animal.act(newAnimals);
            }
            animals.addAll(newAnimals);
            animals.removeIf(animal -> !animal.isAlive());
        }
    }

    private void populate() {
        for (int row = 0; row < field.getDepth(); row++) {
            for (int col = 0; col < field.getWidth(); col++) {
                if (Math.random() < 0.1) {
                    Location location = new Location(row, col);
                    Rabbit rabbit = new Rabbit(field, location);
                    animals.add(rabbit);
                } else if (Math.random() < 0.05) {
                    Location location = new Location(row, col);
                    Fox fox = new Fox(field, location);
                    animals.add(fox);
                }
            }
        }
    }
}` } />
          <h3 className={CN.BLOGH3}>Penjelasan Kode</h3>
          <p className={CN.BLOGP + CN.BLOGCODE}>
            Kelas <code>Simulator</code> mengelola jalannya simulasi, termasuk inisialisasi bidang, populasi awal hewan, dan iterasi langkah simulasi.
          </p>
          <h2 className={CN.BLOGH2}><br />Hasil</h2>
          <h3 className={CN.BLOGH3}>Abstract Living Creatures Structure</h3>
          <Image src="/blog/abstract-class-java/abstract-structure.png" alt="Abstract Living Creatures Structure" width={606} height={325} />
          <h3 className={CN.BLOGH3}><br />Abstract Living Creatures Output</h3>
          <Image src="/blog/abstract-class-java/abstract-output.png" alt="Abstract Living Creatures Output" width={663} height={233} />
          <h3 className={CN.BLOGH3}><br />Rabbits and Foxes Structure</h3>
          <Image src="/blog/abstract-class-java/rnf-structure.png" alt="Rabbits and Foxes Structure" width={606} height={325} />
          <h3 className={CN.BLOGH3}><br />Rabbits and Foxes Output</h3>
          <Image src="/blog/abstract-class-java/rnf-output.png" alt="Rabbits and Foxes Output" width={319} height={757} />
        </div>
        <hr className={CN.BLOGHR}></hr>
      </div>
      <BlogFooter />
    </div>
  )
}