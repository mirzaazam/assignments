function oilPrice(disel, petrol, octen){
    const perDiselPrice = 114;
    const perPetrolPrice = 130;
    const perOctenPrice = 135;

    const diselTotalPrice = disel * perDiselPrice;
    const petrolTotalPrice = petrol * perPetrolPrice;
    const octenTotalPrice = octen * perOctenPrice;

    const totalOilPrice = diselTotalPrice + petrolTotalPrice + octenTotalPrice;
    return totalOilPrice;
}

const result = oilPrice(30, 23, 43) ;
console.log(result);