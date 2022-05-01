import SummaryCard from "../../SummaryCard";
import { goals } from "../../../static/goals";
import styles from "./styles.module.css";

export default function Summary() {
  return (
    <div className={styles.summaryContainer}>
      <h2 className={styles.title}>Dashboard</h2>
      <h3 className={styles.subtitle}>Metas mensais</h3>
      <div className={styles.goals}>
        {goals.map((goal, id) => {
          if (id < 3) {
            return (
              <SummaryCard
                key={id}
                icon={goal.icon}
                goal={goal.goal}
                name={goal.name}
                costUnit={goal.costUnit}
                unit={goal.unit}
                costMonth={goal.costMonth}
                costYear={goal.costYear}
              />
            );
          }
        })}
      </div>

      <h3 className={styles.subtitle}>Metas anuais</h3>
      <div classNames={styles.tabs}></div>
    </div>
  );
}
