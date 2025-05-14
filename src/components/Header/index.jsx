import { ScrollRestoration } from 'react-router';
import Navbar from '../Navbar';
import Img from '../../assets/images/logo.jpg';

const Header = () => {
    return (
        <div className='header'>
            <Navbar />
            <div className=' flex justify-center flex-col items-center h-[80%] text-white'>
                <div className='flex flex-col items-center gap-2'>
                    <div className='w-[250px] h-[250px]'>
                        <img
                            src={Img}
                            className=' bg-white rounded-full w-full h-full'
                            alt=''
                        />
                    </div>
                    <div
                        className='font-bold lg:text-[25px]  text-center text-[18px] lg:w-[75%]'
                        style={{ marginTop: '20px' }}
                    >
                        Соблюдай технику безопасности — береги свою жизнь.
                        Помни, тебя ждут дома родные.
                    </div>
                </div>
            </div>
            <ScrollRestoration />
        </div>
    );
};
export default Header;
