import {
    CommentOutlined,
    HomeOutlined,
    LaptopOutlined,
    NotificationOutlined,
    UnorderedListOutlined,
    UserOutlined,
} from "@ant-design/icons";
import { Breadcrumb, Layout, Menu } from "antd";
import { Content } from "antd/es/layout/layout";
import Sider from "antd/es/layout/Sider";
import React, { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { Header } from "./Header";
import { Footer } from "./Footer";

export const LayoutPage = () => {
    const navigate = useNavigate();
    const [key, setKey] = useState("");
    const iconList = [<UserOutlined />, <UnorderedListOutlined />, <CommentOutlined />];
    const items2 = ["Users", "Categories", "FeedBacks"].map((item, index) => {
        return {
            key: `${item}`,
            icon: iconList[index],
            label: ` ${item}`,
        };
    });

    const menuClick = (params) => {
        const path = params?.key;
        setKey(params?.key);
        navigate(`/${path}`);
    };
    return (
        <Layout style={{ height: "100vh", paddingBottom: "30px" }}>
            <Header />
            <Layout>
                <Sider width={200} className="sider-menu">
                    <Menu
                        selectedKeys={[key]}
                        mode="inline"
                        onClick={menuClick}
                        style={{ height: "100%", borderInlineEnd: 0 }}
                        items={items2}
                    />
                </Sider>
                <Layout style={{ padding: "0 24px 24px" }}>
                    <Content>
                        <Outlet />
                    </Content>
                </Layout>
            </Layout>
            <Footer style={{ textAlign: "center" }}>
                Ant Design ©{new Date().getFullYear()} Created by Ant UED
            </Footer>
        </Layout>
    );
};
