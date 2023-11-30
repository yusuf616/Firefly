const calculateDistance=require('./calculateDistance');

const updateFireflies=({
    fireflies=[],
    fitnessValues=[],
    attractiveness=0.5,
    fitnessFun=()=>{}
})=>{
    // 
  
    for (let i = 0; i < fireflies.length; i++) {
        for (let j = 0; j < fireflies.length; j++) {
            if (fitnessValues[j] > fitnessValues[i]) {
                let distance = calculateDistance(fireflies[i].position, fireflies[j].position);
                for (let k = 0; k < fireflies[i].position.length; k++) {
                    fireflies[i].position[k] += attractiveness * Math.exp(-distance);
                }
            }
        }
    }
    return fireflies;
}


module.exports=updateFireflies;