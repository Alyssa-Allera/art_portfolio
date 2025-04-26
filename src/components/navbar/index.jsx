import NavItems from './navItems';

import ProfileImage from '../../assets/profile/profile-picture.png'

import { FaGear, FaMoon,
    FaPalette, FaRegCalendar, FaHouse, FaUser,
    FaDollarSign
 } from "react-icons/fa6";

export default function NavBar() {
    return (
        <>
            {/* navbar */}
            <nav className='absolute top-0 left-0 h-full w-3xs border-r-1 border-[#C8ACD6] '>
                {/* profile */}
                <section className='w-full h-1/4 pt-7 flex flex-col items-center gap-y-2'>
                    <img 
                        src={ProfileImage} 
                        alt="Profile Picture"
                        className='h-30 w-30 rounded-full border-4 border-white'
                    />
                    <span className='font-[Amatic_SC] text-white text-3xl'>
                        SATO・YAMATO
                    </span>
                </section>
                {/* navigation */}
                <section className='w-full h-5/8 px-6 py-7 flex flex-col gap-y-5 text-white font-mono'>
                    <NavItems icon={<FaPalette />} title={'Artwork'} isDropdown={true} dropdownItems={[]}/>
                    <NavItems icon={<FaRegCalendar />} title={'Events'}/>
                    <NavItems icon={<FaDollarSign />} title={'Commission'} />
                    <NavItems icon={<FaUser />} title={'About'} isDropdown={true} dropdownItems={[]} />
                </section>
                {/* settings */}
                <section className='w-full h-1/8 px-4 '>
                    {/* settings icons */}
                    <div className='h-full flex justify-end items-center gap-x-4 border-t-1 border-[#C8ACD6] text-white text-2xl'>
                        <FaGear />
                        <FaMoon />
                    </div>
                </section>
            </nav>
        </>
    )
}