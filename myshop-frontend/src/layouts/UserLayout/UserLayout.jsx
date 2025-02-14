import { Outlet } from "react-router-dom";
import Header from "../../components/User/Header/Header";
import Footer from "../../components/User/Footer/Footer";
import "./UserLayout.css";
const UserLayout = () => {
    return (
        <>
            <Header />
            <div className="outlet-container">
                <Outlet />
            </div>
            <Footer />
        </>
    )
}
export default UserLayout;