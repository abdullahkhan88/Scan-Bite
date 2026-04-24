
import { Typography, Card, Tag, Button, Rate } from "antd";
import paneerTikka from "../../assets/paneerTikka.png";

const { Title, Paragraph } = Typography
import { useState } from "react";
import FoodsCard from "./FoodCard";
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
            <div className="min-h-screen bg-gradient-to-t from-[#fff1] to-[#87ccee3d] p-4">
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
                    <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                        <FoodsCard />
                        <FoodsCard />
                        <FoodsCard />
                        <FoodsCard />

                    </div>

                </div>
            </div>

        </>
    );
};
export default Recommended;