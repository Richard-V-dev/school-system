import { create } from "zustand";
import type { Student } from "../types/Student";
interface StudentStore {
    students: Student[];
    addStudent: (student: Student) => void;
    updateStudentGrade: (id:number,grade:number) => void;
    deleteStudent: (id: number) => void;
}
const INITIAL_STUDENTS : Student[]=[
    {
        id: 1,
        studentId: 1,
        fullname: 'John Doe',
        email: 'johnDoe@gmail.com',
        grade: 70,
        courseId: 1
    },
    {
        id: 2,
        studentId: 2,
        fullname: 'Camila Zurita',
        email: 'camilaZurita@gmail.com',
        grade: 90,
        courseId: 2
    },
    {
        id: 3,
        studentId: 3,
        fullname: 'Alex Johnson',
        email: 'alexJohnson@gmail.com',
        grade: 85,
        courseId: 1
    }
];
export const useStudentStore = create<StudentStore>((set)=>({
        students: INITIAL_STUDENTS,
        addStudent: (student: Student) => set((state)=>({students: [...state.students, student]})),
        updateStudentGrade: (id:number, grade:number) => set((state)=>({
            students: state.students.map((student)=>student.id===id?{...student, grade}:student)
        })),
        deleteStudent: (id: number) => set((state)=>({
            students: state.students.filter(student=>student.id!==id)
        }))
    })
);