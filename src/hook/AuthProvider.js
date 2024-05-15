import { useContext, createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import config from "../config";
import axios from "axios";

const AuthContext = createContext();

const AuthProvider = ({children}) => {

    const apiUrl = config().baseUrl;

    const [user, setUser] = useState(localStorage.getItem("user") || null);
    const [token, setToken] = useState(localStorage.getItem("authtoken") || "");
    const navigate = useNavigate();

    const loginAction = async (data) => {
        try {

            const apiConfig = {
                method: 'POST',
                url: `${apiUrl}/ashopree/auth/login`,
                data
            }

            const result = await axios(apiConfig);

            if (result.data.status === 200) {
                setUser(result.data.data);
                setToken(result.data.data.apiToken);
                localStorage.setItem("authtoken", result.data.data.apiToken);
                localStorage.setItem("user", JSON.stringify(result.data.data));
                navigate("/");
                return;

            } 


        } catch (error) {
            if (error.response) {
                alert(error.response.data.message);
            } else {
                alert(error.message);
            }
        }
    };

    const logOut = () => {
        setUser(null);
        setToken("");
        localStorage.removeItem("user");
        localStorage.removeItem("authtoken");
        navigate("/login");
    };

    return (
        <AuthContext.Provider value={{ token, user, loginAction, logOut }}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;

export const useAuth = () => {
    return useContext(AuthContext);
}
