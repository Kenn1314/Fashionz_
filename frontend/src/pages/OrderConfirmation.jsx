import React from "react";

const checkout = {
    _id: "12323",
    createdAt: new Date(),
    checkoutItems: [
        {
            productId: "1",
            name: "Jacket",
            color: "black",
            size: "M",
            price: 150,
            quantity: 1,
            image: "https://picsum.photos/150?random=1"
        },
        {
            productId: "2",
            name: "T-shirt",
            color: "black",
            size: "M",
            price: 150,
            quantity: 1,
            image: "https://picsum.photos/150?random=2"
        },
    ],
    shippingAddress: {
        address: "123 Fashion Street",
        city: "New York",
        country: "USA",
    }
}


const OrderConfirmationPage = () => {
    return (
        <div className="mx-auto">
            <div className="flex flex-col justify-center items-center mb-10">
                <h1 className="text-2xl font-bold text-green-700 text-center my-4">Thank You for Your Order!</h1>

                <div className="border w-1/2 p-3">
                    {/*  FIRST ROW  */}
                    <div className="mb-16 flex flex-col sm:flex-row sm:justify-between">
                        <div className="flex flex-col">
                            <p className="text-lg font-bold">Order ID: {checkout._id || ""}</p>
                            <p className="text-sm text-gray-500">Order date: {checkout.createdAt.toLocaleDateString() || ""}</p>
                        </div>
                        <div>
                            <p className="text-green-700 text-sm">Estimated Delivery: 23/12/2024</p>
                        </div>
                    </div>

                    {/* SECOND ROW */}
                    <div className="mb-16">
                        {
                            checkout.checkoutItems.map((item, index) => (
                                <div className="flex flex-col mb-4">
                                    <div className="flex">
                                        <img src={item.image} className="object-cover h-[80px] w-[80px] rounded-lg" />
                                        <div className="ml-4 flex-col flex-grow">
                                            <div className="flex justify-between font-bold">
                                                <span>{item.name}</span>
                                                <span>${item.price}</span>
                                            </div>
                                            <div className="flex justify-between text-gray-500 text-sm">
                                                <span>{item.color} | {item.size}</span>
                                                <span>Qty: {item.quantity}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>

                    {/* THIRD ROW */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <p className="text-lg font-bold">Payment</p>
                            <p className="text-sm text-gray-600">Paypal</p>

                        </div>
                        <div>
                            <p className="text-lg font-bold">Delivery</p>
                            <p className="text-sm text-gray-600">{checkout.shippingAddress.address}</p>
                            <p className="text-sm text-gray-600">{checkout.shippingAddress.city}, {checkout.shippingAddress.country}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default OrderConfirmationPage;