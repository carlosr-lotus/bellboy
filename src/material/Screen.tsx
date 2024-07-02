import { ReactNode } from "react"

import styles from "@/styles/material/Screen.module.css"

type Props = {
    children: ReactNode
}

export default function Screen({ children }: Props): JSX.Element {
    return (
        <div className={styles.screen}>{children}</div>
    )
}