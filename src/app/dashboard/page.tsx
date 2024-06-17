"use client";
// import Image from "next/image";
import { Fragment, useState } from "react";

// Components
import Sidebar from "@/components/Sidebar";
import DashboardHeader from "@/components/DashboardHeader";
import DashSectionTitle from "@/components/DashSectionTitle";
import ServiceBox from "@/components/ServiceBox";

// Types
import { ServiceProps } from "@/components/ServiceBox";

// import styles from "../page.module.css";
import styles from "@/styles/pages/DashboardPage.module.css";

export default function DashboardPage() {
  const servicesData = [
    { id: 1, icon: "", name: "Netflix", color: "#E50914", status: true },
    { id: 2, icon: "", name: "Max", color: "#941DE8", status: true },
    { id: 3, icon: "", name: "Prime", color: "#1399FF", status: false },
  ];

  const [services, setServices] = useState<ServiceProps[]>(servicesData);

  return (
    <main className={styles.appContainer}>
      <Sidebar />

      <div className={styles.dashboardContainer}>
        <DashboardHeader />
        <DashSectionTitle />

        <div className={styles.services}>
          {services &&
            services.map((service) => (
              <Fragment key={service.id}>
                <ServiceBox
                  id={service.id}
                  icon=""
                  name={service.name}
                  color={service.color}
                  status={service.status}
                />
              </Fragment>
            ))}
        </div>
      </div>
    </main>
  );
}
