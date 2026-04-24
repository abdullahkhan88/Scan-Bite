import { Button, Row, Col, Card } from "antd";
import Recommended from "../../Components/User/Recommended";
import {
  QrcodeOutlined,
  ShoppingCartOutlined,
  ThunderboltOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import GreenFoods from "../../assets/GreenFoods.jpg";
import GreenFoodsMobile from "../../assets/GreenFoods-Mobile.jpg";


const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div style={{ padding: "50px" }}>
        {/* Hero Section */}
        <Row align="middle" gutter={[32, 32]}>
          <Col xs={24} md={12} className="flex flex-col justify-center">

            <h1 className="text-4xl sm:text-5xl font-bold leading-tight text-gray-600">
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
              <h3 className="text-lg font-bold text-blue-600">QR Based Ordering</h3>
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
              <h3 className="text-lg font-bold text-red-500">Easy Ordering</h3>
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
              <h3 className="text-lg font-bold text-green-700">Fast Service</h3>
              <p>No waiting. Orders go directly to kitchen.</p>
            </Card>
          </Col>
        </Row>

        {/* CTA */}

      </div>
      <div className="relative mb-6 sm:mb-8 md:mb-12">
        <img
          src={GreenFoods}
          alt="banner"
          className="hidden sm:block w-full h-full object-cover"
        />
        <div className=" mb-6">
          <img
            src={GreenFoodsMobile}
            alt="banner"
            className="block sm:hidden w-full object-cover"
          />
          <button className="hidden sm:block absolute bottom-[35%] left-[75%]
           border-2 border-green-600 text-green-700 cursor-pointer px-4 md:px-6 py-2 md:py-3 rounded-md">
            Order Now
          </button>

          {/* Mobile Button */}
          <button className="block sm:hidden absolute bottom-[50%] left-[70%]
           -translate-x-1/2 border-2 border-green-600 text-green-700 cursor-pointer text-green-700 px-2 py-1 rounded-md">
            Order Now
          </button>
        </div>
      </div>

      {/* mobile screen */}


      <Recommended />
    </>
  );
};

export default LandingPage;