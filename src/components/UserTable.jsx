import { EditOutlined } from "@ant-design/icons";
import { Button, Space, Table, Tag } from "antd";

export const UserTable = () => {
    const columns = [
        {
            title: "Id",
            dataIndex: "id",
            key: "id",
            render: (text) => <a>{text}</a>,
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
            render: (_, record) => (
                <Space size="middle">
                    <EditOutlined style={{ color: "orange" }} label="Edit" />
                    <Button>Delete</Button>
                    <a>Invite {record.name}</a>
                    <a>Delete</a>
                </Space>
            ),
        },
    ];
    const data = [
        {
            id: "1",
            name: "John Brown",
            age: 32,
            address: "New York No. 1 Lake Park",
            tags: ["nice", "developer"],
        },
        {
            id: "2",
            name: "Jim Green",
            age: 42,
            address: "London No. 1 Lake Park",
            tags: ["loser"],
        },
        {
            id: "3",
            name: "Joe Black",
            age: 32,
            address: "Sydney No. 1 Lake Park",
            tags: ["cool", "teacher"],
        },
    ];

    return (
        <div>
            <Table columns={columns} dataSource={data} rowKey={"id"} />
        </div>
    );
};
