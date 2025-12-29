import Link from 'next/link';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import dbConnect from '@/lib/db';
import Contact from '@/models/Contact';
import { redirect } from 'next/navigation';

export const dynamic = 'force-dynamic';

export default async function AdminDashboard() {
    const session = await getServerSession(authOptions).catch(() => null);

    if (!session || session.user.role !== 'admin') {
        redirect('/api/auth/signin');
    }

    let contacts = [];
    try {
        await dbConnect();
        contacts = await Contact.find({}).sort({ createdAt: -1 }).lean();
    } catch (error) {
        console.error("Dashboard DB Error:", error);
        // During build, this might fail. We return a placeholder UI.
        return (
            <div className="min-h-screen bg-black text-white p-8 pt-24 text-center">
                <h1 className="text-2xl font-bold text-red-500">System Error</h1>
                <p>Unable to establish connection to Command Center database.</p>
                <p className="text-sm text-gray-500 mt-4">Verify MONGODB_URI in environment variables.</p>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-black text-white p-8 pt-24">
            <div className="max-w-7xl mx-auto">
                <div className="flex justify-between items-center mb-12">
                    <h1 className="text-4xl font-black uppercase text-[#39ff14] font-tech">Command Center</h1>
                    <div className="flex items-center gap-4">
                        <span className="text-gray-400">Welcome, Commander {session.user.name}</span>
                        <Link href="/api/auth/signout" className="px-4 py-2 border border-white/20 hover:bg-white/10 rounded">Logout</Link>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                    <div className="bg-gray-900 border border-white/10 p-6 rounded-lg">
                        <h3 className="text-gray-400 uppercase tracking-wider text-sm mb-2">Total Leads</h3>
                        <p className="text-5xl font-bold text-white">{contacts.length}</p>
                    </div>
                    <div className="bg-gray-900 border border-white/10 p-6 rounded-lg">
                        <h3 className="text-gray-400 uppercase tracking-wider text-sm mb-2">Unread</h3>
                        <p className="text-5xl font-bold text-[#39ff14]">{contacts.length}</p> {/* Placeholder */}
                    </div>
                    <div className="bg-gray-900 border border-white/10 p-6 rounded-lg">
                        <h3 className="text-gray-400 uppercase tracking-wider text-sm mb-2">System Status</h3>
                        <p className="text-xl font-bold text-green-500">OPTIMAL</p>
                    </div>
                </div>

                <h2 className="text-2xl font-bold uppercase mb-6 border-l-4 border-purple-500 pl-4">Incoming Transmissions</h2>

                <div className="bg-gray-900/50 border border-white/10 rounded-lg overflow-hidden">
                    {contacts.length === 0 ? (
                        <div className="p-8 text-center text-gray-500">No transmissions received.</div>
                    ) : (
                        <div className="overflow-x-auto">
                            <table className="w-full text-left">
                                <thead className="bg-white/5 border-b border-white/10 text-xs uppercase text-gray-400">
                                    <tr>
                                        <th className="p-4">Date</th>
                                        <th className="p-4">Name</th>
                                        <th className="p-4">Email</th>
                                        <th className="p-4">Mission</th>
                                        <th className="p-4">Message</th>
                                        <th className="p-4">Status</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-white/5">
                                    {contacts.map((contact) => (
                                        <tr key={contact._id} className="hover:bg-white/5 transition-colors">
                                            <td className="p-4 font-mono text-sm text-gray-400">{new Date(contact.createdAt).toLocaleDateString()}</td>
                                            <td className="p-4 font-bold">{contact.name}</td>
                                            <td className="p-4 font-mono text-sm text-purple-400">{contact.email}</td>
                                            <td className="p-4"><span className="px-2 py-1 bg-white/10 rounded text-xs uppercase">{contact.missionType || 'General'}</span></td>
                                            <td className="p-4 text-gray-300 max-w-xs truncate">{contact.message}</td>
                                            <td className="p-4"><span className="text-[#39ff14] text-xs font-bold">● NEW</span></td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
