// import React, { useState } from 'react'
// import { Link } from 'react-router-dom';

// const Checkout = () => {


//     const [selectedPayment, setSelectedPayment] = useState("payment1");

//     const handlePaymentChange = (event) => {
//         setSelectedPayment(event.target.id);
//     };
//     return (
//         <section className="checkout py-80">
//             <div className="container container-lg">
//                 <div className="border border-gray-100 rounded-8 px-30 py-20 mb-40">
//                     <span className="">
//                         Have a coupon?{" "}
//                         <Link
//                             to="/cart"
//                             className="fw-semibold text-gray-900 hover-text-decoration-underline hover-text-main-600"
//                         >
//                             Click here to enter your code
//                         </Link>{" "}
//                     </span>
//                 </div>
//                 <div className="row">
//                     <div className="col-xl-9 col-lg-8">
//                         <form action="#" className="pe-xl-5">
//                             <div className="row gy-3">
//                                 <div className="col-sm-6 col-xs-6">
//                                     <input
//                                         type="text"
//                                         className="common-input border-gray-100"
//                                         placeholder="First Name"
//                                     />
//                                 </div>
//                                 <div className="col-sm-6 col-xs-6">
//                                     <input
//                                         type="text"
//                                         className="common-input border-gray-100"
//                                         placeholder="Last Name"
//                                     />
//                                 </div>
//                                 <div className="col-12">
//                                     <input
//                                         type="text"
//                                         className="common-input border-gray-100"
//                                         placeholder="Business Name"
//                                     />
//                                 </div>
//                                 <div className="col-12">
//                                     <input
//                                         type="text"
//                                         className="common-input border-gray-100"
//                                         placeholder="United states (US)"
//                                     />
//                                 </div>
//                                 <div className="col-12">
//                                     <input
//                                         type="text"
//                                         className="common-input border-gray-100"
//                                         placeholder="House number and street name"
//                                     />
//                                 </div>
//                                 <div className="col-12">
//                                     <input
//                                         type="text"
//                                         className="common-input border-gray-100"
//                                         placeholder="Apartment, suite, unit, etc. (Optional)"
//                                     />
//                                 </div>
//                                 <div className="col-12">
//                                     <input
//                                         type="text"
//                                         className="common-input border-gray-100"
//                                         placeholder="City"
//                                     />
//                                 </div>
//                                 <div className="col-12">
//                                     <input
//                                         type="text"
//                                         className="common-input border-gray-100"
//                                         placeholder="Sans Fransisco"
//                                     />
//                                 </div>
//                                 <div className="col-12">
//                                     <input
//                                         type="text"
//                                         className="common-input border-gray-100"
//                                         placeholder="Post Code"
//                                     />
//                                 </div>
//                                 <div className="col-12">
//                                     <input
//                                         type="number"
//                                         className="common-input border-gray-100"
//                                         placeholder="Phone"
//                                     />
//                                 </div>
//                                 <div className="col-12">
//                                     <input
//                                         type="email"
//                                         className="common-input border-gray-100"
//                                         placeholder="Email Address"
//                                     />
//                                 </div>
//                                 <div className="col-12">
//                                     <div className="my-40">
//                                         <h6 className="text-lg mb-24">Additional Information</h6>
//                                         <input
//                                             type="text"
//                                             className="common-input border-gray-100"
//                                             placeholder="Notes about your order, e.g. special notes for delivery."
//                                         />
//                                     </div>
//                                 </div>
//                             </div>
//                         </form>
//                     </div>
//                     <div className="col-xl-3 col-lg-4">
//                         <div className="checkout-sidebar">
//                             <div className="bg-color-three rounded-8 p-24 text-center">
//                                 <span className="text-gray-900 text-xl fw-semibold">
//                                     Your Orders
//                                 </span>
//                             </div>
//                             <div className="border border-gray-100 rounded-8 px-24 py-40 mt-24">
//                                 <div className="mb-32 pb-32 border-bottom border-gray-100 flex-between gap-8">
//                                     <span className="text-gray-900 fw-medium text-xl font-heading-two">
//                                         Product
//                                     </span>
//                                     <span className="text-gray-900 fw-medium text-xl font-heading-two">
//                                         Subtotal
//                                     </span>
//                                 </div>
//                                 <div className="flex-between gap-24 mb-32">
//                                     <div className="flex-align gap-12">
//                                         <span className="text-gray-900 fw-normal text-md font-heading-two w-144">
//                                             HP Chromebook With Intel Celeron
//                                         </span>
//                                         <span className="text-gray-900 fw-normal text-md font-heading-two">
//                                             <i className="ph-bold ph-x" />
//                                         </span>
//                                         <span className="text-gray-900 fw-semibold text-md font-heading-two">
//                                             1
//                                         </span>
//                                     </div>
//                                     <span className="text-gray-900 fw-bold text-md font-heading-two">
//                                         $250.00
//                                     </span>
//                                 </div>
//                                 <div className="flex-between gap-24 mb-32">
//                                     <div className="flex-align gap-12">
//                                         <span className="text-gray-900 fw-normal text-md font-heading-two w-144">
//                                             HP Chromebook With Intel Celeron
//                                         </span>
//                                         <span className="text-gray-900 fw-normal text-md font-heading-two">
//                                             <i className="ph-bold ph-x" />
//                                         </span>
//                                         <span className="text-gray-900 fw-semibold text-md font-heading-two">
//                                             1
//                                         </span>
//                                     </div>
//                                     <span className="text-gray-900 fw-bold text-md font-heading-two">
//                                         $250.00
//                                     </span>
//                                 </div>
//                                 <div className="flex-between gap-24 mb-32">
//                                     <div className="flex-align gap-12">
//                                         <span className="text-gray-900 fw-normal text-md font-heading-two w-144">
//                                             HP Chromebook With Intel Celeron
//                                         </span>
//                                         <span className="text-gray-900 fw-normal text-md font-heading-two">
//                                             <i className="ph-bold ph-x" />
//                                         </span>
//                                         <span className="text-gray-900 fw-semibold text-md font-heading-two">
//                                             1
//                                         </span>
//                                     </div>
//                                     <span className="text-gray-900 fw-bold text-md font-heading-two">
//                                         $250.00
//                                     </span>
//                                 </div>
//                                 <div className="flex-between gap-24 mb-32">
//                                     <div className="flex-align gap-12">
//                                         <span className="text-gray-900 fw-normal text-md font-heading-two w-144">
//                                             HP Chromebook With Intel Celeron
//                                         </span>
//                                         <span className="text-gray-900 fw-normal text-md font-heading-two">
//                                             <i className="ph-bold ph-x" />
//                                         </span>
//                                         <span className="text-gray-900 fw-semibold text-md font-heading-two">
//                                             1
//                                         </span>
//                                     </div>
//                                     <span className="text-gray-900 fw-bold text-md font-heading-two">
//                                         $250.00
//                                     </span>
//                                 </div>
//                                 <div className="border-top border-gray-100 pt-30  mt-30">
//                                     <div className="mb-32 flex-between gap-8">
//                                         <span className="text-gray-900 font-heading-two text-xl fw-semibold">
//                                             Subtotal
//                                         </span>
//                                         <span className="text-gray-900 font-heading-two text-md fw-bold">
//                                             $859.00
//                                         </span>
//                                     </div>
//                                     <div className="mb-0 flex-between gap-8">
//                                         <span className="text-gray-900 font-heading-two text-xl fw-semibold">
//                                             Total
//                                         </span>
//                                         <span className="text-gray-900 font-heading-two text-md fw-bold">
//                                             $859.00
//                                         </span>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className="mt-32">
//                                 <div className="payment-item">
//                                     <div className="form-check common-check common-radio py-16 mb-0">
//                                         <input
//                                             className="form-check-input"
//                                             type="radio"
//                                             name="payment"
//                                             id="payment1"
//                                             checked={selectedPayment === 'payment1'}
//                                             onChange={handlePaymentChange}
//                                         />
//                                         <label
//                                             className="form-check-label fw-semibold text-neutral-600"
//                                             htmlFor="payment1"
//                                         >
//                                             Direct Bank transfer
//                                         </label>
//                                     </div>
//                                     {selectedPayment === 'payment1' && (
//                                         <div className="payment-item__content px-16 py-24 rounded-8 bg-main-50 position-relative d-block">
//                                             <p className="text-gray-800">
//                                                 Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.
//                                             </p>
//                                         </div>
//                                     )}
//                                 </div>
//                                 <div className="payment-item">
//                                     <div className="form-check common-check common-radio py-16 mb-0">
//                                         <input
//                                             className="form-check-input"
//                                             type="radio"
//                                             name="payment"
//                                             id="payment2"
//                                             checked={selectedPayment === 'payment2'}
//                                             onChange={handlePaymentChange}
//                                         />
//                                         <label
//                                             className="form-check-label fw-semibold text-neutral-600"
//                                             htmlFor="payment2"
//                                         >
//                                             Check payments
//                                         </label>
//                                     </div>
//                                     {selectedPayment === 'payment2' && (
//                                         <div className="payment-item__content px-16 py-24 rounded-8 bg-main-50 position-relative d-block">
//                                             <p className="text-gray-800">
//                                                 Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.
//                                             </p>
//                                         </div>
//                                     )}
//                                 </div>
//                                 <div className="payment-item">
//                                     <div className="form-check common-check common-radio py-16 mb-0">
//                                         <input
//                                             className="form-check-input"
//                                             type="radio"
//                                             name="payment"
//                                             id="payment3"
//                                             checked={selectedPayment === 'payment3'}
//                                             onChange={handlePaymentChange}
//                                         />
//                                         <label
//                                             className="form-check-label fw-semibold text-neutral-600"
//                                             htmlFor="payment3"
//                                         >
//                                             Cash on delivery
//                                         </label>
//                                     </div>
//                                     {selectedPayment === 'payment3' && (
//                                         <div className="payment-item__content px-16 py-24 rounded-8 bg-main-50 position-relative d-block">
//                                             <p className="text-gray-800">
//                                                 Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.
//                                             </p>
//                                         </div>
//                                     )}
//                                 </div>
//                             </div>
//                             <div className="mt-32 pt-32 border-top border-gray-100">
//                                 <p className="text-gray-500">
//                                     Your personal data will be used to process your order, support
//                                     your experience throughout this website, and for other purposes
//                                     described in our{" "}
//                                     <Link to="#" className="text-main-600 text-decoration-underline">
//                                         {" "}
//                                         privacy policy
//                                     </Link>{" "}
//                                     .
//                                 </p>
//                             </div>
//                             <Link
//                                 to="/checkout"
//                                 className="btn btn-main mt-40 py-18 w-100 rounded-8 mt-56"
//                             >
//                                 Place Order
//                             </Link>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </section>

