import GoogleIcon from '@mui/icons-material/Google';

export default function LoginForm() {
    return (
        <>
            <div className="w-72 mt-20 p-5 bg-neutral-900 flex justify-center items-center rounded-md shadow-md">
                <form className="flex flex-col gap-10 w-64 p-2">
                    <input type="email" placeholder="Email" className="bg-transparent h-10 border-b-2 border-black"/>
                    <input type="password" placeholder="Password" className="bg-transparent h-10 border-b-2 border-black" />
                    <button className="bg-transparent h-10 border-2 border-black rounded-md text-sm">{<GoogleIcon className="mr-2 text-gray-500"/>}Log In with Google</button>
                    <button className="w-20 h-8 bg-black rounded-md text-sm">Log In</button>
                </form>
            </div>
        </>
    )
}