import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
function Layout(){
    return (
        <>
            <div className="layout-container">
                <Header/>
                    <main className="main-content">
                        <Outlet/>
                    </main>
                <Footer/>
            </div>
        </>
    );
}
export default Layout