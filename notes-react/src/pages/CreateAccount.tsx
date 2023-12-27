import RegisterForm from "../components/Auth/RegisterForm";
import Logo from "../assets/logo.png";
import Footer from "../components/Footer";

function CreateAccount() {
    return (
        <div className="h-screen bg-black flex flex-col justify-between items-center p-10">
            <img src={Logo} alt="myNotes Logo" className="mt-5" />
            <RegisterForm />
            <Footer />
        </div>
    )
}

export default CreateAccount