import dotenv from 'dotenv';
import path from 'path';


dotenv.config({ path: path.join(process.cwd(), '.env') });

export const prod = 'production';

const config = {
    env: process.env.NODE_ENV,

    port: process.env.PORT || 5000,

    dbURL: process.env.MONGODB_URI,

    clientUrl: process.env.NODE_ENV === prod
        ? process.env.CLIENT_URL
        : 'http://localhost:7000', // local client url

    token: {
        name: process.env.JWT_NAME,
        jwtSecret: process.env.JWT_SECRET,
        jwtExpiresIn: process.env.JWT_EXPIRES_IN,
        // openssl rand -base64 32 ==> run at cmd to generate random string
    },
};


export default config;