"use client";
import { Fragment, useEffect, useState } from "react";

// Packages
import { AxiosResponse } from "axios";

// Components
import Sidebar from "@/components/Sidebar";
import Button from "@/material/Button"
import DashboardHeader from "@/components/DashboardHeader";
import DashSectionTitle from "@/components/DashSectionTitle";
import ServiceBox from "@/components/ServiceBox";
import Screen from "@/material/Screen";
import Modal from "@/material/Modal";
import Select, { SelectOption } from "@/material/Select";
import ProfileIcon from "@/components/ProfileIcon";
import InputField from "@/material/InputField";
import Details from "@/components/Details";

// Types
import { ServiceProps } from "@/components/ServiceBox";

// Utils
import { getApi } from "@/utils/api";

// Icons
import { IoIosNotificationsOutline } from "react-icons/io";

import styles from "@/styles/pages/DashboardPage.module.css";

export default function DashboardPage() {

  const api = getApi();

  const [services, setServices] = useState<ServiceProps[]>([]);
  const [addService, setAddService] = useState(false);

  function getUserServices(): void {
    api.get(`/services/user?email=${'client@email.com'}`)
      .then((res: AxiosResponse<ServiceProps[]>) => {
        setServices(res.data);
        console.log(res.data);
      }).catch((err) => {
        console.log(err);
      })
  }

  useEffect(() => {
    getUserServices();
  }, []);

  const AddService = () => {

    const [options, setOptions] = useState<SelectOption[]>([])
    const [selectedService, setSelectedService] = useState<SelectOption>()
    const [tabIndex, setTabIndex] = useState(0)

    function getServices(): void {
      api.get('/services')
        .then((res) => setOptions(res.data))
        .catch((err) => console.log(err))
    }

    useEffect(() => {
      getServices()
    }, [])

    return (
      <Screen>
        <Modal setState={setAddService}>
          { tabIndex === 0 &&
            <>
              <h2>Add service</h2>
              <Select options={options} value={selectedService} onChange={(e) => setSelectedService(e)}/>
              <Button name="Next" type="button" onClick={() => setTabIndex(1)}/>
            </> 
          } 

          { tabIndex === 1 && selectedService &&
            <>
              <h2>Enter the account that you currently use for this service: {selectedService.label}</h2>
              <label>Email</label>
              <InputField name="email" placeholder={`${selectedService.label} email..`} register={() => {}} type="text" />
              <label>Password</label>
              <InputField name="password" placeholder={`${selectedService.label} password`} register={() => {}} type="password"/>
            
              <div>
                <Button name="Back" type="button" onClick={() => setTabIndex(0)}/> 
                <Button name="Next" type="button" onClick={() => setTabIndex(1)}/> 
              </div>
            </> 
          }
        </Modal>
      </Screen>
    )
  }

  return (
    <>
      {
        addService &&
          <AddService />
      } 

      <main className={styles.appContainer}>
        <Sidebar />
        
        <div className={styles.dashboardContainer}>
        
          <DashboardHeader>
             <Button
                name="Add"
                type="button"
                onClick={() => setAddService(true)}
            />

            <div className={styles.notificationContainer}>
                <IoIosNotificationsOutline size={30} />
                <div className={styles.newNotificationCircle}></div>
            </div>

            <ProfileIcon />
          </DashboardHeader>
          <DashSectionTitle title="Services" />

          <div className={styles.services}>
            {services &&
              services.map((service) => (
                <Fragment key={service.id}>
                  <ServiceBox
                    id={service.id}
                    name={service.name}
                    color={service.color}
                    status={service.status}
                  />
                </Fragment>
            ))}
          </div>

          <DashSectionTitle title="Details" />

          <Details />
        </div>
      </main>
    </> 
  );
}
