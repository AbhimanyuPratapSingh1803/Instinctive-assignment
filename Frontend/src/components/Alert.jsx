import React, {useState} from "react";
import { Button } from "./ui/button";
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { useDispatch, useSelector } from "react-redux";
import { deleteStudent } from "@/utils/studentSlice";
import { RiDeleteBin2Line } from "react-icons/ri";

const Alert = (data) => {
    const [id, setId] = useState("");
    const BASE_URL = import.meta.env.VITE_BASE_URL;
    const dispatch = useDispatch();

    const remove = async () => {
        const delId = {id}
        try {
            const response = await fetch(`${BASE_URL}/student/deleteStudent`, {
                method : "POST",
                headers : {
                    "Content-Type" : "application/json"
                },
                body : JSON.stringify(delId)
            })
            const result = await response.json()
            if (result.success) {
                dispatch(deleteStudent(data.data.id));
            } else {
                alert(result.message)
            }
        } catch (error) {
            console.error("Error occured while deleting student : ", error);
        }
    }

    return (
        <AlertDialog>
            <AlertDialogTrigger className="px-3 py-2 text-red-500 dark:bg-[#222831] dark:hover:bg-red-500 text-xl hover:bg-red-500 hover:text-white transition-colors rounded-md bg-slate-200" onClick={() => setId(data.data.id)}><RiDeleteBin2Line /></AlertDialogTrigger>
            <AlertDialogContent className = "dark:bg-[#222831] rounded-xl">
                <AlertDialogHeader>
                    <AlertDialogTitle>
                        Are you sure you want to Delete?
                    </AlertDialogTitle>
                    <AlertDialogDescription>
                        This action cannot be undone. This will permanently
                        delete your account and remove your data from our
                        servers.
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter className="sm:flex-row flex-col-reverse">
                    <AlertDialogCancel className="flex justify-center">Cancel</AlertDialogCancel>
                    <div onClick={remove}>
                        <AlertDialogAction className="bg-red-500 flex justify-center text-white hover:bg-red-700 w-full hover:text-white" >Continue</AlertDialogAction>
                    </div>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    );
};

export default Alert;
