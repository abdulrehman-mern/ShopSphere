import React from 'react'
import { Link } from 'react-router-dom'
import { ShoppingBag, Camera, MessageCircle, ArrowUpRight } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-blue-950 text-white mt-16">

      <div className="max-w-7xl mx-auto px-6 md:px-10 py-14">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-2 mb-5">
              <ShoppingBag size={28} className="text-amber-400" />
              <span className="text-2xl font-bold font-display">
                Shop<span className="text-amber-400">Sphere</span>
              </span>
            </Link>

            <p className="text-slate-300 text-sm leading-7 max-w-xs">
              Discover quality products at great prices.
              Your shopping experience, made simple.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-5">Quick Links</h3>

            <div className="flex flex-col gap-3 text-slate-300 text-sm">
              <Link to="/" className="hover:text-amber-400 transition">Home</Link>
              <Link to="/products" className="hover:text-amber-400 transition">Products</Link>
              <Link to="/categories" className="hover:text-amber-400 transition">Categories</Link>
              <Link to="/contact" className="hover:text-amber-400 transition">Contact</Link>
            </div>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="text-lg font-semibold mb-5">Customer Service</h3>

            <div className="flex flex-col gap-3 text-slate-300 text-sm">
              <Link to="/cart" className="hover:text-amber-400 transition">Shopping Cart</Link>
              <Link to="/checkout" className="hover:text-amber-400 transition">Checkout</Link>
              <Link to="/contact" className="hover:text-amber-400 transition">Help & Support</Link>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-semibold mb-5">Connect With Us</h3>

            <p className="text-slate-300 text-sm mb-5">
              Have questions? Feel free to reach out.
            </p>

            <div className="flex gap-3">

              <a
                href="https://www.instagram.com/ahmed_dev.09/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-11 h-11 rounded-xl bg-white/10 flex items-center justify-center hover:bg-amber-400 hover:text-blue-950 transition"
              >
                <Camera size={21} />
              </a>

              <a
                href="https://wa.me/923374059609"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-11 h-11 rounded-xl bg-white/10 flex items-center justify-center hover:bg-amber-400 hover:text-blue-950 transition"
              >
                <MessageCircle size={21} />
              </a>

            </div>

            <a
              href="https://www.instagram.com/ahmed_dev.09/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-amber-400 mt-5 hover:text-amber-300 transition"
            >
              Follow us <ArrowUpRight size={16} />
            </a>
          </div>

        </div>

        {/* Bottom */}
        <div className="border-t border-white/15 mt-12 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-sm text-slate-400">

          <p>
            © {new Date().getFullYear()} ShopSphere. All rights reserved.
          </p>

          <p>
            Designed with care.
          </p>

        </div>

      </div>

    </footer>
  )
}

export default Footer