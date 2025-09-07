import { FiPhoneCall } from "react-icons/fi";
import { HiArrowPathRoundedSquare, HiOutlineCreditCard, HiShoppingBag } from "react-icons/hi2";

const FeaturesSection = () => {
    return (
        <section className="container mx-auto max-w-[75%] py-16 px-4">
            <div className="flex flex-col md:flex-row gap-6 lg:gap-64 bg-white justify-center text-center">
                <div className="flex flex-col items-center">

                    <HiShoppingBag className="text-xl mb-6"/>
                    <h2 className="font-semibold text-l tracking-tighter mb-2">FREE INTERNATIONAL SHIPPING</h2>
                    <h2 className="text-gray-700 text-md">On all orders over $100.00</h2>

                </div>
                <div className="flex flex-col items-center">

                    <HiArrowPathRoundedSquare className="text-xl mb-6"/>
                    <h2 className="font-semibold text-l tracking-tighter mb-2">45 DAYS RETURN</h2>
                    <h2 className="text-gray-700 text-md">Money back guarantee</h2>

                </div>
                <div className="flex flex-col items-center">

                    <HiOutlineCreditCard className="text-xl mb-6"/>
                    <h2 className="font-semibold text-l tracking-tighter mb-2">SECURE CHECKOUT</h2>
                    <h2 className="text-gray-700 text-md">100% secured checkout process</h2>

                </div>
            </div>
        </section>
    )
}

export default FeaturesSection;