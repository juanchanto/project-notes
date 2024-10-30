import { login, signup } from './actions';
import styles from './LoginPage.module.css'; // Asegúrate de importar el CSS

export default function LoginPage() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Iniciar Sesión</h1>
      <form className={styles.form}>
        <label htmlFor="email" className={styles.label}>Email:</label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className={styles.input}
        />
        
        <label htmlFor="password" className={styles.label}>Contraseña:</label>
        <input
          id="password"
          name="password"
          type="password"
          required
          className={styles.input}
        />
        
        <div className={styles.buttonContainer}>
          <button type="submit" formAction={login} className={styles.button}>Iniciar Sesión</button>
          <button type="submit" formAction={signup} className={`${styles.button} ${styles.signupButton}`}>Registrarse</button>
        </div>
      </form>
    </div>
  );
}
