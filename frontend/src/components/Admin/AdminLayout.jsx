import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { CgFormatJustify } from "react-icons/cg";
import { MdSpaceDashboard } from "react-icons/md";
import { MdPeople } from "react-icons/md";
import { MdInventory2 } from "react-icons/md";
import { MdShoppingCart } from "react-icons/md";

const AdminLayout = () => {

    const [sideBarIsOpen, setSideBarIsOpen] = useState(true);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) {
                console.log("Opened")
                setSideBarIsOpen(true)
            } else {
                console.log("Closed")
                setSideBarIsOpen(false)
            }
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className="min-h-screen flex flex-col">
            {/* SIDE BAR BUTTON */}
            <span className="md:hidden cursor-pointer" onClick={() => { console.log("Setting to: " + !sideBarIsOpen); setSideBarIsOpen(!sideBarIsOpen) }}>
                <CgFormatJustify className="fixed text-white bg-black h-16 w-16 right-6 bottom-6 p-4 rounded-full border-2 border-black-100 hover:text-black hover:bg-white" />
            </span>

            {/* SIDE BAR */}
            <div className={`fixed flex flex-col top-0 left-0 h-full bg-black w-1/3 md:w-1/3 lg:w-1/5 transform transition-transform duration-300 ${sideBarIsOpen ? "translate-x-0" : "-translate-x-full"}`}>
                <h1 className="text-white font-medium p-4 text-3xl">Fashionz</h1>

                <div className="flex flex-col pt-10 pl-10">
                    <nav className='space-y-4'>
                        <span className="flex items-center">
                            <MdSpaceDashboard className="h-8 w-8 text-white mr-2" />
                            <Link to="#" className='inline-block text-white hover:text-black'>DASHBOARD</Link>
                        </span>
                        <span className="flex items-center">
                            <MdPeople className="h-8 w-8 text-white mr-2" />
                            <Link to="#" className='inline-block text-white hover:text-black'>USER</Link>
                        </span>
                        <span className="flex items-center">
                            <MdInventory2 className="h-8 w-8 text-white mr-2" />
                            <Link to="#" className='inline-block text-white hover:text-black'>PRODUCT</Link>
                        </span>
                        <span className="flex items-center">
                            <MdShoppingCart className="h-8 w-8 text-white mr-2" />
                            <Link to="#" className='inline-block text-white hover:text-black'>ORDER</Link>
                        </span>
                    </nav>
                </div>

                <div className="flex-grow"></div>

                <button className="bg-red text-white px-6 py-3 text-sm rounded-r-md hover:bg-gray-800 transition-all">Logout</button>
            </div>

            {/* MAIN CONTENT */}
            <main>
                <Outlet />
            </main>
        </div>
    )
}

export default AdminLayout;