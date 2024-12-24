import React from 'react'
import { Button } from './ui/button'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "./ui/dropdown-menu"
import Alert from "./Alert"
import { useDispatch, useSelector } from 'react-redux'
import { setCurrentStudent } from '@/utils/studentSlice'

const Dropdown = (data) => {
    const dispatch = useDispatch();
    dispatch(setCurrentStudent(data));

    return (
        <DropdownMenu>
        <DropdownMenuTrigger className='text-lg font-bold'>⋮</DropdownMenuTrigger>
        <DropdownMenuContent>
            <div className='w-full text-black'>
                <DropdownMenuItem>Update</DropdownMenuItem>
                <DropdownMenuSeparator/>
            </div>
            <div className='w-full'>
                <DropdownMenuItem>
                    <Alert />
                </DropdownMenuItem>
            </div>
        </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default Dropdown;
