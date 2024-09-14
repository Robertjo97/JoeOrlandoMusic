import NavBar from "../components/Navbar";
import Footer from "../components/Footer";
import EmailForm from "./EmailForm";

const Contact = () => {
    return <div className="contact-container vh-100 d-flex flex-column justify-content-between">
        <NavBar/>
        <EmailForm />
        <Footer/>
    </div>
};

export default Contact;