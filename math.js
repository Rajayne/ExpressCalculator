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

module.exports = {
    findMean: findMean, 
    findMedian: findMedian}