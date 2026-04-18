import { Button, Row, Col, Card } from "antd";
import Recommended from "../../Components/User/Recommended";
import {
  QrcodeOutlined,
  ShoppingCartOutlined,
  ThunderboltOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div style={{ padding: "50px" }}>
        {/* Hero Section */}
        <Row align="middle" gutter={[32, 32]}>
          <Col xs={24} md={12} className="flex flex-col justify-center">

            <h1 className="text-4xl sm:text-5xl font-bold leading-tight">
              Dining at the restaurant? Scan the QR code on your table to order instantly.
            </h1>

            <p className="text-gray-600 text-lg mt-4 mb-6 max-w-md">
              Or explore the menu directly and place your order — no waiting!
            </p>

            <div className="flex gap-4 flex-wrap">

              {/* Main Button */}
              <Button
                size="large"
                onClick={() => navigate("/menu")}
                className="rounded-2xl px-8 py-3 text-lg font-semibold text-white border-0 shadow-lg hover:scale-105 transition"

              >
                View Menu
              </Button>

              {/* Optional Scan Button */}
              <Button
                size="large"
                icon={<QrcodeOutlined />}
                className="rounded-2xl px-6 py-3 text-lg font-semibold border-2 border-red-400 text-red-500 hover:bg-red-50 transition"
              >
                Scan QR
              </Button>

            </div>

            {/* Steps */}
            <div className="flex gap-6 mt-8 text-gray-700 text-sm">
              <span>📱 Scan</span>
              <span>🍔 Choose</span>
              <span>🛒 Order</span>
            </div>

          </Col>

          <Col xs={24} md={12}>
            <img
              src="https://cdn-icons-png.flaticon.com/512/1046/1046784.png"
              alt="food"
              style={{ width: "100%" }}
            />
          </Col>
        </Row>

        {/* Features */}
        <Row gutter={[16, 16]} style={{ marginTop: "60px" }}>
          <Col xs={24} md={8}>
            <Card bordered={true}
              style={{
                border: "3px solid rgba(3,112,214,0.8)",
                background: "rgba(34, 119, 217, 0.06)"
              }}
            >
              <QrcodeOutlined style={{ fontSize: "30px", color: "blue" }} />
              <h3>QR Based Ordering</h3>
              <p>Scan table QR and access menu instantly.</p>
            </Card>
          </Col>

          <Col xs={24} md={8}>
            <Card bordered={false}
              style={{
                border: "3px solid rgba(194, 26, 74, 0.55)",
                background: "rgba(217, 34, 49, 0.06)"
              }}
            >
              <ShoppingCartOutlined style={{ fontSize: "30px", color: "red" }} />
              <h3>Easy Ordering</h3>
              <p>Add items to cart and place order in seconds.</p>
            </Card>
          </Col>

          <Col xs={24} md={8}>
            <Card
              style={{
                border: "3px solid rgba(26, 194, 60, 0.55)",
                background: "rgba(37, 217, 34, 0.06)"
              }}
            >
              <ThunderboltOutlined style={{ fontSize: "30px", color: "green" }} />
              <h3>Fast Service</h3>
              <p>No waiting. Orders go directly to kitchen.</p>
            </Card>
          </Col>
        </Row>

        {/* CTA */}
        <div className="text-center mt-16 bg-gradient-to-r from-red-50 to-pink-50 py-10 rounded-2xl">

          <h2 className="text-3xl font-bold mb-3">
            🍽️ Ready to Order?
          </h2>

          <p className="text-gray-600 mb-6">
            Explore our delicious menu and place your order in seconds.
          </p>

          <Button
            size="large"
            onClick={() => navigate("/menu")}
            className="rounded-2xl px-8 py-3 text-lg font-semibold text-white border-0 shadow-lg hover:scale-105 transition"
            style={{
              background: "linear-gradient(135deg, #ff4d4f, #ff7a45)"
            }}
          >
            Start Ordering 🍕
          </Button>

        </div>
      </div>
      <Recommended />
    </>
  );
};

export default LandingPage;