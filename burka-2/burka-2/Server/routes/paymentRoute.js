// const router = require("express").Router();
// const Razorpay = require("razorpay");
// const crypto = require("crypto");
// const paymentModel = require("../models/payment.modal");
// const axios = require("axios");

// const OrderModel = require("../models/payment.modal");



// // Create QR Code
// router.post("/orders", async (req, res) => {
//     // const { amount, address, email, id } = req.body;
//     console.log(req.body);
//     try {
        

//         const instance = new Razorpay({
//             key_id: process.env.KEY_ID,
//             key_secret: process.env.KEY_SECRET,
//         });

//         const options = {
//             amount: amount * 100, // amount in paise
//             currency: "INR",
//             receipt: crypto.randomBytes(10).toString("hex"),
//         };

//         instance.orders.create(options, async (error, order) => {
//             if (error) {
//                 console.error("Error creating order:", error);
//                 return res.status(500).json({ message: "Something went wrong!" });
//             }
//             res.status(200).json({ data: order });
//         });
//     } catch (error) {
//         console.error("Error in /orders:", error);
//         res.status(500).json({ message: "Internal Server Error!" });
//     }
// });

// // Verifying the payment
// router.post("/verify", async (req, res) => {
//     try {
//         const { razorpay_orderID, razorpay_payment_id, razorpay_signature } = req.body;

//         // Validate the request body
//         if (!razorpay_orderID || !razorpay_payment_id || !razorpay_signature) {
//             return res.status(400).json({ message: "Missing required fields!" });
//         }

//         const sign = razorpay_orderID + "|" + razorpay_payment_id;
//         const resultSign = crypto
//             .createHmac("sha256", process.env.KEY_SECRET)
//             .update(sign.toString())
//             .digest("hex");

//         if (razorpay_signature === resultSign) {
//             return res.status(200).json({ message: "Payment verified successfully" });
//         } else {
//             return res.status(400).json({ message: "Payment verification failed" });
//         }
//     } catch (error) {
//         console.error("Error in /verify:", error);
//         res.status(500).json({ message: "Internal Server Error!" });
//     }
// })

// module.exports = router;



const router = require("express").Router();
const Razorpay = require("razorpay");
const crypto = require("crypto");
// const paymentModel = require("../models/payment.modal");
const axios = require("axios");

// const OrderModel = require("../models/payment.modal");

// Create Razorpay Order
router.post("/orders", async (req, res) => {
    console.log("Request Body:", req.body);
    try {
        const { amount, productname } = req.body; // ✅ Destructure amount and productname

        // Optional: validate amount
        if (!amount || isNaN(amount)) {
            return res.status(400).json({ message: "Invalid or missing amount" });
        }

        const instance = new Razorpay({
            key_id: process.env.KEY_ID,
            key_secret: process.env.KEY_SECRET,
        });

        const options = {
            amount: amount * 100, // convert to paise
            currency: "INR",
            receipt: crypto.randomBytes(10).toString("hex"),
        };

        instance.orders.create(options, async (error, order) => {
            if (error) {
                console.error("Error creating order:", error);
                return res.status(500).json({ message: "Something went wrong!" });
            }

            // Optional: save to database (example only)
            // await OrderModel.create({ amount, productname, orderId: order.id });

            res.status(200).json({ data: order });
        });
    } catch (error) {
        console.error("Error in /orders:", error);
        res.status(500).json({ message: "Internal Server Error!" });
    }
});

// Verifying the payment
router.post("/verify", async (req, res) => {
    try {
        const { razorpay_orderID, razorpay_payment_id, razorpay_signature } = req.body;
        console.log(req.body,'asdsaaaaaaaaaaaaaaaaaaa')
        // Validate the request body
        if ( !razorpay_payment_id ) {
            return res.status(400).json({ message: "Missing required fields!" });
        }

        const sign = razorpay_orderID + "|" + razorpay_payment_id;
        const resultSign = crypto
            .createHmac("sha256", process.env.KEY_SECRET)
            .update(sign.toString())
            .digest("hex");

        if (razorpay_signature === resultSign) {
            return res.status(200).json({ message: "Payment verified successfully" });
        } else {
            return res.status(400).json({ message: "Payment verification failed" });
        }
    } catch (error) {
        console.error("Error in /verify:", error);
        res.status(500).json({ message: "Internal Server Error!" });
    }
});

module.exports = router;
