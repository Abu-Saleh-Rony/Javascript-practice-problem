// Problem-1: radianToDegree

function radianToDegree(radian) {
    let pi = 3.1416;
    if (typeof radian != 'number') {
        return "Please enter a number"
    }
    let degree = radian * (180 / pi);
    return degree.toFixed(2);
}


console.log(radianToDegree(10));


