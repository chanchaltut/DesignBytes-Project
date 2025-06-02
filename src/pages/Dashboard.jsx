import React, { useState, useRef, useEffect } from 'react';
import Swal from 'sweetalert2';

const roleOptions = [
    'Frontend Developer',
    'Backend Developer',
    'Fullstack Developer',
    'UI/UX Designer',
    'Marketing',
    'Management',
    'QA Engineer',
    'DevOps',
    'Project Manager',
    'Content Writer',
    'Sales',
    'Support',
    'HR',
    'Business Analyst',
    'SEO Specialist',
    'Other',
];

const initialTeam = [
    {
        id: 1,
        name: 'John Doe',
        email: 'john@example.com',
        username: 'johndoe',
        password: 'password123',
        role: 'Fullstack Developer',
        profilePic: 'https://randomuser.me/api/portraits/men/32.jpg',
    },
];

const userProfile = {
    name: 'Chanchal',
    email: 'chanchal@designbyte.com',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
};

const CollapseIcon = ({ collapsed }) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#A0AEC0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        {collapsed ? (
            <>
                <polyline points="8 4 4 8 8 12" />
                <polyline points="16 4 20 8 16 12" />
            </>
        ) : (
            <>
                <polyline points="4 16 8 20 12 16" />
                <polyline points="12 8 8 4 4 8" />
            </>
        )}
    </svg>
);

