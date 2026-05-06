import Link from "next/link";
import styles from "../styles/page.module.css";


export default function Home() {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Projects</h1>
      <Link href="/todo">To-do app</Link>
    </div>
  );
}
