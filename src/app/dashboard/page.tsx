"use client";
import { Fragment, useEffect, useState } from "react";

// Components
import Sidebar from "@/components/Sidebar";
import DashboardHeader from "@/components/DashboardHeader";
import DashSectionTitle from "@/components/DashSectionTitle";
import ServiceBox from "@/components/ServiceBox";

// Types
import { ServiceProps } from "@/components/ServiceBox";

// Utils
import { getApi } from "@/utils/api";

import styles from "@/styles/pages/DashboardPage.module.css";

export default function DashboardPage() {

  const api = getApi();

  const [services, setServices] = useState<ServiceProps[]>([]);

  function getServices(): void {
    api.get('/services')
      .then((res) => {
        setServices(res.data);
        console.log(res.data);
      }).catch((err) => {
        console.log(err);
      })
  }

  useEffect(() => {
    getServices();
  }, []);

  return (
    <main className={styles.appContainer}>
      <Sidebar />

      <div className={styles.dashboardContainer}>
        <DashboardHeader />
        <DashSectionTitle title="Services" />

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
