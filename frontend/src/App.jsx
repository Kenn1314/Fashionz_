import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Toaster } from "sonner";
import UserLayout from "./components/Layout/UserLayout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import CollectionPage from "./pages/CollectionPage";
import ProductDetails from "./components/Products/ProductDetails";
import Checkout from "./pages/Checkout";
import OrderConfirmationPage from "./pages/OrderConfirmation";
import OrderDetailsPage from "./pages/OrderDetailsPage";
import MyOrdersPage from "./pages/MyOrdersPage";

const App = () => {
  return (
    <BrowserRouter>
      <Toaster position="top-right" />
      <Routes>
        {/* User page layout */}
        <Route path="/" element={<UserLayout />}>
          <Route index element={<Home />} />
          <Route element={<Login />} path="login" />
          <Route element={<Register />} path="register" />
          <Route element={<Profile />} path="profile" />
          <Route element={<CollectionPage />} path="collections/:collection" />
          <Route element={<ProductDetails />} path="product/:id" />
          <Route element={<Checkout />} path="checkout" />
          <Route element={<OrderConfirmationPage />} path="order-confirmation" />
          <Route element={<OrderDetailsPage />} path="order/:id" />
          <Route element={<MyOrdersPage />} path="my-orders"/>
        </Route>
        {/* Admin page layout */}
        <Route>

        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App