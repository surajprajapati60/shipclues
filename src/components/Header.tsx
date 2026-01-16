
import { CloudDownload, User, Wallet } from 'lucide-react';
import Logofull from '../assets/logo-full.png'
const Header = () => {
    return (
        <header>
            <div className='flex justify-end gap-4 p-4 mb-6 items-center'>
                <img className='md:w-32 w-24' src={Logofull} alt="logo" />
                <CloudDownload className='md:w-5 md:h-5 w-4 h-4 text-gray-500' />
                <p className='flex text-gray-500 gap-1 items-center'>
                    <Wallet className='md:w-5 md:h-5 w-4 h-4' />
                    <span className='md:text-sm text-xs '>{"\u20B9"} 2024</span>
                </p>
                <div className='flex items-center gap-2 border rounded-full p-2 md:size-8 size-6'>
                    <User className='size-4' />
                </div>
            </div>
        </header>
    )
}

export default Header;
