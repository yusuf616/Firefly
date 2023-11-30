
const griewankFun=({
    values=[]
})=>{
    let sum = 0;
    let product = 1;
    for (let i = 0; i < values.length; i++) {
        sum += Math.pow(values[i], 2) / 4000;
        product *= Math.cos(values[i] / Math.sqrt(i + 1));
    }
    return 1 + sum - product;
}


module.exports=griewankFun;