// Problem 4: publicBusFare

function publicBusFare(totalPeople) {
    const isNumber = typeof totalPeople;
    const perBusCapacity = 50;
    const permicroBusCapacity = 11;
    const publicBusFare = 250;
    if (isNumber === "number" && totalPeople > 0) {
        const restPassenger = totalPeople % perBusCapacity;
        const otherPassenger = restPassenger % permicroBusCapacity;
        return otherPassenger * publicBusFare;
    }
    else {
        return "Please enter a valid Input Number";
    }
}

console.log(publicBusFare(50));
console.log(publicBusFare(55));
console.log(publicBusFare(112));
console.log(publicBusFare(235));
console.log(publicBusFare(365));

