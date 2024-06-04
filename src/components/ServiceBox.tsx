import styles from '@/styles/components/ServiceBox.module.css'

export type ServiceProps = {
    id: number,
    icon: string,
    name: string,
    color: string
    status: boolean
}

export default function ServiceBox(props: ServiceProps): JSX.Element {

    return (
        <div className={styles.container}>
            <div 
                className={styles.icon}
                style={{ backgroundColor: props.color }}
            >
            </div>
            <p className={styles.name}>{props.name}</p>
            <div className={`
                ${styles.statusCircle} 
                ${props.status ? styles.statusCircleTrue : styles.statusCircleFalse}`
            }>
                <div className={styles.subStatusCircle}></div>
            </div>
        </div>
    )
}