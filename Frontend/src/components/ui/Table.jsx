import React, { useEffect, useState } from "react";
import DataTable, { createTheme } from "react-data-table-component";
import { getStudents } from "../../utils/studentSlice.js";
import { useDispatch, useSelector } from "react-redux";
import DialogBox from "../Dialog";
import { FiEdit3 } from "react-icons/fi";
import Alert from "../Alert.jsx";

const Table = () => {
    const [loading, setLoading] = useState(true);
    const BASE_URL = import.meta.env.VITE_BASE_URL;
    const [allStudents, setAllStudents] = useState([]);
    const dispatch = useDispatch();

    const { addStudent, students, currTheme } = useSelector((state) => state.student);

    useEffect(() => {
        const getAllStudents = async () => {
            try {
                const response = await fetch(
                    `${BASE_URL}/student/getStudents`,
                    {
                        method: "GET",
                        credentials: "include",
                    }
                );

                const data = await response.json();
                if (data.success) {
                    setLoading(false);
                    setAllStudents(data.data);
                } else {
                    console.log(data.message);
                }
            } catch (error) {
                console.error("Error fetching students : ", error);
            }
        };

        getAllStudents();
    }, [students]);
    dispatch(getStudents(allStudents));

    const columns = [
        {
            name: (
                <p className="font-semibold text-center text-[12px]">
                    Student Name
                </p>
            ),
            selector: (row) => row.name,
            width: "18%",
        },
        {
            name: <p className="font-semibold text-[12px]">Cohort</p>,
            selector: (row) => row.cohort,
            width: "11%",
        },
        {
            name: <p className="font-semibold text-[12px]">Courses</p>,
            selector: (row) => row.courses,
            width: "27%",
        },
        {
            name: <p className="font-semibold text-[12px]">Date Joined</p>,
            selector: (row) => row.dateJoined,
            width: "10%",
        },
        {
            name: <p className="font-semibold text-[12px]">Last Login</p>,
            selector: (row) => row.lastLogin,
            width: "15%",
        },
        {
            name: <p className="font-semibold text-[12px]">Status</p>,
            selector: (row) => row.status,
            width: "8%",
        },
        {
            name: <p className="font-semibold text-[12px]">Actions</p>,
            selector: (row) => row.more,
            width: "10%",
            cell: (row) => (
                <div className="flex gap-3 items-center justify-center">
                    <DialogBox
                        value={<FiEdit3 />}
                        title={"Update Student Details"}
                        type={"Update"}
                        id={row.id}
                    />
                    <Alert data={row} />
                </div>
            ),
        },
    ];

    function formatDate(dateString, withTime = false) {
        const date = new Date(dateString);
        const dateFormatter = new Intl.DateTimeFormat("en-US", {
            day: "2-digit",
            month: "short",
            year: "numeric",
        });
        const formattedDate = dateFormatter.format(date);

        if (withTime) {
            const timeFormatter = new Intl.DateTimeFormat("en-US", {
                hour: "numeric",
                minute: "numeric",
                hour12: true,
            });
            const formattedTime = timeFormatter.format(date);
            return `${formattedDate} ${formattedTime}`;
        }
        return formattedDate;
    }

    if (loading) return <h1>Loading...</h1>;

    let formattedStudents = [];
    if (students.length > 0) {
        formattedStudents = students.map((student) => ({
            ...student,
            courses: (
                <div className="flex gap-2 items-center rounded-lg justify-start">
                    {student.courses.map((course, idx) => (
                        <div
                            key={idx}
                            className="flex gap-2 items-center dark:text-white dark:bg-[#222831] justify-center bg-slate-100 p-1 rounded-sm text-black text-xs">
                            {course.includes("Maths") ? (
                                <img
                                    className="size-5 rounded-sm bg-yellow-400 cursor-pointer"
                                    src="https://s3-alpha-sig.figma.com/img/b10b/f6ec/452af0700aefd13a4a59724575a10c5f?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JGcMS4xJb4kCJz4nyFYFcy~a3k04lhyFcGyb0DhIEyZLiO23bzBPYc-Y2hQFFe5nUDtLaF62fQ7I9PCav0FvNYe9nK7Yz6cT0Yz6prBL5JDPWZ4Sj6iKy3tB5SFpXasFCmvrH85Ax1CPdE~Np8HcG8IvGrYEvaJt1dpqIBa5OTafgij-aIwaG5DruObQO-z8yxpLaDw0Y88t3WuoruTQrJwrWrAUG6RA0Dy6lRwnNnVOInL4hTPylgfyYjYm20vMUuojUJxcxeBUM~YF7Ob3eSeT28d-knNKCcFI6M0oL0TVxSKTQx82XPmSymxypBhoe4hUx~MbpgajErldETqNxw__"
                                    alt=""
                                />
                            ) : (
                                <img
                                    className="size-5 rounded-sm bg-yellow-400 cursor-pointer"
                                    src="https://s3-alpha-sig.figma.com/img/3224/374d/f40a5ba1aa7d50854c73fb29d8cd8a64?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=dKr-9ByqEIHqh92U3BZmfix3iuJQ3vHyIUQ8OPGU1~~1Bm~gjvfsFeZoXx~B~LgG~jO991H31--dkxlYcSxjp9oS8VdAWyP2jR6UYVc3roIk1NtKk6aIoy0RunE1yUry4Z4aBW1eJs8hCnW90FBy17FOYfe2n~yHkz2ivcqN2xmO13o1DFToO18FOmSgJl~oP7SYDV6OYdxVPTGAfhCGQJxDfhODLkhasqoGGw2RpcpxpEb83S4-cq6p6wjJ-iZwl1V29Qw0z10IA~SmXsA8TtkCCbDM~~RQm5K8TFoEFqdEj0SQQHkoG38j4-IpwV-D3-rnyy0TKtdBkm7h~Gpw8w__"
                                    alt=""
                                />
                            )}
                            <span className="">{course}</span>
                        </div>
                    ))}
                </div>
            ),
            status: (
                <div className="flex items-center">
                    <span
                        className={`w-3 h-3 rounded-full mr-2 ${
                            student.status === "active"
                                ? "bg-green-500"
                                : "bg-red-500"
                        }`}></span>
                </div>
            ),
            dateJoined: formatDate(student.dateJoined),
            lastLogin: formatDate(student.lastLogin, true),
        }));
        createTheme("dark", {
            background: {
                default: "transparent",
            },
        });
    }

    return (
        <DataTable
            columns={columns}
            className="text-sm dark:bg-[#0D1117] dark:text-white !important"
            data={formattedStudents}
            pagination
            theme={currTheme === "dark" ? "dark" : ""}
        />
    );
};

export default Table;
