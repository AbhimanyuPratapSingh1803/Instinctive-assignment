import { Router } from "express";
import { fetchStudents, addStudent, deleteStudent, updateStudent } from "../controllers/student.controller.js";

const router = Router();

router.route("/getStudents").get(fetchStudents);
router.route("/addStudent").post(addStudent);
router.route("/deleteStudent").post(deleteStudent);
router.route("/updateStudent").post(updateStudent);

export default router;