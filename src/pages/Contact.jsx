import React from 'react'
import { Camera, MessageCircle, ArrowUpRight } from 'lucide-react'

const Contact = () => {

  return (
    <div className="mx-auto max-w-7xl px-3 pb-12 pt-4 lg:px-8 lg:pb-20 lg:pt-6">

      <div className="rounded-[2.5rem] bg-slate-50 px-4 py-12 ring-1 ring-slate-200/70 sm:px-6 lg:rounded-[3rem] lg:px-10 lg:py-16">

        {/* Heading */}
        <div className="mx-auto mb-12 max-w-2xl text-center">

          <span className="mb-4 inline-block rounded-full bg-blue-100 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-blue-800">
            Get In Touch
          </span>

          <h1 className="font-display text-3xl font-extrabold tracking-tight text-blue-950 lg:text-5xl">
            Let's Connect
          </h1>

          <p className="mt-4 text-sm leading-relaxed text-slate-500 lg:text-base">
            Have questions or need assistance? Feel free to reach out to us.
            We're always happy to hear from you!
          </p>

        </div>

        {/* Contact Cards */}
        <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-2">

          {/* Instagram */}
          <div className="group rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-950/10 lg:p-10">

            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-pink-50 text-pink-600 transition group-hover:scale-110">
              <Camera size={32} />
            </div>

            <h2 className="font-display text-2xl font-bold text-blue-950">
              Instagram
            </h2>

            <p className="mt-3 text-sm leading-relaxed text-slate-500">
              Follow us on Instagram to stay updated with our latest products and collections.
            </p>

            <p className="mt-5 font-semibold text-blue-950">
              @ahmed_dev.09
            </p>

            <a
              href="https://www.instagram.com/ahmed_dev.09/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 flex w-full items-center justify-center gap-2 rounded-full bg-blue-950 px-5 py-3.5 font-semibold text-white transition hover:bg-blue-900"
            >
              Visit Instagram
              <ArrowUpRight size={18} />
            </a>

          </div>

          {/* WhatsApp */}
          <div className="group rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-950/10 lg:p-10">

            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-green-50 text-green-600 transition group-hover:scale-110">
              <MessageCircle size={32} />
            </div>

            <h2 className="font-display text-2xl font-bold text-blue-950">
              WhatsApp
            </h2>

            <p className="mt-3 text-sm leading-relaxed text-slate-500">
              Contact us directly on WhatsApp for product inquiries and assistance.
            </p>

            <p className="mt-5 font-semibold text-blue-950">
              +92 337 4059609
            </p>

            <a
              href="https://wa.me/923374059609"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 flex w-full items-center justify-center gap-2 rounded-full bg-blue-950 px-5 py-3.5 font-semibold text-white transition hover:bg-blue-900"
            >
              Chat on WhatsApp
              <ArrowUpRight size={18} />
            </a>

          </div>

        </div>

        {/* Bottom Message */}
        <div className="mt-10 text-center">
          <p className="text-sm font-medium text-slate-500">
            Thank you for choosing ShopSphere!
          </p>
        </div>

      </div>

    </div>
  )
}

export default Contact