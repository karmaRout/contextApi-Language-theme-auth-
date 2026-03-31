import { createContext, useState } from "react";

export const AuthContext = createContext();
export const AuthProvider = ({ children }) =>{
    const [user, setUser] = useState();
    const handleLogin = (userData) => {
        setUser(userData); // ✅ proper state update
    };
    const handleLogout = () => {
        setUser(null);
    };
    const value = {
        user: user,
        handleLogin,
        handleLogout
    }
    return(
        <AuthContext.Provider value={value}>
            { children }
        </AuthContext.Provider>
    )
}
