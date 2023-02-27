import Link from "next/link";
import styles from "../styles/Navbar.module.css"

export default function Navbar() {
    return (
    <nav className={styles.navbar}>
      <header className={styles.header}>
            <h1><Link href="/">JAPANREF</Link></h1>
      </header>
      <ul className={styles.ul}>
          <li className={styles.li}><Link className={styles.a} href="./gojuon">gojūon</Link></li>
          <li className={styles.li}><Link className={styles.a} href="./gojuon-handakuten">gojūon with (han)dakuten</Link></li>
          <li className={styles.li}><Link className={styles.a} href="./yoon">yōon</Link></li>
          <li className={styles.li}><Link className={styles.a} href="./yoon-handakuten">yōon with (han)dakuten</Link></li>
      </ul>
    </nav>
    );
  }