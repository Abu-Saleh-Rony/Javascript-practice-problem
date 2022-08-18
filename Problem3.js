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



console.log(oilPrice(0, 2, 3));

