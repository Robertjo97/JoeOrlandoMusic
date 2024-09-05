import { useState } from "react";

const EmailForm = () => {
    const [formData, setFormData] = useState({
        user_name: '',
        user_email: '',
        user_message: ''
    });

    const [messageStatus, setMessageStatus] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const sendEmail = (e) => {
        e.preventDefault();

        const emailParams = {
            user_name: formData.user_name,
            user_email: formData.user_email,
            user_message: formData.user_message
        };

        emailjs
            .send('contact_service', 'contact_form', emailParams, 'k_z5jHTJWjRbDWcZZ')
            .then(
                () => {
                    setMessageStatus("Thank you for contacting! Your message has been sent.");
                },
                (error) => {
                    setMessageStatus("There was a problem sending your message, please try again later.");
                }
            );
    };

    return (
        <div className="email-form container border rounded-3 w-25 mb-5">
            <form onSubmit={sendEmail} className="p-5">
                <h2 className="text-center mb-5">Contact me!</h2>
                <div className="email-name mb-4">
                    <label htmlFor="user_name" className="form-label">Your Name:</label>
                    <input className="form-control" id="user_name" type="text" name="user_name" value={formData.name} onChange={handleChange} required/>
                </div>
                <div className="email-email mb-4">
                    <label htmlFor="user_email" className="form-label">Your Email:</label>
                    <input className="form-control" id="user_email" type="text" name="user_email" value={formData.email} onChange={handleChange} required/>
                </div>
                <div className="email-message mb-5">
                    <label htmlFor="user_message" className="form-label">Your Message:</label>
                    <textarea className="form-control" rows="3" id="user_message" name="user_message" value={formData.message} onChange={handleChange} required></textarea>
                </div>
                <button type="submit" className="btn btn-outline-light d-block mx-auto px-5">Send</button>
            </form>
            {messageStatus && <p className="text-center">{messageStatus}</p>}
        </div>
    );
}

export default EmailForm;