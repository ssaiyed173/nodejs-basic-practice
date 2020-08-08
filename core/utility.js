console.log('Printed from utility Module')

module.exports.sum = (numbers) => {
    let sum = 0;
    for( number of numbers){
        sum += number;
    }
    return sum;
}