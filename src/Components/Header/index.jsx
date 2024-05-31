import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { scroller } from 'react-scroll';
import FlexRow from '../Layout/FlexRow';
import Svgs from '../../Svgs';
import { HeaderData } from '../../Data';
import FlexCol from '../Layout/FlexCol';
import Button from '../../Components/Common/Button';

const Header = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const handleNavigation = (url, isScroll) => {
    if (isScroll) {
      // Scroll to the element
      scroller.scrollTo(url, { smooth: true, duration: 500 });
    } else {
      // Navigate to the route
      navigate(url);
    }
    setMenuOpen(false); // Close the menu on navigation
  };

  return (
    <header>
      <nav className='sticky top-0'>
        <div className="container pt-4 pb-6">
          <div className={'grid lg:grid-cols-3 grid-cols-2 gap-12'}>
            <div>
              <img src={`${process.env.PUBLIC_URL}/Assets/Images/Innvo-logo.png`} alt='logo' />
            </div>
            <FlexRow className='lg:flex hidden gap-[3rem] justify-center ml-12'>
              {HeaderData.map(item => (
                <div
                  key={item.name}
                  onClick={() => handleNavigation(item.url, item.isScroll)}
                  className='cursor-pointer border-b-[2px] border-transparent transition-all hover:border-b-[#135682]'
                >
                  {item.name}
                </div>
              ))}
            </FlexRow>
            <FlexRow className='lg:flex hidden justify-end'>
              <Button onClick={() => handleNavigation("contact", true)} text={'Contact Us'} />
            </FlexRow>
            <button onClick={toggleMenu} className="lg:hidden ml-auto" type="button">
              <Svgs.Hamburger />
            </button>
          </div>
        </div>
      </nav>

      {isMenuOpen && <div onClick={toggleMenu} className="bg-gray-900/80 fixed inset-0 z-30"></div>}

      <div className={`fixed top-0 right-0 z-40 h-screen p-4 overflow-y-auto transition-transform ${!isMenuOpen && 'translate-x-full'} w-full bg-gray-800/60 backdrop-blur-md`}>
        <div className='flex flex-col gap-[3rem] h-full justify-between'>
          <div className='flex items-center justify-between'>
            <img src={`${process.env.PUBLIC_URL}/Assets/Images/logo white.png`} alt='img' className='h-[3rem]' />
            <div onClick={toggleMenu}>
              <Svgs.Close />
            </div>
          </div>
          <FlexCol>
            <FlexRow className='justify-center !gap-4 flex-wrap'>
              {HeaderData.map(item => (
                <div
                  key={item.name}
                  onClick={() => handleNavigation(item.url, item.isScroll)}
                  className='cursor-pointer text-2xl font-semibold'
                >
                  {item.name}
                </div>
              ))}
            </FlexRow>
          </FlexCol>
          <div className='flex items-center justify-center'>
            <Button
              className={'max-w-[18.75rem] w-full'}
              onClick={() => handleNavigation("contact", true)}
              text={'Contact Us'}
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
