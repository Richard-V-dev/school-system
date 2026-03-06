import { useState } from "react";
import { useStudentStore } from "../hooks/useStudentStore";
import type { Student } from "../types/Student";
import Button from "./common/Button";
interface AddStudentModalProps {
    courseId: number;
    //total: number;
    onClose: () => void;
}
export default function AddStudentModal({courseId, /*total,*/ onClose}: AddStudentModalProps){
    const { addStudent } = useStudentStore();
    const [studentId, setStudentId] = useState("");
    const [fullname, setFullname] = useState("");
    const [email, setEmail] = useState("");
    const [grade, setGrade] = useState("");

    const handleSubmit = (e:any) => {
        e.preventDefault();
        const newStudent:Student = {
            id: Date.now(),
            studentId: Number(studentId),
            fullname: fullname,
            email: email,
            grade: Number(grade),
            courseId: Number(courseId)
        }
        addStudent(newStudent);
        onClose();
    };
    return(
        <div className="modal-overlay">
            <div className="modal-content">
                <div className="modal-header">
                    <h2>Add new student</h2>
                    <p>Register a student on course</p>
                </div>
            </div>
            <form onSubmit={handleSubmit} className="modal-form">
                <div className="form-section">
                    <h3>Student Information</h3>
                    <div className="form-group">
                        <label>Student ID</label>
                        <div className="input-wrapper">
                            <input
                            type="number"
                            value={studentId}
                            onChange={(e) => setStudentId(e.target.value)}
                            required
                            />
                        </div>
                    </div>
                    <div className="form-group">
                        <label>Full Name</label>
                        <input
                            type="text"
                            value={fullname}
                            onChange={(e) => setFullname(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Grade</label>
                        <input
                            type="number"
                            value={grade}
                            onChange={(e) => setGrade(e.target.value)}
                            required
                        />
                    </div>
                </div>
                <div className="modal-actions">
                    <Button type="submit" className="save-btn">Add Student</Button>
                    <Button className="cancel-btn" onClick={onClose}>
                        Cancel
                    </Button>
                </div>
            </form>
        </div>
    );
}