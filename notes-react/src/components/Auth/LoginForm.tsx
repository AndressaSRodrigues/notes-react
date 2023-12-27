import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth, googleProvider } from '../../firebase-config';
import { signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import GoogleIcon from '@mui/icons-material/Google';

export default function LoginForm() {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [message, setMessage] = useState<string>('');
    const navigate = useNavigate();

    const login = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        try {
            const user = await signInWithEmailAndPassword(auth, email, password);
            navigate('/main');
            return user;
        } catch (error) {
            console.error(error);
            setMessage('Invalid credentials');
        }
    };

    const loginWithGoogle = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        try {
            const result = await signInWithPopup(auth, googleProvider);
            console.log(result.user);
            navigate('/main');
        } catch (error) {
            console.error(error);
            setMessage('Google login failed');
        }
    };

    const inputStyle = 'bg-transparent h-10 border-b-2 border-green';

    return (
        <>
            <div className="w-72 mt-10 p-5 bg-neutral-900 flex justify-center items-center rounded-md">
                <form className="flex flex-col gap-5 w-64 p-2">
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className={inputStyle}
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className={inputStyle}
                    />
                    <span className='text-green text-[12px] mt-0'>
                        {message}
                    </span>
                    <a href="" className='text-green text-[12px] mt-0'>
                        I forgot my password...
                    </a>
                    <button onClick={(e) => login(e)} className="h-8 bg-green rounded-md text-sm">
                        Log In
                    </button>
                    <button
                        onClick={(e) => loginWithGoogle(e)}
                        className="bg-transparent h-8 border-2 border-green rounded-md text-sm"
                    >
                        {<GoogleIcon className="mr-2 text-green" />}
                        Log In with Google
                    </button>
                    <Link to='/create-account' className='text-center text-xs'>
                        Not registered yet? Create an account.
                    </Link>
                </form>
            </div>
        </>
    );
}
