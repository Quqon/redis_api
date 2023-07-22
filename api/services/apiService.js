require("dotenv").config();
const axios = require("axios");
const qs = require("qs");
const { apiDao } = require("../models");

const getApi = async (page,  perPage) => {
    const response = await axios.get(
        `https://api.odcloud.kr/api/EvInfoServiceV2/v1/getEvSearchList?serviceKey=${process.env.SERVICEKEY}`,
        qs.stringify({
            page: page,
            perPage: perPage,
        }),
        {
            Headers: {
                accept: "application/json",
            }
        }
    );
    const data = response.data;
    const result = await apiDao.getRedis(data);
    return result;
}

module.exports = {
    getApi,
}