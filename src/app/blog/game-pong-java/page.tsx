import BlogFooter from "@components/BlogFooter";
import BlogHeader from "@components/BlogHeader";
import CodeBlock from "@/components/CodeBlock";
import * as CN from "@components/BlogConstants";
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Game Pong Java",
  description: "Membuat game Pong sederhana menggunakan bahasa pemrograman Java",
  icons: "/web-icon.png"
};

export default function GamePongJava() {
  return (
    <div id="top" className={CN.BLOGTOP}>
      <BlogHeader date="2 December 2025" readTime="15" title="Game Pong Java" description="Membuat game Pong sederhana menggunakan bahasa pemrograman Java" imageLink="/blog/game-pong-java/blog-cover.png" />
      <div className={CN.BLOGDIV}>
        <hr className={CN.BLOGHR}></hr>
        <div className={CN.BLOGCONTENTS}>
          <h2 className={CN.BLOGH2}>Important Link</h2>
          <p className={CN.BLOGP}>
            <a href="https://github.com/irfansandyy/university-projects/tree/main/object-oriented-programming/pong-game-java" target="_blank" rel="noopener noreferrer" className={CN.BLOGU}>GitHub Repository Here</a>
          </p>
          <h2 className={CN.BLOGH2}>Pengantar</h2>
          <p className={CN.BLOGP}>
            Pong adalah permainan video generasi pertama yang dirilis sebagai permainan arkade yang dioperasikan dengan koin yang dikembangkan oleh Atari Inc. pada tanggal 29 November, 1972.Pong didasari dari permainan atau olahraga tenis meja (Ping pong), nama permainan ini berasal dari suara yang dihasilkan ketika memukul bola ping pong.Kata Pong telah didaftarkan sebagai merek dari Atari Interactive.
            <br /><br />
            Pong dengan cepat menjadi permainan komersial pertama yang sangat sukses, dan merupakan permulaan dari industri permainan video. Tak lama setelah dirilis, beberapa perusahaan berusaha menyalin permainan Pong, dan merilis beberapa permainan baru. Sehingga, Atari memberanikan pegawainya untuk membuat permainan yang lebih inovatif. Beberapa sekuel muncul dengan permainan yang sama, namun dengan fitur baru. Pada permulaan Natal 1975, Atari secara eksklusif merilis versi rumahan Pong via toko ritel Sears.
            <br /><br />
            Pada artikel ini, saya akan menjelaskan bagaimana cara membuat game Pong sederhana menggunakan bahasa pemrograman Java. Game ini akan memiliki fitur dasar seperti menggerakkan paddle, memantulkan bola, dan mencetak skor.
          </p>
          <h2 className={CN.BLOGH2}><br />Kode Program</h2>
          <p className={CN.BLOGP}>
            Berikut adalah kode lengkap untuk membuat game Pong sederhana menggunakan bahasa pemrograman Java:
          </p>
          <CodeBlock languageItem="java" file="Renderer.java" codeItems={`import java.awt.Graphics;
import java.awt.Graphics2D;
import javax.swing.JPanel;

public class Renderer extends JPanel {

	private static final long serialVersionUID = 1L;

	@Override
	protected void paintComponent(Graphics g) {
		super.paintComponent(g);

		Pong.pong.render((Graphics2D) g);
	}
}
`} />
          <h3 className={CN.BLOGH3}>Penjelasan Kode</h3>
          <p className={CN.BLOGP + CN.BLOGCODE}>
            Kode di atas adalah kelas Renderer yang bertanggung jawab untuk menggambar elemen-elemen game Pong pada layar. Kelas ini memperluas <code>JPanel</code> dan mengoverride metode <code>paintComponent</code> untuk melakukan rendering.
            <br /><br />
            Di dalam metode <code>paintComponent</code>, kita memanggil metode <code>render</code> dari objek <code>Pong</code> untuk menggambar elemen-elemen game seperti paddle, bola, dan skor.
          </p>
          <CodeBlock languageItem="java" file="Pong.java" codeItems={`import java.awt.BasicStroke;
import java.awt.Color;
import java.awt.Font;
import java.awt.Graphics2D;
import java.awt.RenderingHints;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.awt.event.KeyEvent;
import java.awt.event.KeyListener;
import java.util.Random;
import javax.swing.JFrame;
import javax.swing.Timer;

public class Pong implements ActionListener, KeyListener {
	public static Pong pong;
	public int width = 700, height = 700;
	public Renderer renderer;
	public Paddle player1;
	public Paddle player2;
	public Ball ball;
	public boolean bot = false, selectingDifficulty;
	public boolean w, s, up, down;
	public int gameStatus = 0, scoreLimit = 7, playerWon; // 0 = Menu, 1 = Paused, 2 = Playing, 3 = Over
	public int botDifficulty, botMoves, botCooldown = 0;
	public Random random;
	public JFrame jframe;

	public Pong() {
		Timer timer = new Timer(20, this);
		random = new Random();
		jframe = new JFrame("Pong");
		renderer = new Renderer();
		jframe.setSize(width + 15, height + 35);
		jframe.setVisible(true);
		jframe.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
		jframe.add(renderer);
		jframe.addKeyListener(this);
		timer.start();
	}

	public void start() {
		gameStatus = 2;
		player1 = new Paddle(this, 1);
		player2 = new Paddle(this, 2);
		ball = new Ball(this);
	}

	public void update() {
		if (player1.score >= scoreLimit) {
			playerWon = 1;
			gameStatus = 3;
		}

		if (player2.score >= scoreLimit) {
			gameStatus = 3;
			playerWon = 2;
		}

		if (w) player1.move(true);
		if (s) player1.move(false);

		if (!bot) {
			if (up) player2.move(true);
			if (down) player2.move(false);
		} else {
			if (botCooldown > 0) {
				botCooldown--;

				if (botCooldown == 0) botMoves = 0;
			}

			if (botMoves < 10) {
				if (player2.y + player2.height / 2 < ball.y) {
					player2.move(false);
					botMoves++;
				}

				if (player2.y + player2.height / 2 > ball.y) {
					player2.move(true);
					botMoves++;
				}

				if (botDifficulty == 0) botCooldown = 20;
				if (botDifficulty == 1) botCooldown = 15;
				if (botDifficulty == 2) botCooldown = 10;
			}
		}

		ball.update(player1, player2);
	}

	public void render(Graphics2D g) {
		g.setColor(Color.BLACK);
		g.fillRect(0, 0, width, height);
		g.setRenderingHint(RenderingHints.KEY_ANTIALIASING, RenderingHints.VALUE_ANTIALIAS_ON);

		if (gameStatus == 0) {
			g.setColor(Color.WHITE);
			g.setFont(new Font("Arial", 1, 50));

			g.drawString("PONG", width / 2 - 75, 50);

			if (!selectingDifficulty) {
				g.setFont(new Font("Arial", 1, 30));

				g.drawString("Press Space to Play", width / 2 - 150, height / 2 - 25);
				g.drawString("Press Shift to Play with Bot", width / 2 - 200, height / 2 + 25);
				g.drawString("<< Score Limit: " + scoreLimit + " >>", width / 2 - 150, height / 2 + 75);
			}
		}

		if (selectingDifficulty) {
			String string = botDifficulty == 0 ? "Easy" : (botDifficulty == 1 ? "Medium" : "Hard");

			g.setFont(new Font("Arial", 1, 30));

			g.drawString("<< Bot Difficulty: " + string + " >>", width / 2 - 180, height / 2 - 25);
			g.drawString("Press Space to Play", width / 2 - 150, height / 2 + 25);
		}

		if (gameStatus == 1) {
			g.setColor(Color.WHITE);
			g.setFont(new Font("Arial", 1, 50));
			g.drawString("PAUSED", width / 2 - 103, height / 2 - 25);
		}

		if (gameStatus == 1 || gameStatus == 2) {
			g.setColor(Color.WHITE);

			g.setStroke(new BasicStroke(5f));

			g.drawLine(width / 2, 0, width / 2, height);

			g.setStroke(new BasicStroke(2f));

			g.drawOval(width / 2 - 150, height / 2 - 150, 300, 300);

			g.setFont(new Font("Arial", 1, 50));

			g.drawString(String.valueOf(player1.score), width / 2 - 90, 50);
			g.drawString(String.valueOf(player2.score), width / 2 + 65, 50);

			player1.render(g);
			player2.render(g);
			ball.render(g);
		}

		if (gameStatus == 3) {
			g.setColor(Color.WHITE);
			g.setFont(new Font("Arial", 1, 50));

			g.drawString("PONG", width / 2 - 75, 50);

			if (bot && playerWon == 2) g.drawString("The Bot Wins!", width / 2 - 170, 200);
			else g.drawString("Player " + playerWon + " Wins!", width / 2 - 165, 200);

			g.setFont(new Font("Arial", 1, 30));

			g.drawString("Press Space to Play Again", width / 2 - 185, height / 2 - 25);
			g.drawString("Press ESC for Menu", width / 2 - 140, height / 2 + 25);
		}
	}

	@Override
	public void actionPerformed(ActionEvent e) {
		if (gameStatus == 2) update();
		renderer.repaint();
	}

	public static void main(String[] args) {
		pong = new Pong();
	}

	@Override
	public void keyPressed(KeyEvent e) {
		int id = e.getKeyCode();

		if (id == KeyEvent.VK_W) w = true;
		else if (id == KeyEvent.VK_S) s = true;
		else if (id == KeyEvent.VK_UP) up = true;
		else if (id == KeyEvent.VK_DOWN) down = true;
		else if (id == KeyEvent.VK_RIGHT) {
			if (selectingDifficulty) {
				if (botDifficulty < 2) botDifficulty++;
				else botDifficulty = 0;
			} else if (gameStatus == 0) scoreLimit++;
		} else if (id == KeyEvent.VK_LEFT) {
			if (selectingDifficulty) {
				if (botDifficulty > 0) botDifficulty--;
				else botDifficulty = 2;
			} else if (gameStatus == 0 && scoreLimit > 1) scoreLimit--;
		} else if (id == KeyEvent.VK_ESCAPE && (gameStatus == 2 || gameStatus == 3)) gameStatus = 0;
		else if (id == KeyEvent.VK_SHIFT && gameStatus == 0) {
			bot = true;
			selectingDifficulty = true;
		} else if (id == KeyEvent.VK_SPACE) {
			if (gameStatus == 0 || gameStatus == 3) {
				if (!selectingDifficulty) bot = false;
				else selectingDifficulty = false;
				start();
			} else if (gameStatus == 1) gameStatus = 2;
			else if (gameStatus == 2) gameStatus = 1;
		}
	}

	@Override
	public void keyReleased(KeyEvent e) {
		int id = e.getKeyCode();

		if (id == KeyEvent.VK_W) w = false;
		else if (id == KeyEvent.VK_S) s = false;
		else if (id == KeyEvent.VK_UP) up = false;
		else if (id == KeyEvent.VK_DOWN) down = false;
	}

	@Override
	public void keyTyped(KeyEvent e)
	{

	}
}
`} />
          <h3 className={CN.BLOGH3}>Penjelasan Kode</h3>
          <p className={CN.BLOGP + CN.BLOGCODE}>
            Kode di atas adalah kelas utama Pong yang mengatur logika permainan, input pengguna, dan rendering. Kelas ini mengimplementasikan antarmuka <code>ActionListener</code> dan <code>KeyListener</code> untuk menangani pembaruan permainan dan input keyboard.
            <br /><br />
            Kelas ini memiliki atribut untuk menyimpan informasi tentang pemain, bola, status permainan, dan pengaturan lainnya. Metode <code>start</code> digunakan untuk memulai permainan, metode <code>update</code> untuk memperbarui posisi pemain dan bola, dan metode <code>render</code> untuk menggambar elemen-elemen permainan pada layar.
            <br /><br />
            Metode <code>keyPressed</code> dan <code>keyReleased</code> digunakan untuk menangani input keyboard dari pemain.
          </p>
          <CodeBlock languageItem="java" file="Pong.java" codeItems={`import java.awt.Color;
import java.awt.Graphics;

public class Paddle {
	public int paddleNumber;
	public int x, y, width = 50, height = 250;
	public int score;

	public Paddle(Pong pong, int paddleNumber) {
		this.paddleNumber = paddleNumber;
		if (paddleNumber == 1) this.x = 0;
		if (paddleNumber == 2) this.x = pong.width - width;
		this.y = pong.height / 2 - this.height / 2;
	}

	public void render(Graphics g) {
		g.setColor(Color.WHITE);
		g.fillRect(x, y, width, height);
	}

	public void move(boolean up) {
		int speed = 15;

		if (up) {
			if (y - speed > 0) y -= speed;
			else y = 0;
		} else {
			if (y + height + speed < Pong.pong.height) y += speed;
			else y = Pong.pong.height - height;
		}
	}
}`} />
          <h3 className={CN.BLOGH3}>Penjelasan Kode</h3>
          <p className={CN.BLOGP + CN.BLOGCODE}>
            Kode di atas adalah kelas Paddle yang mewakili paddle pemain dalam permainan Pong. Kelas ini memiliki atribut untuk menyimpan posisi, ukuran, dan skor paddle.
            <br /><br />
            Metode <code>render</code> digunakan untuk menggambar paddle pada layar, dan metode <code>move</code> digunakan untuk menggerakkan paddle ke atas atau ke bawah berdasarkan input pemain.
          </p>
          <CodeBlock languageItem="java" file="Ball.java" codeItems={`import java.awt.Color;
import java.awt.Graphics;
import java.util.Random;

/**
 * Write a description of class Ball here.
 *
 * @author (your name)
 * @version (a version number or a date)
 */

public class Ball {

	public int x, y, width = 25, height = 25;
	public int motionX, motionY;
	public Random random;
	private Pong pong;
	public int amountOfHits;

	public Ball(Pong pong) {
		this.pong = pong;
		this.random = new Random();
		spawn();
	}

	public void update(Paddle paddle1, Paddle paddle2) {
		int speed = 5;

		this.x += motionX * speed;
		this.y += motionY * speed;

		if (this.y + height - motionY > pong.height || this.y + motionY < 0) {
			if (this.motionY < 0) {
				this.y = 0;
				this.motionY = random.nextInt(4);

				if (motionY == 0) motionY = 1;
			} else {
				this.motionY = -random.nextInt(4);
				this.y = pong.height - height;

				if (motionY == 0) motionY = -1;
			}
		}

		if (checkCollision(paddle1) == 1) {
			this.motionX = 1 + (amountOfHits / 5);
			this.motionY = -2 + random.nextInt(4);

			if (motionY == 0) motionY = 1;
			amountOfHits++;
		} else if (checkCollision(paddle2) == 1) {
			this.motionX = -1 - (amountOfHits / 5);
			this.motionY = -2 + random.nextInt(4);

			if (motionY == 0) motionY = 1;
			amountOfHits++;
		}

		if (checkCollision(paddle1) == 2) {
			paddle2.score++;
			spawn();
		} else if (checkCollision(paddle2) == 2) {
			paddle1.score++;
			spawn();
		}
	}

	public void spawn() {
		this.amountOfHits = 0;
		this.x = pong.width / 2 - this.width / 2;
		this.y = pong.height / 2 - this.height / 2;

		this.motionY = -2 + random.nextInt(4);

		if (motionY == 0) motionY = 1;

		if (random.nextBoolean()) motionX = 1;
		else motionX = -1;
	}

	public int checkCollision(Paddle paddle) {
		if (this.x < paddle.x + paddle.width && this.x + width > paddle.x && this.y < paddle.y + paddle.height && this.y + height > paddle.y) return 1; //bounce
		else if ((paddle.x > x && paddle.paddleNumber == 1) || (paddle.x < x - width && paddle.paddleNumber == 2)) return 2; //score
		return 0; //nothing
	}

	public void render(Graphics g) {
		g.setColor(Color.WHITE);
		g.fillOval(x, y, width, height);
	}
}`} />
          <h3 className={CN.BLOGH3}>Penjelasan Kode</h3>
          <p className={CN.BLOGP + CN.BLOGCODE}>
            Kode di atas adalah kelas Ball yang mewakili bola dalam permainan Pong. Kelas ini memiliki atribut untuk menyimpan posisi, ukuran, gerakan, dan jumlah pukulan bola.
            <br /><br />
            Metode <code>update</code> digunakan untuk memperbarui posisi bola dan memeriksa tabrakan dengan paddle pemain. Metode <code>spawn</code> digunakan untuk mengatur ulang posisi bola di tengah layar setelah mencetak skor. Metode <code>checkCollision</code> digunakan untuk memeriksa tabrakan antara bola dan paddle. Metode <code>render</code> digunakan untuk menggambar bola pada layar.
          </p>
          <h2 className={CN.BLOGH2}>Hasil</h2>
          <h3 className={CN.BLOGH3}>Structure</h3>
          <Image src="/blog/game-pong-java/structure.png" alt="Structure" width={673} height={392} />
          <h3 className={CN.BLOGH3}><br />Welcome Screen</h3>
          <Image src="/blog/game-pong-java/welcome.png" alt="Welcome" width={711} height={731} />
          <h3 className={CN.BLOGH3}><br />Gameplay</h3>
          <Image src="/blog/game-pong-java/gameplay.png" alt="Gameplay" width={711} height={731} />
          <h3 className={CN.BLOGH3}><br />Closing Screen</h3>
          <Image src="/blog/game-pong-java/closing.png" alt="Closing" width={711} height={731} />
          <h2 className={CN.BLOGH2}><br />Kesimpulan</h2>
          <p className={CN.BLOGP}>
            Dengan mengikuti langkah-langkah di atas, Anda dapat membuat game Pong sederhana menggunakan bahasa pemrograman Java. Anda dapat mengembangkan game ini lebih lanjut dengan menambahkan fitur-fitur seperti mode multiplayer, peningkatan grafis, atau tingkat kesulitan yang berbeda
          </p>
        </div>
        <hr className={CN.BLOGHR}></hr>
      </div>
      <BlogFooter />
    </div>
  )
}