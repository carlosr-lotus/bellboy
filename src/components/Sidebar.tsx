// Icons
import { FaHouseChimney } from "react-icons/fa6";
import { IoIosSettings } from "react-icons/io";
import { IoCard } from "react-icons/io5";

import styles from "@/styles/components/Sidebar.module.css";

export default function Sidebar(): JSX.Element {
  return (
    <div className={styles.main}>
      <h1>logo</h1>

      <div className={styles.linksContainer}>
        <div className={styles.link}>
          <FaHouseChimney size={20} className={styles.scaling} />
        </div>
        <div className={styles.link}>
          <IoCard size={20} className={styles.showUp} />
        </div>
        <div className={`${styles.link}`}>
          <IoIosSettings size={22} className={styles.rotate} />
        </div>
      </div>
    </div>
  );
}
