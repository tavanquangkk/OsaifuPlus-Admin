import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Button, Space, Table } from "antd";

export const CategoryTable = () => {
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
            title: "Action",
            key: "action",
            render: (_, record) => (
                <Space size="middle">
                    <Button onClick={console.log(record.name)}>
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
            name: "Fee",
        },
    ];

    return (
        <div>
            <Table columns={columns} dataSource={data} rowKey={"id"} />
        </div>
    );
};
