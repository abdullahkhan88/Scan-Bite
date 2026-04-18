import { Outlet } from "react-router-dom"
import UserNavbar from "../../Components/User/UserNavbar.jsx"

const UserLayout = () => {
    return (
        <>
            <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>

                <UserNavbar />

                <div style={{ flex: 1, padding: "20px" }}>
                    <Outlet />
                </div>

                <div style={{ background: "#eee", padding: "10px", textAlign: "center" }}>
                    © 2026 ScanBite
                </div>

            </div>
        </>
    );
};

export default UserLayout;