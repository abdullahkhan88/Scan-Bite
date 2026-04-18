import { Layout, Menu, Badge, Typography } from "antd";
import { LoginOutlined, QrcodeOutlined } from "@ant-design/icons";
import {
    HomeOutlined,
    AppstoreOutlined,
    ShoppingCartOutlined,
} from "@ant-design/icons";
import { useNavigate, useLocation } from "react-router-dom";

const { Header } = Layout;

const Navbar = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { Title } = Typography

    const items = [
        {
            key: "/",
            icon: <HomeOutlined />,
            label: "Home",
        },
        {
            key: "/menu",
            icon: <AppstoreOutlined />,
            label: "Menu",
        },
        
        {
            key: "/cart",
            icon: (
                <Badge count={2} size="small">
                    <ShoppingCartOutlined />
                </Badge>
            ),
            label: "Cart",
        },
        {
            key: "/login",
            icon: <LoginOutlined />,
            label: "Login",
        },
    ];

    return (
        <Header
            style={{
                height: "70px",
                lineHeight: "40px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                background: "white",
                boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
                padding: "0 20px",
            }}
        >
            {/* Logo */}


            <div
                onClick={() => navigate("/")}
                style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    cursor: "pointer",
                }}
            >
                <QrcodeOutlined style={{ fontSize: "22px", color: "#f5b62e" }} />

                <Title
                    level={4}
                    style={{
                        margin: 0,
                        color: "#f5b62e",
                        fontWeight: "700",
                        fontSize:"25px"
                    }}
                >
                    ScanBite
                </Title>
            </div>

            {/* Menu (right side) */}
            <Menu
                className="custom-menu"
                theme="light"
                mode="horizontal"
                selectedKeys={[location.pathname]}
                items={items}
                onClick={({ key }) => navigate(key)}
                style={{ marginLeft: "auto", borderBottom: "none", }}
            />
        </Header>
    );
};

export default Navbar;