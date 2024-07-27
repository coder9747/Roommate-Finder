'use client';
import {Github} from "lucide-react"


export default function Login() {
    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-900">
        <div className="w-full max-w-sm p-4 bg-gray-800 rounded-lg">
            <div>
                <h2 className="text-2xl text-white">Login to your account</h2>
                <p className="text-gray-400 my-3">Enter your email and password below to login your account</p>
            </div>
            <div>
                <div className="flex flex-col space-y-4">
                    

                    <button
                    className="bg-red-500 hover:bg-red-600 text-white font-medium py-2 px-4 rounded-md mb-2 w-full"
                >
                    login with Google
                </button>
                <button
                    className="flex justify-center gap-3 bg-gray-900 hover:bg-black text-white font-medium py-2 px-4 rounded-md w-full"
                >
                    <Github />
                    <span>

                    login with GitHub                    </span>
                </button>
                    <div className="flex items-center my-2">
                        <hr className="w-full border-t border-gray-600" />
                        <span className="mx-4 text-center  text-gray-400">OR CONTINUE WITH</span>
                        <hr className="w-full border-t border-gray-600" />
                    </div>
                    <input type="email" placeholder="Email" className="p-2 my-5 bg-gray-700 text-white rounded" />
                    <input type="password" placeholder="Password" className="p-2 bg-gray-700 text-white rounded" />
                </div>
            </div>
            <div>
                <button className="w-full my-5 bg-blue-600 text-white p-2 rounded">Login</button>

            </div>
        </div>
    </div>
    );
}