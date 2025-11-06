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
import React from "react";
import { Outlet } from "react-router-dom";
import { Header } from "./Header";
import { Footer } from "./Footer";
export const LayoutPage = () => {
    const iconList = [<UserOutlined />, <UnorderedListOutlined />, <CommentOutlined />];
    const items2 = ["User", "Category", "FeedBack"].map((item, index) => {
        console.log(">>>Check index", index);
        return {
            key: `${item}`,
            icon: iconList[index],
            label: ` ${item}`,
        };
    });
    return (
        <Layout style={{ height: "100vh", paddingBottom: "30px" }}>
            <Header />
            <Layout>
                <Sider width={200} className="sider-menu">
                    <Menu
                        mode="inline"
                        defaultSelectedKeys={["1"]}
                        defaultOpenKeys={["sub1"]}
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
