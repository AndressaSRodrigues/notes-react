import { useState } from "react";
import EmailVerificationModal from "./EmailVerificationModal";
import { auth } from "../firebase-config";
import { createUserWithEmailAndPassword, updateProfile, sendEmailVerification } from "@firebase/auth";

function RegisterForm() {
    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [confirmPassword, setConfirmPassword] = useState<string>('');
    const [message, setMessage] = useState<string>('');
    const [verifyModal, setVerifyModal] = useState<boolean>(false);

    const registerUser =  async () => {
        try {
            if (password !== confirmPassword) {
                setMessage("Passwords don't match");
                return;
            }

            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;

            await updateProfile(user, { displayName: name });
            await sendEmailVerification(user);
            setVerifyModal(true);

            return user;

        } catch(error){
            setMessage('Failed to create user.')
            console.error(error);
        }
    };

    const inputStyle = 'bg-transparent h-10 border-b-2 border-green';

    return (
        <>
            <div className="w-72 mt-10 p-5 bg-neutral-900 flex justify-center items-center rounded-md">
                <form
                    className="flex flex-col gap-5 w-64 p-2">
                    <input
                        type="text"
                        value={name}
                        placeholder="Name"
                        onChange={(e) => setName(e.target.value)}
                        className={inputStyle} />
                    <input
                        type="email"
                        value={email}
                        placeholder="Email"
                        onChange={(e) => setEmail(e.target.value)}
                        className={inputStyle} />
                    <input
                        type="password"
                        value={password}
                        placeholder="Password"
                        onChange={(e) => setPassword(e.target.value)}
                        className={inputStyle} />
                    <input
                        type="password"
                        value={confirmPassword}
                        placeholder="Confirm Password"
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        className={inputStyle} />
                    <span>{message}</span>
                    <button
                        type="button"
                        onClick={registerUser}
                        className="h-8 bg-green rounded-md text-sm">
                        Create my account
                    </button>
                </form>
            </div>
            {verifyModal && <EmailVerificationModal />}
        </>
    )
}

export default RegisterForm