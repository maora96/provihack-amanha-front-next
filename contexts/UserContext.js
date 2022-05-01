import { createContext, useState, useEffect } from "react";
import { useCookies } from "react-cookie";
import { v4 as uuidv4 } from "uuid";

export const UserContext = createContext({});

const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState();
  const [registeredUsers, setRegisteredUsers] = useState([]);
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
  }, []);

  return (
    <UserContext.Provider
      value={{ user, setUser, registeredUsers, setRegisteredUsers }}
    >
      {children}
    </UserContext.Provider>
  );
};

export { UserContextProvider };
