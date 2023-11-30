const fitness = require("./fitness");
const updateFireflies=require('./updateFireflies');
const findBestFirefly=require('./findBestFirefly');
const fireflyAlgorithm=({
    fireflies=[],
    iterations=0,
    fitnessFun=()=>{},
    attractiveness=0.5
    // attractiveness, problemFunction
})=>{
    let globalBestFitness = Infinity;
    let globalBestPosition;
    for (let iteration = 0; iteration < iterations; iteration++) {
        let fitnessValues = fitness({
            fireflies:fireflies,
            fitnessFun:fitnessFun
        });
        let localBestFitness = Math.min(...fitnessValues);
        if (localBestFitness < globalBestFitness) {
            globalBestFitness = localBestFitness;
            globalBestPosition = fireflies[fitnessValues.indexOf(localBestFitness)].position.slice(); // Copy the position
        }
        fireflies = updateFireflies({fireflies, fitnessValues, attractiveness,fitnessFun});
    }
    // console.log("En iyi ateşböceği konumu: ", globalBestPosition);
    // console.log("En iyi uygunluk değeri: ", globalBestFitness);

    return {globalBestPosition,globalBestFitness}
    // console.log("En iyi ateşböceği: ", bestFirefly);
}

module.exports=fireflyAlgorithm