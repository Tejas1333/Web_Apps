import Link from "next/link";
import styles from "../styles/page.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Projects</h1>
      <div className="flex flex-col gap-5">
        <Link href="/todo">To-do app</Link>
        <Link href="/accordion">Accordion</Link>
        <Link href="/randomColor">Random Color Generator</Link>
      </div>
    </div>
  );
}
