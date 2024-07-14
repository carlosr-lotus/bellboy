import { FaUser } from "react-icons/fa6";

import styles from '@/styles/components/ProfileIcon.module.css'

export default function ProfileIcon(): JSX.Element {
    return (
        <div className={styles.container}>
            <FaUser size={15} />
        </div>
    )
}