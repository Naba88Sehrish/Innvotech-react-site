import React from 'react'


import ContactAccount from '../../Components/Common/ContactAccount'



const Contact = () => {
    
    
    return (
        <>         
                
                        <><section className=" items-center text-center justify-center flex flex-col gap-5 h-full p-10">
                            <h2 data-aos="zoom-in" className='font-bold md:text-[3rem] text-[2.2rem]  leading-[1.2]'>
                            How can we help you?
                            </h2>
                            <p  className=' text-lg '>
                            Use your preferred method or platform to contact us. Any request can be answered by our team!
                            </p>
                           <ContactAccount></ContactAccount>
                           <h2 data-aos="fade-left" className='font-bold md:text-[2rem] text-[#135682] text-[2.2rem] leading-[1.2]'>
                           Get In Touch
                            </h2>
                            <p className=' text-lg'>
                            Want to ask about something related our products or offers? Reach out to us right now!
                            </p> </section>
                          
                        </>
                        <section className="flex justify-center items-center my-10">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3401.1412381529967!2d74.423054010613!3d31.520280574106494!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39190f1b7971f881%3A0x25f9c14917551d58!2sEden%20Avenue!5e0!3m2!1sen!2s!4v1717045137372!5m2!1sen!2s"
                    width="1400"
                    height="450"
                    style={{ border: 1 }}
                    allowFullScreen=""
                    loading="lazy"
                    title="Google Map"
                ></iframe>
            </section>
            
        </>
    )
}

export default Contact