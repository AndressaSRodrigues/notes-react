import { auth } from "../firebase-config";
import { useNavigate } from "react-router-dom";
import Logo from "../assets/logo.png";

export default function Navbar() {
    const navigate = useNavigate();

    const logout = async () => {
        try {
            await auth.signOut();
            navigate('/');
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <header className="w-full h-[6vh] bg-black flex flex-row justify-between p-3 place-content-center lg:h-[8vh]">
            <img src={Logo} alt="myNotes Logo" width="auto" />
            <button onClick={logout} className="text-xs">Log Out</button>
        </header>
    )
};
