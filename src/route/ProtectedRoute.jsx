import { Navigate, Outlet } from "react-router-dom";
const PrivateRoutes = () => {
    const user = JSON.parse(localStorage.getItem("user") || "null");
    return user && user.accessToken ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoutes;
