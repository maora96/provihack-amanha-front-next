import React from "react";
import Router from "next/router";
import Image from "next/image";
import styles from "../styles/Signup.module.css";

export default function Signup() {
  return (
    <div className={styles.signupContainer}>
      <aside className={styles.aside}>
        <div>
          <Image
            src="/assets/images/logo.png"
            width={48}
            height={48}
            alt="logo"
          />
          <h1 className={styles.title}>Cadastro</h1>
          <p className={styles.subtitle}>Sustentável em todos sentidos!</p>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              Router.push("/dashboard");
            }}
          >
            <div className={styles.formContent}>
              <div className={styles.inputContainer}>
                <label className={styles.label}>Representante legal</label>
                <input
                  type="text"
                  placeholder="Digite o nome do representante"
                />
              </div>
              <div className={styles.inputContainer}>
                <label className={styles.label}>CNPJ</label>
                <input type="email" placeholder="Digite o seu CNPJ" />
              </div>
              <div className={styles.inputContainer}>
                <label className={styles.label}>E-mail</label>
                <input type="text" placeholder="Digite seu e-mail" />
              </div>
              <div className={styles.inputContainer}>
                <label className={styles.label}>Senha</label>
                <input type="password" placeholder="Digite sua senha" />
              </div>
            </div>

            <div className={styles.buttons}>
              <button type="submit">Cadastre-se</button>
            </div>
          </form>
        </div>
      </aside>
      <div className={styles.image}></div>
    </div>
  );
}
