import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

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
    const [isLogin, setIsLogin] = useState(false);
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        password: '',
        confirmPassword: '',
        error: ''
    });
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!isLogin) {
            // Sign Up Logic
            if (formData.password !== formData.confirmPassword) {
                setFormData(prev => ({ ...prev, error: 'Passwords do not match' }));
                return;
            }

            // Show success message for signup
            Swal.fire({
                title: 'Welcome to DesignBytes!',
                text: 'Your account has been created successfully.',
                icon: 'success',
                confirmButtonColor: '#00BBF0',
                background: '#ffffff',
                customClass: {
                    title: 'text-[#1B0E41]',
                    content: 'text-gray-600',
                    confirmButton: 'bg-[#00BBF0] hover:bg-[#009ec3]'
                },
                showClass: {
                    popup: 'animate__animated animate__fadeInDown'
                },
                hideClass: {
                    popup: 'animate__animated animate__fadeOutUp'
                }
            }).then(() => {
                setIsLogin(true); // Switch to login form after successful signup
            });
        } else {
            // Login Logic
            const validUsers = ['chanchal@designbyte.com', 'chanchal'];
            const validPassword = 'Test@1825#';

            if (validUsers.includes(formData.email.trim().toLowerCase()) && formData.password === validPassword) {
                setFormData(prev => ({ ...prev, error: '' }));

                // Show success message for login
                Swal.fire({
                    title: 'Welcome Back!',
                    text: 'You have successfully logged in.',
                    icon: 'success',
                    confirmButtonColor: '#00BBF0',
                    background: '#ffffff',
                    customClass: {
                        title: 'text-[#1B0E41]',
                        content: 'text-gray-600',
                        confirmButton: 'bg-[#00BBF0] hover:bg-[#009ec3]'
                    },
                    showClass: {
                        popup: 'animate__animated animate__fadeInDown'
                    },
                    hideClass: {
                        popup: 'animate__animated animate__fadeOutUp'
                    }
                }).then(() => {
                    navigate('/dashboard');
                });
            } else {
                setFormData(prev => ({ ...prev, error: 'Invalid credentials. Please try again.' }));
            }
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

                {/* Back to Home Button */}
                <div className="flex justify-center mb-6">
                    <Link
                        to="/"
                        className="inline-flex items-center px-7 py-3 text-sm font-medium bg-gradient-to-r from-white/95 via-white/85 to-white/75 backdrop-blur-md rounded-full border border-white/70 shadow-lg hover:shadow-xl hover:border-[#00BBF0]/30 transition-all duration-300 group relative overflow-hidden"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-[#00BBF0]/0 via-[#00BBF0]/0 to-[#00BBF0]/0 group-hover:from-[#00BBF0]/5 group-hover:via-[#00BBF0]/3 group-hover:to-[#00BBF0]/0 transition-all duration-500"></div>
                        <div className="relative z-10 flex items-center transform group-hover:translate-x-1 transition-transform duration-300">
                            <i className="fas fa-arrow-left mr-3 text-[#00BBF0]"></i>
                            <span className="bg-gradient-to-r from-[#1B0E41] to-[#1B0E41]/80 bg-clip-text text-transparent group-hover:from-[#00BBF0] group-hover:to-[#00BBF0]/80 transition-all duration-300">Return to Homepage</span>
                        </div>
                    </Link>
                </div>

                {/* Glassmorphism Login Form */}
                <div className="backdrop-blur-xl bg-white/40 border border-white/30 shadow-2xl rounded-2xl p-8 relative overflow-hidden">
                    <div className="absolute -top-8 -right-8 w-32 h-32 bg-gradient-to-br from-[#00BBF0]/30 to-[#1B0E41]/20 rounded-full blur-2xl z-0"></div>
                    <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-gradient-to-tr from-[#1B0E41]/20 to-[#00BBF0]/30 rounded-full blur-2xl z-0"></div>

                    <form className="space-y-6 relative z-10" onSubmit={handleSubmit}>
                        {!isLogin ? (
                            <>
                                <div>
                                    <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
                                        Full Name
                                    </label>
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                            <i className="fas fa-user text-[#00BBF0]"></i>
                                        </div>
                                        <input
                                            id="fullName"
                                            type="text"
                                            placeholder="Enter your full name"
                                            className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#00BBF0] focus:border-transparent transition-all bg-white/70 text-gray-900 placeholder-gray-400 backdrop-blur-sm"
                                            value={formData.fullName}
                                            onChange={e => setFormData(prev => ({ ...prev, fullName: e.target.value }))}
                                            required
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                                        Email Address
                                    </label>
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                            <i className="fas fa-envelope text-[#00BBF0]"></i>
                                        </div>
                                        <input
                                            id="email"
                                            type="email"
                                            placeholder="Enter your email address"
                                            className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#00BBF0] focus:border-transparent transition-all bg-white/70 text-gray-900 placeholder-gray-400 backdrop-blur-sm"
                                            value={formData.email}
                                            onChange={e => setFormData(prev => ({ ...prev, email: e.target.value }))}
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
                                            placeholder="Create a password"
                                            className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#00BBF0] focus:border-transparent transition-all bg-white/70 text-gray-900 placeholder-gray-400 backdrop-blur-sm"
                                            value={formData.password}
                                            onChange={e => setFormData(prev => ({ ...prev, password: e.target.value }))}
                                            required
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">
                                        Confirm Password
                                    </label>
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                            <i className="fas fa-lock text-[#00BBF0]"></i>
                                        </div>
                                        <input
                                            id="confirmPassword"
                                            type="password"
                                            placeholder="Confirm your password"
                                            className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#00BBF0] focus:border-transparent transition-all bg-white/70 text-gray-900 placeholder-gray-400 backdrop-blur-sm"
                                            value={formData.confirmPassword}
                                            onChange={e => setFormData(prev => ({ ...prev, confirmPassword: e.target.value }))}
                                            required
                                        />
                                    </div>
                                </div>
                            </>
                        ) : (
                            <>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                                        Email Address
                                    </label>
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                            <i className="fas fa-envelope text-[#00BBF0]"></i>
                                        </div>
                                        <input
                                            id="email"
                                            type="email"
                                            placeholder="Enter your email address"
                                            className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#00BBF0] focus:border-transparent transition-all bg-white/70 text-gray-900 placeholder-gray-400 backdrop-blur-sm"
                                            value={formData.email}
                                            onChange={e => setFormData(prev => ({ ...prev, email: e.target.value }))}
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
                                            value={formData.password}
                                            onChange={e => setFormData(prev => ({ ...prev, password: e.target.value }))}
                                            required
                                        />
                                    </div>
                                </div>

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
                            </>
                        )}

                        {formData.error && (
                            <div className="text-red-500 text-sm text-center bg-red-50 p-3 rounded-lg">
                                {formData.error}
                            </div>
                        )}

                        <button
                            type="submit"
                            className="w-full bg-[#00BBF0] text-white py-3 rounded-xl font-semibold shadow-md hover:bg-[#009ec3] transition-all duration-200"
                        >
                            {isLogin ? 'Sign In' : 'Create Account'}
                        </button>
                    </form>

                    <div className="mt-6 text-center relative z-10">
                        <p className="text-center text-gray-600 mt-4">
                            {isLogin ? "Don't have an account? " : "Already have an account? "}
                            <button
                                onClick={() => {
                                    setIsLogin(!isLogin);
                                    setFormData({
                                        fullName: '',
                                        email: '',
                                        password: '',
                                        confirmPassword: '',
                                        error: ''
                                    });
                                }}
                                className="text-[#00BBF0] hover:text-[#009ec3] font-semibold"
                            >
                                {isLogin ? 'Sign up' : 'Log in here'}
                            </button>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login; 