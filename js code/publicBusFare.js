function publicBusFare(people){
    const reservedBus = 50;
    const microBus = 11;
    const busFarePrice = 250;
    console.log('Total people are:',people);
    const remainingFromReservedBus = people - reservedBus;
    console.log(remainingFromReservedBus, 'people are remaining for microbus and public bus');
    const remainingFromMicroBus = remainingFromReservedBus - microBus;
    console.log(remainingFromMicroBus,'people are reamaining for public bus');
    const restPeople = remainingFromMicroBus * busFarePrice;
    return restPeople;
}

const result = publicBusFare(65);
console.log(result);