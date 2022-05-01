import { credits } from "../../../static/credits";
import styles from "./styles.module.css";
import CreditCard from "../../CreditCard";
export default function Credit() {
  return (
    <div className={styles.creditContainer}>
      <div className={styles.header}>
        <div className={styles.titleContainer}>
          <h2 className={styles.title}>Crédito verde</h2>
          <p className={styles.subtitle}>
            Potencialize ainda mais sua redução de impactos
          </p>
        </div>
      </div>
      <div className={styles.goals}>
        {credits.map((credit, id) => (
          <CreditCard
            key={id}
            icon={credit.icon}
            name={credit.name}
            credit={credit.credits}
            times={credit.times}
          />
        ))}
      </div>
    </div>
  );
}
