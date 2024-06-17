import styles from "@/styles/components/DashSectionTitle.module.css";

export default function DashSectionTitle(): JSX.Element {
  return (
    <div className={styles.container}>
      <div className={styles.bar}></div>
      <h1 className={styles.title}>Dashboard</h1>
    </div>
  );
}
