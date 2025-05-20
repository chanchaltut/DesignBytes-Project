import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

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
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#00204a] via-[#00D4FF] to-[#1B0E41] relative overflow-hidden">
            {/* Animated floating shapes */}
            <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#00D4FF]/20 rounded-full blur-3xl animate-float-slow z-0"></div>
            <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-[#00204a]/30 rounded-full blur-3xl animate-float-fast z-0"></div>
            {/* Glassmorphism Card */}
            <div className="relative z-10 w-full max-w-md p-10 rounded-3xl shadow-2xl backdrop-blur-2xl bg-white/30 border border-white/20 animate-fade-in">
                <div className="flex flex-col items-center mb-8">
                    <div className="bg-white p-2 rounded-full shadow-lg mb-4">
                        <img src="/images/DBlogo.png" alt="DesignBytes Logo" className="h-16 drop-shadow-lg" />
                    </div>
                    <h1 className="text-4xl font-extrabold text-[#00204a] mb-2 tracking-tight">Sign in</h1>
                    <p className="text-[#1B0E41] text-opacity-80 mb-2 text-base">to access DesignBytes</p>
                </div>
                <form className="space-y-7" onSubmit={handleSubmit}>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="user" className="text-[#00204a] font-semibold text-base">Email or Username</label>
                        <div className="flex items-center bg-white/60 rounded-xl overflow-hidden shadow-sm focus-within:ring-2 focus-within:ring-[#00D4FF] transition-all">
                            <span className="flex items-center justify-center px-4 h-full text-lg text-[#00D4FF]"><i className="fas fa-user"></i></span>
                            <input
                                id="user"
                                type="text"
                                placeholder="Enter your email or username"
                                className="flex-1 px-4 py-3 bg-transparent outline-none text-[#00204a] placeholder-[#00204a]/60 text-base"
                                autoComplete="username"
                                required
                                value={user}
                                onChange={e => setUser(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="password" className="text-[#00204a] font-semibold text-base">Password</label>
                        <div className="flex items-center bg-white/60 rounded-xl overflow-hidden shadow-sm focus-within:ring-2 focus-within:ring-[#00D4FF] transition-all">
                            <span className="flex items-center justify-center px-4 h-full text-lg text-[#00D4FF]"><i className="fas fa-lock"></i></span>
                            <input
                                id="password"
                                type="password"
                                placeholder="Enter your password"
                                className="flex-1 px-4 py-3 bg-transparent outline-none text-[#00204a] placeholder-[#00204a]/60 text-base"
                                autoComplete="current-password"
                                required
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                            />
                        </div>
                    </div>
                    {error && <div className="text-red-500 text-sm text-center">{error}</div>}
                    <div className="flex justify-end">
                        <Link to="#" className="text-white text-sm hover:underline">Forgot password?</Link>
                    </div>
                    <button
                        type="submit"
                        className="w-full py-3 rounded-xl bg-gradient-to-r from-[#00D4FF] to-[#1B0E41] text-white font-bold text-lg shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-200 backdrop-blur-md"
                    >
                        Login
                    </button>
                </form>
                <div className="text-center mt-8">
                    <span className="text-[#00204a] text-base">Don't have an account? </span>
                    <Link to="#" className="text-white font-semibold hover:underline">Sign up</Link>
                </div>
            </div>
            {/* Animations */}
            <style>{`
                @keyframes float-slow {
                    0%, 100% { transform: translateY(0) scale(1); }
                    50% { transform: translateY(-30px) scale(1.05); }
                }
                @keyframes float-fast {
                    0%, 100% { transform: translateY(0) scale(1); }
                    50% { transform: translateY(30px) scale(1.08); }
                }
                .animate-float-slow { animation: float-slow 7s ease-in-out infinite; }
                .animate-float-fast { animation: float-fast 5s ease-in-out infinite; }
                @keyframes fade-in {
                    from { opacity: 0; transform: translateY(40px) scale(0.98); }
                    to { opacity: 1; transform: translateY(0) scale(1); }
                }
                .animate-fade-in { animation: fade-in 0.8s cubic-bezier(.4,2,.6,1) both; }
            `}</style>
        </div>
    );
};

export default Login; 