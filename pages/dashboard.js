import { useState } from "react";
import Router from "next/router";
import Image from "next/image";

import Summary from "../components/Sections/Summary/index";
import Resources from "../components/Sections/Resources/index";
import Benefits from "../components/Sections/Benefits/index";
import Credit from "../components/Sections/Credit/index";

import {
  MdOutlineSpaceDashboard,
  MdAnalytics,
  MdCardGiftcard,
  MdAccountBalance,
  MdLogout,
} from "react-icons/md";

import styles from "../styles/Dashboard.module.css";
import LinkContainer from "../components/LinkContainer";

export default function Dashboard() {
  const [activeSection, setActiveSection] = useState("summary");

  return (
    <div className={styles.dashboardContainer}>
      <aside className={styles.aside}>
        <div className={styles.sidebarContainer}>
          <div className={styles.logo}>
            <Image
              src="/assets/images/logo-name.png"
              width={80}
              height={106}
              alt="logo"
            />
          </div>

          <div className={styles.sidebarLinks}>
            <LinkContainer
              Icon={MdOutlineSpaceDashboard}
              title="Dashboard"
              alias="summary"
              activeSection={activeSection}
              setActiveSection={setActiveSection}
            />
            <LinkContainer
              Icon={MdAnalytics}
              title="Recursos"
              alias="resources"
              activeSection={activeSection}
              setActiveSection={setActiveSection}
            />
            <LinkContainer
              Icon={MdCardGiftcard}
              title="Benefícios"
              alias="benefits"
              activeSection={activeSection}
              setActiveSection={setActiveSection}
            />
            <LinkContainer
              Icon={MdAccountBalance}
              title="Crédito verde"
              alias="credit"
              activeSection={activeSection}
              setActiveSection={setActiveSection}
            />
          </div>
        </div>
        <div className={styles.logout}>
          <MdLogout
            size={32}
            onClick={() => {
              Router.push("/");
            }}
          />
        </div>
      </aside>
      {activeSection === "summary" && <Summary />}
      {activeSection === "resources" && <Resources />}
      {activeSection === "benefits" && <Benefits />}
      {activeSection === "credit" && <Credit />}
    </div>
  );
}
