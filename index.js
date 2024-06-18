function roundOff(number,decimalPlaces){
    if(typeof number !== 'number' || isNaN(number)){
        throw new Error('Invalid number');
    }
    if(typeof decimalPlaces !== 'number' || isNaN(decimalPlaces)|| decimalPlaces <0){
        throw new Error('Invalid Decimal Places');
        
    }
    const round=parseFloat(number.toFixed(decimalPlaces));
        return round;
}
module.exports=roundOff;