import { createContext, useState, useEffect, useContext } from "react";
import jwt_decode from "jwt-decode";
// import api, { errorHandling } from "../services/api";

const AuthContext = createContext({
  signed: true,
  signIn: () => {},
  signOut: () => {},
  user: {},
});

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    async function getStorageItens() {
      const storageItens = await new Promise((resolve) => {
        const _user = localStorage.getItem("Auth:user");
        const _token = localStorage.getItem("Auth:token");

        resolve({ user: _user, token: _token });
      });

      const StorageUser = storageItens.user;
      const StorageToken = storageItens.token;

      if (!StorageToken) {
        return signOut();
        // const { exp } = jwt_decode(StorageToken);
        // if (exp < Math.floor(Date.now() / 1000)) {
        //   console.log("token expirado");
        //   return signOut();
        // }
      }

      // descomentar
      // api.defaults.headers["Authorization"] = "Bearer " + StorageToken;

      if (StorageUser && StorageToken) {
        setUser(JSON.parse(StorageUser));
      }
    }
    getStorageItens();
  }, []);

  const doLogin = async (username, password) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (username && password) {
          if (password === '123') {
            return reject("Senha errada");
          }
          
          return resolve({
            data: {
              user: {
                name: "Luan"
              },
              token: "token"
            }
          });
        }
        
        return reject("Erro no login");
      }, 1000);
    });
  }

  const signIn = async ({username, password}) => {
    try {
      // const response = await api.post("/Login", {
      //   usuario: data.username,
      //   senha: data.password,
      // });

      const response = await doLogin(username, password);

      localStorage.setItem("Auth:user", JSON.stringify(response.data.usuario));
      localStorage.setItem("Auth:token", response.data.token);

      // api.defaults.headers["Authorization"] = "Bearer " + response.data.token;

      setUser(response.data.user);
      console.log(response)
    } catch (err) {
      // const errMessage = errorHandling(err);
      const errMessage = err;
      throw new Error(errMessage);
    }
  };

  const signOut = () => {
    setUser(null);

    localStorage.removeItem("Auth:user");
    localStorage.removeItem("Auth:token");
  };

  return (
    <AuthContext.Provider
      value={{ signed: !!user, signIn, signOut, user }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);

  return context;
}
