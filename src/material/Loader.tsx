import styles from '@/styles/material/Loader.module.css'

export default function Loader(): JSX.Element {
    return (
        <div className={styles.container}>
            <div className={styles.dot}></div>
            <div className={styles.dot}></div>
            <div className={styles.dot}></div>
        </div>
    )
}