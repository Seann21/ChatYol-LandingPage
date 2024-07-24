import logoImage from '@/assets/images/robot.jpg';
import Image from 'next/image';
import MenuIcon from '@/assets/icons/menu.svg';

export const Navbar = () => {
  return (
    <div className='bg-black'>
    <div className="px-4">
      <div className='py-4 flex items-center justify-between'>
      <div className='relative'>
        <div className='absolute w-full top-2 bottom-0 bg-banner blur-md'></div>
      <Image 
      src={logoImage} 
      alt='Saas Logo'   
      className='h-12 w-12 relative rounded-full'
      />

      </div>
      <div className='border border-white border-opacity-30 h-10 w-10 inline-flex justify-center items-center rounded-lg sm:hidden'>
      <MenuIcon 
      className="text-white"
       />
      </div>
      <nav className='gap-6 items-center hidden sm:flex'>
        <a href="#" className='text-opacity-60 text-white hover:text-opacity-100 transition hover:underline'>About</a>
        <a href="#" className='text-opacity-60 text-white hover:text-opacity-100 transition hover:underline'>Features</a>
        <a href="#" className='text-opacity-60 text-white hover:text-opacity-100 transition hover:underline'>Updates</a>
        <a href="#" className='text-opacity-60 text-white hover:text-opacity-100 transition hover:underline'>Help</a>
        <a href="#" className='text-opacity-60 text-white hover:text-opacity-100 transition hover:underline'>Customers </a>
        <button className='bg-gradient-to-r from-cyan-600 via-violet-700 to-purple-800 py-2 px-4 rounded-lg text-white transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 '><a href="https://chatyol-ai.vercel.app/" target='_blank'>Try it now</a></button>
      </nav>
      </div>
    </div>
    </div>
  );
};
