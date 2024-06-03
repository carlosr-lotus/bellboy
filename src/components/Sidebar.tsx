// Icons
import { FaHouseChimney } from "react-icons/fa6";
import { IoIosSettings } from "react-icons/io";

import styles from '@/styles/components/Sidebar.module.css'

export default function Sidebar(): JSX.Element {
    return (
        <div className={styles.main}>
            <h1>Bellboy</h1>

            <div className={styles.linksContainer}>
                <div className={styles.link}>
                    <FaHouseChimney size={20}/>
                </div>
                <div className={styles.link}>
                    <IoIosSettings size={22}/>
                </div>
            </div>
        </div>
    )
}