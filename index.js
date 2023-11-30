// // Ateşböceği Algoritması

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



    // console.log(fireflies)
} 


init();


// Firefly Algorithm
// function fireflyAlgorithm(populationSize, iterations, attractiveness, dimension, problemFunction) {
//     // Ateşböceklerini başlat
//     let fireflies = initializeFireflies(populationSize, dimension, problemFunction);
  
//     // Başlangıçta en iyi uygunluk değeri ve konumu
//     let globalBestFitness = Infinity;
//     let globalBestPosition;
  
//     for (let iteration = 0; iteration < iterations; iteration++) {
//       // Uygunluk değerlerini hesapla
//       let fitnessValues = calculateFitnessValues(fireflies, problemFunction);
  
//       // En iyi uygunluk değerini güncelle
//       let localBestFitness = Math.min(...fitnessValues);
//       if (localBestFitness < globalBestFitness) {
//         globalBestFitness = localBestFitness;
//         globalBestPosition = fireflies[fitnessValues.indexOf(localBestFitness)].position.slice(); // Copy the position
//       }
  
//       // Ateşböceklerini güncelle
//       fireflies = updateFireflies(fireflies, fitnessValues, attractiveness, dimension, problemFunction);
//     }
  
//     // En iyi bireyi ve uygunluk değerini yazdır
//     console.log("En iyi ateşböceği konumu: ", globalBestPosition);
//     console.log("En iyi uygunluk değeri: ", globalBestFitness);
//   }
  
  // Diğer fonksiyonlar ve yardımcı fonksiyonlar (generateRandomSolution, calculateDistance, vb.) aynı kaldı
  
//   // Örnek kullanım:
//   fireflyAlgorithm(50, 100, 0.5, 10, sphereFunction);
  
//   // Uygunluk fonksiyonu
//   function sphereFunction(position) {
//     // Küre probleminin uygunluk fonksiyonu
//     return position.reduce((sum, x) => sum + Math.pow(x, 2), 0);
//   }
  
//   // Rastgele bir çözüm oluştur
//   function generateRandomSolution(dimension) {
//     return Array.from({ length: dimension }, () => Math.random() * 10 - 5); // -5 ile 5 arasında rastgele sayılar
//   }