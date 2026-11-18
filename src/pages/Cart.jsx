import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { useNavigate } from 'react-router-dom'

const Cart = () => {

  const { cart, setCart } = useContext(CartContext)

  const navigate = useNavigate();

  const continueShopping = () => {
    navigate('/products')
  }

  const finalPoint = () => {
    navigate('/checkout')
  }

  const increaseQuantity = (id) => {
    setCart((prevCart) => {
      return prevCart.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            quantity: item.quantity + 1
          }
        }
        return item
      })
    })
  }

  const decreaseQuantity = (id) => {
    setCart((prevCart) => {
      return prevCart.map((item) => {
        if (item.id === id && item.quantity > 1) {
          return {
            ...item,
            quantity: item.quantity - 1
          }
        }
        return item
      })
    })
  }

  const removeProduct = (id) => {
    setCart((prevCart) => {
      return prevCart.filter((item) => item.id !== id)
    })
  }

  const subtotal = cart.reduce((total, item) => {
    return total + item.price * item.quantity
  }, 0)

  const shipping = cart.length > 0 ? 200 : 0

  const total = subtotal + shipping

  return (
    <div className="mx-auto max-w-7xl px-3 pb-12 pt-4 lg:px-8 lg:pb-20 lg:pt-6">

      <div className="rounded-[2.5rem] bg-slate-50 px-4 py-8 ring-1 ring-slate-200/70 sm:px-6 lg:rounded-[3rem] lg:px-10 lg:py-12">

        <h1 className="mb-6 px-1 font-display text-3xl font-extrabold tracking-tight text-blue-950 lg:mb-10 lg:text-5xl">
          Shopping Cart
        </h1>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 lg:gap-8">

          <div className="space-y-4 lg:col-span-2">

            {cart.length === 0 ? (
              <div className="rounded-3xl border border-slate-200 bg-white px-6 py-14 text-center shadow-sm lg:py-20">
                <h2 className="mb-2 font-display text-2xl font-bold text-blue-950">
                  Your cart is empty
                </h2>
                <p className="mx-auto mb-8 max-w-md leading-relaxed text-slate-500">
                  Looks like you haven't added anything to your cart yet. Explore our products and find something you love!
                </p>
                <div>
                  <button onClick={continueShopping}
                    className="mx-auto mt-4 w-full max-w-xs cursor-pointer rounded-full bg-blue-950 px-6 py-3 font-semibold text-white transition-colors duration-200 hover:bg-blue-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 active:scale-95"
                  >
                    Continue Shopping
                  </button>
                </div>
              </div>
            ) : (

              cart.map(({ id, image, title, price, rating, category, description, quantity }) => (

                <div
                  key={id}
                  className="flex flex-col items-center justify-between gap-4 rounded-3xl border border-slate-200 bg-white p-4 shadow-sm transition-shadow hover:shadow-lg hover:shadow-blue-950/5 sm:flex-row"
                >

                  <div className="flex w-full min-w-0 items-center space-x-4 sm:w-auto sm:flex-1">

                    <img
                      src={image}
                      alt={title}
                      className="h-20 w-20 shrink-0 rounded-2xl bg-slate-100 object-contain p-2 sm:h-24 sm:w-24"
                    />

                    <div className="min-w-0 space-y-1">

                      {category && (
                        <span className="block text-xs font-semibold uppercase tracking-wider text-slate-400">
                          {category}
                        </span>
                      )}

                      <h1 className="line-clamp-1 font-display text-base font-bold text-blue-950 sm:text-lg">
                        {title}
                      </h1>

                      {rating && (
                        <div className="inline-flex items-center rounded-full bg-amber-100 px-2.5 py-0.5 text-xs font-semibold text-amber-800">
                          ★ {typeof rating === 'object' ? rating.rate : rating}
                        </div>
                      )}

                      {description && (
                        <p className="line-clamp-1 max-w-sm text-xs text-slate-500">
                          {description}
                        </p>
                      )}

                    </div>
                  </div>

                  <div className="flex w-full items-center justify-between border-t border-slate-100 pt-3 sm:w-auto sm:shrink-0 sm:space-x-6 sm:border-t-0 sm:pt-0">

                    <div className="flex shrink-0 items-center overflow-hidden rounded-full border border-slate-200 bg-slate-50">

                      <button
                        onClick={() => decreaseQuantity(id)}
                        disabled={quantity <= 1}
                        className="h-10 w-10 cursor-pointer text-center font-bold text-blue-950 transition-colors hover:bg-blue-50 disabled:cursor-not-allowed disabled:opacity-40"
                      >
                        -
                      </button>

                      <span className="min-w-8 text-center text-sm font-semibold text-blue-950">
                        {quantity}
                      </span>

                      <button
                        onClick={() => increaseQuantity(id)}
                        className="h-10 w-10 cursor-pointer text-center font-bold text-blue-950 transition-colors hover:bg-blue-50"
                      >
                        +
                      </button>

                    </div>

                    <div className="whitespace-nowrap text-right">
                      <p className="text-lg font-bold text-blue-950">
                        Rs. {(price * quantity).toLocaleString()}
                      </p>
                    </div>

                    <button
                      onClick={() => removeProduct(id)}
                      className="shrink-0 cursor-pointer rounded-full px-3 py-1.5 text-sm font-semibold text-red-600 transition-colors hover:bg-red-50"
                    >
                      Remove
                    </button>

                  </div>
                </div>

              ))

            )}

          </div>

          <div className="h-fit space-y-4 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm lg:sticky lg:top-6 lg:p-8">

            <h2 className="border-b border-slate-100 pb-4 font-display text-xl font-bold text-blue-950">
              Order Summary
            </h2>

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

              <div className="flex justify-between border-t border-slate-100 pt-4 text-base font-bold text-blue-950">
                <span>Total</span>
                <span>Rs. {total.toLocaleString()}</span>
              </div>

            </div>

            <button
              onClick={() => (
                finalPoint()
              )}
              disabled={cart.length === 0}
              className="w-full cursor-pointer rounded-full bg-blue-950 py-3.5 font-semibold text-white transition-colors duration-200 hover:bg-blue-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 active:scale-95 disabled:cursor-not-allowed disabled:opacity-50"
            >
              Proceed to Checkout
            </button>

          </div>

        </div>
      </div>
    </div>
  )
}

export default Cart