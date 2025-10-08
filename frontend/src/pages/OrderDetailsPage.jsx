import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

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
        <div className="flex justify-center mx-auto items-center w-[60%]">
            <div className="flex flex-col w-full">
                <h1 className="font-bold text-3xl my-6">Order Details</h1>
                <div className="border rounded-lg p-2 p-4 mb-4">
                    <div className="flex flex-col">
                        {/* ORDER INFO */}
                        <div className="mb-14">
                            <div className="flex justify-between mb-1">
                                <span className="font-bold text-xl">Order ID: #{id}</span>
                                <span className={`${orderDetails?.isPaid ? "bg-green-100 text-green-900" : "bg-red-100 text-red-900"} rounded p-1 font-bold text-xs`}>{orderDetails?.isPaid ? "Approved" : "Declined"}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-xs text-gray-500">{new Date(orderDetails?.createdAt).toLocaleDateString()}</span>
                                <span className={`${orderDetails?.isDelivered ? "bg-green-100 text-green-900" : "bg-yellow-100 text-yellow-900"} rounded p-1 font-bold text-xs`}>{orderDetails?.isDelivered ? "Delivered" : "Pending"}</span>
                            </div>
                        </div>

                        {/* PAYMENT INFO AND SHIPPING INFO */}
                        <div className="w-[75%] grid grid-cols-1 lg:grid-cols-2 mb-14">
                            <div>
                                <h2 className="font-bold">Payment Info</h2>
                                <p>Payment method: {orderDetails?.paymentMethod}</p>
                                <p>Status: {orderDetails?.isPaid ? "Paid" : "Pending payment"}</p>
                            </div>
                            <div>
                                <h2 className="font-bold">Shipping Info</h2>
                                <p>Shipping method: {orderDetails?.shippingMethod}</p>
                                <p>Address: {orderDetails?.shippingAddress.city}, {orderDetails?.shippingAddress.country}</p>
                            </div>
                        </div>

                        {/* TABLE CONTENT SHOWING */}
                        <div className="overflow-x-auto">
                            <h2 className="font-bold">Products</h2>
                            <table className="min-w-full text-gray-600 mb-4">
                                <thead className="bg-gray-100">
                                    <tr>
                                        <th className="py-2 px-4">Name</th>
                                        <th className="py-2 px-4">Unit Price</th>
                                        <th className="py-2 px-4">Quantity</th>
                                        <th className="py-2 px-4">Total</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        orderDetails?.orderItems.map((item, key) => (
                                            <tr key={item.productId} className="border-b">
                                                <td className="py-2 px-4 flex items-center">
                                                    <img 
                                                        src={item.image}
                                                        alt={item.name}
                                                        className="w-12 h-12 object-cover rounded-lg mr-4"
                                                    />
                                                    <Link
                                                        to={`/product/${item.productId}`}
                                                        className="text-blue-500 hover:underline"
                                                    >
                                                        {item.name}
                                                    </Link>
                                                </td>
                                                <td className="py-2 px-4">{item.price}</td>
                                                <td className="py-2 px-4">{item.quantity}</td>
                                                <td className="py-2 px-4">{item.quantity * item.price}</td>
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </table>
                        </div>

                        <Link
                            to='/my-orders'
                            className="text-blue-500 hover:underline"
                        >
                            Back to My Orders
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default OrderConfirmationPage;