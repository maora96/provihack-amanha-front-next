import Router from "next/router";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.loginContainer}>
      <aside className={styles.aside}>
        <div>
          <Image
            src="/assets/images/logo.png"
            width={48}
            height={48}
            alt="logo"
          />

          <h1 className={styles.title}>Login</h1>
          <p className={styles.subtitle}>Sustentável em todos sentidos!</p>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              Router.push("/dashboard");
            }}
          >
            <div className={styles.formContent}>
              <div className={styles.inputContainer}>
                <label className={styles.label}>E-mail</label>
                <input type="email" placeholder="Digite seu e-mail" />
              </div>
              <div className={styles.inputContainer}>
                <label className={styles.label}>Senha</label>
                <input type="password" placeholder="Digite sua senha" />
              </div>
            </div>

            <div className={styles.buttons}>
              <button type="submit">Entrar</button>
              <button
                type="button"
                onClick={() => {
                  Router.push("/signup");
                }}
              >
                Cadastrar-se
              </button>
            </div>
          </form>
        </div>
      </aside>
      <div className={styles.image}></div>
    </div>
  );
}
