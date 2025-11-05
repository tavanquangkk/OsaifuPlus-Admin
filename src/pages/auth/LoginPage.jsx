import { Button, Checkbox, Form, Input } from "antd";
import "../../assets/styles/App.css";
import { login } from "../../api/auth";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../../context/AuthContext";

const LoginPage = () => {
    const { setUser } = useContext(AuthContext);
    let navigate = useNavigate();

    const onFinish = async (value) => {
        const { email, password } = value;
        const response = await login(email, password);
        if (response) {
            const userData = response?.data?.data;
            setUser(userData);
            localStorage.setItem("user", JSON.stringify(userData));
        }

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
