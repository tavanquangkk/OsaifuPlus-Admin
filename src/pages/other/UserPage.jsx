import { Button, Drawer } from "antd";
import { UserTable } from "../../components/UserTable";
import { useState } from "react";
import { ViewUserDrawer } from "../../components/drawer/ViewUserDrawer";
import { UpdateUserDrawer } from "../../components/drawer/UpdateUserDrawer";

export const UserPage = () => {
    const [openView, setOpenView] = useState(false);
    const [openUpdate, setOpenUpdate] = useState(false);
    const [userData, setUserData] = useState({});

    return (
        <div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
                <h2>Users</h2>
                <Button type="primary">Add user</Button>
            </div>
            <UserTable
                setOpenView={setOpenView}
                setOpenUpdate={setOpenUpdate}
                userData={userData}
                setUserData={setUserData}
            />
            <ViewUserDrawer openView={openView} setOpenView={setOpenView} userData={userData} />
            <UpdateUserDrawer
                openUpdate={openUpdate}
                setOpenUpdate={setOpenUpdate}
                userData={userData}
            />
        </div>
    );
};
