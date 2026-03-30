import { Menu, X } from 'lucide-react';
import logo from '../assets/gardenia_logo_01.png';
import { NavLink } from "react-router-dom";


interface HeaderProps {
  onBurgerClick: () => void;
  isOpen: boolean;
}

const Header = ({ onBurgerClick, isOpen }: HeaderProps) => {
    return (
        <header className="w-screen h-20 flex justify-between items-center">
            <NavLink to="/" className='w-2/3'><img src={logo} alt="" className='w-full' /></NavLink>
            <button onClick={onBurgerClick} className='mr-5'>
                {isOpen ?
                    <X size={48} /> :
                    <Menu size={48} />
                }
            </button>
        </header>
  );
};

export default Header