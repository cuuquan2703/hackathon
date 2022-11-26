import { AuthReducer } from "./AuthReducer";
import axios from "axios";
import { useState, useEffect, createContext, useReducer } from "react";
import authApi from "../api/authApi";
export const setHeader = (token) => {
  if (token) {
    axios.defaults.headers.common["Authorization"] = `${token}`;
  } else {
    delete axios.defaults.headers.common["Authorization"];
  }
};

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  //State
  const [action, dispatch] = useReducer(AuthReducer, {
    username: "",
    isAuthenticated: false,
  });

  const [user, setUser] = useState({});
  
  const [loginState, setLoginState] = useState(false);

  //Service
  const checkLogin = async () => {
    try {
      const user = await authApi.checkLogin();
      if (user.data.success) {
        setLoginState(true);
        dispatch({
          type: "SET_USER",
          payload: {
            username: user.data.username,
            isAuthenticated: true,
          },
        });
      }
    } catch (e) {
      dispatch({
        type: "SET_USER",
        payload: {
          username: null,
          isAuthenticated: false,
        },
      });
    }
  };

  // useEffect(() => {
  //   checkLogin();
  // }, []);
  const Login = async (LoginData) => {
    try {
      const res = await axios.post("http://localhost:400/api/auth/login",LoginData);
      if (res.data.success) {
        window.localStorage.setItem("app", res.data.token);
        setLoginState(true);
      }
      await checkLogin();
      return res.data;
    } catch (e) {
      console.log(e.message);
      return {
        success: false,
        message: e.message,
      };
    }
  };

  const Register = async (RegisterData) => {
    try {
      const res = await authApi.Register(RegisterData);
      if (res.data.success) window.localStorage.setItem("app", res.data.token);
      await checkLogin();
    } catch (e) {
      console.log(e.message);
      return {
        success: false,
        message: e.message,
      };
    }
  };

  const Logout = () => {
    dispatch({
      type: "SET_AUTH",
      payload: {
        isAuthenticated: false,
        user: null,
      },
    });
    setLoginState(false);
  };

  const AuthProviderData = {
    checkLogin,
    Login,
    Register,
    Logout,
  };

  return (
    <AuthContext.Provider data={AuthProviderData}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
