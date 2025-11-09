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
            <h1>Osaifu Plus</h1>
            <Link>
                <LogoutOutlined style={{ fontSize: "30px" }} spin={true} />
            </Link>
        </div>
    );
};
