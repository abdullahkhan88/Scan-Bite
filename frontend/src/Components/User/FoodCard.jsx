import { Typography, Card, Tag, Button, Rate } from "antd";
import paneerTikka from "../../assets/paneerTikka.png";
const { Title, Paragraph } = Typography;

const FoodsCard = () => {
    return (
        <>


            <Card
                hoverable
                cover={
                    <img
                        alt="food"
                        src={paneerTikka}
                        className="w-full h-50 object-cover rounded-lg"
                    />
                }
                className="rounded-2xl overflow-hidden"
                style={
                    {
                        background: "#41a9f81b",
                        border: "3px solid #41a9f885",
                        borderRadius: "16px"
                    }
                }
            >
                {/* Tag */}
                <Tag color="red" style={{ marginBottom: "4px" }}>
                    Best Seller
                </Tag>

                {/* Title + Veg */}
                <div className="flex justify-between items-center">
                    <h3 className="text-lg font-semibold">Paneer Tikka</h3>

                    <Tag color="green">Veg</Tag>
                </div>

                {/* Rating */}
                <div>
                    <Rate disabled defaultValue={4} style={{ fontSize: "14px" }} />
                    <span className="text-gray-500 text-sm ml-2">(120)</span>
                </div>

                {/* Description */}
                <p className="text-gray-500 text-sm mt-2">
                    Spicy grilled paneer with rich flavors
                </p>

                {/* Price + Button */}
                <div className="flex justify-between items-center mt-4">
                    <span className="font-bold text-lg text-green-500">₹195</span>

                    <Button type="primary" danger size="small">
                        Add
                    </Button>
                </div>
            </Card>
        </>
    );

};
export default FoodsCard;