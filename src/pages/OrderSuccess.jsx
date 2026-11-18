import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { CheckCircle, ShoppingBag, Package, MapPin, Mail, Phone, User } from 'lucide-react'

const OrderSuccess = () => {

  const navigate = useNavigate()
  const location = useLocation()
  const orderDetails = location.state

  const continueShopping = () => {
    navigate('/')
  }

  if (!orderDetails) {
    return (
      <div className="mx-auto max-w-7xl px-3 py-16 lg:px-8">
        <div className="rounded-3xl border border-slate-200 bg-white px-6 py-16 text-center shadow-sm">
          <h1 className="mb-3 font-display text-2xl font-bold text-blue-950">
            No Order Found
          </h1>
          <p className="mb-6 text-slate-500">
            There are no order details to display.
          </p>
          <button
            onClick={continueShopping}
            className="cursor-pointer rounded-full bg-blue-950 px-7 py-3 font-semibold text-white transition hover:bg-blue-900"
          >
            Continue Shopping
          </button>
        </div>
      </div>
    )
  }

  const { userDetails, cart, subtotal, shipping, total } = orderDetails

  return (

    <div className="mx-auto max-w-7xl px-3 pb-12 pt-6 lg:px-8 lg:pb-20 lg:pt-10">

      <div className="mx-auto max-w-3xl space-y-6">

        {/* Success Message */}

        <div className="rounded-[2.5rem] bg-blue-950 px-6 py-12 text-center shadow-xl shadow-blue-950/10 sm:px-10 lg:py-16">

          <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-green-400/15">
            <CheckCircle size={48} className="text-green-400" strokeWidth={1.7} />
          </div>

          <span className="mb-4 inline-block rounded-full bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-blue-200">
            Order Confirmed
          </span>

          <h1 className="font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Order Placed Successfully!
          </h1>

          <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-blue-200 sm:text-base">
            Thank you for shopping with ShopSphere. Your order has been placed successfully!
          </p>

          <div className="mt-8 inline-flex items-center gap-2 rounded-full bg-amber-400 px-6 py-3 text-sm font-bold text-blue-950">
            <ShoppingBag size={18} />
            Thank You for Shopping!
          </div>

        </div>

        {/* Customer Details */}

        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">

          <div className="mb-7 flex items-center gap-3 border-b border-slate-100 pb-5">

            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-950">
              <User size={24} />
            </div>

            <div>
              <h2 className="font-display text-xl font-bold text-blue-950">
                Customer Details
              </h2>
              <p className="text-sm text-slate-500">
                Your delivery information
              </p>
            </div>

          </div>

          <div className="grid gap-5 sm:grid-cols-2">

            <div>
              <p className="mb-1 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-400">
                <User size={14} /> Customer Name
              </p>
              <p className="font-semibold text-blue-950">
                {userDetails.name}
              </p>
            </div>

            <div>
              <p className="mb-1 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-400">
                <Mail size={14} /> Email Address
              </p>
              <p className="break-all font-semibold text-blue-950">
                {userDetails.email}
              </p>
            </div>

            <div>
              <p className="mb-1 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-400">
                <Phone size={14} /> Phone Number
              </p>
              <p className="font-semibold text-blue-950">
                {userDetails.tel}
              </p>
            </div>

            <div>
              <p className="mb-1 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-400">
                <MapPin size={14} /> City
              </p>
              <p className="font-semibold text-blue-950">
                {userDetails.city}
              </p>
            </div>

            <div className="sm:col-span-2">
              <p className="mb-1 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-400">
                <MapPin size={14} /> Delivery Address
              </p>
              <p className="font-semibold leading-relaxed text-blue-950">
                {userDetails.address}
              </p>
            </div>

          </div>

        </div>

        {/* Order Summary */}

        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">

          <div className="mb-6 flex items-center gap-3 border-b border-slate-100 pb-5">

            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-950">
              <Package size={24} />
            </div>

            <div>
              <h2 className="font-display text-xl font-bold text-blue-950">
                Order Details
              </h2>
              <p className="text-sm text-slate-500">
                Your purchased products
              </p>
            </div>

          </div>

          <div className="space-y-4">

            {cart.map((item) => (

              <div
                key={item.id}
                className="flex items-center justify-between gap-4 rounded-2xl border border-slate-100 bg-slate-50 p-3 sm:p-4"
              >

                <div className="flex min-w-0 items-center gap-3">

                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-16 w-16 shrink-0 rounded-xl bg-white object-contain p-2"
                  />

                  <div className="min-w-0">
                    <h3 className="line-clamp-2 text-sm font-bold text-blue-950">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-xs text-slate-500">
                      Quantity: {item.quantity}
                    </p>
                  </div>

                </div>

                <p className="shrink-0 text-sm font-bold text-blue-950">
                  Rs. {(item.price * item.quantity).toLocaleString()}
                </p>

              </div>

            ))}

          </div>

          {/* Price Breakdown */}

          <div className="mt-6 space-y-3 border-t border-slate-100 pt-5 text-sm text-slate-600">

            <div className="flex justify-between">
              <span>Subtotal</span>
              <span className="font-semibold text-blue-950">
                Rs. {subtotal.toLocaleString()}
              </span>
            </div>

            <div className="flex justify-between">
              <span>Shipping</span>
              <span className="font-semibold text-blue-950">
                Rs. {shipping.toLocaleString()}
              </span>
            </div>

          </div>

          {/* Total */}

          <div className="mt-5 flex items-center justify-between rounded-2xl bg-blue-950 p-5">

            <span className="font-semibold text-white">
              Order Total
            </span>

            <span className="font-display text-xl font-extrabold text-amber-400">
              Rs. {total.toLocaleString()}
            </span>

          </div>

        </div>

        {/* Continue Shopping */}

        <button
          onClick={continueShopping}
          className="flex w-full cursor-pointer items-center justify-center gap-3 rounded-full bg-blue-950 px-6 py-4 font-bold text-white shadow-lg shadow-blue-950/10 transition duration-200 hover:bg-blue-900 active:scale-95"
        >
          <ShoppingBag size={20} />
          Continue Shopping
        </button>

        <p className="pb-4 text-center text-sm text-slate-400">
          Thank you for choosing ShopSphere!
        </p>

      </div>

    </div>
  )
}

export default OrderSuccess