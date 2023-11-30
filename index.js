const initializeFireflies = require("./initializeFireflies");
const fireflyAlgorithm=require("./fireflyAlgorithm");
const sphereFun =require("./sphereFun");

const init=()=>{
    const fireflies=initializeFireflies({
        number:10  
    });
    fireflyAlgorithm({
        fireflies:fireflies,
        iterations:100,
        fitnessFun:sphereFun,
        attractiveness:0.5
    })
} 


init();