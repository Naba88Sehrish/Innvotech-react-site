import React from 'react'
import FlexCol from '../../Components/Layout/FlexCol'
import { WhyChooseUsData1 } from '../../Data'
import { WhyChooseUsData2 } from '../../Data'
import FlexRow from '../../Components/Layout/FlexRow'
import Banner from '../../Components/Common/Banner'
import WhyChooseUsValue from '../../Components/Cards/WhyChooseUsValue'


const WhyChooseUs = () => {
    return (<>
        <div className=' w-full py-[6rem] px-[6rem] bg-white'>
            <FlexCol className={'gap-[2rem] justify-center items-center'}>
            <FlexRow className='lg:flex hidden gap-[0.5rem] justify-center '>
  <img src="Assets/images/circle.png" alt="circle" className="w-3 h-auto" />
  <h5>Why Choose Us?</h5>
</FlexRow>

                <h2 className='font-extrabold text-[2rem] leading-[1.2] text-center'>
                 Excellent IT solution service and unlimited <span className='block mt-2'>support for your business </span>
 
                </h2>
                <div className='mt-[3rem]'>
                <div className='grid xl:grid-cols-3 gap-[2rem]'>
    {WhyChooseUsData1.map(item => (
        <div key={item.title} className="flex items-center justify-center text-center">
            <WhyChooseUsValue info={item.info} img={item.icon} title={item.title} />
        </div>
           ))}
         </div>


                </div>
                
            </FlexCol>
            
        </div>
        <div  className={'gap-[4rem] rounded-lg bg-[#135682]'}>
                        <h1 className='text-center py-[2rem] text-[2rem] text-white '>"Quality is remembered long after price is forgotten " 
                        </h1></div>
           
<div data-aos="fade-left">
<Banner
    img={'/Assets/Images/WhyChooseUs.png'}
    data={
        <>
        <FlexRow className='lg:flex hidden gap-[0.5rem]  '>
  <img src="Assets/images/circle.png" alt="circle" className="w-3 h-auto" />
  <h5>Why Choose Us?</h5>
</FlexRow>
            <h2 className='font-bold md:text-[3rem] text-[2.2rem] leading-[1.2]'>
            We deliver great service with
             outstanding value
            </h2>
            <p className='text-[#000000] text-lg'>
            By understanding the client,s condition and leveraging our experience and 
knowledge. we support reform by recommending the most appropriate
 methods and sesources. </p>
            
        </>
    }
/> 
</div>
 <div className=' w-full py-[6rem] px-[6rem] bg-white'>
            <FlexCol className={'gap-[2rem] justify-center items-center'}>
            <FlexRow className='lg:flex hidden gap-[0.5rem] justify-center '>
  <img src="Assets/images/circle.png" alt="circle" className="w-3 h-auto" />
  <h5>Why Choose Us?</h5>
</FlexRow>

                <h2 className='font-extrabold text-[2rem] leading-[1.2] text-center'>
                What Sets Us Apart ?
 
                </h2>
                <div className='mt-[3rem]'>
                <div className='grid xl:grid-cols-3 gap-[2rem]'>
    {WhyChooseUsData2.map(item => (
        <div key={item.title} className="flex items-center justify-center text-center">
            <WhyChooseUsValue info={item.info} img={item.icon} title={item.title} />
        </div>
           ))}
         </div>


                </div>
                
            </FlexCol>
            
        </div>
</>
 )
}
export default WhyChooseUs