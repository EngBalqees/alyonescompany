import React, { useState } from "react";
import "../header/header.css"
function Header() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <>
            <header>
                <div className="container">
                    <div className="siteicon">
                        <a href="">
                            <img src="logo.png" />
                        </a>
                    </div>
                    <div className={`nav-menu ${isSidebarOpen ? 'open' : ''}`}>
                        <span className="close-btn" onClick={toggleSidebar}>&times;</span>
                        <ul>
                            <li><a href="#contact">اتصل بنا</a></li>
                            <li><a href="#journies">الرحلات السياحية</a></li>
                            <li><a href="#why">لماذا نحن</a></li>
                            <li><a href="#slider">الصفحة الرئيسية</a></li>
                            <li><a href="#">تسجيل الدخول</a></li>
                        </ul>
                    </div>

                    <div className="menu-icon" onClick={toggleSidebar}>
                        <span>&#9776;</span>
                    </div>

                    {/* Only show overlay on mobile when sidebar is open */}
                    {isSidebarOpen && window.innerWidth <= 768 && (
                        <div className="overlay" onClick={toggleSidebar}></div>
                    )}


                </div>
            </header>

        </>
    )
}

export default Header;