const express = require('express');
const math = require('./math');
const ExpressError = require('./error');
const app = express();

app.use(express.json());

app.get('/mean', (req, res, next) => {
    try {
        list = req.query.nums.split(",").map(Number)
        mean = math.findMean(list);
        if (!mean) {
            throw new ExpressError("Invalid Integer", 403)
        }
        return res.json({
            response: {
                operation: "mean", 
                value: `${mean}`}
        });
    } catch (e) {
        next(e);
    }
})

app.get('/median', (req, res, next) => {
    try {
        list = req.query.nums.split(",").map(Number)
        median = math.findMedian(list);
        if (!median) {
            throw new ExpressError("Invalid Integer", 403)
        }
        return res.json({
            response: {
                operation: "median", 
                value: `${median}`}
        });
    } catch (e) {
        next(e);
    }
})

app.get('/mode', (req, res, next) => {
    try {
        list = req.query.nums.split(",").map(Number)
        mode = math.findMode(list);
        if (!mode) {
            throw new ExpressError("Invalid Integer", 403)
        }
        return res.json({
            response: {
                operation: "mode", 
                value: `${mode}`}
        });
    } catch (e) {
        next(e);
    }
})

app.use((req, res, next) => {
    const e = new ExpressError("Page Not Found", 404)
    next(e);
})

app.use((err, req, res, next) => {
    // default status is 500 Internal Server Error
    let status = err.status || 500;
    let message = err.message;

    return res.status(status).json({
        error: {message, status}
    });
})

app.listen(3000, () => {
    console.log("Server running on port 3000");
})