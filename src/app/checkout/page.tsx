// "use client";

// import { useState } from "react";
// import { useCart } from "@/context/CartContext";
// import { useRouter } from "next/navigation";

// export default function CheckoutPage() {
//   const { cart } = useCart();
//   const router = useRouter();

//   const [shippingInfo, setShippingInfo] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     address: "",
//     city: "",
//   });
//   const [paymentMethod, setPaymentMethod] = useState("debit-card");
//   const [loading, setLoading] = useState(false);

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setShippingInfo({ ...shippingInfo, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     if (cart.length === 0) {
//       alert("Your cart is empty");
//       return;
//     }

//     setLoading(true);

//     try {
//       const res = await fetch("/api/checkout", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ cart, shippingInfo, paymentMethod }),
//       });

//       const data = await res.json();
//       if (data.checkoutUrl) {
//         window.location.href = data.checkoutUrl; // Redirect to Wix Checkout
//       } else {
//         alert("Error creating checkout");
//       }
//     } catch (err) {
//       console.error(err);
//       alert("Something went wrong");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="max-w-2xl mx-auto p-6 text-white">
//       <h1 className="text-2xl font-bold mb-6">Checkout</h1>

//       <form onSubmit={handleSubmit} className="space-y-4">
//         {/* Shipping Info */}
//         <div className="grid grid-cols-2 gap-4">
//           <input
//             type="text"
//             name="firstName"
//             placeholder="First Name"
//             value={shippingInfo.firstName}
//             onChange={handleChange}
//             required
//             className="p-3 rounded bg-[#0C111E] border border-[#3D4254]"
//           />
//           <input
//             type="text"
//             name="lastName"
//             placeholder="Last Name"
//             value={shippingInfo.lastName}
//             onChange={handleChange}
//             required
//             className="p-3 rounded bg-[#0C111E] border border-[#3D4254]"
//           />
//         </div>

//         <input
//           type="email"
//           name="email"
//           placeholder="Email"
//           value={shippingInfo.email}
//           onChange={handleChange}
//           required
//           className="w-full p-3 rounded bg-[#0C111E] border border-[#3D4254]"
//         />

//         <input
//           type="text"
//           name="address"
//           placeholder="Address"
//           value={shippingInfo.address}
//           onChange={handleChange}
//           required
//           className="w-full p-3 rounded bg-[#0C111E] border border-[#3D4254]"
//         />

//         <input
//           type="text"
//           name="city"
//           placeholder="City"
//           value={shippingInfo.city}
//           onChange={handleChange}
//           required
//           className="w-full p-3 rounded bg-[#0C111E] border border-[#3D4254]"
//         />

//         {/* Payment Method */}
//         <div className="mt-6">
//           <h2 className="text-lg font-semibold mb-2">Payment Method</h2>
//           {["debit-card", "cash", "transfer"].map((method) => (
//             <label
//               key={method}
//               className={`flex items-center gap-3 p-3 rounded border mb-2 cursor-pointer ${
//                 paymentMethod === method
//                   ? "border-[#1CC8F8] bg-[#0C111E]"
//                   : "border-[#3D4254] bg-[#0C111E]"
//               }`}
//             >
//               <input
//                 type="radio"
//                 name="payment"
//                 value={method}
//                 checked={paymentMethod === method}
//                 onChange={() => setPaymentMethod(method)}
//               />
//               <span className="capitalize">{method.replace("-", " ")}</span>
//             </label>
//           ))}
//         </div>

//         {/* Submit */}
//         <button
//           type="submit"
//           disabled={loading}
//           className="w-full mt-6 bg-[#1CC8F8] text-black font-semibold py-3 rounded hover:bg-[#3AD3FA] transition"
//         >
//           {loading ? "Processing..." : "Proceed to Payment"}
//         </button>
//       </form>
//     </div>
//   );
// }
