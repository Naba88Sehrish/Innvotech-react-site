import React from 'react'
import FlexCol from '../../Components/Layout/FlexCol'
import { ServicesData } from '../../Data'
import FlexRow from '../../Components/Layout/FlexRow'
import ServicesValue from '../../Components/Cards/ServicesValue'


const Services = () => {
    return (<>
        <div className=' w-full py-[6rem] px-[6rem] bg-[#292930]'>
            <FlexCol className={'gap-[2rem] justify-center items-center'}>
            <FlexRow className='lg:flex hidden gap-[0.5rem] justify-center '>
  <img src="Assets/images/circle.png" alt="circle" className="w-3 h-auto" />
  <h5 className=' text-center text-white'>Our Services...</h5>
</FlexRow>

                <h2 className='font-extrabold text-[2rem] leading-[1.2] text-center text-white'>
                What We Offer ?
                </h2>
                <div className='mt-[3rem]'>
                <div className='grid xl:grid-cols-3 gap-[2rem]'>
    {ServicesData.map(item => (
        <div key={item.title} className="flex items-center justify-center text-center">
            <ServicesValue info={item.info} img={item.icon} title={item.title} />
        </div>
           ))}
         </div>


                </div>
                
            </FlexCol>
            
        </div>
   

 
</>
 )
}
export default Services