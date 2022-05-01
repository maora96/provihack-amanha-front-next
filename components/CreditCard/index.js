import Image from "next/image";
import styles from "./styles.module.css";

export default function CreditCard({ icon, name, credit, times }) {
  return (
    <div className={styles.cardContainer}>
      <Image
        src={`/assets/images/${icon}.png`}
        width={64}
        height={64}
        alt="logo"
      />
      <h4 className={styles.title}>{name}</h4>
      <p className={styles.info}>
        <span>R${credit}</span> de crédito em {times}X
      </p>
    </div>
  );
}
