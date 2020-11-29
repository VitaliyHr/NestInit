
const env = process.env.NODE_ENV || 'development';
const isDev = env === 'development'? true: false;

export default {
    server: {
        name: process.env.NAME || "nest-api",
        version: process.env.VERSION || '1.0.0',
        env, 
        isDev,
        port: process.env.PORT || 3000,
    },
    db:{
        Uri: isDev? 'mongodb://localhost:27017/nestjs' : process.env.MONGOURI,
    },
}