import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./Landing/Landing";
import Payment from "./Payment/Payment";
import Orders from "./Orders/Orders";
import Cart from "./Cart/Cart";
import Auth from "./Auth/Auth";
import Results from "./Results/Results";
import ProductDetail from "./ProductDetail/ProductDetail";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
const stripePromise = loadStripe(
  "pk_test_51Q2q85A9fE3cYLyKF3RkFYeQS7G3utdIgDbHvECUahoAsygwBQFE1S61Ij8TAAcfT8tQs8AlME8I9Q8CKxMsSwrE00KMInFXGW"
);
import ProtectedRoute from "../Components/ProtectedRoute/ProtectedRoute";

function Routing() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/auth" element={<Auth />} />
        <Route
          path="/payments"
          element={
            <ProtectedRoute
              msg={"you must log in to pay"}
              redirect={"/payments"}
            >
              <Elements stripe={stripePromise}>
                <Payment />
              </Elements>
            </ProtectedRoute>
          }
        />
        <Route
          path="/orders"
          element={
            <ProtectedRoute
              msg={"you must log in access to your orders"}
              redirect={"/orders"}
            >
              <Orders />
            </ProtectedRoute>
          }
        />
        <Route path="/category/:categoryName" element={<Results />} />
        <Route path="/products/:productId" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  );
}

export default Routing;
