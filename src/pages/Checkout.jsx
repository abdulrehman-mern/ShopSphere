import React, { useContext, useState } from 'react'
import { CartContext } from '../context/CartContext'
import { useNavigate } from 'react-router-dom'

const inputClass = "w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-800 placeholder:text-slate-400 outline-none transition focus:border-blue-600 focus:bg-white focus:ring-2 focus:ring-blue-600/20"

const labelClass = "mb-2 block text-sm font-semibold text-blue-950"

const Checkout = () => {

  const { cart, setCart } = useContext(CartContext)

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [tel, setTel] = useState('')
  const [address, setAddress] = useState('')
  const [city, setCity] = useState('')

  const subtotal = cart.reduce((total, item) => {
    return total + item.price * item.quantity
  }, 0)

  const shipping = cart.length > 0 ? 200 : 0

  const total = subtotal + shipping

  const navigate = useNavigate()

  const submitHandler = (e) => {
    e.preventDefault()

    const userDetails = {
      name,
      email,
      tel,
      address,
      city
    }

    const orderDetails = {
      userDetails,
      cart,
      subtotal,
      shipping,
      total
    }

    setCart([])
    navigate('/order-success', { state: orderDetails })
  }

  return (

    <div className="mx-auto max-w-7xl px-3 pb-12 pt-4 lg:px-8 lg:pb-20 lg:pt-6">

      <div className="rounded-[2.5rem] bg-slate-50 px-4 py-8 ring-1 ring-slate-200/70 sm:px-6 lg:rounded-[3rem] lg:px-10 lg:py-12">

        {/* Page Heading */}

        <div className="mb-8 lg:mb-10">

          <span className="mb-3 inline-block rounded-full bg-blue-100 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-blue-800">
            Almost There
          </span>

          <h1 className="font-display text-3xl font-extrabold tracking-tight text-blue-950 lg:text-5xl">
            Checkout
          </h1>

          <p className="mt-3 text-sm leading-relaxed text-slate-500 lg:text-base">
            Complete your details below to place your order.
          </p>

        </div>

        <form onSubmit={submitHandler} className="grid grid-cols-1 items-start gap-6 lg:grid-cols-5 lg:gap-8">

          {/* Customer Information */}

          <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:p-7 lg:col-span-3 lg:p-9">

            <div className="mb-7 border-b border-slate-100 pb-5">

              <h2 className="font-display text-xl font-bold text-blue-950 lg:text-2xl">
                Customer Information
              </h2>

              <p className="mt-2 text-sm text-slate-500">
                Please provide your details for order delivery.
              </p>

            </div>

            <div className="space-y-5">

              {/* Full Name */}

              <div>
                <label htmlFor="name" className={labelClass}>
                  Full Name
                </label>

                <input
                  type="text"
                  id="name"
                  value={name}
                  placeholder="Enter your full name"
                  onChange={(e) => setName(e.target.value)}
                  className={inputClass}
                  required
                />
              </div>

              {/* Email */}

              <div>
                <label htmlFor="email" className={labelClass}>
                  Email Address
                </label>

                <input
                  type="email"
                  id="email"
                  value={email}
                  placeholder="Enter your email address"
                  onChange={(e) => setEmail(e.target.value)}
                  className={inputClass}
                  required
                />
              </div>

              {/* Phone */}

              <div>
                <label htmlFor="tel" className={labelClass}>
                  Phone Number
                </label>

                <input
                  type="tel"
                  id="tel"
                  value={tel}
                  placeholder="Enter your phone number"
                  onChange={(e) => setTel(e.target.value)}
                  className={inputClass}
                  required
                />
              </div>

              {/* Address */}

              <div>
                <label htmlFor="address" className={labelClass}>
                  Delivery Address
                </label>

                <textarea
                  name="address"
                  id="address"
                  rows="4"
                  value={address}
                  placeholder="Enter your complete delivery address"
                  onChange={(e) => setAddress(e.target.value)}
                  className={`${inputClass} resize-none`}
                  required
                />
              </div>

              {/* City */}

              <div>
                <label htmlFor="city" className={labelClass}>
                  City
                </label>

                <input
                  type="text"
                  id="city"
                  value={city}
                  placeholder="Enter your city"
                  onChange={(e) => setCity(e.target.value)}
                  className={inputClass}
                  required
                />
              </div>

            </div>

          </div>

          {/* Order Summary */}

          <div className="h-fit space-y-5 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm lg:sticky lg:top-6 lg:col-span-2 lg:p-7">

            <div className="border-b border-slate-100 pb-4">

              <h2 className="font-display text-xl font-bold text-blue-950 lg:text-2xl">
                Order Summary
              </h2>

              <p className="mt-1 text-sm text-slate-500">
                Review your order before placing it.
              </p>

            </div>

            {/* Cart Products */}

            <div className="max-h-80 space-y-4 overflow-y-auto border-b border-slate-100 pb-5">

              {cart.map(({ id, image, title, price, rating, category, quantity }) => (

                <div
                  key={id}
                  className="flex items-center justify-between gap-3 rounded-2xl border border-slate-100 bg-slate-50 p-3"
                >

                  <div className="flex min-w-0 items-center gap-3">

                    <img
                      src={image}
                      alt={title}
                      className="h-16 w-16 shrink-0 rounded-xl bg-white object-contain p-2 sm:h-20 sm:w-20"
                    />

                    <div className="min-w-0 space-y-1">

                      {category && (
                        <span className="block text-xs font-semibold uppercase tracking-wider text-slate-400">
                          {category}
                        </span>
                      )}

                      <h3 className="line-clamp-2 text-sm font-bold text-blue-950">
                        {title}
                      </h3>

                      {rating && (
                        <span className="text-xs font-semibold text-amber-600">
                          ★ {typeof rating === 'object' ? rating.rate : rating}
                        </span>
                      )}

                      <p className="text-xs text-slate-500">
                        Quantity: {quantity}
                      </p>

                    </div>

                  </div>

                  <div className="shrink-0 text-right text-sm font-bold text-blue-950">
                    Rs. {(price * quantity).toLocaleString()}
                  </div>

                </div>

              ))}

            </div>

            {/* Price Calculation */}

            <div className="space-y-3 text-sm text-slate-600">

              <div className="flex justify-between">
                <span>Subtotal</span>

                <span className="font-semibold text-blue-950">
                  Rs. {subtotal.toLocaleString()}
                </span>
              </div>

              <div className="flex justify-between">
                <span>Estimated Shipping</span>

                <span className="font-semibold text-blue-950">
                  Rs. {shipping.toLocaleString()}
                </span>
              </div>

              <div className="flex justify-between border-t border-slate-100 pt-4 text-base font-extrabold text-blue-950">
                <span>Total</span>

                <span>
                  Rs. {total.toLocaleString()}
                </span>
              </div>

            </div>

            {/* Place Order */}

            <button
              type="submit"
              disabled={cart.length === 0}
              className="w-full cursor-pointer rounded-full bg-blue-950 px-5 py-4 font-semibold text-white transition duration-200 hover:bg-blue-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 active:scale-95 disabled:cursor-not-allowed disabled:opacity-50"
            >
              Place Order
            </button>

            <p className="text-center text-xs leading-relaxed text-slate-400">
              Thank you for shopping with ShopSphere!
            </p>

          </div>

        </form>

      </div>

    </div>
  )
}

export default Checkout