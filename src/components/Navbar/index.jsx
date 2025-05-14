import { useState } from 'react';
import { NavLink } from 'react-router';
import { IoClose } from 'react-icons/io5';
import { IoMenu } from 'react-icons/io5';
import Img from '../../assets/images/bojxonaservislogo.png';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <div className='wrapper'>
                <div className='container'>
                    <div className='   text-white w-full  px-2 flex justify-between items-center'>
                        <div className='text-[30px] font-bold'>
                            {/* <img
                                src={Img}
                                className='w-[70px] h-[70px] bg-white rounded-full'
                                alt=''
                            /> */}
                        </div>
                        {/* <div className='hidden md:flex gap-[25px] text-[18px]'>
                            <NavLink to={'/'}>Home</NavLink>
                            <NavLink to={'/'}>About</NavLink>
                            <NavLink to={'/'}>Service</NavLink>
                            <NavLink to={'/'}>Contact</NavLink>
                        </div> */}
                        {/* <button
                            onClick={toggleMenu}
                            className='p-2 text-white  rounded-md block md:hidden'
                        >
                            <IoMenu className='text-[28px]' />
                        </button> */}
                    </div>
                </div>
            </div>

            {/* Menu paneli */}
            <div
                className={`fixed top-0 left-0 h-full w-64 bg-gray-800 text-white z-50 transform transition-transform duration-300 ${
                    isOpen ? 'translate-x-0' : '-translate-x-full'
                }`}
            >
                <div
                    style={{ padding: '10px' }}
                    className='flex items-center justify-between  border-b border-gray-700'
                >
                    <div></div>
                    <button onClick={toggleMenu}>
                        <IoClose className='text-[28px] text-white' />
                    </button>
                </div>

                <ul className='open-menu text-[20px]'>
                    <li>
                        <NavLink to={'/'} className='block hover:text-gray-400'>
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={'/'} className='block hover:text-gray-400'>
                            About
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={'/'} className='block hover:text-gray-400'>
                            Services
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={'/'} className='block hover:text-gray-400'>
                            Contact
                        </NavLink>
                    </li>
                </ul>
            </div>

            {/* Background overlay */}
            {isOpen && (
                <div
                    style={{ background: 'rgba(0, 0, 0, 0.627)' }}
                    className='fixed inset-0  bg-opacity-50 z-40'
                    onClick={toggleMenu}
                />
            )}
        </>
    );
};
export default Navbar;
