
import { CloudDownload, User, Wallet } from 'lucide-react';
import Logofull from '../assets/logo-full.png'
const Header = () => {
    return (
        <header>
            <div className='flex justify-end gap-4 p-4 mb-6 items-center'>
                <img className='w-32' src={Logofull} alt="logo" />
                <CloudDownload className='w-5 h-5 text-gray-500' />
                <p className='flex text-gray-500 gap-1 items-center'>
                    <Wallet className='w-5 h-5' />
                    <span className='text-sm'>{"\u20B9"} 2024</span>
                </p>
                <div className='flex items-center gap-2 border rounded-full p-2'>
                    <User className='size-4' />
                </div>
            </div>
        </header>
    )
}

export default Header;
