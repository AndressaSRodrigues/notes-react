import GoogleIcon from '@mui/icons-material/Google';
import { Link } from 'react-router-dom';

export default function LoginForm() {
    const inputStyle = 'bg-transparent h-10 border-b-2 border-green';

    return (
        <>
            <div className="w-72 mt-10 p-5 bg-neutral-900 flex justify-center items-center rounded-md">
                <form className="flex flex-col gap-5 w-64 p-2">
                    <input
                        type="email"
                        placeholder="Email"
                        className={inputStyle} />
                    <input
                        type="password"
                        placeholder="Password"
                        className={inputStyle} />
                    <a href=""
                        className='text-green text-[12px] mt-0'>
                        I forgot my password...
                    </a>
                    <button
                        className="h-8 bg-green rounded-md text-sm">
                        Log In
                    </button>
                    <button
                        className="bg-transparent h-8 border-2 border-green rounded-md text-sm">
                        {<GoogleIcon className="mr-2 text-green" />}
                        Log In with Google
                    </button>
                    <Link to='/create-account'
                        className='text-center text-xs'>
                        Not registered yet? Create an account.
                    </Link>
                </form>
            </div>
        </>
    )
}
