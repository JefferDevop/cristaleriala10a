import styles from "./TopBar.module.scss";
import { CardImg } from "reactstrap";
import Link from "next/link";

export function TopBar() {
  return (
    <div className={styles.topBar}>
      <div className={styles.topBar_super}></div>
      <Link href="/">
        <CardImg src="/image/logo-la10.png" alt="Image" />
      </Link>
    </div>
  );
}
