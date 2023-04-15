import React, { memo } from "react";

export default memo(function Footer(){
    return(
        <div className="footer">
            <button className="footer-btn">
                {<svg className="home-svg" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                width="56.689px" height="56.689px" viewBox="0 0 56.689 56.689" enable-background="new 0 0 56.689 56.689" xml:space="preserve">
                <path d="M48.595,54.551H31.57v-17.97h-6.45v17.97H8.095V33.343H1.156l10.6-12.166V6.76h9.068v4.011l7.521-8.632l27.189,31.204
                h-6.939V54.551z M33.57,52.551h13.025V31.343h4.545L28.345,5.183l-9.521,10.928V8.76h-5.068v13.167l-8.205,9.416h4.545v21.208H23.12
                v-17.97h10.45V52.551z"/>
                </svg>}
            </button>
            <button className="footer-btn"></button>
            <button className="footer-btn"></button>
            <button className="footer-btn"></button>
            <button className="footer-btn"></button>
        </div>
    )
})