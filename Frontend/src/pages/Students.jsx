import React, {useState, useEffect} from 'react'
import Sidebar from "../components/ui/Sidebar";
import Search from "../components/ui/Search";
import TableArea from "../components/ui/TableArea";

const Students = () => {

    return (
        <div className="w-screen sm:relative dark:bg-[#010409] min-h-screen bg-[#F6F8FA] flex justify-between">
            <Sidebar></Sidebar>
            <div className="w-full flex flex-col gap-2 px-5">
                <Search></Search>
                <TableArea />
            </div>
        </div>
    )
}

export default Students
