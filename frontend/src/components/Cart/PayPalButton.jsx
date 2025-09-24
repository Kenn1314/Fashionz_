import React from 'react'
import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";

const PayPalButton = ({ amount, onSuccess, onError }) => {
    return (
        <PayPalScriptProvider options={{ "client-id": "AXEnKSeRNH8NqyiuCsdW6SRP4sD5-AoypcOEnkoeusX9PhZIC-TImRDhDWpPl55CxIpzeys1TCw2AOUl" }}>
            <PayPalButtons
                style={{ layout: "vertical" }}
                createOrder={(data, actions) => {
                    return actions.order.create({
                        purchase_units: [{ amount: { value: amount } }]
                    })
                }}
                onApprove={(data, actions) => {
                    return actions.order.capture().then(onSuccess)
                }}
                onError={onError}
            />
        </PayPalScriptProvider>
    )
}

export default PayPalButton
