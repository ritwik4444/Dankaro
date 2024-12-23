import React from 'react';
import '../CSS/FAB_ICONS.css';
import { Link } from 'react-router-dom';
// import { FaWhatsapp } from 'react-icons/fa';
import { FaPhone } from "react-icons/fa6";
// import { IoMail } from "react-icons/io5";

const FloatingActions = () => {
    const whatsappNumber = 'YOUR_WHATSAPP_NUMBER';
    const feedbackFormUrl = 'YOUR_FEEDBACK_FORM_URL';
    const contactUsUrl = 'YOUR_CONTACT_US_URL';

    return (
        <div className="floating-actions">
            {/* <a
                href={`https://wa.me/${whatsappNumber}`}
                className="floating-action FAB-whatsapp"
                target="_blank"
                rel="noopener noreferrer"
            >
                <i>
                    <FaWhatsapp />
                </i>
            </a>
            <a
                href={feedbackFormUrl}
                className="floating-action FAB-feedback"
                target="_blank"
                rel="noopener noreferrer"
            >
                <i><IoMail /></i>
            </a> */}
            <a
                className="floating-action FAB-phone"
            >
                <i>
                    <Link to="/ContactPage"><FaPhone /></Link>
                </i>
            </a>
        </div>
    );
};

export default FloatingActions;