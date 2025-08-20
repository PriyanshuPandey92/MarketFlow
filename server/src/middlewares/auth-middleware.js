import { OAuth2Client, LoginTicket } from 'google-auth-library';
import { getUserByEmailService } from '../services/user-service.js';

const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
const client = new OAuth2Client(GOOGLE_CLIENT_ID);

if(!GOOGLE_CLIENT_ID){
    console.error("GOOGLE_CLIENT_ID is not set in environment variables.");
    process.exit(1);
}
export async function isAuthenticated(req, res, next) {
    const authHeader = req.headers.authorization;
    
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        res.status(401).json('No token provided or token format is incorrect.', 401);
        return;
    }

    const idToken = authHeader.split(' ')[1];
    if (!idToken) {
        res.status(401).json({messsage : 'No token provided.'});
        
        return;
    }

    if( !GOOGLE_CLIENT_ID) {
        res.status(500).json({ message: 'Google Client ID is not configured.' });
        return;
    }

    try{
        const ticket = await client.verifyIdToken({
            idToken,
            audience: GOOGLE_CLIENT_ID
        });
        const payload = ticket.getPayload();
        if (!payload || !payload.email) {
            res.status(401).json({message:'Invalid token payload.'});
            return;
        }

        const user = await getUserByEmailService(payload.email);
        if (!user) {
            res.status(401).json({ message: 'User not found.' });
            return;
        }
        req.user = user;
        next();
    }
    catch (error) {
        console.error('Error verifying token:', error);
        res.status(401).json({ message: 'Invalid token.' });
        return;
    }
  
}