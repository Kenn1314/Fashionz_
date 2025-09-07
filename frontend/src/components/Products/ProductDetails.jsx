import { useEffect, useState } from "react"
import { toast } from "sonner";
import ProductGrid from "./ProductGrid.jsx"

const selectedProduct = {
    name: "Stylish Jacket",
    price: 120,
    originalPrice: 150,
    description: "This is a stylish Jacket perfect for any occasion",
    brand: "FashionBrand",
    material: "Leather",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Red", "Black"],
    images: [
        {
            url: "https://picsum.photos/500/500?random=1",
            altText: "Stylish Jacket 1"
        },
        {
            url: "https://picsum.photos/500/500?random=2",
            altText: "Stylish Jacket 2"
        },
    ]
}

const similarProducts = [
    {
        id: 1,
        name: "Product 1",
        price: 100,
        images: [{ url: "https://picsum.photos/500/500?random=1" }]
    },
    {
        id: 2,
        name: "Product 1",
        price: 100,
        images: [{ url: "https://picsum.photos/500/500?random=2" }]
    },
    {
        id: 3,
        name: "Product 1",
        price: 100,
        images: [{ url: "https://picsum.photos/500/500?random=3" }]
    },
    {
        id: 4,
        name: "Product 1",
        price: 100,
        images: [{ url: "https://picsum.photos/500/500?random=4" }]
    },

]

const ProductDetails = () => {

    const [mainImage, setMainImage] = useState("");
    const [selectedSize, setSelectedSize] = useState("");
    const [selectedColor, setSelectedColor] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [isButtonDisabled, setIsButtonDisabled] = useState(false);

    const handleQualityChange = (action_name) => {
        if (action_name === "minus" && quantity > 1) {
            setQuantity((prev) => prev - 1)
        }

        if (action_name === "plus") {
            setQuantity((prev) => prev + 1)
        }
    }

    const handleAddToCart = () => {
        if (!selectedColor || !selectedSize) {
            toast.error("Please select a color and size before adding to a cart !", { duration: 1000 })
            return
        }

        setIsButtonDisabled(true)

        setTimeout(() => {
            toast.success("Successfully added product to the cart !", { duration: 1000 })
            setIsButtonDisabled(false)
        })
    }

    useEffect(() => {
        if (selectedProduct?.images?.length > 0) {
            setMainImage(selectedProduct.images[0].url)
        }

        // return () => {
        //     if (timeoutRef.current) clearTimeout(timeoutRef.current);
        // };
        console.log("here")
    }, [selectedProduct]);

    return (
        <section className="p-6">
            {/* BEST SELLER SECTION */}
            <div className="max-w-6xl mx-auto bg-white p-8 rounded-lg">
                <div className="flex flex-col md:flex-row">

                    {/* WEB VERSION FOR IMAGES OPTIONS */}
                    <div className="hidden md:flex flex-col space-y-4 mr-6">
                        {
                            selectedProduct.images.map((image, index) => (
                                <img src={image.url} alt={image.altText || `Thumbnail ${index}`} className={`h-20 w-20 object-cover rounded-lg cursor-pointer border ${mainImage == image.url ? "border-black border-4" : "border-gray-300"}`} onClick={() => { setMainImage(image.url) }} />
                            ))
                        }
                    </div>

                    <div className="md:w-1/2">
                        <div className="mb-4">
                            <img src={mainImage} alt="Main Product" className="w-full h-auto object-cover rounded-lg" />
                        </div>
                    </div>

                    {/* MOBILE VERSION FOR IMAGES OPTIONS */}
                    <div className="md:hidden flex overscroll-x-scroll space-x-4 mb-4">
                        {
                            selectedProduct.images.map((image, index) => (
                                <img src={image.url} alt={image.altText || `Thumbnail ${index}`} className={`h-20 w-20 object-cover rounded-lg cursor-pointer border ${mainImage == image.url ? "border-black border-4" : "border-gray-300"}`} onClick={() => { setMainImage(image.url) }} />

                            ))
                        }
                    </div>

                    {/* FORM */}
                    <div className="md:w-1/2 md:ml-10">
                        <h1 className="text-2xl md:text-3xl font-semibold mb-2">
                            {selectedProduct.name}
                        </h1>
                        <p className="text-l text-gray-600 mb-1 line-through">
                            {selectedProduct.originalPrice && `${selectedProduct.price}`}
                        </p>
                        <p className="text-xl text-gray-500 mb-2">
                            $ {selectedProduct.price}
                        </p>
                        <p className="text-gray-600 mb-4">
                            {selectedProduct.description}
                        </p>

                        {/* COLOR OPTIONS */}
                        <div className="mb-4">
                            <p className="text-gray-700">Color:</p>
                            <div className="flex gap-2 mt-2">
                                {
                                    selectedProduct.colors.map((color, index) => (
                                        <button key={index} onClick={() => { setSelectedColor(color) }} className={`w-8 h-8 rounded-full border ${color == selectedColor ? "border-black border-2" : ""}`} style={{ backgroundColor: color.toLocaleLowerCase(), filter: "brightness(0.5)" }}></button>
                                    ))
                                }
                            </div>
                        </div>

                        {/* SIZE OPTIONS */}
                        <div className="mb-4">
                            <p className="text-gray-700">Size:</p>
                            <div className="flex gap-2 mt-2">
                                {
                                    selectedProduct.sizes.map((size, index) => (
                                        <button key={index} onClick={() => { setSelectedSize(size) }} className={`px-4 py-2 rounded border ${selectedSize == size ? "bg-black text-white" : ""}`}>{size}</button>
                                    ))
                                }
                            </div>
                        </div>

                        {/* QUANTITY OPTIONS */}
                        <div className="mb-6">
                            <p className="text-gray-700">Quantity:</p>
                            <div className="flex items-center space-x-4 mt-2">
                                <button className="px-2 py-1 bg-gray-200 rounded text-lg" onClick={() => { handleQualityChange("minus") }}>
                                    -
                                </button>
                                <span className="text-lg">{quantity}</span>
                                <button className="px-2 py-1 bg-gray-200 rounded text-lg" onClick={() => { handleQualityChange("plus") }}>
                                    +
                                </button>
                            </div>
                        </div>

                        <button
                            onClick={handleAddToCart}
                            disabled={isButtonDisabled}
                            className={`bg-black text-white py-2 px-6 rounded w-full mb-4 ${isButtonDisabled ? "cursor-not-allowed opacity-50" : "hover:bg-gray-900"}`}
                        >
                            {isButtonDisabled ? "Adding to cart..." : "ADD TO CART"}
                        </button>

                        <div className="mt-10 text-gray-700">
                            <h3 className="text-xl font-bold mb-4">Characteristic:</h3>
                            <table className="w-full text-left text-sm text-gray-600">
                                <tbody>
                                    <tr>
                                        <td className="py-1">Brand</td>
                                        <td className="py-1">{selectedProduct.brand}</td>
                                    </tr>
                                    <tr>
                                        <td className="py-1">Material</td>
                                        <td className="py-1">{selectedProduct.material}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

            {/* YOU MAY ALSO LIKE SECTION */}
            <div className="mt-20">
                <h2 className="text-2xl text-center font-medium mb-4">
                    You May Also Like
                </h2>
                <ProductGrid products={similarProducts} />
            </div>
        </section>
    )
}

export default ProductDetails;