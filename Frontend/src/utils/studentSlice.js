import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    students: [],
    currentStudent: {},
    loading: true,
    addStudent: false,
    currTheme: "light",
    isHidden: false,
};
const BASE_URL = import.meta.env.VITE_BASE_URL;

export const studentSlice = createSlice({
    name: "student",
    initialState,
    reducers: {
        getStudents: (state, action) => {
            state.students = action.payload;
            state.loading = false;
        },
        setCurrentStudent: (state, action) => {
            state.currentStudent = action.payload;
        },
        addStudent: (state, action) => {
            state.students = state.students.push(action.payload);
        },
        deleteStudent: (state, action) => {
            state.students = state.students.filter(
                (student) => student.id !== action.payload
            );
        },
        updateStudent: (state, action) => {
            state.students = state.students.map((student) =>
                student.id === action.payload.id
                    ? {
                          ...student,
                          name: action.payload.name,
                          cohort: action.payload.cohort,
                          courses: action.payload.courses,
                          dateJoined: action.payload.dateJoined,
                          lastLogin: action.payload.lastLogin,
                          status: action.payload.status,
                      }
                    : student
            );
        },

        toggleAddStudent: (state, action) => {
            state.addStudent = !state.addStudent;
        },
        toggleTheme: (state, action) => {
            state.currTheme = action.payload;
        },
        hideSidebar: (state, action) => {
            state.isHidden = !state.isHidden;
        },
    },
});

export const {
    getStudents,
    setCurrentStudent,
    addStudent,
    deleteStudent,
    updateStudent,
    toggleAddStudent,
    toggleTheme,
    hideSidebar,
} = studentSlice.actions;
export default studentSlice.reducer;

export const editStudent = ({id, name, cohort, courses, dateJoined, lastLogin, status}) => async (dispatch, getState) => {
    const newForm = {
        id, name, cohort, courses, dateJoined : new Date(dateJoined), lastLogin : new Date(lastLogin), status
    }
    console.log(newForm);
    try {
        const response = await fetch(`${BASE_URL}/student/updateStudent`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newForm)
        })
        const data = await response.json()
        if(data.success) {
            console.log(data.data);
            dispatch(updateStudent(data.data));
        }
        else{
            console.log(data.message);
        }
    }
    catch (error) {
        console.error("Error occured while updating student : ", error);
    }
};
