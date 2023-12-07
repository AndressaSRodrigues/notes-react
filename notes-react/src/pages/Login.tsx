import LoginForm from "../components/LoginForm";
import Logo from "../assets/logo.png";
import Footer from "../components/Footer";

export default function Login() {
    return (
        <>
            <div className="h-screen bg-black flex flex-col justify-between items-center p-10">
                <img src={Logo} alt="myNotes Logo" className="mt-5" />
                <LoginForm />
                <Footer />
            </div>
        </>
    )
}