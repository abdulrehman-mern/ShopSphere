import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { useParams } from "react-router-dom";
import products from "../data/products";
import ProductCard from '../components/ProductCard';

const ProductDetails = () => {

  const { cart, setCart } = useContext(CartContext)

  const {id} = useParams();

  const details = products.find((e) => (
    e.id === Number(id)
  ))
  if(!details){
    return <h2>Product not found</h2>
  }

  const addToCart = () => {
    const existingProduct = cart.find((item) => item.id === details.id)
    if (existingProduct) {
      setCart(cart.map((item) =>
        item.id === details.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ))
    } else {
      setCart([...cart, {
        ...details,
        quantity: 1
      }])
    }
  }

  return (
    <div className="mx-auto max-w-7xl px-3 pb-12 pt-4 lg:px-8 lg:pb-20 lg:pt-6">
      <div className="rounded-[2.5rem] bg-slate-50 px-4 py-8 ring-1 ring-slate-200/70 sm:px-6 lg:rounded-[3rem] lg:px-10 lg:py-12">

        <div className="grid gap-8 md:grid-cols-2 md:gap-12">

          {/* Image */}
          <div className="flex items-center justify-center rounded-3xl border border-slate-200 bg-white p-6 shadow-sm lg:p-10">
            <img
              src={details.image}
              alt={details.title}
              className="h-72 w-full object-contain lg:h-96"
            />
          </div>

          {/* Info */}
          <div className="flex flex-col">

            <span className="w-fit rounded-full bg-blue-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-blue-700">
              {details.category}
            </span>

            <h1 className="mt-5 font-display text-3xl font-extrabold leading-tight tracking-tight text-blue-950 lg:text-4xl">
              {details.title}
            </h1>

            <div className="mt-3 inline-flex w-fit items-center rounded-full bg-amber-100 px-3 py-1 text-sm font-semibold text-amber-800">
              ★ {details.rating}
            </div>

            <p className="mt-6 font-display text-4xl font-extrabold tracking-tight text-blue-950">
              Rs. {details.price.toLocaleString()}
            </p>

            <p className="mt-5 leading-relaxed text-slate-600">
              {details.description}
            </p>

            <button
              type="button"
              onClick={addToCart}
              className="mt-8 w-full cursor-pointer rounded-full bg-blue-950 px-6 py-4 font-semibold text-white transition-colors duration-200 hover:bg-blue-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 active:scale-95"
            >
              Add to Cart
            </button>

          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetails