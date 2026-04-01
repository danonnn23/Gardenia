import { NavLink } from 'react-router-dom';

interface HeaderProps {
  onNavLinkClick: () => void;
}

const NavBar = ({ onNavLinkClick }: HeaderProps) => {
    return(
        <nav className="w-screen flex flex-col gap-5 mt-25 items-center">
            <NavLink to="/about-us" onClick={onNavLinkClick} className='text-3xl'>Про нас</NavLink>
            <NavLink to="/shop" onClick={onNavLinkClick} className='text-3xl'>Магазин</NavLink>
            <NavLink to="/reviews" onClick={onNavLinkClick} className='text-3xl'>Відгуки</NavLink>
            <NavLink to="/delivery" onClick={onNavLinkClick} className='text-3xl'>Доставка</NavLink>
            <NavLink to="/contacts" onClick={onNavLinkClick} className='text-3xl'>Контакти</NavLink>
        </nav>
    )
}

export default NavBar