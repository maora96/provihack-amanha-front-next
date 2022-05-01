import Image from "next/image";
import styles from "./styles.module.css";

export default function SummaryCard({
  icon,
  goal,
  name,
  costUnit,
  unit,
  costMonth,
  costYear,
}) {
  return (
    <div className={styles.cardContainer}>
      <Image
        src={`/assets/images/${icon}.png`}
        width={64}
        height={64}
        alt="logo"
      />
      <h4 className={styles.title}>
        {goal}% {name}
      </h4>
      <p className={styles.info}>
        R${costUnit} por {unit}
      </p>
      <p className={styles.info}>R${costMonth} por mês</p>
      <p className={styles.info}>R${costYear} por ano</p>
    </div>
  );
}

{
  /* <p>R$14,05 por kw/H</p>
      <p>R$12.000,00 por mês</p>
      <p>R$1.345.800,00 por ano</p> */
}
