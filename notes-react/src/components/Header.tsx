import Logo from "../assets/logo.png";

export default function Header(){
    return (
        <header className="w-full h-[6vh] bg-black flex flex-row justify-between p-3 place-content-center lg:h-[8vh]">
            <img src={Logo} alt="myNotes Logo" width="auto" />
            <button className="text-xs">Log Out</button>
        </header>
    )
};
