import './globals.css';
import ClientLayout from '@/components/ClientLayout';

export const metadata = {
    title: 'WebNex Agency | Next-Gen Digital Architecture',
    description: 'We fuse Java Power with Design Chaos to build the future of digital experiences.',
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className="bg-black text-white antialiased">
                <ClientLayout>{children}</ClientLayout>
            </body>
        </html>
    );
}
