import Button from '@/material/Button'

import styles from '@/styles/components/Details.module.css'

export default function Details(): JSX.Element {
    return (
        <div className={styles.details}>
            <div>Monthly pricing: <span>U$ 29.99</span></div>
            <div>Status:  <span>Active</span></div>
            <Button name="Options" type="button"/>
        </div>
    )
}