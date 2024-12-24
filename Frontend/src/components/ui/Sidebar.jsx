import React from 'react'
import { Button } from './button'
import { RiDashboard3Line } from "react-icons/ri";
import { BiSolidBookContent } from "react-icons/bi";
import { PiBookBookmarkFill } from "react-icons/pi";
import { IoMdHelpCircleOutline } from "react-icons/io";
import { AiOutlinePieChart } from "react-icons/ai";
import { RiSettingsLine } from "react-icons/ri";
import { MdOutlineLightMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";
import { toggleTheme, hideSidebar } from "../../utils/studentSlice.js";
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { RxCross2 } from "react-icons/rx";

const Sidebar = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {isHidden} = useSelector(state => state.student);

    return (
        <div className={`w-full sm:w-1/5 bg-white ${isHidden ? "hidden" : "flex"} dark:bg-[#0D1117] dark:text-white drop-shadow-lg flex flex-col gap-8 py-5 pl-5`}>
            <div className='flex items-center justify-between w-full'>
                <img src="Vector.svg" alt="" className='h-11 w-24 dark:bg-white rounded-md pr-2 cursor-pointer'/>
                <Button onClick = {() => dispatch(hideSidebar())} className = "text-xl font-bold mr-4">
                    <RxCross2 />
                </Button>
            </div>
            <div className='w-full h-full px-3 flex justify-between flex-col gap-3' >
                <div className='w-full h-full px-3 flex flex-col gap-3'>
                    <Button onClick = {() => navigate("/dashboard")}><RiDashboard3Line className='text-black dark:text-white '/> Dashboard</Button>
                    <Button onClick = {() => navigate("/")}><BiSolidBookContent className='text-black dark:text-white '/> Students</Button>
                    <Button onClick = {() => navigate("/chapter")}><PiBookBookmarkFill className='text-black dark:text-white '/> Chapter</Button>
                    <Button onClick = {() => navigate("/help")}><IoMdHelpCircleOutline className='text-black dark:text-white '/> Help</Button>
                    <Button onClick = {() => navigate("/report")}><AiOutlinePieChart className='text-black dark:text-white '/> Reports</Button>
                    <Button onClick = {() => navigate("/setting")}><RiSettingsLine className='text-black dark:text-white '/> Settings</Button>
                </div>
                <div className='flex w-full gap-2 p-3 justify-between'>
                    <Button onClick = {() => dispatch(toggleTheme("light"))} variant = "mine" className='bg-white text-black font-semibold hover:bg-gray-600 hover:text-white dark:text-white dark:font-normal dark:bg-[#010409] ring-black ring-1'><MdOutlineLightMode /> Light</Button>
                    <Button onClick = {() => dispatch(toggleTheme("dark"))} variant = "mine" className='bg-white text-black font-semibold hover:bg-gray-600 hover:text-white dark:text-white dark:font-normal dark:bg-[#010409] ring-black ring-1'><MdDarkMode /> Dark</Button>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
