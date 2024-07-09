import styles from "@/styles/material/Modal.module.css"
import { Dispatch, ReactNode, SetStateAction } from "react"
import { VscClose } from "react-icons/vsc";

type Props = {
    setState: Dispatch<SetStateAction<boolean>>,
    children: ReactNode
}

export default function Modal({ setState, children}: Props): JSX.Element {
    return (
        <div className={styles.modal}>
            <i onClick={() => setState(false)}><VscClose size={25}/></i>
            <div className={styles.children}>
                {children} 
            </div> 
        </div>
    )
}