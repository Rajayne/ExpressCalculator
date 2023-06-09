function findMean(list) {
    let len = list.length;
    let sum = 0;
    for (let i = 0; i < len; i++) {
        sum += list[i]
    }
    mean = sum/len;
    return mean.toFixed(2);
}

function findMedian(list) {
    len = list.length;
    var array = new Int32Array(list)
    new_list = array.sort()
    if (len % 2 == 0) {
        firstMid = new_list[(len/2)-1]
        secondMid = new_list[(len/2)]
        median = findMean([firstMid, secondMid])
        return median
    } else {
        median = new_list[Math.floor(len/2)]
        return median;
    }
}

function findMode(list) {
    const map = new Map();
    let maxFreq = 0;
    let mode;
    for (let num of list) {
        let freq = map.has(num) ? map.get(num) : 0;
        freq++;

        if (freq > maxFreq) {
            maxFreq = freq;
            mode = num;
        }
        map.set(num, freq);
    }
    return mode;
}

module.exports = {
    findMean, 
    findMedian,
    findMode}