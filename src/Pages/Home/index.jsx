import React from 'react';
import Layout from '../../Components/Layout';
import FAQS from './FAQS.jsx';
import WhyChooseUs from './WhyChooseUs.jsx';
import Services from './Services.jsx';
import Contact from './contact.jsx';
import Technologies from './Technologies.jsx';
import Banner from '../../Components/Common/Banner';
import { Element } from 'react-scroll';

const Home = () => {
    return (
        <Layout>
            <Banner
                img={'/Assets/Images/Hero-img.png'}
                data={
                    <>
                        <h2 className='font-extrabold md:text-[3rem] text-[2.2rem] leading-[1.2]'>
                            Providing unparalleled IT business solution to maximum satisfaction
                        </h2>
                        <p className='text-[#135682] text-lg'>
                            At Innvotech we specialize in designing, building, shipping and scaling beautiful, usable products with blazing-fast efficiency.
                        </p>
                    </>
                }
            />
            <Element name="whyChooseUs">
                <WhyChooseUs />
            </Element>
            <Element name="services">
                <Services />
            </Element>
            <Technologies />
            <FAQS />
            <div className={'gap-[3rem] my-[6rem] rounded-lg bg-[#135682]'}>
                <h1 className='text-center py-[2rem] text-[2rem] text-white'>
                    "Unlocking Tomorrow's Potential with Today's Innovation."
                </h1>
            </div>
            
            <Element name="contact">
                <Contact />
            </Element>
        </Layout>
    );
}

export default Home;
