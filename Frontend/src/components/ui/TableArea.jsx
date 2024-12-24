import React, {useState, useEffect} from 'react'
import SelectButton from './SelectButton'
import { Button } from './button'
import { LuPlus } from "react-icons/lu";
import Table from './Table';
import DialogBox from '../Dialog';
import { useDispatch } from 'react-redux';

const TableArea = () => {
    return (
        <div className='h-full drop-shadow-xl w-full dark:bg-[#0D1117] dark:text-white rounded-xl flex bg-white flex-col gap-5 p-5'>
            <div className='flex flex-col sm:flex-row gap-4 sm:gap-0 justify-between items-center w-full'>
                <div className='flex gap-5'>
                    <SelectButton value={"AY 2024-25"} items={["AY 2024-25", "AY 2025-26"]}/>
                    <SelectButton value={"CBSE 8"} items={["CBSE 8", "CBSE 9"]}/>
                </div>
                {/* <Button variant = "secondary"><LuPlus /> Add new Student</Button> */}
                <DialogBox value = {`Add new Student`} title={"Add Student Details"} type = {"Add"}></DialogBox>
            </div>
            <div>
                <Table />
            </div>
        </div>
    )
}

export default TableArea
