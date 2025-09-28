import BlogFooter from "@components/BlogFooter";
import BlogHeader from "@components/BlogHeader";
import CodeBlock from "@/components/CodeBlock";
import * as CN from "@components/BlogConstants";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Clock Display Menggunakan Java",
  description: "Membuat display clock lengkap beserta tanggal dan suhu menggunakan java",
  icons: "/web-icon.png"
};

export default function ClockDisplayMenggunakanJava() {
  return (
    <div id="top" className={CN.BLOGTOP}>
      <BlogHeader date="16 September 2025" readTime="16" title="Clock Display Menggunakan Java" description="Membuat display clock lengkap beserta tanggal dan suhu menggunakan java" imageLink="/blog/clock-display-java/blog-cover.jpeg" />
      <div className={CN.BLOGDIV}>
        <hr className={CN.BLOGHR}></hr>
        <div className={CN.BLOGCONTENTS}>
          <h2 className={CN.BLOGH2}>Pengantar</h2>
          <p className={CN.BLOGP}>
            Pada proyek ini, kita akan membuat sebuah aplikasi desktop sederhana yang menampilkan jam digital lengkap dengan tanggal dan suhu menggunakan bahasa pemrograman Java. Aplikasi ini akan memanfaatkan pustaka Swing untuk antarmuka pengguna, library java date untuk mendapatkan tanggal sekarang dan random untuk data suhu
            <br /><br />
            Berikut adalah langkah-langkah utama yang akan kita lakukan:
          </p>
          <ul className={CN.BLOGUL}>
            <li>Membuat jendela utama menggunakan JFrame</li>
            <li>Menambahkan JLabel untuk menampilkan waktu, tanggal, dan suhu</li>
            <li>Menggunakan Timer untuk memperbarui waktu setiap detik</li>
            <li>Menggunakan java date untuk mendapatkan tanggal sekarang</li>
            <li>Menggunakan random untuk mensimulasikan data suhu</li>
          </ul>
          <h2 className={CN.BLOGH2}><br />Source Code</h2>
          <p className={CN.BLOGP}>
            Berikut adalah source code lengkap untuk aplikasi Clock Display menggunakan Java:
          </p>
          <CodeBlock languageItem="java" file="NumberDisplay.java" codeItems={`public class NumberDisplay {
    private int limit;
    private int value;

    public NumberDisplay(int rollOverLimit) {
        limit = rollOverLimit;
        value = 0;
    }

    public int getValue() {
        return value;
    }

    public String getDisplayValue() {
        if (value < 10) return "0" + value;
        else return "" + value;
    }

    public void setValue(int replacementValue) {
        if ((replacementValue >= 0) && (replacementValue < limit)) value = replacementValue;
    }

    public void increment() {
        value = (value + 1) % limit;
    }
}`} />    
          <h3 className={CN.BLOGH3}>Penjelasan Kode</h3>
          <p className={CN.BLOGP + CN.BLOGCODE}>
            <strong>Ringkasan:</strong> Kelas <code>NumberDisplay</code> menyimpan satu angka dengan batas atas eksklusif (<code>limit</code>) dan nilai sekarang (<code>value</code>).
            <br /><br />
            <strong>Konstruktor:</strong> Mengatur <code>limit</code> dari argumen dan menginisialisasi <code>value</code> ke 0.
            <br /><br />
            <strong>Metode:</strong> <code>getValue()</code> mengembalikan nilai mentah. <code>getDisplayValue()</code> mengembalikan string dua digit (tambah nol di depan jika &lt; 10). <code>setValue()</code> hanya menerima 0 ≤ nilai &lt; <code>limit</code>. <code>increment()</code> menambah satu lalu melingkar dengan <code>% limit</code>
            <br /><br />
          </p>
          <CodeBlock languageItem="java" file="ClockDisplay.java" codeItems={`public class ClockDisplay {
    private NumberDisplay hours;
    private NumberDisplay minutes;
    private NumberDisplay seconds;
    private String displayString;

    public ClockDisplay() {
        hours = new NumberDisplay(24);
        minutes = new NumberDisplay(60);
        seconds = new NumberDisplay(60);
        updateDisplay();
    }

    public ClockDisplay(int hour, int minute, int second) {
        hours = new NumberDisplay(24);
        minutes = new NumberDisplay(60);
        seconds = new NumberDisplay(60);
        setTime(hour, minute, second);
    }

    public void timeTick() {
        seconds.increment();
        if(seconds.getValue() == 0) {
            minutes.increment();
            if(minutes.getValue() == 0) {
                hours.increment();
            }
        }
        updateDisplay();
    }

    public void setTime(int hour, int minute, int second) {
        hours.setValue(hour);
        minutes.setValue(minute);
        seconds.setValue(second);
        updateDisplay();
    }

    public String getTime() {
        return displayString;
    }

    private void updateDisplay() {
        displayString = hours.getDisplayValue() + ":" + minutes.getDisplayValue() + ":" + seconds.getDisplayValue();
    }
}`} />    
          <h3 className={CN.BLOGH3}>Penjelasan Kode</h3>
          <p className={CN.BLOGP + CN.BLOGCODE}>
            <strong>Ringkasan:</strong> <code>ClockDisplay</code> menyusun tiga <code>NumberDisplay</code> untuk jam (0–23), menit (0–59), dan detik (0–59).
            <br /><br />
            <strong>Konstruktor:</strong> Konstruktor default menghasilkan 00:00:00; konstruktor overload menerima <code>hour</code>, <code>minute</code>, <code>second</code> lalu memanggil <code>setTime()</code>.
            <br /><br />
            <strong>Perilaku:</strong> <code>timeTick()</code> menaikkan detik; jika detik kembali 00, menit bertambah; jika menit kembali 00, jam bertambah. <code>updateDisplay()</code> menyusun string <code>HH:MM:SS</code> dari <code>getDisplayValue()</code> setiap komponen. <code>getTime()</code> mengembalikan string waktu terkini
            <br /><br />
          </p>
          <CodeBlock languageItem="java" file="Clock.java" codeItems={`import java.awt.*;
import java.awt.event.*;
import javax.swing.*;
import javax.swing.border.*;
import javax.swing.Timer;
import java.time.LocalDate;
import java.time.LocalTime;
import java.time.format.DateTimeFormatter;
import java.util.Locale;
import java.util.Random;

public class Clock {
    private JFrame frame;
    private JLabel label;
    private JLabel dateLabel;
    private JLabel tempLabel;
    private ClockDisplay clock;
    private boolean clockRunning = false;
    private TimerThread timerThread;
    private Timer dateTimer;
    private Random random;
    private int currentTemp = 0;

    public static void main(String[] args) {
        SwingUtilities.invokeLater(() -> new Clock());
    }

    public Clock() {
        makeFrame();
        clock = new ClockDisplay();
        initDateAndTempTimer();
    }

    private void start() {
        if(!clockRunning) {
            clockRunning = true;
            timerThread = new TimerThread();
            timerThread.start();
        }
    }

    private void stop() {
        clockRunning = false;
    }

    private void step() {
        clock.timeTick();
        label.setText(clock.getTime());
    }

    private void showAbout() {
        JOptionPane.showMessageDialog(frame, 
            "Clock Version 1.0\n" +
            "A simple interface for the 'Objects First' clock display project",
            "About Clock",
            JOptionPane.INFORMATION_MESSAGE);
    }

    private void quit() {
        System.exit(0);
    }

    private void makeFrame() {
        frame = new JFrame("Clock");
        JPanel contentPane = (JPanel) frame.getContentPane();
        contentPane.setBorder(new EmptyBorder(1, 60, 1, 60));
        makeMenuBar(frame);

        contentPane.setLayout(new BorderLayout(12, 12));

    JPanel centerPanel = new JPanel(new BorderLayout());
        centerPanel.setOpaque(false);

        label = new JLabel("00:00:00", SwingConstants.CENTER);
        Font displayFont = label.getFont().deriveFont(96.0f);
        label.setFont(displayFont);
    centerPanel.add(label, BorderLayout.CENTER);

        JPanel dateRow = new JPanel(new BorderLayout());
        dateRow.setOpaque(false);
        dateRow.setBorder(new EmptyBorder(12, 0, 0, 0));
        dateLabel = new JLabel("", SwingConstants.LEFT);
        tempLabel = new JLabel("", SwingConstants.RIGHT);
        Font infoFont = label.getFont().deriveFont(24.0f);
        dateLabel.setFont(infoFont);
        tempLabel.setFont(infoFont);
        dateRow.add(dateLabel, BorderLayout.WEST);
        dateRow.add(tempLabel, BorderLayout.EAST);
    centerPanel.add(dateRow, BorderLayout.SOUTH);

        contentPane.add(centerPanel, BorderLayout.CENTER);

        JPanel toolbar = new JPanel();
        toolbar.setLayout(new GridLayout(1, 0));

        JButton startButton = new JButton("Start");
        startButton.addActionListener(e -> start());
        toolbar.add(startButton);

        JButton stopButton = new JButton("Stop");
        stopButton.addActionListener(e -> stop());
        toolbar.add(stopButton);
        
        JButton stepButton = new JButton("Step");
        stepButton.addActionListener(e -> step());
        toolbar.add(stepButton);

        JPanel flow = new JPanel();
        flow.add(toolbar);

        contentPane.add(flow, BorderLayout.SOUTH);
        
        frame.pack();

        Dimension d = Toolkit.getDefaultToolkit().getScreenSize();
        frame.setLocation(d.width/2 - frame.getWidth()/2, d.height/2 - frame.getHeight()/2);
        frame.setVisible(true);
    }

    private void initDateAndTempTimer() {
        random = new Random();
        updateDateAndTemp();
        dateTimer = new Timer(1000, e -> updateDateAndTemp());
        dateTimer.setInitialDelay(0);
        dateTimer.start();
    }

    private void updateDateAndTemp() {
        if (dateLabel == null || tempLabel == null) return;
        Locale idID = new Locale("id", "ID");
        String dateText = LocalDate.now().format(DateTimeFormatter.ofPattern("EEEE, d MMMM yyyy", idID));
        dateLabel.setText(capitalizeFirst(dateText));

        int sec = LocalTime.now().getSecond();
        if (sec == 0 || currentTemp == 0) {
            currentTemp = 24 + random.nextInt(9);
        }
        tempLabel.setText(currentTemp + "°C");
    }

    private String capitalizeFirst(String s) {
        if (s == null || s.isEmpty()) return s;
        return Character.toUpperCase(s.charAt(0)) + s.substring(1);
    }

    private void makeMenuBar(JFrame frame) {
        final int SHORTCUT_MASK = Toolkit.getDefaultToolkit().getMenuShortcutKeyMask();

        JMenuBar menuBar = new JMenuBar();
        frame.setJMenuBar(menuBar);

        JMenu menu;
        JMenuItem item;

        menu = new JMenu("File");
        menuBar.add(menu);

        item = new JMenuItem("About Clock");
        item.addActionListener(e -> showAbout());
        menu.add(item);

        menu.addSeparator();

        item = new JMenuItem("Quit");
        item.setAccelerator(KeyStroke.getKeyStroke(KeyEvent.VK_Q, SHORTCUT_MASK));
        item.addActionListener(e -> quit());
        menu.add(item);
    }

    class TimerThread extends Thread {
        public void run() {
            while (clockRunning) {
                step();
                pause();
            }
        }

        private void pause() {
            try {
                Thread.sleep(1000);
            } catch (InterruptedException exc) {

            }
        }
    }
}`} />
          <h3 className={CN.BLOGH3}>Penjelasan Kode</h3>
          <p className={CN.BLOGP + CN.BLOGCODE}>
            <strong>UI Swing:</strong> Membuat <code>JFrame</code> dengan label besar waktu di CENTER dan baris tanggal+suhu di SOUTH (kiri: tanggal, kanan: suhu) menggunakan <code>BorderLayout</code>.
            <br /><br />
            <strong>Pembaruan waktu:</strong> <code>TimerThread</code> memanggil <code>step()</code> tiap 1 detik untuk menjalankan <code>clock.timeTick()</code> dan menampilkan hasil <code>ClockDisplay</code> pada label jam.
            <br /><br />
            <strong>Tanggal & suhu:</strong> <code>javax.swing.Timer</code> memanggil <code>updateDateAndTemp()</code> setiap detik. Tanggal diformat locale Indonesia (<code>EEEE, d MMMM yyyy</code>) lalu dikapitalisasi huruf pertamanya. Suhu diacak pada rentang 24–32&nbsp;°C sekali per menit (saat detik == 0) dan ditampilkan di sisi kanan.
            <br /><br />
            <strong>Lainnya:</strong> Tombol Start/Stop/Step mengendalikan laju jam; menu File berisi About dan Quit. <code>capitalizeFirst()</code> hanya merapikan tampilan tanggal
          </p>
          <h2 className={CN.BLOGH2}><br />Hasil</h2>
          <p className={CN.BLOGP}>
            Berikut adalah tampilan dari aplikasi Clock Display yang telah kita buat:
          </p>
          <Image src="/blog/clock-display-java/hasil.png" alt="Clock Display Screenshot" width={503} height={253} />
          <h2 className={CN.BLOGH2}><br />Kesimpulan</h2>
          <p className={CN.BLOGP}>
            Dengan menggunakan Java Swing, kita dapat dengan mudah membuat aplikasi desktop yang menampilkan jam digital lengkap dengan tanggal dan suhu. Proyek ini memberikan gambaran dasar tentang bagaimana mengelola waktu, memperbarui antarmuka pengguna secara berkala, dan memformat data untuk tampilan yang menarik. Kita dapat mengembangkan proyek ini lebih lanjut dengan menambahkan fitur seperti pengaturan zona waktu, alarm, atau integrasi dengan API cuaca nyata untuk mendapatkan data suhu yang akurat
          </p>
        </div>
        <hr className={CN.BLOGHR}></hr>
      </div>
      <BlogFooter />
    </div>
  )
}