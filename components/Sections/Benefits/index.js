import { benefits } from "../../../static/benefits";
import styles from "./styles.module.css";
import ResourceCard from "../../ResourceCard";
import BenefitCard from "../../BenefitCard";
export default function Benefits() {
  return (
    <div className={styles.benefitsContainer}>
      <div className={styles.header}>
        <div className={styles.titleContainer}>
          <h2 className={styles.title}>Benefícios</h2>
          <p className={styles.subtitle}>
            Converta seus créditos em benefícios
          </p>
        </div>

        <div className={styles.button}>Distribuir créditos</div>
      </div>
      <div className={styles.goals}>
        {benefits.map((goal, id) => (
          <BenefitCard
            key={id}
            icon={goal.icon}
            name={goal.name}
            credit={goal.credits}
          />
        ))}
      </div>
    </div>
  );
}
