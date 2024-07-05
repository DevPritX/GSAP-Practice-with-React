import React, { useEffect, useRef, useMemo } from "react"

// CSS Module
import styles from "../styles/heroSec.module.css"

export default function Hero() {
    return (
        <section className={styles.heroSec}>
            <div className={styles.content}>
                <h1>Wellcome To My World</h1>
                <button>Restart Animation</button>
            </div>
        </section>
    )
}