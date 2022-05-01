import React, { useState } from "react";
import Summary from "../components/Summary/index";
import Resources from "../components/Resources/index";
import Benefits from "../components/Benefits/index";
import Credit from "../components/Credit/index";

import styles from "../styles/Dashboard.module.css";

export default function Dashboard() {
  const [activeSection, setActiveSection] = useState("summary");
  return (
    <>
      <div className={styles.dashboardContainer}>
        <aside>
          <div className={styles.sidebarContainer}>
            {/* <img src="" className={styles.logo} /> */}

            <div className={styles.sidebarLinks}>
              <div>Dashboard</div>
              <div>Recursos</div>
              <div>Benefícios</div>
              <div>Crédito verde</div>
            </div>
          </div>
          <div className={styles.logout}>Sair</div>
        </aside>
        {activeSection === "summary" && <Summary />}
        {activeSection === "resources" && <Resources />}
        {activeSection === "benefits" && <Benefits />}
        {activeSection === "credit" && <Credit />}
      </div>
    </>
  );
}