const Dashboard = () => {
    const [team, setTeam] = useState(initialTeam);
    const [sidebarOpen, setSidebarOpen] = useState(true);
    const [showModal, setShowModal] = useState(false);
    const [modalMode, setModalMode] = useState('add');
    const [editMember, setEditMember] = useState(null);
    const [form, setForm] = useState({ name: '', email: '', username: '', password: '', role: roleOptions[0], profilePic: '' });
    const [showChat, setShowChat] = useState(false);
    const [chatInput, setChatInput] = useState('');
    const [chatMessages, setChatMessages] = useState([
        { from: 'support', text: 'Hi! How can we help you today?' },
    ]);
    const chatEndRef = useRef(null);

    useEffect(() => {
        if (showChat && chatEndRef.current) {
            chatEndRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [chatMessages, showChat]);

    useEffect(() => {
        if (showModal) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [showModal]);

    const openAddModal = () => {
        setModalMode('add');
        setForm({ name: '', email: '', username: '', password: '', role: roleOptions[0], profilePic: '' });
        setShowModal(true);
    };
    const openEditModal = (member) => {
        setModalMode('edit');
        setEditMember(member);
        setForm({ ...member });
        setShowModal(true);
    };
    const closeModal = () => {
        setShowModal(false);
        setEditMember(null);
    };
    const handleFormChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };
    const handleFormSubmit = (e) => {
        e.preventDefault();
        if (modalMode === 'add') {
            setTeam([...team, { ...form, id: Date.now() }]);
        } else if (modalMode === 'edit' && editMember) {
            setTeam(team.map(m => m.id === editMember.id ? { ...form, id: editMember.id } : m));
        }
        closeModal();
    };
    const handleDeactivate = (id) => {
        setTeam(team.map(m => m.id === id ? { ...m, status: m.status === 'ACTIVE' ? 'INACTIVE' : 'ACTIVE' } : m));
    };
    const handleLogout = () => {
        window.location.href = '/login';
    };
    // Chat logic
    const handleSendChat = (e) => {
        e.preventDefault();
        if (chatInput.trim() === '') return;
        setChatMessages([...chatMessages, { from: 'you', text: chatInput }]);
        setTimeout(() => {
            setChatMessages(msgs => [...msgs, { from: 'support', text: 'Thanks for your message! (Demo reply)' }]);
        }, 1000);
        setChatInput('');
    };

    return (
        <div className="min-h-screen bg-[#f6f8fa] flex">
            {/* Sidebar */}
            <aside className={`flex flex-col justify-between bg-white border-r border-gray-200 min-h-screen transition-all duration-200 ${sidebarOpen ? 'w-44' : 'w-12'} relative`}>
                <div>
                    <div className="flex items-center justify-between px-1 py-4">
                        <div className="flex justify-center w-full">
                            <img src="/images/DBlogo.png" alt="Logo" className={`transition-all object-contain ${sidebarOpen ? 'h-8 w-24' : 'h-6 w-6'}`} style={{ aspectRatio: '1/1' }} />
                        </div>
                        <button
                            className="ml-1 p-1 rounded hover:bg-[#e6f7fd] text-[#00BBF0] focus:outline-none"
                            onClick={() => setSidebarOpen(!sidebarOpen)}
                            aria-label="Toggle sidebar"
                        >
                            <CollapseIcon collapsed={!sidebarOpen} />
                        </button>
                    </div>
                    <nav className="mt-4">
                        <ul className="space-y-1">
                            <li>
                                <a href="#" className={`flex items-center px-2 py-1.5 rounded-lg font-semibold text-sm ${sidebarOpen ? 'justify-start' : 'justify-center'} bg-[#e6f7fd] text-[#00BBF0]`}>
                                    <i className="fas fa-users mr-2"></i>
                                    {sidebarOpen && <span>Manage Team</span>}
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className="mb-4 flex flex-col items-center">
                    <button
                        className={`flex items-center px-2 py-1.5 rounded-lg text-red-500 font-semibold hover:bg-red-50 transition-all text-sm ${sidebarOpen ? 'w-full justify-start' : 'justify-center'}`}
                        onClick={handleLogout}
                    >
                        <i className="fas fa-sign-out-alt mr-2"></i>
                        {sidebarOpen && <span>Logout</span>}
                    </button>
                </div>
            </aside>
            {/* Main Content */}
            <div className="flex-1 flex flex-col min-h-screen">
                {/* Topbar */}
                <header className="h-12 flex items-center justify-between px-6 bg-white border-b border-gray-200">
                    <span className="font-bold text-lg text-[#00204a]">Dashboard</span>
                    <span className="text-gray-600 text-xs">Welcome, <span className="font-semibold">admin@designbyte.com</span></span>
                </header>
                {/* Content */}
                <main className="flex-1 p-3 md:p-6">
                    <div className="max-w-5xl mx-auto">
                        <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-4">
                            <div className="flex items-center justify-between mb-3">
                                <h2 className="font-bold text-base text-[#00204a]">Team Members</h2>
                                <button
                                    className="bg-[#00BBF0] hover:bg-[#009ec3] text-white px-4 py-1.5 rounded-lg font-semibold shadow-sm transition-all text-sm"
                                    onClick={openAddModal}
                                >
                                    Add Member
                                </button>
                            </div>
                            <div className="overflow-x-auto">
                                <table className="w-full text-left text-xs">
                                    <thead>
                                        <tr className="bg-[#f6f8fa] text-[#00204a]">
                                            <th className="py-2 px-2 font-semibold">NAME</th>
                                            <th className="py-2 px-2 font-semibold">EMAIL</th>
                                            <th className="py-2 px-2 font-semibold">USERNAME</th>
                                            <th className="py-2 px-2 font-semibold">ROLE</th>
                                            <th className="py-2 px-2 font-semibold">PROFILE PIC</th>
                                            <th className="py-2 px-2 font-semibold">ACTIONS</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {team.map((member) => (
                                            <tr key={member.id} className="bg-white border-b last:border-b-0">
                                                <td className="py-2 px-2 font-bold text-[#00204a] align-top">{member.name}</td>
                                                <td className="py-2 px-2 align-top">{member.email}</td>
                                                <td className="py-2 px-2 align-top">{member.username}</td>
                                                <td className="py-2 px-2 align-top">
                                                    <span className="bg-[#e6f7fd] text-[#00BBF0] px-2 py-0.5 rounded-full text-xs font-semibold">{member.role}</span>
                                                </td>
                                                <td className="py-2 px-2 align-top">
                                                    {member.profilePic ? (
                                                        <img src={member.profilePic} alt={member.name} className="w-8 h-8 rounded-full object-cover border-2 border-[#00BBF0]/40" />
                                                    ) : (
                                                        <span className="text-gray-400">N/A</span>
                                                    )}
                                                </td>
                                                <td className="py-2 px-2 align-top">
                                                    <button
                                                        className="text-[#00BBF0] font-semibold mr-2 hover:underline text-xs"
                                                        onClick={() => openEditModal(member)}
                                                    >
                                                        Edit
                                                    </button>
                                                    <button
                                                        className="text-red-500 font-semibold hover:underline text-xs"
                                                        onClick={async () => {
                                                            const result = await Swal.fire({
                                                                title: 'Are you sure?',
                                                                text: "You won't be able to revert this!",
                                                                icon: 'warning',
                                                                showCancelButton: true,
                                                                confirmButtonColor: '#00BBF0',
                                                                cancelButtonColor: '#d33',
                                                                confirmButtonText: 'Yes, delete it!'
                                                            });
                                                            if (result.isConfirmed) {
                                                                setTeam(team.filter(m => m.id !== member.id));
                                                                Swal.fire('Deleted!', 'The member has been deleted.', 'success');
                                                            }
                                                        }}
                                                    >
                                                        Delete
                                                    </button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
            {/* Add/Edit Member Modal */}
            {showModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30">
                    <div className="bg-white rounded-xl shadow-lg p-5 w-full max-w-md relative max-h-[80vh] overflow-y-auto">
                        <button
                            className="absolute top-3 right-4 w-8 h-8 flex items-center justify-center rounded-lg bg-[#00BBF0] hover:bg-[#009ec3] text-white text-xl shadow-md focus:outline-none"
                            onClick={closeModal}
                            aria-label="Close"
                        >
                            <svg width="16" height="16" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="4" y1="4" x2="14" y2="14" />
                                <line x1="14" y1="4" x2="4" y2="14" />
                            </svg>
                        </button>
                        <h3 className="text-lg font-bold mb-3 text-[#00204a]">{modalMode === 'add' ? 'Add Member' : 'Edit Member'}</h3>
                        <form onSubmit={handleFormSubmit} className="space-y-3">
                            <div>
                                <label className="block text-[#00204a] font-semibold mb-1 text-sm">Name</label>
                                <input
                                    name="name"
                                    value={form.name}
                                    onChange={handleFormChange}
                                    className="w-full px-3 py-1.5 rounded-lg border border-gray-200 focus:ring-2 focus:ring-[#00BBF0] outline-none text-sm"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-[#00204a] font-semibold mb-1 text-sm">Email</label>
                                <input
                                    name="email"
                                    value={form.email}
                                    onChange={handleFormChange}
                                    className="w-full px-3 py-1.5 rounded-lg border border-gray-200 focus:ring-2 focus:ring-[#00BBF0] outline-none text-sm"
                                    type="email"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-[#00204a] font-semibold mb-1 text-sm">Username</label>
                                <input
                                    name="username"
                                    value={form.username}
                                    onChange={handleFormChange}
                                    className="w-full px-3 py-1.5 rounded-lg border border-gray-200 focus:ring-2 focus:ring-[#00BBF0] outline-none text-sm"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-[#00204a] font-semibold mb-1 text-sm">Password</label>
                                <input
                                    name="password"
                                    value={form.password}
                                    onChange={handleFormChange}
                                    className="w-full px-3 py-1.5 rounded-lg border border-gray-200 focus:ring-2 focus:ring-[#00BBF0] outline-none text-sm"
                                    type="password"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-[#00204a] font-semibold mb-1 text-sm">Role</label>
                                <select
                                    name="role"
                                    value={form.role}
                                    onChange={handleFormChange}
                                    className="w-full px-3 py-1.5 rounded-lg border border-gray-200 focus:ring-2 focus:ring-[#00BBF0] outline-none text-sm"
                                    required
                                >
                                    {roleOptions.map(role => (
                                        <option key={role} value={role}>{role}</option>
                                    ))}
                                </select>
                            </div>
                            <div>
                                <label className="block text-[#00204a] font-semibold mb-1 text-sm">Profile Pic URL</label>
                                <input
                                    name="profilePic"
                                    value={form.profilePic}
                                    onChange={handleFormChange}
                                    className="w-full px-3 py-1.5 rounded-lg border border-gray-200 focus:ring-2 focus:ring-[#00BBF0] outline-none text-sm"
                                    type="url"
                                />
                            </div>
                            <div className="flex justify-end">
                                <button
                                    type="submit"
                                    className="bg-[#00BBF0] hover:bg-[#009ec3] text-white px-4 py-1.5 rounded-lg font-semibold shadow-sm transition-all text-sm"
                                >
                                    {modalMode === 'add' ? 'Add Member' : 'Save Changes'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
            {/* Floating Chat Button */}
            <button
                className="fixed z-40 bottom-6 right-6 bg-[#00BBF0] hover:bg-[#009ec3] text-white rounded-full w-12 h-12 flex items-center justify-center shadow-lg text-xl focus:outline-none"
                onClick={() => setShowChat(true)}
                aria-label="Open chat"
            >
                <i className="fas fa-comment-dots"></i>
            </button>
            {/* Chat Modal */}
            {showChat && (
                <div className="fixed z-50 bottom-20 right-6 w-72 max-w-full bg-white rounded-xl shadow-2xl border border-gray-200 flex flex-col overflow-hidden animate-fade-in">
                    <div className="flex items-center justify-between px-3 py-2 bg-[#00BBF0] text-white">
                        <span className="font-semibold text-sm">Chat Support</span>
                        <button className="text-white text-lg" onClick={() => setShowChat(false)} aria-label="Close chat">&times;</button>
                    </div>
                    <div className="flex-1 p-3 overflow-y-auto text-xs text-gray-700" style={{ maxHeight: 220 }}>
                        {chatMessages.map((msg, idx) => (
                            <div key={idx} className={`mb-2 ${msg.from === 'you' ? 'text-right' : ''}`}>
                                <b>{msg.from === 'you' ? 'You' : 'Support'}:</b> {msg.text}
                            </div>
                        ))}
                        <div ref={chatEndRef}></div>
                    </div>
                    <form className="flex border-t border-gray-200" onSubmit={handleSendChat}>
                        <input
                            type="text"
                            className="flex-1 px-3 py-1 outline-none text-xs"
                            placeholder="Type your message..."
                            value={chatInput}
                            onChange={e => setChatInput(e.target.value)}
                            autoFocus
                        />
                        <button type="submit" className="px-3 text-[#00BBF0] font-bold text-xs" disabled={!chatInput.trim()}>
                            Send
                        </button>
                    </form>
                </div>
            )}
        </div>
    );
};

export default Dashboard; 