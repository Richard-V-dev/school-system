export interface Course{
    id:number;
    title:string;
    code:string;
    studentsCount:number;
    isActive:boolean;
    imageUrl?:string;
}