// Components
import Button from "@/material/Button"
import ProfileIcon from "@/components/ProfileIcon";

// Icons
import { IoIosNotificationsOutline } from "react-icons/io";

import styles from '@/styles/components/DashboardHeader.module.css'

export default function DashboardHeader() {

    return (
        <div className={styles.headerContainer}>
            <Button
                name="Adicionar"
                type="button"
            />

            <div className={styles.notificationContainer}>
                <IoIosNotificationsOutline size={30} />
                <div className={styles.newNotificationCircle}></div>
            </div>

            <ProfileIcon />
        </div>
    )
}
