const axios = require('axios');
// const { broadcastMessage } = require('../index');

module.exports.getAllRestaurants = async (req, res, next) => {
    try {
        //需要拿到后端返回来的数据, 向api发请求
        console.log("getAllRestaurants 后台在正常工作");
        const { location, radius, type } = req.body;
        const API_KEY = process.env.GOOGLE_MAP_API_KEY;
        const baseUrl = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${location}&radius=${radius}&type=${type}&key=${API_KEY}`;

        const firstResponse = await axios.get(baseUrl);
        const firstResults = firstResponse.data.results; 

        res.send({ results: firstResults });

        
    } catch (err) {
        console.error("getAllRestaurants err", err);
        return res.status(500).json({ error: "Internal server error" });
    }
}


module.exports.getDetailedRestaurant = async (req, res, next) => {
    try {
        console.log("getDetailedRestaurant 后台在正常工作");
        const { place_id } = req.body;
        const API_KEY = process.env.GOOGLE_MAP_API_KEY;
        const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${place_id}&key=${API_KEY}`
        const response = await axios.get(url);
        
        res.send(response.data);
        
    } catch (err) {
        console.error("getDetailedRestaurants err", err);
        return res.status(500).json({ error: "Internal server error" });
    }
}