import { create } from 'zustand';
import type {Course} from '../types/Course';
interface CourseState{
    courses: Course[];
    addCourse: (course: Course) => void;
    toggleCourseActive: (id:number, active:boolean) => void;
}
const INITIAL_COURSES: Course[] = [
    {
        id:1,
        title:"Introduction to Programming",
        code:"CS101",
        studentsCount:120,
        isActive:true,
        imageUrl:"https://source.unsplash.com/400x300/?programming"
    },
    {
        id:2,
        title:"Advanced Programming",
        code:"CS201",
        studentsCount:120,
        isActive:true,
        imageUrl:"https://source.unsplash.com/400x300/?programming"
    },
    {
        id:3,
        title:"Data Structures",
        code:"CS102",
        studentsCount:80,
        isActive:false,
        imageUrl:"https://source.unsplash.com/400x300/?datastructures"
    }
];
export const useCourseStore = create<CourseState>((set)=>(
    {
    courses: INITIAL_COURSES,
    addCourse: (course: Course) => set((state)=>({courses: [...state.courses, course]})),
    toggleCourseActive: (id:number, active:boolean) => 
        set((state)=>(
        {
            courses: state.courses.map(course=>course.id===id?{...course,isActive:active}:course)
        }
        ))
    }
));