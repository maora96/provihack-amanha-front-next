import { createContext, useState, useEffect } from "react";
import { useCookies } from "react-cookie";
import { v4 as uuidv4 } from "uuid";

export const UserContext = createContext({});

const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState();
  const [registeredUsers, setRegisteredUsers] = useState([]);

  const [goals, setGoals] = useState([]);

  const [cookies, setCookies] = useCookies();
  useEffect(() => {
    if (cookies?.user) {
      const loggedUser = cookies?.user;
      setUser(loggedUser);
    } else {
      const newUser = {
        id: uuidv4(),
        cpnj: "",
      };
    }

    if (cookies?.registeredUsers) {
      const alreadyRegisteredUsers = cookies?.registeredUsers;
      setRegisteredUsers(alreadyRegisteredUsers);
    }
    if (cookies?.goals) {
      const existingGoals = cookies?.goals;
      setGoals(existingGoals);
    }
  }, []);

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        registeredUsers,
        setRegisteredUsers,
        goals,
        setGoals,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export { UserContextProvider };
