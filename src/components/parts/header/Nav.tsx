import React, {FC} from 'react';
import { NavLink, Link } from 'react-router-dom';
// import style from './Navbar.module.scss';
type typeNav = {
    className: any
}
export const Nav:FC<typeNav> = ({className}:typeNav) => {

    return (
    
        <nav className={className}>
            <ul className='lg:flex lg:space-x-30 pt-[7px]'>
                <li><Link className="font-roboto text-md leading-13 text-white mobile-laptop:p-3 block" to='/'>Home</Link></li>
                <li><Link className="font-roboto text-md leading-13 text-white mobile-laptop:p-3 block" to='/news'>News</Link></li>
                <li><Link className="font-roboto text-md leading-13 text-white mobile-laptop:p-3 block" to='/about'>About</Link></li>
                <li><Link className="font-roboto text-md leading-13 text-white mobile-laptop:p-3 block" to='#'>Contacts</Link></li>
            </ul>
        </nav>
    
    );
}

