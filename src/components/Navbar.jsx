import { ShoppingCart, Menu } from "lucide-react";
import NavComponents from './NavComponents';
import { useContext, useState } from "react";
import { SearchContext } from "../context/SearchContext";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

const iconButton =
  "relative inline-flex h-11 w-11 items-center justify-center rounded-full text-blue-950 " +
  "transition-colors duration-200 hover:bg-blue-50 cursor-pointer " +
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2";

const Navbar = () => {

  const {search, setSearch} = useContext(SearchContext)
  const [showSearch, setShowSearch] = useState('false')
  const {cart, setCart} = useContext(CartContext)
  const navigate = useNavigate();
  const openCart = () => {
    navigate('/cart')
  }

  return (
    <div className="px-3 pt-3 lg:px-8 lg:pt-5">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-2rem border border-slate-200 bg-white shadow-lg shadow-blue-950/5">
        <div className="flex items-center justify-between px-5 py-3 lg:px-8 lg:py-4">
          <h1 className='font-display text-2xl font-extrabold tracking-tight text-blue-950 lg:text-3xl'>ShopSphere</h1>
          <div className='flex items-center gap-1 lg:gap-2'>
            <div className="relative inline-flex items-center">
              <button className={iconButton} onClick={openCart} type="button" aria-label="Cart">
                <ShoppingCart size={22} strokeWidth={1.75} />
                {cart?.length > 0 && (
                  <div className="absolute -right-0.5 -top-0.5 flex h-5 min-w-5 items-center justify-center rounded-full bg-amber-400 px-1 text-xs font-bold text-blue-950 ring-2 ring-white">
                    {cart.length}
                  </div>
                )}
              </button>
            </div>
            <button className={iconButton} type="button" aria-label="Menu">
              <Menu size={22} strokeWidth={1.75} />
            </button>
          </div>
        </div>

        {showSearch && (
          <div className="px-4 pb-4 lg:px-8">
            <input type="text" placeholder="Search Products..." value={search} onChange={(e) => {
              setSearch(e.target.value)
            }}
              className="w-full rounded-full border border-slate-200 bg-slate-50 px-6 py-3 text-slate-800 placeholder:text-slate-400 transition focus:border-blue-600 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-600/20"
            />
          </div>
        )}

        <NavComponents />
      </div>
    </div>
  )
}

export default Navbar