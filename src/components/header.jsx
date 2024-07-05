import React, { useEffect, useRef, useMemo } from "react"
import { Link } from "react-router-dom"
// CSS Module
import styles from "../styles/header.module.css"

export default function Header() {
    return (
        <header>
            <Link className={styles.logo} to="/">
                <span>Logo</span>
            </Link>
            <nav className={styles.links}>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/services">Services</Link>
                <Link to="/contact">Contact</Link>
            </nav>
        </header>
    )
}