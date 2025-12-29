import GoogleProvider from 'next-auth/providers/google';
import dbConnect from './db';
import User from '@/models/User';

export const authOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }),
    ],
    callbacks: {
        async signIn({ user, account, profile }) {
            if (account.provider === 'google') {
                const { name, email, image } = user;
                try {
                    await dbConnect();
                    const userExists = await User.findOne({ email });

                    if (!userExists) {
                        await User.create({
                            name,
                            email,
                            image,
                            role: process.env.ADMIN_EMAIL === email ? 'admin' : 'user',
                        });
                    }
                    return true;
                } catch (error) {
                    console.error("Sign in error:", error);
                    return false;
                }
            }
            return true;
        },
        async session({ session }) {
            try {
                await dbConnect();
                const user = await User.findOne({ email: session.user.email });
                if (user) {
                    session.user.role = user.role;
                    session.user.id = user._id;
                }
            } catch (error) {
                console.error("Session Error", error);
            }
            return session;
        },
    },
    pages: {
        signIn: '/api/auth/signin',
    },
    secret: process.env.NEXTAUTH_SECRET,
};
