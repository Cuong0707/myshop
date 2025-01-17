import { Outlet } from "react-router-dom";
import Header from "../../components/User/Header/Header";
import Footer from "../../components/User/Footer/Footer";
const UserLayout = () =>{
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}
export default UserLayout;