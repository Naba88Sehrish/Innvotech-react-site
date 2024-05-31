import React from 'react'
import FlexCol from '../Layout/FlexCol'
import Button from '../../Components/Common/Button'

const WhyChooseUsValue = ({ img, title, info }) => {
    return (
        <div className='bg-[#D5E1EA] rounded-2xl border-b border-[#135682] px-6 py-10' data-aos="zoom-in">
            <FlexCol className={'gap-4'}>
                <div>
                    <Button className={'!px-2.5 !py-2.5'}>
                        <img src={`${process.env.PUBLIC_URL}/Assets/Images/${img}`} alt='img' className="h-[3rem] object-contain" />
                    </Button>
                </div>
                <div>
                    <h2 className='font-bold text-[#105586]'>{title}</h2>
                </div>
                <div>
                    <p >{info}</p>
                </div>
            </FlexCol>
        </div>
    )
}

export default WhyChooseUsValue