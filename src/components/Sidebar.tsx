import styles from '@/styles/components/Sidebar.module.css'

export default function Sidebar(): JSX.Element {
    return (
        <div className={styles.main}>
            <h1>Bellboy</h1>

            <div className={styles.linksContainer}>
                <div className={styles.link}>Option 1</div>
                <div className={styles.link}>Option 2</div>
                <div className={styles.link}>Option 3</div>
            </div>
        </div>
    )
}