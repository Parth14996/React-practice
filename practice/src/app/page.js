import { Counter } from "@/count/counter";
import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <button>Increment</button>
      <Counter />
      <button>Descrement</button>
    </main>
  );
}
