import mongoose from 'mongoose';

const PostSchema = new mongoose.Schema({
    title: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    content: { type: String, required: true }, // Simple string content for now
    metaDescription: { type: String },
    keywords: { type: String },
    author: { type: String, default: 'WebNex Admin' },
    createdAt: { type: Date, default: Date.now },
});

export default mongoose.models.Post || mongoose.model('Post', PostSchema);
