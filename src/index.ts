import express from 'express';
import authMiddleware from './middleware/auth';

const app = express();
const port = 3000;

app.use(authMiddleware);

app.get('/', (req, res) =>  {
    res.send('Hello World - BASIC AUTHENTICATION!');
    console.log('🥎 Hello World - BASIC AUTHENTICATION!');
});

app.listen(port, () => {
    console.log(`✨ Server is running on port ${port}`);
});
