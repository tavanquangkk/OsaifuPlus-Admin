import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Button, Space, Table, Tag } from "antd";

export const UserTable = (props) => {
    const { setUserData, setOpenView, setOpenUpdate } = props;
    const columns = [
        {
            title: "Id",
            dataIndex: "id",
            key: "id",
            render: (text, record) => (
                <a
                    onClick={() => {
                        setOpenView(true);
                        setUserData(record);
                    }}>
                    {text}
                </a>
            ),
        },
        {
            title: "Name",
            dataIndex: "name",
            key: "name",
        },
        {
            title: "Email",
            dataIndex: "email",
            key: "email",
        },
        {
            title: "Role",
            dataIndex: "role",
            key: "role",
        },
        {
            title: "Action",
            key: "action",
            render: (record) => (
                <Space size="middle">
                    <Button
                        onClick={() => {
                            setOpenUpdate(true);
                            setUserData(record);
                        }}>
                        <EditOutlined style={{ color: "orange" }} label="Edit" />
                    </Button>
                    <Button>
                        <DeleteOutlined style={{ color: "red" }} label="Delete" />
                    </Button>
                </Space>
            ),
        },
    ];
    const data = [
        {
            id: "1",
            name: "John Brown",
            email: "ad@gmail.com",
            role: "ADMIN",
        },
        {
            id: "2",
            name: "John Brown",
            email: "b@gmail.com",
            role: "User",
        },
    ];

    return (
        <div>
            <Table columns={columns} dataSource={data} rowKey={"id"} />
        </div>
    );
};
