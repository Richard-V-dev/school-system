import { useParams } from "react-router-dom";
import { useCourseStore } from "../hooks/useCourseStore";
import { useState } from "react";
import { useStudentStore } from "../hooks/useStudentStore";
import { Edit2, Eye, FileSpreadsheet, Plus,  Trash2 } from "lucide-react";
import Button from "../components/common/Button";
import AddStudentModal from "../components/AddStudentModal";
import './CourseStudentPage.css';
export default function CourseStudentPage(){
    const {courseId} = useParams<{courseId:string}>();
    const { courses } = useCourseStore();
    const { students } = useStudentStore();
    const [isModalOpen, setIsModalOpen] = useState(false);

    const courseStudents = students.filter(student=>student.courseId === Number(courseId));
    const course = courses.find(course=>course.id === Number(courseId));

    if(!course){
        return <div className="container" >Course not found</div>
    }
    return(
        <>
  <div className="students-page container">

    <div className="students-breadcrumbs">
      <span className="breadcrumb-link">Courses -</span>
      <span className="breadcrumb-current">{course.title}</span>
    </div>

    <div className="students-header">

      <div className="students-title-group">
        <h1 className="students-title">Student list and Grading</h1>

        <div className="students-subtitle">
          <span className="students-count">
            {courseStudents.length} Students
          </span>
        </div>
      </div>

      <div className="students-header-actions">

        <button className="import-excel-btn">
          <FileSpreadsheet size={18} />
          <span className="btn-text">Import to Excel</span>
        </button>

        <Button 
            className="add-student-btn"
            onClick={() => setIsModalOpen(true)}
            >
            <span className="btn-content">
                <Plus size={18} />
                Add student
            </span>
            </Button>

      </div>

    </div>


    <div className="students-table-container">

      <table className="students-table">

        <thead className="students-table-head">
          <tr className="students-table-row-header">
            <th className="students-th">ID</th>
            <th className="students-th">FULL NAME</th>
            <th className="students-th">EMAIL</th>
            <th className="students-th">GRADE (0-100)</th>
            <th className="students-th">ACTIONS</th>
          </tr>
        </thead>

        <tbody className="students-table-body">

          {courseStudents.map(student => {
            return (
              <tr key={student.id} className="students-row">

                <td className="students-td students-id">
                  {student.studentId}
                </td>

                <td className="students-td students-name">
                  {student.fullname}
                </td>

                <td className="students-td students-email">
                  {student.email}
                </td>

                <td className="students-td students-grade">
                  {student.grade}
                </td>

                <td className="students-td students-actions">

                  <div className="action-buttons">

                    <button className="icon-button view-btn">
                      <Eye size={18} />
                      Edit
                    </button>

                    <button className="icon-button edit-btn">
                      <Edit2 size={18} />
                      Delete
                    </button>

                    <button className="icon-button delete-btn">
                      <Trash2 size={18} />
                      Remove
                    </button>

                    <button className="grade-action-btn">
                      Grade
                    </button>

                  </div>

                </td>

              </tr>
            )
          })}

          {courseStudents.length === 0 && (
            <tr className="students-empty-row">
              <td colSpan={5} className="no-students">
                No students enrolled in this course.
              </td>
            </tr>
          )}

        </tbody>

      </table>

    </div>

    {isModalOpen && (
      <AddStudentModal
        courseId={Number(courseId)}
        onClose={() => setIsModalOpen(false)}
      />
    )}

  </div>
</>
    );
}


