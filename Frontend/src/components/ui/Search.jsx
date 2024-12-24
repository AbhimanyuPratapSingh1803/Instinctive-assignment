import React from 'react'
import { Input } from './input'
import { IoMdHelpCircleOutline } from "react-icons/io";
import { RiMessage2Line } from "react-icons/ri";
import { LuSettings2 } from "react-icons/lu";
import { IoNotificationsOutline } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import { Button } from './button';
import { useDispatch } from 'react-redux';
import { hideSidebar } from "@/utils/studentSlice.js";

const Search = () => {
    const dispatch = useDispatch();
    return (
        <div className='w-full drop-shadow-md items-center py-4 flex justify-between'>
            <div className='w-11/12 sm:w-1/2 flex gap-3 items-center justify-center h-full'>
                <Button onClick = {() => dispatch(hideSidebar())} className="dark:bg-[#0D1117]">
                    <RxHamburgerMenu />
                </Button>
                <Input />
            </div>
            <div className='flex justify-end sm:justify-between items-center gap-3 w-1/3 p-2'>
                <IoMdHelpCircleOutline className='size-5 hidden sm:block dark:text-white text-slate-600 cursor-pointer'/>
                <RiMessage2Line className='size-5 hidden sm:block dark:text-white text-slate-600 cursor-pointer'/>
                <LuSettings2 className='size-5 hidden sm:block dark:text-white text-slate-600 cursor-pointer'/>
                <IoNotificationsOutline className='size-5 dark:text-white text-slate-600 cursor-pointer'/>
                <img src="https://s3-alpha-sig.figma.com/img/a875/2966/6cacf06a5eea46640a941217ae6e1903?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Gu7h1tf~FKr8PiuxC57sIy1QA~rxhxLMdZmrfvXapXWXfO3gnBojHqv69SrY1cek9YNGXztjppA7O~hXJrG8fxPjc70s9e8unT8UR2mCBTxXRAQ2FrTxrUxfQKA2IKIkQRTOYumqNp4zBAh~94w2OuZnPbiqR1mGG-utl6NLNF11yOUGzrOZSgp04zCt7vn1AZwBbyoLaT1AcxOYw4vyUnBJDI0gBL6RGxBcaev~VTjv4vaXO6QIM4b1wjqNMneGA4l4PuHUSm5dNqvD~poszan9hwyHOhY51qNFHsqhgOyBFAPjyOOK9TpnI06GujhUr-h99evW~LpyOgHrDLkPAA__" alt="" className='size-7 rounded-sm bg-yellow-400 cursor-pointer'/>
                <p className='text-md hidden sm:block font-semibold dark:text-white dark:font-medium'>Adeline H. Dancy</p>
            </div>
        </div>
    )
}

export default Search
