import { Button, Checkbox, Form, Input } from "antd";
import "../../assets/styles/App.css";
import { login } from "../../api/auth";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
    console.log(import.meta.env.VITE_API_URL);
    let navigate = useNavigate();

    const onFinish = async (value) => {
        const { email, password } = value;
        console.log(email, password);
        const response = await login(email, password);
        console.log(">>>Check response login", response);
        navigate("/");
    };
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
                onFinish={onFinish}
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
