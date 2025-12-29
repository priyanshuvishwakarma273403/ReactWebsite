import mongoose from 'mongoose';

const ContactSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please provide a name'],
        maxlength: [60, 'Name cannot be more than 60 characters'],
    },
    email: {
        type: String,
        required: [true, 'Please provide an email'],
        match: [
            /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
            'Please provide a valid email',
        ],
    },
    missionType: {
        type: String,
        required: false,
    },
    message: {
        type: String,
        required: [true, 'Please provide a message'],
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

export default mongoose.models.Contact || mongoose.model('Contact', ContactSchema);
