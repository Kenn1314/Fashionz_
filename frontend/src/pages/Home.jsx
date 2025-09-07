import Hero from "../components/Layout/Hero";
import FeaturedCollection from "../components/Products/FeaturedCollection";
import FeaturesSection from "../components/Products/FeaturesSection";
import GenderCollectionSection from "../components/Products/GenderCollectionSection";
import NewArrivals from "../components/Products/NewArrivals";
import ProductDetails from "../components/Products/ProductDetails";
import ProductGrid from "../components/Products/ProductGrid";

const products = [
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

const Home = () => {
    return (
        <div>
            <Hero />
            <GenderCollectionSection />
            <NewArrivals />
            <h2 className="text-lg font-bold text-center mb-4">Best Seller</h2>
            <ProductDetails />

            <div className="container mx-auto">
                <h2 className="text-3xl text-center font-bold mb-4">Top Wears for Women</h2>
                <ProductGrid products={products}/>
            </div>

            <FeaturedCollection />
            <FeaturesSection />
        </div>
    )
}

export default Home;