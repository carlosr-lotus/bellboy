// Components
import Button from "@/material/Button"

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
            <IoIosNotificationsOutline size={25} />
        </div>
    )
}
