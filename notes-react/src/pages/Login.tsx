import LoginForm from "../components/LoginForm";

export default function Login() {
    return (
        <>
        <div className="h-screen bg-note-pen bg-cover bg-center flex flex-col justify-start items-center p-10">
        <h1 className="text-6xl">myNotes</h1>
            <LoginForm />
        </div>
        </>
    )
}