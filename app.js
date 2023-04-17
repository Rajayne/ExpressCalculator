const express = require('express');
const app = express();

app.use(express.json());

app.get('/mean', (req, res, next) => {
    list = req.query.nums.split(",").map(Number)
    mean = findMean(list);
    return res.json({
        response: {
            operation: "mean", 
            value: `${mean}`}
    });
})

function findMean(list) {
    let sum = 0;
    let count = 0;
    for (let i = 0; i < list.length; i++) {
        sum += list[i];
        count++;
    }
    mean = sum/count;
    return mean;
}

app.listen(3000, () => {
    console.log("Server running on port 3000");
})