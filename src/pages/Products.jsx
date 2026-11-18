import React, { useContext, useState } from 'react'
import ProductCard from '../components/ProductCard'
import products from '../data/products'
import { SearchContext } from '../context/SearchContext'

const Products = () => {

  const { search } = useContext(SearchContext)
  const [selectedCategory, setSelectedCategory] = useState('All')

  const categories = ['All', ...new Set(products.map((elem) => elem.category))]

  const filteredProducts = products.filter((elem) => (
    elem.title.toLowerCase().includes(search.toLowerCase()) ||
    elem.category.toLowerCase().includes(search.toLowerCase())
  ) && (
    selectedCategory === 'All' || elem.category === selectedCategory
  ))

  return (
    <div className="mx-auto max-w-7xl px-3 pb-12 pt-4 lg:px-8 lg:pb-20 lg:pt-6">

      <div className="rounded-[2.5rem] bg-slate-50 px-4 py-8 ring-1 ring-slate-200/70 sm:px-6 lg:rounded-[3rem] lg:px-10 lg:py-12">

        {/* Heading */}
        <div className="mb-8 lg:mb-10">
          <span className="mb-3 inline-block rounded-full bg-blue-100 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-blue-800">
            ShopSphere Collection
          </span>

          <h1 className="font-display text-3xl font-extrabold tracking-tight text-blue-950 lg:text-5xl">
            Explore Products
          </h1>

          <p className="mt-3 max-w-xl text-sm leading-relaxed text-slate-500 lg:text-base">
            Discover our collection and find the perfect products for you.
          </p>
        </div>

        {/* Categories */}
        <div className="mb-8">
          <h2 className="mb-4 text-sm font-bold uppercase tracking-wider text-slate-500">
            Browse Categories
          </h2>

          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setSelectedCategory(category)}
                className={`cursor-pointer rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-200 ${
                  selectedCategory === category
                    ? 'bg-blue-950 text-white shadow-md shadow-blue-950/20'
                    : 'border border-slate-200 bg-white text-slate-600 hover:border-blue-200 hover:bg-blue-50 hover:text-blue-950'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Products Count */}
        <div className="mb-5 flex items-center justify-between border-b border-slate-200 pb-4">
          <h2 className="font-display text-xl font-bold text-blue-950 lg:text-2xl">
            All Products
          </h2>

          <span className="rounded-full bg-amber-100 px-4 py-1.5 text-xs font-bold text-amber-800 sm:text-sm">
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
              Try searching for something else or explore another category.
            </p>

            <button
              onClick={() => {
                setSelectedCategory('All')
              }}
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

export default Products