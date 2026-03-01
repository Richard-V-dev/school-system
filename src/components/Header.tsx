import { LayoutDashboard, Moon, Search, Settings } from "lucide-react";
import { NavLink, useLocation } from "react-router-dom";
import "./Header.css"
function Header(){
    const location = useLocation();
    const isDashboard = location.pathname.includes("/dashboard");
    return(<>
        <header className="header">
            <div className="header-container">
                <div className="header-left">
                    <NavLink to="/" className="logo-link">
                        {isDashboard? (<>
                            <div className="logo-icon"><LayoutDashboard size={20} className="text-white"/></div>
                            <span>CourseManager</span>
                        </>):(<>
                            <div className="logo-icon-blue">
                                <svg></svg>
                            </div>
                            <span className="">EduFlow</span>
                        </>)}
                    </NavLink>
                </div>
                <nav className="header-nav">
                    {isDashboard?(<>
                        <NavLink to="/dashboard">Dashboard</NavLink>
                        <NavLink to="/dashboard">Courses</NavLink>
                        <NavLink to="/">Students</NavLink>
                        <NavLink to="/">Reports</NavLink>
                    </>):(<>
                        <NavLink to="/">Home</NavLink>
                        <NavLink to="/dashboard">Courses</NavLink>
                        <NavLink to="/about">About</NavLink>
                    </>)}
                </nav>
                <div className="header-right">
                    {isDashboard?(<>
                        <button className="icon-btn"><Search size={18}/></button>
                        <button className="icon-btn"><Settings size={18}/></button>
                    </>):(<>
                        <button className="icon-btn"><Moon size={18}/></button>
                    </>)}
                </div>
            </div>
        </header>
    </>);
}
export default Header;