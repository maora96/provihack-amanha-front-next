import SummaryCard from "../../SummaryCard";
import { goals } from "../../../static/goals";
import styles from "./styles.module.css";
import { useCookies } from "react-cookie";
import { UserContext } from "../../../contexts/UserContext";
import { useContext } from "react";

export default function Summary() {
  const [cookies, setCookies, removeCookies] = useCookies();

  const {
    user,
    setUser,
    registeredUsers,
    setRegisteredUsers,
    goals,
    setGoals,
  } = useContext(UserContext);
  return (
    <div className={styles.summaryContainer}>
      <h2 className={styles.title}>Dashboard</h2>
      <h3 className={styles.subtitle}>Metas mensais</h3>
      <div className={styles.goals}>
        {goals
          ? goals.map((goal, id) => {
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
            })
          : `Nenhuma meta cadastrada.`}
      </div>

      <h3 className={styles.subtitle}>Metas anuais</h3>
      <div classNames={styles.tabs}></div>
    </div>
  );
}
