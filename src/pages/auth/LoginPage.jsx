import { Button, Checkbox, Form, Input } from "antd";
import "../../assets/styles/App.css";

const LoginPage = () => {
    console.log(import.meta.env.VITE_API_URL);
    return (
        <div>
            <h1 style={{ textAlign: "center" }}>Login</h1>
            <Form
                className="login-form"
                size="small"
                name="basic"
                layout="vertical"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 24 }}
                initialValues={{ remember: true }}
                // onFinish={onFinish}
                // onFinishFailed={onFinishFailed}
                autoComplete="off">
                <Form.Item
                    label="Email"
                    name="email"
                    rules={[{ required: true, message: "Please input your email!" }]}>
                    <Input className="email-input" />
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                    rules={[{ required: true, message: "Please input your password!" }]}>
                    <Input.Password className="password-input" />
                </Form.Item>

                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
};

export default LoginPage;
