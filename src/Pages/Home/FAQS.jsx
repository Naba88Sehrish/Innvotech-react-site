import React, { useState } from 'react';
import Svgs from '../../Svgs';
import { questions } from '../../Data'

const FAQS = () => {
    

    const [openIndex, setOpenIndex] = useState(null);

    return (
        <>
            <section  className="flex items-center text-center justify-center h-full">
                <div data-aos="zoom-in" className='container'>
                    <h1  className='text-[2rem] p-10 text-center text-[#135682] font-semibold'>FAQ</h1>
                    <div data-aos="fade-right"  className='col-span-3'>
                        <div className='flex flex-col'>
                            {questions.map((qa, i) => (
                                <div key={i} onClick={() => setOpenIndex(i)} className='rounded-xl px-5 py-2.5 mb-4'>
                                    <div className='flex items-center gap-4 justify-center cursor-pointer border-t border-[#1D1B21] pt-3'>
                                        <div className='flex items-center gap-3 text-[#135682] text-[1.5rem]'>
                                            {qa.question}
                                        </div>
                                        <div className='flex items-center text-sm gap-3'>
                                            <Svgs.Down />
                                        </div>
                                    </div>
                                    {openIndex === i && (
                                        <div className='mt-3'>
                                            <p className='text-[#135682] text-lg'>
                                                {qa.answer}
                                            </p>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div> 
                    
                </div>
            </section>
            
        </>
    );
};

export default FAQS;
