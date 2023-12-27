import { Link } from "react-router-dom"

function EmailVerificationModal() {
    return (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50">
            <div className="w-86 h-fit absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-400 bg-black rounded-md p-2 backdrop-sepia">
                <div className="flex flex-col items-center p-4">
                    <span className="text-lg">Check your email and verify your account.</span>
                    <Link to='/' className='w-12 text-green text-center hover:bg-neutral-900 rounded-md p-1 mt-4'>OK!</Link>
                </div>
            </div>
        </div>
    )
}

export default EmailVerificationModal
