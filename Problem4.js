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

console.log(publicBusFare(235));
