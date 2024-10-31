// src/components/Header.tsx
"use client";

import { useState } from 'react';
import Link from 'next/link';
import styles from './Header.module.css'; // Asegúrate de crear el archivo CSS correspondiente
import { signout } from '@/app/login/actions';

export default function HeaderAuth() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header className={styles.header}>
            <button className={styles.hamburger} onClick={toggleMenu}>
                ☰
            </button>
            <nav className={`${styles.navbar} ${menuOpen ? styles.show : ''}`}>
                <Link href="/" className={styles.navLink}>Inicio</Link>
                <Link href="/new-note" className={styles.navLink}>Crear Nota</Link>
                <Link href="/notes" className={styles.navLink}>Gestionar Notas</Link>
                <Link href="/profile" className={styles.navLink}>Perfil</Link>
                <Link href="#" onClick={signout} className={styles.navLink}>Cerrar sesión</Link>
            </nav>
        </header>
    );
}
