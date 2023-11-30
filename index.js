const initializeFireflies = require("./initializeFireflies");
const fireflyAlgorithm=require("./fireflyAlgorithm");
const sphereFun =require("./sphereFun");
const griewankFun =require("./griewankFun")

const init=()=>{
    const fireflies=initializeFireflies({
        number:10  
    });
    var toplamSphere=0;
    var denemeSphere=[];
    var toplamGriewank=0;
    var denemeGriewank=[];
    for (let i=0;i<15;i++){
        {
            const {globalBestPosition,globalBestFitness }=fireflyAlgorithm({
                fireflies:fireflies,
                iterations:100,
                fitnessFun:sphereFun,
                attractiveness:0.5
            })

            toplamSphere+=globalBestFitness;
            denemeSphere.push({globalBestPosition,globalBestFitness})
        }
       
        {
            const {globalBestPosition,globalBestFitness }=fireflyAlgorithm({
                fireflies:fireflies,
                iterations:100,
                fitnessFun:griewankFun,
                attractiveness:0.5
            })
            toplamGriewank+=globalBestFitness;
            denemeGriewank.push({globalBestPosition,globalBestFitness});
        }
    }
    

    console.log(denemeSphere?.map(l=>l.globalBestFitness));
    console.log(`ortalama Sphere Fitness : ${toplamSphere/15}`);
    console.log(denemeGriewank?.map(l=>l.globalBestFitness))
    console.log(`ortalama Griewank Fitness : ${toplamGriewank/15}`)

} 


init();