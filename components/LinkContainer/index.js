import { useState } from "react";
import styles from "./styles.module.css";

export default function LinkContainer({
  Icon,
  title,
  alias,
  activeSection,
  setActiveSection,
  // isActive,
  // setIsActive,
}) {
  // const [isActive, setIsActive] = useState(false);
  return (
    <div
      className={
        activeSection === alias
          ? styles.linkContainerActive
          : styles.linkContainer
      }
      onClick={() => {
        setActiveSection(alias);
      }}
    >
      <Icon size={32} />
      <p className={styles.title}>{title}</p>
    </div>
  );
}
