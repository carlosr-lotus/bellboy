import styles from "@/styles/components/DashSectionTitle.module.css";

type Props = {
  title: string
}

export default function DashSectionTitle(props: Props): JSX.Element {
  return (
    <div className={styles.container}>
      <div className={styles.bar}></div>
      <h1 className={styles.title}>{props.title}</h1>
    </div>
  );
}
