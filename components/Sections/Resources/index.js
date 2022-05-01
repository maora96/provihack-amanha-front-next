import { useState } from "react";
import { goals } from "../../../static/goals";
import styles from "./styles.module.css";
import ResourceCard from "../../ResourceCard";
import AddGoalModal from "../../modals/addGoalModal";
import { ToastContainer } from "react-toastify";

export default function Resources() {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <div className={styles.resourcesContainer}>
        <div className={styles.header}>
          <div className={styles.titleContainer}>
            <h2 className={styles.title}>Recursos</h2>
            <p className={styles.subtitle}>
              Acompanhe suas emtas de redução de impactos
            </p>
          </div>

          <div
            className={styles.button}
            onClick={() => {
              setShowModal(true);
            }}
          >
            Cadastrar meta
          </div>
        </div>
        <div className={styles.goals}>
          {goals.map((resouce, id) => (
            <ResourceCard
              key={id}
              icon={resouce.icon}
              goal={resouce.goal}
              name={resouce.name}
              costUnit={resouce.costUnit}
              unit={resouce.unit}
              costMonth={resouce.costMonth}
              costYear={resouce.costYear}
            />
          ))}
        </div>
      </div>
      {showModal && <AddGoalModal setShowModal={setShowModal} />}
      <div className={styles.toast}>
        <ToastContainer />
      </div>
    </>
  );
}
