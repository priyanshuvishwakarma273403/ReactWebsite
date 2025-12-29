'use server'

import { Resend } from 'resend';
import dbConnect from '@/lib/db';
import Contact from '@/models/Contact';
import { z } from 'zod';

const schema = z.object({
    name: z.string().min(1, 'Name is required'),
    email: z.string().email('Invalid email address'),
    missionType: z.string().optional(),
    message: z.string().min(10, 'Message must be at least 10 characters'),
});

export async function submitContact(prevState, formData) {
    const validatedFields = schema.safeParse({
        name: formData.get('name'),
        email: formData.get('email'),
        missionType: formData.get('missionType'),
        message: formData.get('message'),
    });

    if (!validatedFields.success) {
        return {
            success: false,
            errors: validatedFields.error.flatten().fieldErrors,
            message: 'Missing Fields. Failed to submit.',
        };
    }

    const { name, email, missionType, message } = validatedFields.data;

    try {
        await dbConnect();

        // Save to Database
        await Contact.create({
            name,
            email,
            missionType,
            message,
        });

        // Send Email if Resend API Key exists
        if (process.env.RESEND_API_KEY) {
            const resend = new Resend(process.env.RESEND_API_KEY);

            // Admin Notification
            await resend.emails.send({
                from: 'WebNex <onboarding@resend.dev>', // Update with your domain
                to: process.env.ADMIN_EMAIL || 'admin@example.com',
                subject: `New Mission Request: ${missionType || 'General'}`,
                html: `<p>Name: ${name}</p><p>Email: ${email}</p><p>Type: ${missionType}</p><p>Message: ${message}</p>`,
            });

            // Auto-reply
            await resend.emails.send({
                from: 'WebNex <onboarding@resend.dev>',
                to: email,
                subject: 'Mission Received: Transmission Confirmed',
                html: `<h1>Transmission Received</h1><p>We have received your briefing. Stand by for contact.</p>`,
            });
        }

        return {
            success: true,
            message: 'Transmission Received',
        };
    } catch (error) {
        console.error('Contact error:', error);
        return {
            success: false,
            message: 'Database/Server Error. Failed to transmit.',
        };
    }
}
