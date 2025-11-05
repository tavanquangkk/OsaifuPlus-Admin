import { Children, useEffect, useState } from "react";
import AuthContext from "./AuthContext";

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState({});
    useEffect(() => {
        const savedUser = localStorage.getItem("user");
        if (savedUser) {
            setUser(JSON.parse(savedUser)); // ✅ parse lại object
        }
    }, []);

    return <AuthContext.Provider value={{ user, setUser }}>{children}</AuthContext.Provider>;
};