//     )
// }

// export default Checkout


import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
import { message } from "antd";
import { useSelector } from "react-redux";
import axios from "axios";
// import { Button, Card, Container, Row, Col } from "react-bootstrap";

const Checkout = () => {
  const [selectedPayment, setSelectedPayment] = useState("payment1");

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    businessName: "",
    country: "",
    address: "",
    apartment: "",
    city: "",
    state: "",
    postCode: "",
    phone: "",
    email: "",
    notes: "",
  });

  const navigate = useNavigate();

   const [isLoading, setIsLoading] = useState(false);
      
      const Product = useSelector(state => state.mycart.cart);
  
      let totalAmount = 0;
      let productName = "";
      let myimg = "";
  
      Product.forEach((item) => {
          totalAmount += item.price * item.qnty;
          productName += item.name + ",";
          myimg = item.image;
      });
  
      const initPay = (data) => {
          const options = {
              key: "rzp_test_o3vkPO5n8pMXdo",
              amount: data.amount,
              currency: data.currency,
              description: "Order Payment",
              handler: async (response) => {
                  try {
                      const verifyURL = "http://localhost:8080/paymentuser/verify";
                      await axios.post(verifyURL, response);
                      message.success("Payment successful!");
  
                      // Clear cart and navigate
                      window.localStorage.removeItem("persist:cartData");
                      navigate("/");
                  } catch (error) {
                      message.error("Payment verification failed.");
                      console.error(error);
                  }
              },
              theme: {
                  color: "#3399cc",
              },
          };
  
          const rzp1 = new window.Razorpay(options);
          rzp1.open();
      };
  
      const handlePay = async () => {
          if (Product.length === 0) {
              message.warning("Your cart is empty.");
              return;
          }
  
          try {
              setIsLoading(true);
              const orderURL = "http://localhost:8080/paymentuser/orders";
              const { data } = await axios.post(orderURL, {
                  amount: totalAmount,
                  productname: productName,
              });
  
              initPay(data.data);
          } catch (error) {
              message.error("Failed to create payment order.");
              console.error(error);
          } finally {
              setIsLoading(false);
          }
      };

  useEffect(() => {
    const userDataStr = localStorage.getItem("user");
    if (userDataStr) {
      const userData = JSON.parse(userDataStr);
      setFormData({
        firstName: userData.user?.firmName || "",
        lastName: "",
        businessName: userData.user?.contactType || "",
        country: "India",
        address: userData.user?.address || "",
        apartment: "",
        city: userData.user?.city || "",
        state: userData.user?.state || "",
        postCode: "",
        phone: userData.user?.mobile1 || "",
        email: userData.user?.email || "",
        notes: "",
      });
    }
  }, []);

  const handlePaymentChange = (event) => {
    setSelectedPayment(event.target.id);
  };

  const handlecheckout = () => {
    navigate("/checkoutpay");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <section className="checkout py-80">
      <div className="container container-lg">
        <div className="border border-gray-100 rounded-8 px-30 py-20 mb-40">
          <span>
            Have a coupon?{" "}
            <Link
              to="/cart"
              className="fw-semibold text-gray-900 hover-text-decoration-underline hover-text-main-600"
            >
              Click here to enter your code
            </Link>
          </span>
        </div>
        <div className="row">
          <div className="col-xl-9 col-lg-8">
            <form action="#" className="pe-xl-5">
              <div className="row gy-3">
                <div className="col-sm-6 col-xs-6">
                  <input
                    type="text"
                    className="common-input border-gray-100"
                    placeholder="First Name"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-sm-6 col-xs-6">
                  <input
                    type="text"
                    className="common-input border-gray-100"
                    placeholder="Last Name"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-12">
                  <input
                    type="text"
                    className="common-input border-gray-100"
                    placeholder="Business Name"
                    name="businessName"
                    value={formData.businessName}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-12">
                  <input
                    type="text"
                    className="common-input border-gray-100"
                    placeholder="Country"
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-12">
                  <input
                    type="text"
                    className="common-input border-gray-100"
                    placeholder="House number and street name"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-12">
                  <input
                    type="text"
                    className="common-input border-gray-100"
                    placeholder="Apartment, suite, unit, etc. (Optional)"
                    name="apartment"
                    value={formData.apartment}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-12">
                  <input
                    type="text"
                    className="common-input border-gray-100"
                    placeholder="City"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-12">
                  <input
                    type="text"
                    className="common-input border-gray-100"
                    placeholder="State"
                    name="state"
                    value={formData.state}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-12">
                  <input
                    type="text"
                    className="common-input border-gray-100"
                    placeholder="Post Code"
                    name="postCode"
                    value={formData.postCode}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-12">
                  <input
                    type="number"
                    className="common-input border-gray-100"
                    placeholder="Phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-12">
                  <input
                    type="email"
                    className="common-input border-gray-100"
                    placeholder="Email Address"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-12">
                  <div className="my-40">
                    <h6 className="text-lg mb-24">Additional Information</h6>
                    <input
                      type="text"
                      className="common-input border-gray-100"
                      placeholder="Notes about your order, e.g. special notes for delivery."
                      name="notes"
                      value={formData.notes}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>
            </form>
          </div>

          <div className="col-xl-3 col-lg-4">
            <div className="checkout-sidebar">
              <div className="bg-color-three rounded-8 p-24 text-center">
                <span className="text-gray-900 text-xl fw-semibold">Your Orders</span>
              </div>
              <div className="border border-gray-100 rounded-8 px-24 py-40 mt-24">
                <div className="mb-32 pb-32 border-bottom border-gray-100 flex-between gap-8">
                  <span className="text-gray-900 fw-medium text-xl font-heading-two">Product</span>
                  <span className="text-gray-900 fw-medium text-xl font-heading-two">Subtotal</span>
                </div>

                {[1, 2, 3, 4].map((item, index) => (
                  <div className="flex-between gap-24 mb-32" key={index}>
                    <div className="flex-align gap-12">
                      <span className="text-gray-900 fw-normal text-md font-heading-two w-144">
                        HP Chromebook With Intel Celeron
                      </span>
                      <span className="text-gray-900 fw-normal text-md font-heading-two">
                        <i className="ph-bold ph-x" />
                      </span>
                      <span className="text-gray-900 fw-semibold text-md font-heading-two">1</span>
                    </div>
                    <span className="text-gray-900 fw-bold text-md font-heading-two">$250.00</span>
                  </div>
                ))}

                <div className="border-top border-gray-100 pt-30 mt-30">
                  <div className="mb-32 flex-between gap-8">
                    <span className="text-gray-900 font-heading-two text-xl fw-semibold">Subtotal</span>
                    <span className="text-gray-900 font-heading-two text-md fw-bold">$859.00</span>
                  </div>
                  <div className="mb-0 flex-between gap-8">
                    <span className="text-gray-900 font-heading-two text-xl fw-semibold">Total</span>
                    <span className="text-gray-900 font-heading-two text-md fw-bold">$859.00</span>
                  </div>
                </div>
              </div>

              <div className="mt-32">
                {["payment1", "payment2", "payment3"].map((id, idx) => (
                  <div className="payment-item" key={id}>
                    <div className="form-check common-check common-radio py-16 mb-0">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="payment"
                        id={id}
                        checked={selectedPayment === id}
                        onChange={handlePaymentChange}
                      />
                      <label
                        className="form-check-label fw-semibold text-neutral-600"
                        htmlFor={id}
                      >
                        {id === "payment1" && "Direct Bank transfer"}
                        {id === "payment2" && "Check payments"}
                        {id === "payment3" && "Cash on delivery"}
                      </label>
                    </div>
                    {selectedPayment === id && (
                      <div className="payment-item__content px-16 py-24 rounded-8 bg-main-50 position-relative d-block">
                        <p className="text-gray-800">
                          Make your payment directly into our bank account. Please use your
                          Order ID as the payment reference. Your order will not be shipped
                          until the funds have cleared in our account.
                        </p>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <div className="mt-32 pt-32 border-top border-gray-100">
                <p className="text-gray-500">
                  Your personal data will be used to process your order, support your
                  experience throughout this website, and for other purposes described
                  in our privacy policy.
                </p>
                <button className="btn btn-primary mt-32" type="button"  onClick={handlePay}>
                  Place Order
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Checkout;
