import Footer from "../Common/Footer";
import HeaderSection from "../Common/Header";
import { Outlet } from "react-router-dom";

const UserLayout = () => {
    return (
        <>
            {/* Header section */}
            <HeaderSection />
            <main>
                <Outlet />
            </main>
            <Footer />
        </>
    )   
}

export default UserLayout;