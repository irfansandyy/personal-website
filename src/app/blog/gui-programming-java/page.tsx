import BlogFooter from "@components/BlogFooter";
import BlogHeader from "@components/BlogHeader";
import CodeBlock from "@/components/CodeBlock";
import * as CN from "@components/BlogConstants";
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "GUI Programming in Java",
  description: "Belajar cara membuat Graphical User Interface (GUI) di Java dengan menggunakan Swing dan AWT libraries",
  icons: "/web-icon.png"
};

export default function guiProgrammingJava() {
  return (
    <div id="top" className={CN.BLOGTOP}>
      <BlogHeader date="23 November 2025" readTime="24" title="GUI Programming in Java" description="Belajar cara membuat Graphical User Interface (GUI) di Java dengan menggunakan Swing dan AWT libraries" imageLink="/blog/gui-programming-java/blog-cover.avif" />
      <div className={CN.BLOGDIV}>
        <hr className={CN.BLOGHR}></hr>
        <div className={CN.BLOGCONTENTS}>
          <h2 className={CN.BLOGH2}>Important Links</h2>
          <p className={CN.BLOGP}>
            <a href="https://github.com/irfansandyy/university-projects/tree/main/object-oriented-programming/simple-login-panel" target="_blank" rel="noopener noreferrer" className={CN.BLOGU}>Simple Login Panel</a>
            <br /><br />
            <a href="https://github.com/irfansandyy/university-projects/tree/main/object-oriented-programming/simple-image-viewer" target="_blank" rel="noopener noreferrer" className={CN.BLOGU}>Simple Image Viewer</a>
          </p>
          <h2 className={CN.BLOGH2}><br />Pengantar</h2>
          <p className={CN.BLOGP + CN.BLOGCODE}>
            GUI adalah singkatan dari Graphical User Interface. GUI merupakan desain aplikasi dengan tampilan visual sehingga pengguna dapat dengan mudah menggunakan aplikasi. The Java Foundation Class (JFC), merupakan bagian penting dari Java SDK, yang termasuk dalam koleksi dari API dimana dapat mempermudah pengembangan aplikasi JAVA GUI. JFC termasuk diantara 5 bagian utama dari API yaitu AWT dan Swing. 
            <br /><br />
            Tiga bagian yang lainnya dari API adalah Java2D, Accessibility, dan Drag dan Drop. Semua itu membantu pengembang dalam mendesain dan mengimplementasikan aplikasi visual yang lebih baik.
            <br /><br />
            AWT dan Swing menyediakan komponen GUI yang dapat digunakan dalam membuat aplikasi Java dan applet. Anda akan mempelajari applet pada bab berikutnya. Tidak seperti beberapa komponen AWT yang menggunakan native code, keseluruhan Swing ditulis menggunakan bahasa pemrograman Java.
            <br /><br />
            Swing menyediakan implementasi platform-independent dimana aplikasi yang dikembangkan dengan platform yang berbeda dapat memiliki tampilan yang sama. Begitu juga dengan AWT menjamin tampilan look and feel pada aplikasi yang dijalankan pada dua mesin yang berbeda menjadi terlihat sama. Swing API dibangun dari beberapa API yang mengimplementasikan beberapa jenis bagian dari AWT. Kesimpulannya, komponen AWT dapat digunakan bersama-sama dengan komponen Swing
            <br /><br />
          </p>
          <h2 className={CN.BLOGH2}><br />Kode Program Simple Login Panel</h2>
          <p className={CN.BLOGP}>
            Berikut adalah kode lengkap untuk membuat simple login panel dengan Java Swing dan AWT:
          </p>
          <CodeBlock languageItem="java" file="Login.java" codeItems={`import javax.swing.*;
import java.awt.*;
import java.awt.event.*;

public class Login {
    String Username = "james3302";
    String Password = "pass";
    String msg = " ";
    JTextField txtUsername;
    JTextField txtPassword;

    public static void main(String[] args) {
        Login gui = new Login();
        gui.go();
    }

    public void go() {  
        JFrame frame = new JFrame();  
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);  
        JPanel panel = new JPanel();  
        JLabel lblUsername = new JLabel("Username:");    
        JLabel lblPassword = new JLabel("Password:");  
        txtUsername = new JTextField(20);  
        txtPassword = new JTextField(20);  
        JButton btnLogin = new JButton("Login");  
        btnLogin.addActionListener(new LoginListener());  
        JButton btnCancel = new JButton("Cancel");  
        btnCancel.addActionListener(new CancelListener());  
        panel.add(lblUsername);  
        panel.add(txtUsername);  
        panel.add(lblPassword);  
        panel.add(txtPassword);      
        panel.add(btnLogin);  
        panel.add(btnCancel); 
        frame.getContentPane().add(BorderLayout.CENTER,panel);  
        frame.setSize(300,150);  
        frame.setVisible(true);  
    }  

    public class LoginListener implements ActionListener {  
        public void actionPerformed(ActionEvent event) {  
            if (Username.equals(txtUsername.getText())) {  
                if (Password.equals(txtPassword.getText())) msg = "Login Granted!";  
                else msg = "Login Denied";  
            } else { 
                msg = "Login Denied";  
            }
            JOptionPane.showMessageDialog(null,msg);            
        }  
    }

    public class CancelListener implements ActionListener{  
        public void actionPerformed(ActionEvent event){  
            txtUsername.setText(" ");  
            txtPassword.setText("");  
            txtUsername.requestFocus();  
        }  
    }  
}  `} />
          <h3 className={CN.BLOGH3}>Penjelasan Kode</h3>
          <p className={CN.BLOGP + CN.BLOGCODE}>
            Pada kode diatas, kita mengimpor library Swing dan AWT yang diperlukan untuk membuat GUI. Kemudian, kita mendefinisikan kelas <code>Login</code> yang berisi atribut untuk <code>username</code>, <code>password</code>, dan pesan login. Metode <code>go()</code> digunakan untuk membuat jendela utama aplikasi dengan komponen-komponen GUI seperti label, text field, dan tombol. Listener ditambahkan pada tombol login dan cancel untuk menangani aksi pengguna. Ketika tombol login ditekan, program memeriksa apakah <code>username</code> dan <code>password</code> yang dimasukkan sesuai dengan yang telah ditentukan, dan menampilkan pesan yang sesuai.
          </p>
          <h2 className={CN.BLOGH2}><br /><br />Kode Program Simple Image Viewer</h2>
          <p className={CN.BLOGP}>
            Berikut adalah kode lengkap untuk membuat simple image viewer dengan Java Swing dan AWT:
          </p>
          <CodeBlock languageItem="java" file="OFImage.java" codeItems={`import java.awt.*;
import java.awt.image.*;

public class OFImage extends BufferedImage
{
    public OFImage(BufferedImage image) {
        super(image.getColorModel(), image.copyData(null), image.isAlphaPremultiplied(), null);
    }

    public OFImage(int width, int height) {
        super(width, height, TYPE_INT_RGB);
    }

    public void setPixel(int x, int y, Color col) {
        int pixel = col.getRGB();
        setRGB(x, y, pixel);
    }

    public Color getPixel(int x, int y) {
        int pixel = getRGB(x, y);
        return new Color(pixel);
    }

    public void darker() {
        int height = getHeight();
        int width = getWidth();
        for (int y = 0; y < height; y++) {
            for (int x = 0; x < width; x++) {
                setPixel(x, y, getPixel(x, y).darker());
            }
        }
    }

    public void lighter() {
        int height = getHeight();
        int width = getWidth();
        for (int y = 0; y < height; y++) {
            for (int x = 0; x < width; x++) {
                setPixel(x, y, getPixel(x, y).brighter());
            }
        }   
    }

    public void threshold() {
        int height = getHeight();
        int width = getWidth();
        for (int y = 0; y < height; y++) {
            for (int x = 0; x < width; x++) {
                Color pixel = getPixel(x, y);
                int brightness = (pixel.getRed() + pixel.getGreen() + pixel.getBlue()) / 3;
                
                if (brightness <= 85) {
                    setPixel(x, y, Color.BLACK);
                } else if (brightness <= 170) {
                    setPixel(x, y, Color.GRAY);
                } else {
                    setPixel(x, y, Color.WHITE);
                }
            }
        }
    }
}`} />
          <h3 className={CN.BLOGH3}>Penjelasan Kode</h3>
          <p className={CN.BLOGP + CN.BLOGCODE}>
            Pada kode diatas, kita mengimpor library AWT dan BufferedImage yang diperlukan untuk memanipulasi gambar. Kemudian, kita mendefinisikan kelas <code>OFImage</code> yang memperluas kelas <code>BufferedImage</code>. Kelas ini memiliki beberapa metode untuk memanipulasi piksel gambar, seperti <code>setPixel()</code> dan <code>getPixel()</code> untuk mengatur dan mendapatkan warna piksel pada koordinat tertentu. Metode <code>darker()</code>, <code>lighter()</code>, dan <code>threshold()</code> digunakan untuk mengubah kecerahan gambar dan menerapkan efek threshold pada gambar. <br />
          </p>
          <CodeBlock languageItem="java" file="ImageFileManager.java" codeItems={`import java.awt.image.*;
import javax.imageio.*;
import java.io.*;

public class ImageFileManager
{
    private static final String IMAGE_FORMAT = "jpg";

    public static OFImage loadImage(File imageFile) {
        try {
            BufferedImage image = ImageIO.read(imageFile);
            if(image == null || (image.getWidth(null) <= 0)) {
                return null;
            }
            return new OFImage(image);
        } catch (IOException exc) {
            return null;
        }
    }

    public static void saveImage(OFImage image, File file) {
        try {
            ImageIO.write(image, IMAGE_FORMAT, file);
        } catch (IOException exc) {
            return;
        }
    }
}`} />
          <h3 className={CN.BLOGH3}>Penjelasan Kode</h3>
          <p className={CN.BLOGP + CN.BLOGCODE}>
            Pada kode diatas, kita mengimpor library AWT, ImageIO, dan IO yang diperlukan untuk memuat dan menyimpan gambar. Kemudian, kita mendefinisikan kelas <code>ImageFileManager</code> yang memiliki metode statis untuk memuat dan menyimpan gambar. Metode <code>loadImage()</code> digunakan untuk memuat gambar dari file dan mengembalikan objek <code>OFImage</code>. Metode <code>saveImage()</code> digunakan untuk menyimpan objek <code>OFImage</code> ke file dengan format yang ditentukan. <br />
          </p>
          <CodeBlock languageItem="java" file="ImagePanel.java" codeItems={`import java.awt.*;
import javax.swing.*;

public class ImagePanel extends JComponent
{
    private int width, height;
    private OFImage panelImage;

    public ImagePanel() {
        width = 360;
        height = 240;
        panelImage = null;
    }

    public void setImage(OFImage image) {
        if(image != null) {
            width = image.getWidth();
            height = image.getHeight();
            panelImage = image;
            repaint();
        }
    }

    public void clearImage() {
        Graphics imageGraphics = panelImage.getGraphics();
        imageGraphics.setColor(Color.LIGHT_GRAY);
        imageGraphics.fillRect(0, 0, width, height);
        repaint();
    }

    public Dimension getPreferredSize() {
        return new Dimension(width, height);
    }

    public void paintComponent(Graphics g) {
        Dimension size = getSize();
        g.clearRect(0, 0, size.width, size.height);
        if(panelImage != null) {
            g.drawImage(panelImage, 0, 0, null);
        }
    }
}`} />
          <h3 className={CN.BLOGH3}>Penjelasan Kode</h3>
          <p className={CN.BLOGP + CN.BLOGCODE}>
            Pada kode diatas, kita mengimpor library AWT dan Swing yang diperlukan untuk membuat komponen GUI. Kemudian, kita mendefinisikan kelas <code>ImagePanel</code> yang memperluas kelas <code>JComponent</code>. Kelas ini memiliki atribut untuk menyimpan lebar, tinggi, dan objek <code>OFImage</code> yang akan ditampilkan. Metode <code>setImage()</code> digunakan untuk mengatur gambar yang akan ditampilkan pada panel, sedangkan metode <code>clearImage()</code> digunakan untuk menghapus gambar dengan mengisi panel dengan warna abu-abu terang. Metode <code>getPreferredSize()</code> mengembalikan ukuran preferensi panel, dan metode <code>paintComponent()</code> digunakan untuk menggambar gambar pada panel. <br />
          </p>
          <CodeBlock languageItem="java" file="ImageViewer.java" codeItems={`import java.awt.*;
import java.awt.event.*;
import javax.swing.*;
import java.io.File;

public class ImageViewer
{
    private static final String VERSION = "Version 1.0";
    private static JFileChooser fileChooser = new JFileChooser(System.getProperty("user.dir"));

    private JFrame frame;
    private ImagePanel imagePanel;
    private JLabel filenameLabel;
    private JLabel statusLabel;
    private OFImage currentImage;

    public ImageViewer() {
        currentImage = null;
        makeFrame();
    }

    public static void main(String[] args) {
        new ImageViewer();
    }

    private void openFile() {
        int returnVal = fileChooser.showOpenDialog(frame);

        if(returnVal != JFileChooser.APPROVE_OPTION) {
            return;
        }
        File selectedFile = fileChooser.getSelectedFile();
        currentImage = ImageFileManager.loadImage(selectedFile);

        if(currentImage == null) {
            JOptionPane.showMessageDialog(frame, "The file was not in a recognized image file format.", "Image Load Error", JOptionPane.ERROR_MESSAGE);
            return;
        }

        imagePanel.setImage(currentImage);
        showFilename(selectedFile.getPath());
        showStatus("File loaded.");
        frame.pack();
    }

    private void close() {
        currentImage = null;
        imagePanel.clearImage();
        showFilename(null);
    }

    private void quit() {
        System.exit(0);
    }

    private void makeDarker() {
        if(currentImage != null) {
            currentImage.darker();
            frame.repaint();
            showStatus("Applied: darker");
        } else {
            showStatus("No image loaded.");
        }
    }

    private void makeLighter() {
        if(currentImage != null) {
            currentImage.lighter();
            frame.repaint();
            showStatus("Applied: lighter");
        } else {
            showStatus("No image loaded.");
        }
    }

    private void threshold() {
        if(currentImage != null) {
            currentImage.threshold();
            frame.repaint();
            showStatus("Applied: threshold");
        } else {
            showStatus("No image loaded.");
        }
    }

    private void showAbout() {
        JOptionPane.showMessageDialog(frame, "ImageViewer\n" + VERSION, "About ImageViewer", JOptionPane.INFORMATION_MESSAGE);
    }

    private void showFilename(String filename) {
        if(filename ==null) {
            filenameLabel.setText("No file displayed.");
        } else {
            filenameLabel.setText("File: " + filename);
        }
    }

    private void showStatus(String status) {
        statusLabel.setText(status);
    }

    private void makeFrame() {
        frame = new JFrame("ImageViewer");
        makeMenuBar(frame);

        Container contentPane = frame.getContentPane();
        contentPane.setLayout(new BorderLayout(6, 6));

        filenameLabel = new JLabel();
        contentPane.add(filenameLabel, BorderLayout.NORTH);

        imagePanel = new ImagePanel();
        contentPane.add(imagePanel, BorderLayout.CENTER);

        statusLabel = new JLabel(VERSION);
        contentPane.add(statusLabel, BorderLayout.SOUTH);

        showFilename(null);
        frame.pack();

        Dimension d = Toolkit.getDefaultToolkit().getScreenSize();
        frame.setLocation(d.width/2 - frame.getWidth()/2, d.height/2 - frame.getHeight()/2);
        frame.setVisible(true);
    }

    private void makeMenuBar(JFrame frame) {
        final int SHORTCUT_MASK = Toolkit.getDefaultToolkit().getMenuShortcutKeyMaskEx();

        JMenuBar menubar = new JMenuBar();
        frame.setJMenuBar(menubar);

        JMenu menu;
        JMenuItem item;

        menu = new JMenu("File");
        menubar.add(menu);

        item = new JMenuItem("Open");
        item.setAccelerator(KeyStroke.getKeyStroke(KeyEvent.VK_O, SHORTCUT_MASK));
        item.addActionListener(new ActionListener() { public void actionPerformed(ActionEvent e) { openFile();}});
        menu.add(item);

        item = new JMenuItem("Close");
        item.setAccelerator(KeyStroke.getKeyStroke(KeyEvent.VK_W, SHORTCUT_MASK));
        item.addActionListener(new ActionListener() { public void actionPerformed(ActionEvent e) { close();}});

        menu.add(item);
        menu.addSeparator();

        item = new JMenuItem("Quit");
        item.setAccelerator(KeyStroke.getKeyStroke(KeyEvent.VK_Q, SHORTCUT_MASK));
        item.addActionListener(new ActionListener() { public void actionPerformed(ActionEvent e) { quit();}});
        menu.add(item);

        menu = new JMenu("Filter");
        menubar.add(menu);

        item = new JMenuItem("Darker");
        item.addActionListener(new ActionListener() { public void actionPerformed(ActionEvent e) { makeDarker(); }});
        menu.add(item);

        item = new JMenuItem("Lighter");
        item.addActionListener(new ActionListener() { public void actionPerformed(ActionEvent e) { makeLighter(); }});
        menu.add(item);

        item = new JMenuItem("Threshold");
        item.addActionListener(new ActionListener() { public void actionPerformed(ActionEvent e) { threshold(); }});
        menu.add(item);

        menu = new JMenu("Help");
        menubar.add(menu);

        item = new JMenuItem("About ImageViewer...");
        item.addActionListener(new ActionListener() { public void actionPerformed(ActionEvent e) { showAbout(); }});
        menu.add(item);
    }
}`} />
          <h3 className={CN.BLOGH3}>Penjelasan Kode</h3>
          <p className={CN.BLOGP + CN.BLOGCODE}>
            Pada kode diatas, kita mengimpor library AWT, Swing, dan IO yang diperlukan untuk membuat aplikasi GUI. Kemudian, kita mendefinisikan kelas <code>ImageViewer</code> yang berisi atribut untuk jendela utama, panel gambar, label filename, label status, dan objek <code>OFImage</code> saat ini. Konstruktor <code>ImageViewer()</code> digunakan untuk menginisialisasi atribut dan membuat jendela utama aplikasi. Metode <code>openFile()</code> digunakan untuk membuka dialog pemilihan file dan memuat gambar yang dipilih. Metode lainnya seperti <code>close()</code>, <code>quit()</code>, <code>makeDarker()</code>, <code>makeLighter()</code>, dan <code>threshold()</code> digunakan untuk menangani aksi pengguna pada menu. Metode <code>makeFrame()</code> digunakan untuk membuat jendela utama aplikasi dengan komponen-komponen GUI, dan metode <code>makeMenuBar()</code> digunakan untuk membuat menu aplikasi. <br />
          </p>
          <h2 className={CN.BLOGH2}><br />Hasil</h2>
          <h3 className={CN.BLOGH3}>Simple Login Panel Structure</h3>
          <Image src="/blog/gui-programming-java/login-structure.png" alt="Simple Login Panel Structure" width={369} height={203} />
          <h3 className={CN.BLOGH3}><br />Simple Login Panel Output</h3>
          <Image src="/blog/gui-programming-java/login-output.png" alt="Simple Login Panel Output" width={341} height={327} />
          <h3 className={CN.BLOGH3}><br />Simple Image Viewer Structure</h3>
          <Image src="/blog/gui-programming-java/viewer-structure.png" alt="Simple Image Viewer Structure" width={535} height={356} />
          <h3 className={CN.BLOGH3}><br />Simple Image Viewer Output</h3>
          <Image src="/blog/gui-programming-java/viewer-output.png" alt="Simple Image Viewer Output" width={841} height={1052} />
        </div>
        <hr className={CN.BLOGHR}></hr>
      </div>
      <BlogFooter />
    </div>
  )
}