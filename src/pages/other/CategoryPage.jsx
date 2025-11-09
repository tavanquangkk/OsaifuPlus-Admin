import { Button } from "antd";
import { CategoryTable } from "../../components/CategoryTable";

export const CategoryPage = () => {
    return (
        <div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
                <h2>Categories</h2>
                <Button type="primary">Add category</Button>
            </div>
            <CategoryTable />
        </div>
    );
};
