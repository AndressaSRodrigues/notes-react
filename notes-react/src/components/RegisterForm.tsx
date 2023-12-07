function RegisterForm() {
    const inputStyle = 'bg-transparent h-10 border-b-2 border-green';

    return (
        <>
            <div className="w-72 mt-10 p-5 bg-neutral-900 flex justify-center items-center rounded-md">
                <form className="flex flex-col gap-5 w-64 p-2">
                    <input
                        type="text"
                        placeholder="Name"
                        className={inputStyle} />
                    <input
                        type="email"
                        placeholder="Email"
                        className={inputStyle} />
                    <input
                        type="password"
                        placeholder="Password"
                        className={inputStyle} />
                    <input
                        type="password"
                        placeholder="Confirm Password"
                        className={inputStyle} />
                    <button
                        className="h-8 bg-green rounded-md text-sm">
                        Create my account
                    </button>
                </form>
            </div>
        </>
    )
}

export default RegisterForm