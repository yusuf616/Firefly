const fitness=({
    fireflies=[], 
    fitnessFun=()=>{}
})=>{
    let fitnessValues = [];
    for (let i = 0; i < fireflies?.length; i++) {
        fitnessValues.push(fitnessFun({values:fireflies[i]?.position}));
    }
    return fitnessValues;
}

module.exports=fitness;