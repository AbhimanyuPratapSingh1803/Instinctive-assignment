import React from "react";
import { useState } from "react";
import {
    Dialog,
    DialogTrigger,
    DialogContent,
    DialogHeader,
    DialogFooter,
    DialogTitle,
} from "./ui/dialog";
import { LuPlus } from "react-icons/lu";
import { Button } from "./ui/button";
import { RxCross2 } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";
import {
    toggleAddStudent,
    editStudent,
} from "../utils/studentSlice.js";
import { Switch } from "./ui/switch";

const DialogBox = ({ value, title, type, id }) => {
    const [courses, setCourses] = useState([]);
    const [currCourse, setCurrCourse] = useState("");
    const [name, setName] = useState("");
    const [cohort, setCohort] = useState("");
    const [dateJoined, setDateJoined] = useState(Date.now());
    const [lastLogin, setLastLogin] = useState(Date.now());
    const [status, setStatus] = useState("inactive");
    const BASE_URL = import.meta.env.VITE_BASE_URL;
    const dispatch = useDispatch();
    const { addStudent } = useSelector((state) => state.student);
    const addnewStudent = async () => {
        const form = {
            name,
            cohort,
            courses,
            dateJoined,
            lastLogin,
            status,
        };
        try {
            const response = await fetch(`${BASE_URL}/student/addStudent`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(form),
            });
            const data = await response.json();
            if (data.success) {
                dispatch(toggleAddStudent);
            } else {
                console.log(data.message);
            }
        } catch (error) {
            console.error("Error occured while adding student : ", error);
        }
    };

    const addCourse = () => {
        if (
            currCourse !== "Select Course" &&
            currCourse !== "" &&
            !courses.includes(currCourse)
        ) {
            setCourses([...courses, currCourse]);
            setCurrCourse("");
        }
    };

    const deleteCourse = (target) => {
        setCourses((courses) => courses.filter((c) => c !== target));
    };

    return (
        <Dialog>
            <DialogTrigger onClick={() => setCourses([])}>
                <Button className = "px-3 dark:bg-[#0D1117] dark:border-neutral-800 dark:border-[1px] hover:dark:bg-[#010409] hover:text-white" variant="secondary">
                    {type === "Add" && <LuPlus className="font-bold text-xl" />}
                    {value}
                </Button>
            </DialogTrigger>
            <DialogContent className = "rounded-xl">
                <DialogHeader>
                    <DialogTitle className = "">{title}</DialogTitle>
                </DialogHeader>
                <div className="flex w-full flex-col gap-4 mb-2">
                    <div className="flex flex-col gap-2">
                        <label htmlFor="name" className="text-sm font-medium">
                            Name
                        </label>
                        <input
                            className="ring-1 ring-black text-sm rounded focus:outline-none px-2 py-1"
                            id="name"
                            type="text"
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="cohort" className="text-sm font-medium">
                            Cohort
                        </label>
                        <input
                            className="ring-1 ring-black text-sm rounded focus:outline-none px-2 py-1"
                            id="cohort"
                            type="text"
                            onChange={(e) => setCohort(e.target.value)}
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="cohort" className="text-sm font-medium">
                            Courses
                        </label>
                        <div className="flex items-center gap-5">
                            <select
                                placeholder={"Select Course"}
                                className="ring-1 ring-black w-1/2 text-sm rounded focus:outline-none px-2 py-1"
                                onChange={(e) => setCurrCourse(e.target.value)}>
                                <option value={"Select Course"}>
                                    Select Course
                                </option>
                                <option value={"CBSE 9 Science"}>
                                    CBSE 9 Science
                                </option>
                                <option value={"CBSE 9 Maths"}>
                                    CBSE 9 Maths
                                </option>
                            </select>
                            <div
                                onClick={addCourse}
                                className="border-2 border-slate-700 text-slate-800 rounded-sm p-1 hover:bg-slate-900 hover:border-black hover:text-white transition-colors">
                                <LuPlus className="text-lg" />
                            </div>
                        </div>
                        {courses.length > 0 && (
                            <div className="flex gap-2 flex-wrap items-center bg-slate-500 mt-2 p-2 rounded-lg justify-start">
                                {courses.map((course, idx) => (
                                    <div
                                        key={idx}
                                        className="flex gap-2 items-center justify-center bg-slate-800 rounded-sm p-2 text-white text-sm">
                                        <span className="">{course}</span>
                                        <div>
                                            <RxCross2
                                                className="font-bold"
                                                onClick={() =>
                                                    deleteCourse(course)
                                                }
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                    <div className="w-full h-full flex flex-col gap-2">
                        <p className="text-sm font-medium">Status</p>
                        <div className="flex gap-3 items-center justify-start">
                            <Switch onCheckedChange = {() => (setStatus(status === "active" ? "inactive" : "active"))} id = "switch"></Switch>
                            <label className="text-sm" htmlFor="switch">Active</label>
                        </div>
                    </div>
                </div>
                <DialogFooter
                    onClick={() =>
                        type === "Add"
                            ? addnewStudent()
                            : dispatch(
                                  editStudent({
                                      id,
                                      name,
                                      cohort,
                                      courses,
                                      dateJoined,
                                      lastLogin,
                                      status,
                                  })
                              )
                    }>
                    <Button variant="mine">{type}</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
};

export default DialogBox;
