import React from 'react'
import FlexCol from '../Layout/FlexCol'


const ServicesValue = ({ img, title, info }) => {
    return (
        <div className='bg-[#292930] rounded-2xl  px-6 py-10' data-aos="zoom-in">
            <FlexCol className={'gap-4  items-start'}>
                <div>                    
                        <img src={`${process.env.PUBLIC_URL}/Assets/Images/${img}`} alt='img' className="h-[3rem] " />
                    
                </div>
                <div>
                    <h1 className='font-bold text-[#8A9089] text-start'>{title}</h1>
                </div>
                <div>
                    <p className=' text-[#8A9089] text-start'>{info}</p>
                </div>
            </FlexCol>
        </div>
    )
}

export default ServicesValue