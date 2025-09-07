import CartDrawer from "../Layout/CartDrawer";
import Topbar from "../Layout/Topbar";
import Navbar from "./Navbar";

const HeaderSection = () => {
    return (
        <header className="border-b border-gray-200">
            {/* Top bar */}
            <Topbar />
            {/* Nav bar */}
            <Navbar />
            {/* Cart drawer */}
            <CartDrawer />
        </header>
    )
}

export default HeaderSection;