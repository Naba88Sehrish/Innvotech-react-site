import React from 'react';
import FlexRow from '../Layout/FlexRow';
import FlexCol from '../Layout/FlexCol';
import { FooterData } from '../../Data';
import { Link as ScrollLink } from 'react-scroll';
import { NavLink } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-[#8A90A2] mt-10">
            <div className='container py-[5rem] md:grid grid-cols-5 gap-20'>
                {/* First Column: Title and Description */}
                <FlexCol className='gap-[2rem] col-span-2'>
                    {FooterData.filter(item => item.discription).map((item, index) => (
                        <div key={index}>
                            <h1 className="text-xl font-semi-bold text-white">{item.title}</h1>
                            <p className="mt-2">{item.discription}</p>
                        </div>
                    ))}
                </FlexCol>

                {/* Second Column: Title and List */}
                <FlexCol className='gap-[2rem] col-span-1 items-center'>
                    {FooterData.filter(item => item.list).map((item, index) => (
                        <div key={index} className="text-center">
                            <h1 className="text-xl text-white font-semi-bold">{item.title}</h1>
                            <FlexCol className='mt-2'>
                                {item.list.map((li, liIndex) => (
                                    <h1
                                        key={liIndex}
                                        className='cursor-pointer hover:text-white w-fit transition-all'
                                    >
                                        {li.isScroll ? (
                                            <ScrollLink
                                                to={li.url}
                                                smooth={true}
                                                duration={500}
                                            >
                                                {li.name}
                                            </ScrollLink>
                                        ) : (
                                            <NavLink to={li.url}>
                                                {li.name}
                                            </NavLink>
                                        )}
                                    </h1>
                                ))}
                            </FlexCol>
                        </div>
                    ))}
                </FlexCol>

                {/* Third Column: Contact and Address */}
                <FlexCol className='gap-[2rem] col-span-2'>
                    <div data-aos="fade-left">
                        <img src={`${process.env.PUBLIC_URL}/Assets/Images/logo-white.png`} alt='img' className='h-[3.5rem]' />
                    </div>
                    <p className='mt-2'>"170 Eden Avenue, Airport Road Lahore"</p>
                    <h4>For Business Inquiries:
                        <a href="mailto:info@innvotech.com" className="hover:underline hover:text-white"> info@innvotech.com</a>
                    </h4>
                    <h4>For Job Applications: 
                        <a href="mailto:hr@innvotech.com" className="hover:underline hover:text-white"> hr@innvotech.com</a>
                    </h4>
                </FlexCol>
            </div>

            <div className='border-t border-[#4A4B4C]'>
                <div className='container py-3'>
                    <FlexRow className='md:justify-between justify-center gap-4 flex-wrap'>
                        <div>
                            <h2 className='text-sm font-semibold md:text-left'>© 2023 Invvotech Systems</h2>
                        </div>
                        <h2 className='text-[text-sm font-semibold md:text-left'>All rights Reserved</h2>
                    </FlexRow>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
