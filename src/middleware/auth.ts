import { Request, Response, NextFunction } from 'express';
import base64 from 'base-64';

const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const authHeader = req.headers.authorization;

    if (authHeader) {
        const encodedCredentials = authHeader.split(' ')[1];
        
        if (encodedCredentials) {
            const decodedCredentials = base64.decode(encodedCredentials);
            const [username, password] = decodedCredentials.split(':');

            if (username === 'username' && password === 'password') {
                return next();
            }
        }
    }

    res.set('WWW-Authenticate', 'Basic realm="localhost"');
    res.status(401)
        .send('⚠️ Authentication required');
}

export default authMiddleware;
