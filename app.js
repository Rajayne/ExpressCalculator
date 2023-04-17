const express = require('express');
const math = require('./math')
const app = express();

app.use(express.json());

app.get('/mean', (req, res, next) => {
    list = req.query.nums.split(",").map(Number)
    mean = math.findMean(list);
    return res.json({
        response: {
            operation: "mean", 
            value: `${mean}`}
    });
})

app.get('/median', (req, res, next) => {
    list = req.query.nums.split(",").map(Number)
    median = math.findMedian(list);
    return res.json({
        response: {
            operation: "median", 
            value: `${median}`}
    });
})

app.listen(3000, () => {
    console.log("Server running on port 3000");
})