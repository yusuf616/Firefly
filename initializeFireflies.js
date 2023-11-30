const generateRandomSolution = require("./generateRandom");
const initializeFireflies=({
    number=10,
})=>{
    let fireflies = [];
    for (let i = 0; i <number; i++) {
        let firefly = {
            position: generateRandomSolution({number:2}), // Rastgele bir çözüm oluştur
            brightness:Math.random() , // Başlangıç parlaklığı
        };
        fireflies.push(firefly);
    }
    return fireflies;
}


module.exports=initializeFireflies


