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
        <Link href="/starRating">Star Rating</Link>
        <Link href="/imageSlider">Image Slider</Link>
        <Link href="/loadMore">Load more Data</Link>
        <Link href="/themeSwitch">Theme Switch</Link>
        <Link href="/qrGenerator">QR Generator</Link>
        <Link href="/scrollIndicator">Scroll Indicator</Link>
        <Link href="/modalPopup">Modal Popup</Link>
        <Link href="/githubFinder">GitHub Profile Finder</Link>
        <Link href="/ticTacToe">Tic Tac Toe</Link>
        <Link href="/autoSuggestions">Auto suggestions</Link>
      </div>
    </div>
  );
}
