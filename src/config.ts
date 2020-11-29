
const env = process.env.NODE_ENV || 'development';
const isDev = env === 'development'? true: false;

export default {
    env, 
    isDev,
    mongoDb:{
        mongoUri: isDev? 'mongodb://localhost:27017/nestjs' : process.env.MONGOURI,
    },
}