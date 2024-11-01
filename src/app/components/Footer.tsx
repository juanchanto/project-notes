// src/components/Footer.tsx
"use client";

import React from 'react';
import styles from './Footer.module.css'; // Asegúrate de crear el archivo CSS si quieres estilos personalizados

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Logo o Nombre */}
        <div className={styles.logo}>
          <h2>Versión: 0.0.1</h2>
        </div>
        
        {/* Navegación */}
        <nav className={styles.nav}>
          <ul>
            <li><a href="/about">Acerca de</a></li>
            <li><a href="/services">Servicios</a></li>
            <li><a href="/contact">Contacto</a></li>
            <li><a href="/privacy-policy">Política de Privacidad</a></li>
          </ul>
        </nav>

        {/* Información de contacto */}
        <div className={styles.contact}>
          <p>Email: contacto@tusitio.com</p>
          <p>Teléfono: +123 456 789</p>
        </div>

        {/* Redes sociales */}
        <div className={styles.social}>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
        </div>
      </div>
      <div className={styles.copy}>
        <p>© {new Date().getFullYear()} Proyecto Notes. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
