
import { Typography, Card, Tag, Button, Rate } from "antd";
import paneerTikka from "../../assets/paneerTikka.png";

const { Title, Paragraph } = Typography
import { useState } from "react";

/* const dammyData = [
    {
        id: 1,
        name: "Panner Tikka",
        price: 195,
        isVeg: true,
        Image: "https://source.unsplash.com/400x300/?paneer",
        tag: "Best Seller"
    },
    {
        id: 2,
        name: "Chicken Biryani",
        price: 220,
        isVeg: false,
        Image: "https://source.unsplash.com/400x300/?biryani",
        tag: "Trending"
    },
    {
        id: 3,
        name: "Veg Burger",
        price: 205,
        isVeg: true,
        Image: "https://source.unsplash.com/400x300/?burger",
        tag: "Popular"
    },
    {
        id: 4,
        name: "Grilled Chicken",
        price: 195,
        isVeg: false,
        Image: "https://source.unsplash.com/400x300/?grilled-chicken",
        tag: "Chef Special"
    },
]; */

const Recommended = () => {
    /*     const [filter, setFilter] = useState("all");
    
        const filteredItems = dammyData.filter((items) => {
            if (filter === "veg") return items.isVeg;
            if (filter === "nonveg") return !items.isVeg;
            return true;
        }) */


    return (
        <>
            <div className="min-h-screen bg-gradient-to-t from-[#FFEFF1] to-[#FFD6DC] p-4">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <Title
                        level={1}
                        style={
                            {
                                textAlign: "center",
                                color: "#ff4d4f",
                                fontWeight: "700",
                                marginBottom: "0",
                                marginTop: "40px"
                            }
                        }
                    >
                        Best Choices Today
                    </Title>
                    <Paragraph style={{ textAlign: "center", color: "#666", fontWeight: "500" }}>
                        Fresh and delicious picks specially curated for you
                    </Paragraph>

                    {/* Card */}
                    <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                        <Card
                            hoverable
                            cover={
                                <img
                                    alt="food"
                                    src={paneerTikka}
                                    className="w-full h-60 object-cover rounded-lg"
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
                            <Tag color="red" style={{ marginBottom: "8px" }}>
                                Best Seller
                            </Tag>

                            {/* Title + Veg */}
                            <div className="flex justify-between items-center">
                                <h3 className="text-lg font-semibold">Paneer Tikka</h3>

                                <Tag color="green">Veg</Tag>
                            </div>

                            {/* Rating */}
                            <div>
                                <Rate disabled defaultValue={4} style={{fontSize:"14px"}}/>
                                <span className="text-gray-500 text-sm ml-2">(120)</span>
                            </div>

                            {/* Description */}
                            <p className="text-gray-500 text-sm mt-1">
                                Spicy grilled paneer with rich flavors 😋
                            </p>

                            {/* Price + Button */}
                            <div className="flex justify-between items-center mt-4">
                                <span className="font-bold text-lg">₹195</span>

                                <Button type="primary" danger size="small">
                                    Add
                                </Button>
                            </div>
                        </Card>
                       
                    </div>
                </div>
            </div>

        </>
    );
};
export default Recommended;