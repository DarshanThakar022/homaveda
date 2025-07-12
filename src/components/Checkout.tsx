import { motion } from "framer-motion";
import { X, Shield } from "lucide-react";
import { useState } from "react";

interface CartItem {
  id: number;
  name: string;
  price: string;
  image: string;
  quantity: number;
}

interface CheckoutProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onConfirmOrder: (paymentMethod: string, customerDetails: any) => void;
}

const Checkout = ({ isOpen, onClose, cartItems, onConfirmOrder }: CheckoutProps) => {
  const [customerDetails, setCustomerDetails] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    pincode: ""
  });

  if (!isOpen) return null;

  const total = cartItems.reduce((sum, item) => {
    const price = parseInt(item.price.slice(1));
    return sum + price * item.quantity;
  }, 0);

  const shipping = total >= 999 ? 0 : 99;
  const finalTotal = total + shipping;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setCustomerDetails((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleConfirmOrder = () => {
    if (!customerDetails.name || !customerDetails.phone || !customerDetails.address) {
      alert("Please fill in all required fields");
      return;
    }

    const orderMessage = `
Hello, I want to place an order. 📦

👤 Name: ${customerDetails.name}
📞 Phone: ${customerDetails.phone}
🏠 Address: ${customerDetails.address}, ${customerDetails.city} - ${customerDetails.pincode}

🛍️ Order:
${cartItems.map(item => `• ${item.name} x${item.quantity}`).join("\n")}

💰 Total Amount: ₹${finalTotal}

Please share your UPI QR to proceed with payment.
`;

    const encodedMessage = encodeURIComponent(orderMessage);
    const whatsappURL = `https://wa.me/918160333243?text=${encodedMessage}`;
    window.open(whatsappURL, "_blank");

    onClose(); // Optional: close checkout panel after redirect
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      <div className="absolute inset-0 bg-black bg-opacity-50" onClick={onClose}></div>

      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        className="absolute right-0 top-0 h-full w-full max-w-2xl bg-white shadow-xl overflow-y-auto"
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b bg-green-50">
            <h2 className="text-2xl font-bold text-gray-900">Checkout</h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-white rounded-full transition-colors"
            >
              <X size={20} />
            </button>
          </div>

          <div className="flex-1 p-6 space-y-8">
            {/* Order Summary */}
            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Order Summary</h3>
              <div className="space-y-3">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-12 h-12 object-cover rounded-lg"
                      />
                      <div>
                        <h4 className="font-medium text-gray-900">{item.name}</h4>
                        <p className="text-sm text-gray-600">Qty: {item.quantity}</p>
                      </div>
                    </div>
                    <p className="font-semibold text-green-600">
                      ₹{parseInt(item.price.slice(1)) * item.quantity}
                    </p>
                  </div>
                ))}
              </div>
              <div className="border-t mt-4 pt-4 space-y-2">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal:</span>
                  <span>₹{total}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Shipping:</span>
                  <span>{shipping === 0 ? "FREE" : `₹${shipping}`}</span>
                </div>
                <div className="flex justify-between text-lg font-bold text-gray-900">
                  <span>Total:</span>
                  <span>₹{finalTotal}</span>
                </div>
              </div>
            </div>

            {/* Customer Details */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Delivery Details</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name *"
                  value={customerDetails.name}
                  onChange={handleInputChange}
                  className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  required
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number *"
                  value={customerDetails.phone}
                  onChange={handleInputChange}
                  className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={customerDetails.email}
                  onChange={handleInputChange}
                  className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent md:col-span-2"
                />
                <textarea
                  name="address"
                  placeholder="Complete Address *"
                  value={customerDetails.address}
                  onChange={handleInputChange}
                  rows={3}
                  className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent md:col-span-2 resize-none"
                  required
                />
                <input
                  type="text"
                  name="city"
                  placeholder="City"
                  value={customerDetails.city}
                  onChange={handleInputChange}
                  className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
                <input
                  type="text"
                  name="pincode"
                  placeholder="PIN Code"
                  value={customerDetails.pincode}
                  onChange={handleInputChange}
                  className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Security Note */}
            <div className="bg-blue-50 p-4 rounded-xl flex items-start space-x-3">
              <Shield className="text-blue-600 mt-1" size={20} />
              <div>
                <h4 className="font-medium text-blue-900">Secure & Safe</h4>
                <p className="text-sm text-blue-700">
                  Your personal information is protected with end-to-end encryption.
                  For support, call +91 8160333243
                </p>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="border-t p-6 bg-gray-50">
            <button
              onClick={handleConfirmOrder}
              className="w-full bg-green-600 text-white py-4 rounded-full font-semibold text-lg hover:bg-green-700 transition-colors"
            >
              Confirm Order - ₹{finalTotal}
            </button>
            <p className="text-xs text-gray-500 text-center mt-2">
              By placing this order, you agree to our terms and conditions
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Checkout;
