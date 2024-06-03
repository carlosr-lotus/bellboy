// import Image from "next/image";

// Components
import Sidebar from "@/components/Sidebar";
import DashboardHeader from "@/components/DashboardHeader";
import DashSectionTitle from "@/components/DashSectionTitle";

import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.appContainer}>
      <Sidebar />

      <div className={styles.dashboardContainer}>
        <DashboardHeader />
        <DashSectionTitle />
      </div>
    </main>
  );
}
