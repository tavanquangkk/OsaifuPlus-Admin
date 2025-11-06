import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/auth/LoginPage";
import HomePage from "./pages/other/HomePage";
import PrivateRoutes from "./route/ProtectedRoute";
import { LayoutPage } from "./components/layout/LayoutPage";
import { HelloPage } from "./pages/HelloPage";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<PrivateRoutes />}>
                    <Route path="/" element={<LayoutPage />}>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/hello" element={<HelloPage />} />
                    </Route>
                </Route>
                <Route path="/login" element={<LoginPage />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
