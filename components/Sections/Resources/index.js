import { goals } from "../../../static/goals";
import styles from "./styles.module.css";
import ResourceCard from "../../ResourceCard";
export default function Resources() {
  return (
    <div className={styles.resourcesContainer}>
      <div className={styles.header}>
        <div className={styles.titleContainer}>
          <h2 className={styles.title}>Recursos</h2>
          <p className={styles.subtitle}>
            Acompanhe suas emtas de redução de impactos
          </p>
        </div>

        <div className={styles.button}>Cadastrar meta</div>
      </div>
      <div className={styles.goals}>
        {goals.map((goal, id) => (
          <ResourceCard
            key={id}
            icon={goal.icon}
            goal={goal.goal}
            name={goal.name}
            costUnit={goal.costUnit}
            unit={goal.unit}
            costMonth={goal.costMonth}
            costYear={goal.costYear}
          />
        ))}
      </div>
    </div>
  );
}
