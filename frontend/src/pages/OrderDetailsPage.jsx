import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const OrderConfirmationPage = () => {
    let [orderDetails, setOrderDetails] = useState(null);
    let { id } = useParams();

    useEffect(() => {
        const mockOrderDetails = {
            _id: id,
            createdAt: new Date(),
            isPaid: true,
            isDelivered: false,
            paymentMethod: "PayPal",
            shippingMethod: "Standard",
            shippingAddress: { city: "New York", country: "USA" },
            orderItems: [
                {
                    productId: "1",
                    name: "Jacket",
                    price: 120,
                    quantity: 1,
                    image: "https://picsum.photos/150?random=1",
                },
                {
                    productId: "2",
                    name: "Shirt",
                    price: 120,
                    quantity: 1,
                    image: "https://picsum.photos/150?random=2",
                }
            ]
        };
        setOrderDetails(mockOrderDetails)
    }, []);

    return (
        <div className="flex justify-center mx-auto items-center w-[75%]">
            <div className="flex flex-col w-full">
                <h2 className="font-bold">Order Details</h2>
                <div className="my-4 border p-2">
                    <div className="flex flex-col">
                        {/* ORDER INFO */}
                        <div className="mb-2">
                            <div className="flex justify-between mb-1">
                                <span className="font-bold">Order ID: #{id}</span>
                                <span className={`${orderDetails?.isPaid ? "bg-green-100 text-green-900" : "bg-red-100 text-red-900"} rounded p-1 font-bold text-xs`}>{orderDetails?.isPaid ? "Approved" : "Declined"}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-xs text-gray-500">{new Date(orderDetails?.createdAt).toLocaleDateString()}</span>
                                <span className={`${orderDetails?.isDelivered ? "bg-green-100 text-green-900" : "bg-yellow-100 text-yellow-900"} rounded p-1 font-bold text-xs`}>{orderDetails?.isDelivered ? "Delivered" : "Pending"}</span>
                            </div>
                        </div>

                        {/* PAYMENT INFO AND SHIPPING INFO */}
                        <div className="w-[75%] grid grid-cols-1 lg:grid-cols-2">
                            <div>
                                ha
                            </div>
                            <div>
                                hi
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default OrderConfirmationPage;