import { ReactNode } from "react";

import styles from '@/styles/components/DashboardHeader.module.css'

type Props = {
    children: ReactNode
}

export default function DashboardHeader({children}: Props) {

    return (
        <div className={styles.headerContainer}>
          {children} 
        </div>
    )
}
