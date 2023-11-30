const findBestFirefly=({
    fireflies=[], 
    fitnessFun=()=>{}
})=>{
    let bestFirefly = fireflies[0];
    for (let i = 1; i < fireflies.length; i++) {
        if (fitnessFun(fireflies[i].position) > fitnessFun(bestFirefly.position)) {
        bestFirefly = fireflies[i];
        }
    }
    return bestFirefly;
}

module.exports=findBestFirefly