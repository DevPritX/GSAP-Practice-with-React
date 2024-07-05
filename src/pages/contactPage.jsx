import React, { } from "react"

// CSS Module
import styles from "../styles/contactPage.module.css"

export default function ContactPage() {
    return (
        <div className={styles.contactPage}>
            <form className={styles.contactForm}>
                <h1>Contact Us</h1>
                <div className={styles.formSec}>
                    <input type="text" placeholder="Your Name" required />
                    <input type="text" placeholder="Your Phone" required />
                    <textarea name="qury" id="query" placeholder="Your Query" required />
                    <button type="submit">Message</button>
                </div>
            </form>
        </div>
    )
}