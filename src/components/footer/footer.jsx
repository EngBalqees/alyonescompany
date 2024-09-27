import React from "react";
import "../footer/footer.css";
function Footer() {
    return (
        <>
            <footer>
                <div id="contact" className="topfooter">
                    <div className="container">
                        <div className="row">
                                <img src="logo.png" />
                            <p>رحلات مميزة إلى أجمل الوجهات السياحية حول العالم</p>
                            <a className="tel">05973003718</a>
                            <a className="tel">0599846966</a>

                        </div>
                        <div className="contact-form">
                            <h4>تواصل معنا</h4>
                            <form >
                                <div>
                                    <label>الاسم</label>
                                    <input
                                        type="text"
                                        name="name"
                                    />
                                </div>
                                <div>
                                    <label>الموضوع</label>
                                    <input
                                        type="email"
                                        name="email"
                                    />
                                </div>
                                <div>
                                    <label>الرسالة</label>
                                    <textarea
                                        name="message"
                                    />
                                </div>
                                <button >أرسل</button>
                            </form>

                        </div>
                    </div>
                </div>
                <div className="alrights">
                    <div className="container">
                        <span>|</span>
                        جميع الحقوق محفوظة @2024 لشركة اليونس للحج والعمرة
                        <span>|</span>
                    </div>

                </div>
            </footer>
        </>
    )
}

export default Footer;