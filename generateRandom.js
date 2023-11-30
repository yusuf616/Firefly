const generateRandomSolution=({
    number=10
})=>{
    let solution = [];
    for (let i = 0; i < number; i++) {
        solution.push(Math.random() * 10 - 5); // -5 ile 5 arasında rastgele sayılar
    }
    return solution;
}

module.exports=generateRandomSolution