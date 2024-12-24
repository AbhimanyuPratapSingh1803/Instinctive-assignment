import { asyncHandler } from "../utils/AsyncHandler.js";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const fetchStudents = asyncHandler(async (req, res) => {
    const students = await prisma.student.findMany();
    if(!students){
        res.status(400).json({
            message : "Error fetching student details",
            success : false,
        })
    }
    res.status(200).json({
        message : "Student details fetched successfully",
        success : true,
        data : students,
    })
});

const addStudent = asyncHandler(async (req, res) => {
    const {name, cohort, courses, dateJoined, lastLogin, status} = req.body;

    if(!name || !cohort || !courses || !dateJoined || !lastLogin || !status){
        res.status(400).json({
            message : "Please fill all the fields",
            success : false,
        })
    }

    const student = await prisma.student.create({
        data : {
            name,
            cohort,
            courses,
            dateJoined : new Date(dateJoined),
            lastLogin : new Date(lastLogin),
            status,
        }
    });

    if(!student){
        res.status(400).json({
            message : "Error adding student details",
            success : false,
        })
    }
    res.status(200).json({
        message : "Student details added successfully",
        success : true,
        data : student,
    })
});

const deleteStudent = asyncHandler(async (req, res) => {
    const id = req.body.id;
    if(!id){
        res.status(400).json({
            message : "Please provide student id",
            success : false,
        })
    }
    const student = await prisma.student.delete({
        where : {
            id
        }
    });
    if(!student){
        res.status(400).json({
            message : "Error deleting student details",
            success : false,
        })
    }
    res.status(200).json({
        message : "Student details deleted successfully",
        success : true,
        data : student,
    });
});

const updateStudent = asyncHandler(async (req, res) => {
    const {id, name, cohort, courses, dateJoined, lastLogin, status} = req.body;
    if(!id){
        res.status(400).json({
            message : "Please provide student id",
            success : false,
        })
    }
    const student = await prisma.student.update({
        where : {
            id
        },
        data : {
            name,
            cohort,
            courses,
            dateJoined,
            lastLogin,
            status,
        }
    });

    if(!student){
        res.status(400).json({
            message : "Error updating student details",
            success : false,
        })
    }

    res.status(200).json({
        message : "Student details updated successfully",
        success : true,
        data : student,
    })
});

export {fetchStudents, addStudent, deleteStudent, updateStudent};