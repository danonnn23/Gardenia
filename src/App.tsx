import { Link, Outlet } from 'react-router-dom';
import logo500nobg from "./assets/gardenia_logo500_nobg.png"
import { Menu, Star, Truck, Store, House, ShoppingCart } from 'lucide-react';
import { useState } from 'react';

function App() {
  const [isBurgerOpened, setIsBurgerOpened] = useState(false);

  return (
    <div>
      <nav className='grid grid-cols-2 items-center px-5 py-2'>
        <Link to="/" className='justify-self-start'>
          <img src={logo500nobg} alt="Logo" className='w-65'/>
        </Link>
        <button onClick={() => setIsBurgerOpened(!isBurgerOpened)} className='justify-self-end'>
          <Menu />
        </button>
        <div className={`fixed top-0 right-0 w-65 h-screen bg-[#b4c6ae] z-50 transform transition-transform duration-300 ease-in-out ${
        isBurgerOpened ? 'translate-x-0' : 'translate-x-[120%]'
        }`}>
          <div className='flex flex-col gap-8 mt-12 w-max mx-auto'>
            <Link to="/" className='flex items-center gap-2 text-3xl' onClick={() => setIsBurgerOpened(false)}>
              <House className='size-8 mt-1.5'/>
              Головна
            </Link>
            <Link to="/" className='flex items-center gap-2 text-3xl' onClick={() => setIsBurgerOpened(false)}>
              <Store className='size-8 mt-1.5'/>
              Каталог
            </Link>
            <Link to="/" className='flex items-center gap-2 text-3xl' onClick={() => setIsBurgerOpened(false)}>
              <Star className='size-8 mt-1.5'/>
              Відгуки
            </Link>
            <Link to="/" className='flex items-center gap-2 text-3xl' onClick={() => setIsBurgerOpened(false)}>
              <Truck className='size-8 mt-1.5'/>
              Доставка
            </Link>
            <Link to="/"  className='flex items-center gap-2 text-3xl' onClick={() => setIsBurgerOpened(false)}>
              <ShoppingCart className='size-8 mt-1.5'/>
              Кошик
            </Link>
          </div>
        </div>
        {isBurgerOpened && (
          <div 
            className='fixed inset-0 bg-black/5 backdrop-blur-xs z-30'
            onClick={() => setIsBurgerOpened(false)}
          />
        )}
      </nav>

      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default App;