import {React, useState} from 'react'
import {Link} from 'react-router-dom';
import { hamburger, navLinks } from '../../constants/LandingPage/index';

const Nav = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toogleNavbar = () => {
      setIsOpen(!isOpen);
    };
    return (
      <header className="py-4 font-sans px-8 sm:px-12 z-10 w-full bg text-prussain-blue font-medium">
        <nav className="flex justify-between items-center max-container font-Montserrat">
          <a href="/" className='font-Roboto text-xl font-bold text-navy uppercase'>
            {/* <img src={logo} width={60} alt="logo" /> */}
            Alumni Connect
          </a>
          <ul className="flex-1 flex justify-center items-center gap-14 max-lg:hidden">
            {navLinks.map((item) => (
              <li key={item.title}>
                <a
                  href={item.href}
                  className="leading-normal hover:text-r-btn"
                >
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex gap-4 justify-center items-center max-lg:hidden">
                <Link to='/register'><span className="cursor-pointer px-6 py-2 bg-celectic-blue text-smoke rounded-sm">
                  Register
                </span></Link>
          </div>
          <div className="lg:hidden">
            <button onClick={toogleNavbar}>
              {isOpen ? <p className='text-lg font-semibold'>X</p> :  <img src={hamburger} width="19" alt="menu" />}
            </button>
          </div>
        </nav>
        <div className='flex justify-end'>
          {isOpen &&
          <div className="lg:hidden list-none px-4 py-2  bg-sky rounded-lg absolute">
            {navLinks.map((item) => (
              <li key={item.title}>
                <a
                  href={item.href}
                  className="font-medium text-slate-600leading-normal hover:text-r-logo w-full"
                >
                  {item.title}
                </a>
              </li>
            ))}
          <div className="flex flex-col mt-2 font-medium"> 
                <Link to='/register'><span className="cursor-pointer hover:text-r-dbtn">
                  Register
                </span></Link>
          </div>
          </div>}
        </div>
      </header>
    );
}

export default Nav