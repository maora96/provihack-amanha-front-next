import Router from "next/router";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { UserContext } from "../contexts/UserContext";
import { useCookies } from "react-cookie";
import { useEffect, useContext, useState } from "react";
import { useForm } from "react-hook-form";

export default function Home() {
  const [cookies, setCookies, removeCookies] = useCookies();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const [data, setData] = useState("");
  useEffect(() => {
    if (cookies?.user) {
      Router.push("/dashboard");
    }
  }, []);

  const { user, setUser, registeredUsers, setRegisteredUsers } =
    useContext(UserContext);

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
          {/* 1231231231 */}
          <form
            onSubmit={handleSubmit((data) => {
              setData(JSON.stringify(data));
              const checkIfExists = cookies?.registeredUsers.find(
                (user) => user.email === data.email
              );
              if (checkIfExists) {
                console.log("já existe");
                if (checkIfExists.password === data.password) {
                  setUser(checkIfExists);
                  setCookies(`user`, checkIfExists);
                  Router.push("/dashboard");
                } else {
                  console.log(`senha errada`);
                }
              } else {
                console.log(`nao achei`);
              }
            })}
          >
            <div className={styles.formContent}>
              <div className={styles.inputContainer}>
                <label className={styles.label}>E-mail</label>
                <input
                  {...register("email", { required: true })}
                  type="email"
                  placeholder="Digite seu e-mail"
                />
                <span className={styles.error}>
                  {errors.email && "Digite seu e-mail"}
                </span>
              </div>
              <div className={styles.inputContainer}>
                <label className={styles.label}>Senha</label>
                <input
                  {...register("password", { required: true })}
                  type="password"
                  placeholder="Digite sua senha"
                />
                <span className={styles.error}>
                  {errors.password && "Digite sua senha"}
                </span>
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
