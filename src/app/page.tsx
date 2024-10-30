// src/app/page.tsx
"use client";

import Link from 'next/link';
import styles from './HomePage.module.css';
import Header from './components/Header';

export default function HomePage() {
 
  return (
    <main className={styles.container}>
      <Header/>
      <section className={styles.intro}>
        <h1 className={styles.title}>Bienvenido a tu Bloc de Notas</h1>
        <p className={styles.description}>
          Crea, organiza y gestiona tus notas de manera rápida y sencilla.
        </p>
      </section>

      <section className={styles.actions}>
        <Link href="/new-note" className={`${styles.button} ${styles.createButton}`}>
          Crear Nueva Nota
        </Link>
        <Link href="/notes" className={`${styles.button} ${styles.manageButton}`}>
          Gestionar Notas
        </Link>
      </section>

      <section className={styles.notesList}>
        <h2 className={styles.subtitle}>Tus Notas Recientes</h2>
        <div className={styles.noteCard}>
          <h3>Título de la Nota</h3>
          <p>Un breve resumen del contenido de la nota...</p>
        </div>
      </section>
    </main>
  );
}
