import Svgs from '../../Svgs'
import { useNavigate } from 'react-router-dom'
import FlexRow from './FlexRow'
import Button from '../../Components/Common/Button';
import ScrollToTopButton from '../ScrollToTop'

const AuthLayout = ({ children }) => {
    const naviagte = useNavigate();
    return (
        <>
            <div className=' top-0 left-0 right-0  flex items-center justify-between flex-row overflow-auto bg-white p-4'
            style={{  boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.2)', }}>
            
                <div className=' cursor-pointer flex items-center  ml-20'>
                    {/* <Svgs.Logo /> */}
                    <img src={`${process.env.PUBLIC_URL}/Assets/Images/Innvo-logo.png`} alt='img' className='h-[3rem]' />
                    
                </div>
                <div className=' cursor-pointer flex items-center  mr-20 '><Button onClick={() => {
                      naviagte("/")
                    }} text={'Back to site'} /></div>
               
            </div>
            
            <div className='min-h-screen flex items-center justify-center  overflow-auto'>
                <div className=' flex-row'>{children}</div>
            </div>
            <ScrollToTopButton />
        </>
    )
}

export default AuthLayout