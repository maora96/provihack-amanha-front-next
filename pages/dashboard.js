import { useEffect, useContext, useState } from "react";
import { useCookies } from "react-cookie";
import { UserContext } from "../contexts/UserContext";
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
  const [cookies, setCookies, removeCookies] = useCookies();
  const [activeSection, setActiveSection] = useState("summary");
  const { user, setUser, registeredUsers, setRegisteredUsers } =
    useContext(UserContext);

  useEffect(() => {
    if (!cookies?.user) {
      Router.push("/");
    }
  }, []);
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
              removeCookies(`user`);
              setUser({});
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
