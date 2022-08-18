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

// Problem-2: isJavaScriptFile

function isJavaScriptFile(fileName) {
    const isString = typeof fileName;
    if (isString !== "string") {
        return "Please enter string input";
    }
    else if (isString === "string" && fileName.includes(".js")) {
        return true;
    }
    else {
        return false;
    }
}

console.log(isJavaScriptFile('image.js'));

// Problem-3: oilPrice

function oilPrice(dieselQuantity, petrolQuantity, octaneQuantity) {
    const perLitrediesel = 114;
    const perLitrepetrol = 130;
    const perLitreoctane = 135;

    const dieselPrice = dieselQuantity * perLitrediesel;
    const petrolPrice = petrolQuantity * perLitrepetrol;
    const octanePrice = octaneQuantity * perLitreoctane;

    const totalPrice = dieselPrice + petrolPrice + octanePrice;
    if (typeof dieselQuantity != 'number' || typeof petrolQuantity != 'number' || typeof octaneQuantity != 'number') {
        return "Please enter a number"
    }
    return totalPrice;
}

console.log(oilPrice(0, 1, 2));

// Problem 4: publicBusFare

function publicBusFare(totalPeople) {

    const isNumber = typeof totalPeople;
    const perBusCapacity = 50;
    const permicroBusCapacity = 11;
    const publicBusFare = 250;

    if (isNumber === "number" && totalPeople > 0) {
        if (totalPeople >= perBusCapacity) {
            const restPassenger = totalPeople % perBusCapacity;
            if (restPassenger >= permicroBusCapacity) {
                const otherPassenger = restPassenger % permicroBusCapacity;
                return otherPassenger * publicBusFare;
            }
        }
        else if (totalPeople >= permicroBusCapacity && totalPeople < perBusCapacity) {
            const restPassenger = totalPeople % permicroBusCapacity;
            return restPassenger * publicBusFare;
        }
        else {
            return totalPeople * publicBusFare;
        }
    }
    else {
        return "Please enter a valid Input Number";
    }
}

console.log(publicBusFare(112));

// Problem 5: isBestFriend

function isBestFriend(friend1, friend2) {
    const isFriend1 = typeof friend1;
    const isFriend2 = typeof friend2;
    if (isFriend1 === "object" && isFriend2 === "object") {
        if (friend1.name === friend2.friend && friend1.friend === friend2.name) {
            return true;
        }
        else { return false; }
    }
    else { return "Something wrong in object"; }
}

console.log(isBestFriend({ name: "doe", friend: "alex" }, { name: "john", friend: 22 }));