import { Route, Routes } from "react-router-dom";
import LoginPage from "./pages/auth/LoginPage";
import HomePage from "./pages/other/HomePage";

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/about" element={<HomePage />} />
        </Routes>
    );
};

export default App;
