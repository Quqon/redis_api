const redis = require("redis");
const redisClient = redis.createClient({ legacyMode: true });

const getRedis = async (data) => {
    redisClient.on('connect', () => {
        console.info('Redis connected!');
    });
    redisClient.on('error', (err) => {
        console.error('Redis Client Error', err);
    })
    await redisClient.connect();
    const redisCli = redisClient.v4;
    
    const result = JSON.stringify(data);

    await redisCli.set('data', result);

    return await redisCli.get('data');
}

module.exports = {
    getRedis,
}