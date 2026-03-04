interface CourseCardProps{
    id:number;
    title:string;
    code:string;
    studentsCount:number;
    description?:string;
    isActive: boolean;
    imageUrl?: string;
    onToggle: (id:number, active:boolean)=>void;
}
function CourseCard({id,title,code,studentsCount,description,isActive,imageUrl,onToggle}:CourseCardProps){
    return (
        <>
            <div className="course-card">
                <div className="course-image-container">
                    {imageUrl &&(<>
                        <img src={imageUrl} alt={title} className="course-image"/>
                    </>)}
                </div>
                <div className="course-content">
                    <h3 className="course-title">{title}</h3>
                    <h4 className="course-subtitle">
                        {studentsCount} students - {code}
                    </h4>
                    <p className="course-description">{description}</p>
                </div>
                <div className="course-actions">
                    <span className="course-enable-label">Enable course</span>
                    <button type="button" role="switch" disabled onClick={()=>onToggle(id,isActive)} className="toggle-btn "></button>
                </div>
            </div>
        </>
    );
}
export default CourseCard;