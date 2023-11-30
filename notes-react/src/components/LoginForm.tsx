import GoogleIcon from '@mui/icons-material/Google';

export default function LoginForm() {
    return (
        <>
            <div className="w-72 mt-10 p-5 bg-neutral-900 flex justify-center items-center rounded-md">
                <form className="flex flex-col gap-5 w-64 p-2">
                    <input type="email" placeholder="Email" className="bg-transparent h-10 border-b-2 border-green"/>
                    <input type="password" placeholder="Password" className="bg-transparent h-10 border-b-2 border-green" />
                    <a href="" className='text-green text-[12px] mt-0'>I forgot my password...</a>
                    <button className="bg-transparent h-8 border-2 border-green rounded-md text-sm">{<GoogleIcon className="mr-2 text-green"/>}Log In with Google</button>
                    <button className="h-8 bg-green rounded-md text-sm">Log In</button>
                </form>
            </div>
        </>
    )
}