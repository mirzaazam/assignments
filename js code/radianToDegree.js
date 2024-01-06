function radianToDegree(radian) {
    if ( radian >= 0 ){
        const degree = radian * 180 / Math.PI;
        return degree;
    }
    else {
        return 'Plase give me valid number';
    }
}
console.log(radianToDegree(90));