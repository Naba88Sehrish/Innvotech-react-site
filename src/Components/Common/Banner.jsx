import React from 'react';
import { scroller } from 'react-scroll';
import Button from '../../Components/Common/Button';

const Banner = ({ data, img }) => {
    const handleScrollToContact = () => {
        scroller.scrollTo('contact', {
            smooth: true,
            duration: 500,
        });
    };

    return (
        <div className='grid lg:grid-cols-2 gap-[2rem] py-20'>
            <div className={'flex flex-col gap-[2rem] justify-center'} data-aos="fade-right">
                {data}
                <Button
                    className={'max-w-[10rem] w-full'}
                    onClick={handleScrollToContact}
                    text={'Contact Us'}
                />
            </div>
            <div className='flex items-center justify-center' data-aos="fade-left">
                {img && <img src={`${process.env.PUBLIC_URL}${img}`} alt='img' className="object-contain md:h-[22rem] h-[15rem]" />}
            </div>
        </div>
    );
};

export default Banner;
