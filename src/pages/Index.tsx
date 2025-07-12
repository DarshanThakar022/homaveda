
import { useState } from "react";
import { motion } from "framer-motion";
import Hero from "../components/Hero";
import ProductShowcase from "../components/ProductShowcase";
import About from "../components/About";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import Cart from "../components/Cart";
import Checkout from "../components/Checkout";

interface CartItem {
  id: number;
  name: string;
  price: string;
  image: string;
  quantity: number;
}

const Index = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  const addToCart = (product: { id: number; name: string; price: string; image: string }) => {
    setCartItems(prev => {
      const existingItem = prev.find(item => item.id === product.id);
      if (existingItem) {
        return prev.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const updateQuantity = (id: number, quantity: number) => {
    setCartItems(prev =>
      prev.map(item =>
        item.id === id ? { ...item, quantity } : item
      )
    );
  };

  const removeFromCart = (id: number) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const handleCheckout = () => {
    setIsCartOpen(false);
    setIsCheckoutOpen(true);
  };

  const handleConfirmOrder = (paymentMethod: string, customerDetails: any) => {
    const orderSummary = {
      items: cartItems,
      total: cartItems.reduce((sum, item) => sum + (parseInt(item.price.slice(1)) * item.quantity), 0),
      paymentMethod,
      customerDetails,
      orderDate: new Date().toLocaleString()
    };

    // Create order confirmation message
    const orderMessage = `
🎉 ORDER CONFIRMED! 🎉

Order Details:
${cartItems.map(item => `• ${item.name} x${item.quantity} - ${item.price}`).join('\n')}

Total: ₹${orderSummary.total + (orderSummary.total >= 999 ? 0 : 99)}
Payment: ${paymentMethod === 'cod' ? 'Cash on Delivery' : paymentMethod === 'upi' ? 'UPI Payment' : 'Card Payment'}

Customer: ${customerDetails.name}
Phone: ${customerDetails.phone}
Address: ${customerDetails.address}

Your order will be delivered within 3-5 business days.
For any queries, call +91 8160333243

Thank you for choosing HOMAVEDA! 🌿
    `;

    alert(orderMessage);

    // Clear cart after successful order
    setCartItems([]);
    setIsCheckoutOpen(false);
  };

  const cartItemsCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-amber-50">
      <Navigation 
        cartItemsCount={cartItemsCount}
        onCartClick={() => setIsCartOpen(true)}
      />
      <Hero />
      <ProductShowcase onAddToCart={addToCart} />
      <About />
      <Contact />
      <Footer />
      <Cart
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={updateQuantity}
        onRemoveItem={removeFromCart}
        onCheckout={handleCheckout}
      />
      <Checkout
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        cartItems={cartItems}
        onConfirmOrder={handleConfirmOrder}
      />
    </div>
  );
};

export default Index;
