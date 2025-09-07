import { useState, useEffect, useRef } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { Link } from "react-router-dom";

const NewArrivals = () => {
    const scrollRef = useRef(null);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(false);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true)

    const newArrivals = [
        {
            id: "1",
            name: "Stylist Jacket",
            price: 120,
            images: [
                {
                    url: "https://picsum.photos/500/500?random=1",
                    altText: "Stylish Jacket",
                }
            ]
        },
        {
            id: "2",
            name: "Stylist Jacket",
            price: 120,
            images: [
                {
                    url: "https://picsum.photos/500/500?random=2",
                    altText: "Stylish Jacket",
                }
            ]
        },
        {
            id: "3",
            name: "Stylist Jacket",
            price: 120,
            images: [
                {
                    url: "https://picsum.photos/500/500?random=3",
                    altText: "Stylish Jacket",
                }
            ]
        },
        {
            id: "4",
            name: "Stylist Jacket",
            price: 120,
            images: [
                {
                    url: "https://picsum.photos/500/500?random=4",
                    altText: "Stylish Jacket",
                }
            ]
        },
        {
            id: "5",
            name: "Stylist Jacket",
            price: 120,
            images: [
                {
                    url: "https://picsum.photos/500/500?random=5",
                    altText: "Stylish Jacket",
                }
            ]
        },
        {
            id: "6",
            name: "Stylist Jacket",
            price: 120,
            images: [
                {
                    url: "https://picsum.photos/500/500?random=6",
                    altText: "Stylish Jacket",
                }
            ]
        },
        {
            id: "7",
            name: "Stylist Jacket",
            price: 120,
            images: [
                {
                    url: "https://picsum.photos/500/500?random=7",
                    altText: "Stylish Jacket",
                }
            ]
        },
        {
            id: "8",
            name: "Stylist Jacket",
            price: 120,
            images: [
                {
                    url: "https://picsum.photos/500/500?random=8",
                    altText: "Stylish Jacket",
                }
            ]
        }
    ];

    const updateScrollButtons = () => {
        const container = scrollRef.current;

        if (container) {
            const leftScroll = container.scrollLeft;
            const rightIsScrollable = container.scrollWidth > leftScroll + container.clientWidth;

            setCanScrollLeft(leftScroll > 0)
            setCanScrollRight(rightIsScrollable)
        }

        console.log({
            scrollLeft: container.scrollLeft,
            clientWidth: container.clientWidth,
            containerScrollWidth: container.scrollWidth,
            offSetLeft: scrollRef.current.offsetLeft,
        })
    }

    const scroll = (direction) => {
        const scrollAmount = direction === "left" ? -300 : 300;
        scrollRef.current.scrollBy({left: scrollAmount, behaviour: "smooth"})
    }

    const handleMouseDown = (e) => {
        console.log({
            scrollLeft: scrollRef.current.scrollLeft,
            offSetLeft: scrollRef.current.offsetLeft,
            pageX: e.pageX
        })

        setIsDragging(true)
        setStartX(e.pageX - scrollRef.current.offsetLeft) // Find the mouse position inside the container
        setScrollLeft(scrollRef.current.scrollLeft)
    }

    const handleMouseMove = (e) => {
        if (!isDragging) { return }

        const x = e.pageX - scrollRef.current.offsetLeft;
        const walk = x - startX;

        scrollRef.current.scrollLeft = scrollLeft - walk;
    }

    const handleMouseUpOrLeave = (e) => {
        setIsDragging(false)
    }


    useEffect(() => {
        console.log("UseEffect")
        const container = scrollRef.current;
        console.log(container)

        if (container) {
            container.addEventListener("scroll", updateScrollButtons);

            return () => container.removeEventListener("scroll", updateScrollButtons)
        }
    }, []);

    return (
        <section className="py-16 px-4 lg:px-0">
            <div className="container mx-auto text-center mb-10 relative">
                <h2 className="text-3xl font-bold mb-4">
                    Explore New Arrivals
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                    Discover the latest styles straight off the runway, freshly added to keep your wardrobe on the cutting edge of fashion.
                </p>

                <div className="absolute right-0 bottom-[-30px] flex space-x-2">
                    <button className={`p-2 rounded border bg-white text-black ${canScrollLeft ? "" : "bg-gray-300 cursor-not-allowed"}`} disabled={!canScrollLeft} onClick={() => {
                        scroll("left")
                    }}>
                        <FiChevronLeft className="text-2xl" />
                    </button>
                    <button className={`p-2 rounded border bg-white text-black ${canScrollRight ? "" : "bg-gray-300 cursor-not-allowed"}`} disabled={!canScrollRight} onClick={() => {
                        scroll("right")
                    }}>
                        <FiChevronRight className="text-2xl" />
                    </button>
                </div>
            </div>

            <div 
                ref={scrollRef} 
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUpOrLeave}
                onMouseLeave={handleMouseUpOrLeave}
                className={`container mx-auto overflow-x-scroll flex space-x-6 relative ${isDragging ? "cursor-grabbing" : "cursor-grab"}`}
            >
                {
                    newArrivals.map((product, index) => (
                        <div key={product.id} className="min-w-[100%] sm:min-w-[50%] lg:min-w-[30%] relative">
                            <img draggable={false} src={product.images[0]?.url} alt={product.images[0].altText || product.name} className="w-full h-[500px] object-cover rounded-lg" />

                            <div className="absolute bottom-0 left-0 right-0 bg-opacity-50 backdrop-blur-md text-white p-4 rounded-b-lg">
                                <Link to={`/product/${product._id}`} className="block">
                                    <h4 className="font-medium">{product.name}</h4>
                                    <p className="mt-1">${product.price}</p>
                                </Link>
                            </div>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}

export default NewArrivals;