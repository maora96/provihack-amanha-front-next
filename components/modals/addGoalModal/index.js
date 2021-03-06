import styles from "./styles.module.css";
import Image from "next/image";
import { useCookies } from "react-cookie";
import { useState, useContext } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { UserContext } from "../../../contexts/UserContext";
import "react-toastify/dist/ReactToastify.css";
import { realNames } from "../../../static/goals";

export default function AddGoalModal({ setShowModal }) {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const [data, setData] = useState("");
  const {
    user,
    setUser,
    registeredUsers,
    setRegisteredUsers,
    goals,
    setGoals,
  } = useContext(UserContext);
  const [cookies, setCookies, removeCookies] = useCookies();

  return (
    <>
      <div className={styles.overlay}></div>
      <div className={styles.modalContainer}>
        <form
          onSubmit={handleSubmit((data) => {
            setData(JSON.stringify(data));
            console.log(data);

            const newGoal = {
              icon: realNames
                .map((real) => {
                  if (real.alias === data.name) {
                    return real.icon;
                  }
                })
                .filter(Boolean)[0],
              goal: data.goal,
              alias: data.name,
              name: realNames
                .map((real) => {
                  if (real.alias === data.name) {
                    return real.name;
                  }
                })
                .filter(Boolean)[0],
              costUnit: data.costUnit,
              unit: data.unit,
              costMonth: Number(data.costUnit) * 730,
              costYear: Number(data.costUnit) * 730 * 12,
            };

            console.log(newGoal);

            if (cookies?.goals) {
              const newArrayOfGoals = [...goals, newGoal];
              setGoals(newArrayOfGoals);
              removeCookies(`goals`);
              setCookies(`goals`, newArrayOfGoals);
            } else {
              const newGoals = [];
              newGoals.push(newGoal);
              setCookies(`goals`, newGoals);
              setGoals(newGoals);
            }
            toast.success(`Meta cadastrada com sucesso!`, {
              icon: ({ theme, type }) => (
                <Image
                  src="/assets/images/success.png"
                  width={48}
                  height={48}
                  alt="success"
                />
              ),
              position: "bottom-right",
              autoClose: 5000,
              hideProgressBar: true,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });
            setShowModal(false);
          })}
        >
          <div className={styles.modal}>
            <div className={styles.modalContent}>
              <h2 className={styles.title}>
                Cadastrar meta{" "}
                <Image
                  src="/assets/images/close.png"
                  width={24}
                  height={24}
                  alt="logo"
                  onClick={() => setShowModal(false)}
                />
              </h2>

              <div className={styles.formContent}>
                {/* <div className={styles.inputContainer}>
                  <label className={styles.label}>Hist??rico de consumo</label>
                  <select {...register("time", { required: true })}>
                    <option value="">Escolha...</option>
                    <option value="month">Mensal</option>
                    <option value="year">Anual</option>
                  </select>
                  <span className={styles.error}>
                    {errors.time &&
                      "Selecione uma modalidade de hist??rico de consumo."}
                  </span>
                </div> */}
                <div className={styles.inputContainer}>
                  <label className={styles.label}>Recurso</label>
                  <select {...register("name", { required: true })}>
                    <option value="">Escolha...</option>
                    <option value="energia">Energia</option>
                    <option value="agua">??gua</option>
                    <option value="carvao">Carv??o</option>
                    <option value="petroleo">Petr??leo</option>
                    <option value="gas">G??s</option>
                    <option value="papel">Papel</option>
                    <option value="metano">Metano</option>
                    <option value="etanol">Etanol</option>
                    <option value="diesel">Diesel</option>
                    <option value="gasolina">Gasolina</option>
                  </select>
                  <span className={styles.error}>
                    {errors.name && "Selecione um recurso."}
                  </span>
                </div>
                <div className={styles.inputContainerDouble}>
                  <div>
                    <label className={styles.label}>Valor do consumo</label>
                    <input
                      {...register("costUnit", { required: true })}
                      type="text"
                      placeholder="14"
                    />
                    <span className={styles.error}>
                      {errors.costUnit && "Provida um valor de consumo."}
                    </span>
                  </div>
                  <div>
                    <label className={styles.label}>Unidade/Tempo</label>
                    <input
                      {...register("unit", { required: true })}
                      type="text"
                      placeholder="KW/H"
                    />
                    <span className={styles.error}>
                      {errors.unit && "Provida uma unidade/tempo."}
                    </span>
                  </div>
                </div>
                <div className={styles.inputContainer}>
                  <label className={styles.label}>Meta (em %)</label>
                  <input
                    {...register("goal", { required: true })}
                    type="number"
                    placeholder="Redu????o de 15%"
                  />
                  <span className={styles.error}>
                    {errors.goal && "Provida uma meta em porcentagem"}
                  </span>
                </div>
                <p>{data}</p>
              </div>
            </div>
            <div className={styles.buttons}>
              <button type="submit">Cadastrar</button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
