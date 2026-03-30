import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return(
        <nav className="w-screen flex flex-col gap-5 mt-25 items-center">
            <NavLink to="/about-us" className='text-3xl'>Про нас</NavLink>
            <NavLink to="/shop" className='text-3xl'>Магазин</NavLink>
            <NavLink to="/reviews" className='text-3xl'>Відгуки</NavLink>
            <NavLink to="/delivery" className='text-3xl'>Доставка</NavLink>
            <NavLink to="/contacts" className='text-3xl'>Контакти</NavLink>
        </nav>
    )
}

export default NavBar