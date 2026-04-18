import { Layout, Menu } from "antd";
import {
  DashboardOutlined,
  UnorderedListOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import { Outlet, useNavigate } from "react-router-dom";

const { Header, Sider, Content } = Layout;

const AdminLayout = () => {
  const navigate = useNavigate();

  const menuItems = [
    {
      key: "dashboard",
      icon: <DashboardOutlined />,
      label: "Dashboard",
    },
    {
      key: "menu",
      icon: <UnorderedListOutlined />,
      label: "Manage Menu",
    },
    {
      key: "orders",
      icon: <ShoppingCartOutlined />,
      label: "Orders",
    },
  ];

  const handleMenuClick = ({ key }) => {
    navigate(`/admin/${key}`);
  };

  return (
    <Layout style={{ minHeight: "100vh" }}>
      {/* Sidebar */}
      <Sider>
        <h2 style={{ color: "white", textAlign: "center", padding: "10px" }}>
          ScanBite
        </h2>

        <Menu
          theme="dark"
          mode="inline"
          items={menuItems}
          onClick={handleMenuClick}
        />
      </Sider>

      {/* Right Side */}
      <Layout>
        {/* Header */}
        <Header style={{ background: "#fff" }}>
          <h3>Admin Panel</h3>
        </Header>

        {/* Content */}
        <Content style={{ margin: "16px" }}>
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default AdminLayout;