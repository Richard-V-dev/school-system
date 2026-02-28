import { Globe, Mail, Share2 } from "lucide-react";
import "./Footer.css"
function Footer(){
    return(<>
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-links">
                    <a href="#" className="footer-link">Privacy Policy</a>
                    <a href="#" className="footer-link">Terms of Service</a>
                    <a href="#" className="footer-link">Documentation</a>
                    <a href="#" className="footer-link">Contact Support</a>
                </div>
                <div className="footer-social">
                    <a href="#" className=""><Globe size={18}/></a>
                    <a href="#" className=""><Mail size={18}/></a>
                    <a href="#" className=""><Share2 size={18}/></a>
                </div>
                <div className="footer-copy">
                    &Copy; {new Date().getFullYear()} Eduflow Teacher Portal. Built for educators, by educators
                </div>
            </div>
        </footer>
    </>);
}
export default Footer;