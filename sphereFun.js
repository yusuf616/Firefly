const sphereFun=({
    values=[]
})=> {
    let fitness = 0;
    for (let i = 0; i < values.length; i++) {
        fitness += Math.pow(values[i], 2);
    }
    return fitness;
}
module.exports=sphereFun;