import { Drawer } from "antd";

export const ViewUserDrawer = (props) => {
    const { userData, openView, setOpenView } = props;
    return (
        <div>
            <Drawer
                title="User information"
                placement="right"
                closable={true}
                onClose={() => {
                    setOpenView(false);
                }}
                open={openView}
                getContainer={false}>
                <div>
                    <p>
                        <strong>ID: </strong>
                        {userData.id}
                    </p>
                    <p>
                        <strong>NAME: </strong>
                        {userData.name}
                    </p>
                    <p>
                        <strong>EMAIL: </strong>
                        {userData.email}
                    </p>
                    <p>
                        <strong>ROLE: </strong>
                        {userData.role}
                    </p>
                </div>
            </Drawer>
        </div>
    );
};
