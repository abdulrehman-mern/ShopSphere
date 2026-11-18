import React, { useContext, useState } from 'react'
import products from '../data/products'
import ProductCard from '../components/ProductCard'
import { SearchContext } from '../context/SearchContext'

const Categories = () => {

  const { search } = useContext(SearchContext)
  const [selectedCategory, setSelectedCategory] = useState('All')

  const categories = [
    { name: 'All', label: 'All Products', icon: '✦' },
    { name: 'Electronics', label: 'Electronics', icon: '⌘' },
    { name: 'Accessories', label: 'Accessories', icon: '✧' },
    { name: 'Clothing', label: 'Clothing', icon: '◇' },
    { name: 'Footwear', label: 'Footwear', icon: '◈' },
    { name: 'Bags', label: 'Bags', icon: '▣' }
  ]

  const filteredProducts = products.filter((elem) => (
    elem.title.toLowerCase().includes(search.toLowerCase()) ||
    elem.category.toLowerCase().includes(search.toLowerCase())
  ) && (
    selectedCategory === 'All' || elem.category === selectedCategory
  ))

  return (
    <div className="mx-auto max-w-7xl px-3 pb-12 pt-4 lg:px-8 lg:pb-20 lg:pt-6">

      <div className="rounded-[2.5rem] bg-slate-50 px-4 py-8 ring-1 ring-slate-200/70 sm:px-6 lg:rounded-[3rem] lg:px-10 lg:py-12">

        {/* Header */}
        <div className="mb-10">
          <span className="mb-3 inline-block rounded-full bg-blue-100 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-blue-800">
            Find Your Favorites
          </span>

          <h1 className="font-display text-3xl font-extrabold tracking-tight text-blue-950 lg:text-5xl">
            Shop by Category
          </h1>

          <p className="mt-3 max-w-xl text-sm leading-relaxed text-slate-500 lg:text-base">
            Explore our collections and discover products that match your style.
          </p>
        </div>

        {/* Category Selection */}
        <div className="mb-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">

          {categories.map((category) => (
            <button
              key={category.name}
              type="button"
              onClick={() => setSelectedCategory(category.name)}
              className={`flex cursor-pointer flex-col items-center justify-center gap-3 rounded-2xl border p-5 transition-all duration-200 hover:-translate-y-1 ${
                selectedCategory === category.name
                  ? 'border-blue-950 bg-blue-950 text-white shadow-lg shadow-blue-950/15'
                  : 'border-slate-200 bg-white text-blue-950 hover:border-blue-300 hover:shadow-md'
              }`}
            >
              <span className="text-3xl">
                {category.icon}
              </span>

              <span className="text-sm font-bold text-center">
                {category.label}
              </span>
            </button>
          ))}

        </div>

        {/* Products Heading */}
        <div className="mb-6 flex flex-wrap items-center justify-between gap-3 border-b border-slate-200 pb-4">

          <div>
            <h2 className="font-display text-xl font-bold text-blue-950 lg:text-2xl">
              {selectedCategory === 'All' ? 'All Collections' : selectedCategory}
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              Browse our available products
            </p>
          </div>

          <span className="rounded-full bg-amber-100 px-4 py-1.5 text-sm font-bold text-amber-800">
            {filteredProducts.length} Products
          </span>

        </div>

        {/* Product Grid */}
        {filteredProducts.length > 0 ? (

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">

            {filteredProducts.map((elem) => (
              <ProductCard key={elem.id} {...elem} />
            ))}

          </div>

        ) : (

          <div className="rounded-3xl border border-slate-200 bg-white px-6 py-16 text-center shadow-sm">

            <h2 className="mb-2 font-display text-2xl font-bold text-blue-950">
              No Products Found
            </h2>

            <p className="mb-6 text-slate-500">
              Try selecting another category or changing your search.
            </p>

            <button
              onClick={() => setSelectedCategory('All')}
              className="cursor-pointer rounded-full bg-blue-950 px-6 py-3 font-semibold text-white transition hover:bg-blue-900"
            >
              View All Products
            </button>

          </div>

        )}

      </div>
    </div>
  )
}

export default Categories