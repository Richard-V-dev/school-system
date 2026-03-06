import { Plus, Star } from "lucide-react";
import Button from "../components/common/Button";
import CourseCard from "../components/CourseCard";
import { useCourseStore } from "../hooks/useCourseStore";
import './DashboardPage.css';
import { useState } from "react";
function DashboardPage(){
    const {courses, toggleCourseActive } = useCourseStore();
    const [view, setView] = useState("grid");
    return (
        <>
            <div className="dashboard-page container">
                <div className="dashboard-header">
                    <div className="dashboard-title-area">
                        <h1 className="dashboard-title">Courses Overview</h1>
                        <p className="dashboard-subtitle">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos neque reiciendis at dolor sunt animi, nulla, esse accusamus ipsam repellendus enim praesentium unde quidem fugit? Facere ducimus dolorum eligendi. Rerum.
                        </p>
                    </div>
                    <div className="dashboard-controls">
                        <div className={`view-toggle ${view === "list" ? "list-active" : ""}`}>

                            <span className="view-indicator"></span>

                            <button
                                className={`view-btn ${view === "grid" ? "active" : ""}`}
                                onClick={() => setView("grid")}
                            >
                                Grid
                            </button>

                            <button
                                className={`view-btn ${view === "list" ? "active" : ""}`}
                                onClick={() => setView("list")}
                            >
                                List
                            </button>

                        </div>
                    </div>
                </div>
                <div className="course-grid">
                    <div className="add-course-card">
                        <div className="add-course-icon">
                            <Plus size={24} className="text-primary"/>
                        </div>
                        <h3 className="add-course-title">Add new course</h3>
                        <p className="add-course-subtitle">Set up new course</p>
                    </div>
                    {courses.map(course=><>
                        <CourseCard 
                            key={course.id}
                            id={course.id}
                            title={course.title}
                            code={course.code}
                            studentsCount={course.studentsCount}
                            isActive={course.isActive}
                            imageUrl={course.imageUrl}
                            description={course.description}
                            onToggle={toggleCourseActive}
                        />
                    </>)}
                </div>
                <div className="generator-banner">
                    <div className="generator-content">
                        <div className="generator-icon-wrapper">
                            <Star size={24} className="text-white"/>
                        </div>
                        <div className="generator-text">
                            <h3 className="generator-title">Try course generator</h3>
                            <p className="generator-desc">Use AI based in your requirements</p>
                        </div>
                    </div>
                    <Button>Launch Assistant</Button>
                </div>
            </div>
        </>
    );
}
export default DashboardPage;