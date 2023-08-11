
import styles from "../styles/headerStyle.module.css";

export default function HeaderTwo() {
  return (
    <div className={styles['custom-h1']}>
      <h1>Hello</h1>
      <div className={styles['custom-h2']}>
        <h2>Hover Me</h2>
      </div>
    </div>
  );
};
