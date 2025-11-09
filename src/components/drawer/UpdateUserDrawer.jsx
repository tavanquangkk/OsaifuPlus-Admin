import { Button, Checkbox, Drawer, Form, Input, Modal, Select } from "antd";

export const UpdateUserDrawer = (props) => {
    const { userData, openUpdate, setOpenUpdate } = props;
    const handleOk = () => {};
    const handleCancel = () => {
        setOpenUpdate(false);
    };
    return (
        <div>
            <Modal
                title="Update user"
                closable={{ "aria-label": "Custom Close Button" }}
                open={openUpdate}
                onOk={handleOk}
                onCancel={handleCancel}>
                <Form
                    name="basic"
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 16 }}
                    style={{ maxWidth: 600 }}
                    initialValues={{
                        remember: true,
                        id: userData.id,
                        username: userData.name,
                        email: userData.email,
                        role: userData.role,
                    }}
                    // onFinish={onFinish}
                    // onFinishFailed={onFinishFailed}
                    autoComplete="off">
                    <Form.Item
                        value={userData.id}
                        label="ID"
                        name="id"
                        rules={[{ required: true, message: "Please input your username!" }]}>
                        <Input disabled={true} />
                    </Form.Item>
                    <Form.Item
                        label="Username"
                        name="username"
                        rules={[{ required: true, message: "Please input your username!" }]}>
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="Email"
                        name="email"
                        rules={[{ required: true, message: "Please input your username!" }]}>
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="Role"
                        name="role"
                        rules={[{ required: true, message: "Please input your username!" }]}>
                        <Select
                            options={[
                                { label: "USER", value: "USER" },
                                { label: "ADMIN", value: "ADMIN" },
                            ]}
                        />
                    </Form.Item>
                </Form>
            </Modal>
        </div>
    );
};
