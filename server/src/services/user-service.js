import User from '../models/user-model.js';
export async function getUserByEmailService(email) {
    const user = await User.findOne({ email: email });
    if (!user) {
        return null;
    }
    return user;
}