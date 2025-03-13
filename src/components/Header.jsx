import Link from 'next/link';
import MenuItems from './MenuItmes';

// icons 
import {AiFillHome} from 'react-icons/ai'
import {BsFillInfoCircleFill} from 'react-icons/bs'
import DarkModeSwitch from './DarkModeSwitch';
function Header() {
    return ( 
        <div className='flex justify-between p-2 items-center max-w-6xl mx-auto'>
            <div className='flex gap-4'>
                <MenuItems title="home" address="/" Icon={AiFillHome}/>
                <MenuItems title="about" address="/about" Icon={BsFillInfoCircleFill}/>
            </div>
            <div className='flex items-center gap-4'>
                <DarkModeSwitch />
                <Link href={"/"} className='flex gap-1 items-center cursor-pointer'>  
                    <span className='bg-amber-500 text-2xl font-bold py-1 px-2 rounded-lg'>IMDB</span>
                    <span className='text-xl hidden sm:inline'>Clone</span>
                </Link>
            </div>
        </div>
    );
}

export default Header;