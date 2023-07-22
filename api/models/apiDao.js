const redis = require("redis");
const redisClient = redis.createClient({ legacyMode: true });

redisClient.on('connect', () => {
    console.info('Redis connected!');
});
redisClient.on('error', (err) => {
    console.error('Redis Client Error', err);
})
redisClient.connect().then();
const redisCli = redisClient.v4;

const getRedis = (data) => {
    console.log(data)
    redisClient.lPush('data', data);
    redisClient.get('data', (value) => {
        console.log(value, 'value');
    })
}

module.exports = {
    getRedis,
}