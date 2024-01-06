function isBestFriend(first, second) {
    if ( first.name == second.friend && first.friend == second.name ){
        return true;
    }
    else{
        return false;
    }
}


const fristObject = {
    name: 'nohi',
    friend: 'azam'
};
const secondObject = {
    name: 'azam',
    friend: 'nohi'
};
const result = isBestFriend(fristObject, secondObject);
console.log(result);

