import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/auth/LoginPage";
import HomePage from "./pages/other/HomePage";
import PrivateRoutes from "./route/ProtectedRoute";
import { LayoutPage } from "./components/layout/LayoutPage";
import { HelloPage } from "./pages/HelloPage";
import { UserPage } from "./pages/other/UserPage";
import { NotFoundErrorPage } from "./pages/utils/NotFoundErrorPage";
import { CategoryPage } from "./pages/other/CategoryPage";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<PrivateRoutes />}>
                    <Route path="/" element={<LayoutPage />}>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/users" element={<UserPage />} />
                        <Route path="/categories" element={<CategoryPage />} />
                    </Route>
                    <Route path="*" element={<NotFoundErrorPage />} />
                </Route>
                <Route path="/login" element={<LoginPage />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
