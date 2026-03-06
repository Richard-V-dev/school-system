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
        imageUrl:"https://images.unsplash.com/photo-1517694712202-14dd9538aa97"
    },
    {
        id:2,
        title:"Advanced Programming",
        code:"CS201",
        studentsCount:120,
        isActive:true,
        imageUrl:"https://images.unsplash.com/photo-1551288049-bebda4e38f71"
    },
    {
        id:3,
        title:"Mathematics for programming",
        code:"CS102",
        studentsCount:80,
        isActive:false,
        imageUrl:"https://images.unsplash.com/photo-1509228627152-72ae9ae6848d"
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