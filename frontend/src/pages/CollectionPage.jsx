import React, { useEffect, useState, useRef } from 'react'
import { FaFilter } from "react-icons/fa"
import FilterSideBar from '../components/Products/FilterSideBar';
import SortOptions from '../components/Products/SortOptions';
import ProductGrid from '../components/Products/ProductGrid';

const CollectionPage = () => {
    const [products, setProducts] = useState([]);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const sidebarRef = useRef(null)

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen)
    }

    const handleClickOutside = (e) => {
        if(sidebarRef.current && !sidebarRef.current.contains(e.target) && e.target.id != "filter_toggle_button") {
            setIsSidebarOpen(false);
        }
    }

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside)

        return () => {
            document.removeEventListener("mousedown", handleClickOutside)
        }
    }, [])

    useEffect(() => {
        setTimeout(() => {
            const fetchedProducts = [
                {
                    id: 1,
                    name: "Product 1",
                    price: 100,
                    images: [{ url: "https://picsum.photos/500/500?random=1" }]
                },
                {
                    id: 2,
                    name: "Product 2",
                    price: 100,
                    images: [{ url: "https://picsum.photos/500/500?random=2" }]
                },
                {
                    id: 3,
                    name: "Product 3",
                    price: 100,
                    images: [{ url: "https://picsum.photos/500/500?random=3" }]
                },
                {
                    id: 4,
                    name: "Product 4",
                    price: 100,
                    images: [{ url: "https://picsum.photos/500/500?random=4" }]
                },
                {
                    id: 5,
                    name: "Product 5",
                    price: 100,
                    images: [{ url: "https://picsum.photos/500/500?random=5" }]
                },
                {
                    id: 6,
                    name: "Product 6",
                    price: 100,
                    images: [{ url: "https://picsum.photos/500/500?random=6" }]
                },
                {
                    id: 7,
                    name: "Product 7",
                    price: 100,
                    images: [{ url: "https://picsum.photos/500/500?random=7" }]
                },
                {
                    id: 8,
                    name: "Product 8",
                    price: 100,
                    images: [{ url: "https://picsum.photos/500/500?random=8" }]
                },
            ]

            setProducts(fetchedProducts)
        }, 1000);
    }, [])

    return (
        <div className="flex flex-col lg:flex-row">
            {/* MOBILE FILTER BUTTON */}
            <button onClick={toggleSidebar} id="filter_toggle_button" className="lg:hidden border p-2 flex justify-center items-center">
                <FaFilter className='mr-2' /> Filters
            </button>

            {/* Filter Sidebar */}
            <div ref={sidebarRef} className={`${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} fixed inset-y-0 z-50 left-0 w-64 bg-white shadow-lg overflow-y-auto transition-transform duration-300 lg:static lg:translate-x-0`}>
                <FilterSideBar />
            </div>

            <div className="flex-grow p-4">
                <h2 className="text-2xl uppercase mb-4">All Collection</h2>

                {/* Sort Options */}
                <SortOptions />

                {/* Products display */}
                <ProductGrid products={products}/>
            </div>
        </div>
    )
}

export default CollectionPage
