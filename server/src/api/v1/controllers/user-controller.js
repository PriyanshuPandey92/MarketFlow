import { asyncHandler } from "../../../middlewares/error-middleware.js";
import * as userService from '../../../services/user-service.js';
import logger from "../../../utils/logger/color-logger.js";
export const getUserByEmail = asyncHandler(async (req,res)=>{
    const{email} = req.params;
    logger.info(`Fetching user with Email: ${email}`);    

    const user = await userService.getUserByEmailService(email);
    if(!user) {
        logger.error(`User with email: ${email} not found`);
        return res.status(404).json({ 
            success: false,
            message: 'User not found' 
        });
    }
    logger.success(`Found User: ${User.name}`);

    res.status(200).json({ 
        success: true, 
        data: product 
    });
});