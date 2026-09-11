import mongoose, { Schema, Document } from 'mongoose';

export interface IUser extends Document {
  name: string;
  email: string;
  password: string;
  role: 'entrepreneur' | 'mentor';
  avatar?: string;
  bio?: string;
  expertise?: string[];
  company?: string;
  location?: string;
}

const UserSchema: Schema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['entrepreneur', 'mentor'], required: true },
  avatar: { type: String },
  bio: { type: String },
  expertise: [{ type: String }],
  company: { type: String },
  location: { type: String },
}, { timestamps: true });

export default mongoose.model<IUser>('User', UserSchema);
