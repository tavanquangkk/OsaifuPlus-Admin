import { HomeOutlined, LogoutOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

export const Header = () => {
    return (
        <div
            className="header"
            style={{ display: "flex", justifyContent: "space-between", padding: "10px 20px" }}>
            <Link to={"/"}>
                <HomeOutlined style={{ fontSize: "30px" }} />
            </Link>
            <img
                src="https://images.unsplash.com/photo-1761839257664-ecba169506c1?ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=3869"
                alt=""
                width={50}
            />
            <Link>
                <LogoutOutlined style={{ fontSize: "30px" }} spin={true} />
            </Link>
        </div>
    );
};
