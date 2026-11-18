import ProductCard from "../components/ProductCard";
import products from "../data/products";

const Home = () => {

return ( 
  <div className="mx-auto max-w-7xl space-y-6 px-3 pb-12 pt-4 lg:space-y-8 lg:px-8 lg:pb-20 lg:pt-6">

    <div className="relative overflow-hidden rounded-[2.5rem] bg-blue-950 px-7 py-16 sm:px-12 lg:rounded-[3rem] lg:px-20 lg:py-28">
      <div className="pointer-events-none absolute -right-20 -top-24 h-80 w-80 rounded-full bg-blue-800/60 lg:-right-10 lg:-top-32 lg:h-30rem lg:w-30rem" />
      <div className="pointer-events-none absolute -bottom-28 right-28 hidden h-64 w-64 rounded-full bg-blue-900 lg:block" />
      <div className="pointer-events-none absolute bottom-10 right-72 hidden h-20 w-20 rounded-full bg-blue-700/70 lg:block" />
      <div className="pointer-events-none absolute right-10 top-12 h-12 w-12 rounded-full bg-amber-400 lg:right-48 lg:top-20 lg:h-20 lg:w-20" />
      <div className="pointer-events-none absolute -left-10 bottom-0 h-32 w-32 rounded-full bg-blue-900/70 lg:hidden" />
      <div className="relative max-w-2xl">
        <h1 className="mb-5 font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-7xl">
          Welcome to ShopSphere 
        </h1>
        <p className="text-base text-blue-100 lg:text-xl">
          Discover products you'll love.
        </p>
      </div>
    </div>

    <div className="rounded-[2.5rem] bg-slate-50 px-4 py-8 ring-1 ring-slate-200/70 lg:rounded-[3rem] lg:px-10 lg:py-14">
      <h2 className="px-1 font-display text-2xl font-bold tracking-tight text-blue-950 lg:text-4xl">
        Our Products
      </h2>
      <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:mt-10 lg:grid-cols-4 lg:gap-6">
        {products.map((elem) => (
          <ProductCard key={elem.id} {...elem} />
        ))}
      </div>
    </div>

  </div>
);
};

export default Home;