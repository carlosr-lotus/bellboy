// import Image from "next/image";
import DashboardHeader from "@/components/DashboardHeader";
import Sidebar from "@/components/Sidebar";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.appContainer}>
      <Sidebar />

      <div className={styles.dashboardContainer}>
        <DashboardHeader />
        <h1>Dashboard</h1>
      </div>
    </main>
  );
}
