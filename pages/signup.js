import { useContext, useState, useEffect } from "react";
import Router from "next/router";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { v4 as uuidv4 } from "uuid";
import styles from "../styles/Signup.module.css";
import { UserContext } from "../contexts/UserContext";
import { useCookies } from "react-cookie";

export default function Signup() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const [cookies, setCookies, removeCookies] = useCookies();

  const [data, setData] = useState("");
  const { user, setUser, registeredUsers, setRegisteredUsers } =
    useContext(UserContext);

  useEffect(() => {
    console.log(cookies?.registeredUsers);
  }, []);
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
            onSubmit={handleSubmit((data) => {
              setData(JSON.stringify(data));
              const newUser = {
                id: uuidv4(),
                legalRepresentative: data.legalRepresentative,
                cnpj: data.cnpj,
                email: data.email,
                password: data.password,
              };
              if (cookies?.registeredUsers) {
                const checkIfExists = cookies?.registeredUsers.find(
                  (user) => user.email === newUser.email
                );
                if (checkIfExists) {
                  console.log("já existe");
                } else {
                  const newArrayOfUsers = [...registeredUsers, newUser];
                  setRegisteredUsers(newArrayOfUsers);
                  setUser(newUser);
                  removeCookies(`registeredUsers`);
                  setCookies(`user`, newUser);
                  setCookies(`registeredUsers`, newArrayOfUsers);
                }
              } else {
                const newRegisteredUsers = [];
                newRegisteredUsers.push(newUser);
                setCookies(`registeredUsers`, newRegisteredUsers);
                setUser(newUser);
                setCookies("user", newUser);
              }
              Router.push("/dashboard");
            })}
          >
            <div className={styles.formContent}>
              <div className={styles.inputContainer}>
                <label className={styles.label}>Representante legal</label>
                <input
                  {...register("legalRepresentative", { required: true })}
                  type="text"
                  placeholder="Digite o nome do representante"
                />
                <span className={styles.error}>
                  {errors.legalRepresentative &&
                    "Nomeie um representativo legal"}
                </span>
              </div>
              <div className={styles.inputContainer}>
                <label className={styles.label}>CNPJ</label>
                <input
                  {...register("cnpj", { required: true })}
                  type="text"
                  placeholder="Digite o seu CNPJ"
                />
                <span className={styles.error}>
                  {errors.cnpj && "Digite o seu CNPJ"}
                </span>
              </div>
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
                  {errors.password && "Digite uma senha"}
                </span>
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
