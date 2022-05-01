import styles from "./styles.module.css";
import Image from "next/image";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

export default function DistributeCreditsModal({ setShowModal }) {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const [data, setData] = useState("");
  return (
    <>
      <div className={styles.overlay}></div>
      <div className={styles.modalContainer}>
        <form
          onSubmit={handleSubmit((data) => {
            setData(JSON.stringify(data));
            toast.success(`Créditos distribuídos com sucesso!`, {
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
                Distribuir créditos{" "}
                <Image
                  src="/assets/images/close.png"
                  width={24}
                  height={24}
                  alt="logo"
                  onClick={() => setShowModal(false)}
                />
              </h2>

              <div className={styles.formContent}>
                <div className={styles.inputContainer}>
                  <label className={styles.label}>Benefício</label>
                  <select {...register("benefit", { required: true })}>
                    <option value="">Escolha...</option>
                    <option value="refeicao">Refeição</option>
                    <option value="alimentacao">Alimentação</option>
                    <option value="saude">Saúde</option>
                    <option value="mobilidade">Mobilidade</option>
                    <option value="combustivel">Combustível</option>
                    <option value="educacao">Educação</option>
                    <option value="home-office">Home-Office</option>
                    <option value="culture">Cultura</option>
                  </select>
                  <span className={styles.error}>
                    {errors.benefit && "Selecione um benefício."}
                  </span>
                </div>

                <div className={styles.inputContainer}>
                  <label className={styles.label}>Créditos</label>
                  <input
                    {...register("credits", { required: true })}
                    type="text"
                    placeholder="1000 créditos!"
                  />
                  <span className={styles.error}>
                    {errors.credits && "Provida um valor."}
                  </span>
                </div>
                <p>{data}</p>
              </div>
            </div>
            <div className={styles.buttons}>
              <button type="submit">Distribuir créditos</button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
