import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../context/CartContext'

const ProductCard = ({ id, image, title, price, rating, category, description }) => {

  const { cart, setCart } = useContext(CartContext)

  const addToCart = () => {
    const existingProduct = cart.find((item) => item.id === id)

    if (existingProduct) {
      setCart(cart.map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ))
    } else {
      setCart([...cart, {
        id,
        image,
        title,
        price,
        rating,
        category,
        description,
        quantity: 1
      }])
    }
  }

  return (
    <div className="group flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white p-3 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-950/10">

      <Link to={`/products/${id}`} className="flex-1 rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600">

        <img
          className="h-52 w-full rounded-2xl bg-slate-100 object-cover"
          src={image}
          alt={title}
          loading="lazy"
          decoding="async"
        />

        <div className="px-2 pb-2 pt-4">
          <h2 className="mb-3 line-clamp-2 font-display text-lg font-bold leading-snug text-blue-950">
            {title}
          </h2>

          <div className="mb-2 flex items-center justify-between">
            <p className="text-lg font-bold text-blue-950">
              Rs. {price.toLocaleString()}
            </p>

            <p className="rounded-full bg-amber-100 px-3 py-1 text-sm font-semibold text-amber-800">
              ★ {rating}
            </p>
          </div>
        </div>

      </Link>

      <div className="pt-2">
        <button
          type="button"
          onClick={addToCart}
          className="w-full rounded-full bg-blue-950 px-4 py-3 font-semibold text-white transition-colors duration-200 hover:bg-blue-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 active:scale-95 cursor-pointer"
        >
          Add to Cart
        </button>
      </div>

    </div>
  )
}

export default ProductCard