import { Button, Result } from "antd";
import { Link } from "react-router-dom";

export const NotFoundErrorPage = () => {
    return (
        <div>
            <Result
                status="404"
                title="404"
                subTitle="Sorry, the page you visited does not exist."
                extra={
                    <Link type="primary" to={"/"}>
                        Back Home
                    </Link>
                }
            />
        </div>
    );
};
