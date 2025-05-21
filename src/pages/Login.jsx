import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Doodles = () => (
    <>
        {/* Top left doodle */}
        <svg className="absolute top-0 left-0 w-32 h-32 md:w-48 md:h-48 opacity-20 -z-10" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M50,60 Q80,20 130,40 Q180,60 150,120 Q120,180 60,160 Q10,140 50,60 Z" fill="#00BBF0" />
        </svg>
        {/* Bottom right doodle */}
        <svg className="absolute bottom-0 right-0 w-40 h-40 md:w-64 md:h-64 opacity-20 -z-10" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="100" cy="100" r="80" fill="#1B0E41" />
            <ellipse cx="100" cy="100" rx="60" ry="30" fill="#00BBF0" opacity="0.5" />
        </svg>
    </>
);

const Login = () => {
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        // Accept both email and username
        const validUsers = ['chanchal@designbyte.com', 'chanchal'];
        const validPassword = 'Test@1825#';
        if (validUsers.includes(user.trim().toLowerCase()) && password === validPassword) {
            setError('');
            navigate('/dashboard');
        } else {
            setError('Invalid credentials. Please try again.');
        }
    };

    return (
        <div className="relative min-h-screen flex items-center justify-center p-4 overflow-hidden bg-gradient-to-br from-[#e0e7ff] via-[#f0f4ff] to-[#c7d2fe]">
            <Doodles />
            <div className="w-full max-w-md">
                {/* Logo and Title */}
                <div className="text-center mb-8">
                    <img src="/images/DBlogo.png" alt="DesignBytes Logo" className="h-16 mx-auto mb-6" />
                </div>

                {/* Glassmorphism Login Form */}
                <div className="backdrop-blur-xl bg-white/40 border border-white/30 shadow-2xl rounded-2xl p-8 relative overflow-hidden">
                    <div className="absolute -top-8 -right-8 w-32 h-32 bg-gradient-to-br from-[#00BBF0]/30 to-[#1B0E41]/20 rounded-full blur-2xl z-0"></div>
                    <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-gradient-to-tr from-[#1B0E41]/20 to-[#00BBF0]/30 rounded-full blur-2xl z-0"></div>
                    <form className="space-y-6 relative z-10" onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="user" className="block text-sm font-medium text-gray-700 mb-1">
                                Email or Username
                            </label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <i className="fas fa-user text-[#00BBF0]"></i>
                                </div>
                                <input
                                    id="user"
                                    type="text"
                                    placeholder="Enter your email or username"
                                    className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#00BBF0] focus:border-transparent transition-all bg-white/70 text-gray-900 placeholder-gray-400 backdrop-blur-sm"
                                    value={user}
                                    onChange={e => setUser(e.target.value)}
                                    required
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                                Password
                            </label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <i className="fas fa-lock text-[#00BBF0]"></i>
                                </div>
                                <input
                                    id="password"
                                    type="password"
                                    placeholder="Enter your password"
                                    className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#00BBF0] focus:border-transparent transition-all bg-white/70 text-gray-900 placeholder-gray-400 backdrop-blur-sm"
                                    value={password}
                                    onChange={e => setPassword(e.target.value)}
                                    required
                                />
                            </div>
                        </div>

                        {error && (
                            <div className="text-red-500 text-sm text-center bg-red-50 p-3 rounded-lg">
                                {error}
                            </div>
                        )}

                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <input
                                    id="remember"
                                    type="checkbox"
                                    className="h-4 w-4 text-[#00BBF0] focus:ring-[#00BBF0] border-gray-300 rounded"
                                />
                                <label htmlFor="remember" className="ml-2 block text-sm text-gray-700">
                                    Remember me
                                </label>
                            </div>
                            <Link to="#" className="text-sm text-[#00BBF0] hover:text-[#009ec3]">
                                Forgot password?
                            </Link>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-[#00BBF0] text-white py-3 rounded-xl font-semibold shadow-md hover:bg-[#009ec3] transition-all duration-200"
                        >
                            Sign In
                        </button>
                    </form>

                    <div className="mt-6 text-center relative z-10">
                        <p className="text-gray-600">
                            Don't have an account?{' '}
                            <Link to="#" className="text-[#00BBF0] font-semibold hover:text-[#009ec3]">
                                Sign up
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login; 