import { useState } from "react";
import { benefits } from "../../../static/benefits";
import styles from "./styles.module.css";
import BenefitCard from "../../BenefitCard";
import { ToastContainer } from "react-toastify";

import DistributeCreditsModal from "../../modals/distributeCreditsModal";
export default function Benefits() {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <div className={styles.benefitsContainer}>
        <div className={styles.header}>
          <div className={styles.titleContainer}>
            <h2 className={styles.title}>Benefícios</h2>
            <p className={styles.subtitle}>
              Converta seus créditos em benefícios
            </p>
          </div>

          <div
            className={styles.button}
            onClick={() => {
              setShowModal(true);
            }}
          >
            Distribuir créditos
          </div>
        </div>
        <div className={styles.goals}>
          {benefits.map((benefit, id) => (
            <BenefitCard
              key={id}
              icon={benefit.icon}
              name={benefit.name}
              credit={benefit.credits}
            />
          ))}
        </div>
      </div>
      {showModal && <DistributeCreditsModal setShowModal={setShowModal} />}
      <div className={styles.toast}>
        <ToastContainer />
      </div>
    </>
  );
}
