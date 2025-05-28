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

const OrderModel = require("../models/PaymentModule");
const Payment = require("../models/payment.modal");
const mongoose = require("mongoose");

// Create Razorpay Order
router.post("/orders", async (req, res) => {
    console.log("Request Body:", req.body);
    try {
        const { amount } = req.body; // ✅ Destructure amount and productname

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


router.post("/verify", async (req, res) => {
    try {
        const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;

        // Validate the request body
        if (!razorpay_order_id || !razorpay_payment_id || !razorpay_signature) {
            return res.status(400).json({ 
                message: "Missing required fields!",
                error: "Required fields: razorpay_order_id, razorpay_payment_id, razorpay_signature" 
            });
        }

        const generated_signature = crypto
            .createHmac("sha256", process.env.KEY_SECRET)
            .update(`${razorpay_order_id}|${razorpay_payment_id}`)
            .digest("hex");

        if (generated_signature === razorpay_signature) {
            // Update your database with successful payment
            await OrderModel.findOneAndUpdate(
                { orderId: razorpay_order_id },
                { 
                    status: 'completed',
                    paymentId: razorpay_payment_id,
                    signature: razorpay_signature
                }
            );
            
            return res.status(200).json({ 
                success: true,
                message: "Payment verified successfully",
                orderId: razorpay_order_id,
                paymentId: razorpay_payment_id
            });
        } else {
            return res.status(400).json({ 
                success: false,
                message: "Payment verification failed",
                error: "Invalid signature" 
            });
        }
    } catch (error) {
        console.error("Error in /verify:", error);
        res.status(500).json({ 
            success: false,
            message: "Internal Server Error!",
            error: error.message 
        });
    }
});


// Fetch Payments by User ID
router.get("/payments/:userId", async (req, res) => {
  try {
    const { userId } = req.params;

    // Validate userId
    if (!userId || !mongoose.Types.ObjectId.isValid(userId)) {
      return res.status(400).json({ message: "Invalid user ID" });
    }
    const payments2 = await Payment.find({ userId })
    console.log(payments2)

    const payments = await Payment.find({ userId })
      .select("productname orderId amount paymentMode status receivingDate remark")
      .sort({ receivingDate: -1 }); // Sort by date, newest first

    if (!payments || payments.length === 0) {
      return res.status(404).json({ message: "No payments found for this user" });
    }

    res.status(200).json({ data: payments });
  } catch (error) {
    console.error("Error in /payments/:userId:", error);
    res.status(500).json({ message: "Internal Server Error!" });
  }
});

module.exports = router;
