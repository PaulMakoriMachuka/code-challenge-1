function calculateChaiIngredients(numberOfCups){
    const waterPerCup = 200; 
    const milkPerCup = 50; 
    const teaLeavesPerCup = 1; 
    const sugarPerCup = 2; 
  
    return {
      water: waterPerCup * numberOfCups,
      milk: milkPerCup * numberOfCups,
      teaLeaves: teaLeavesPerCup * numberOfCups,
      sugar: sugarPerCup * numberOfCups,
      
    };

    
}
const result = calculateChaiIngredients(5);
console.log(result );
console.log(`Enjoy your tea `)
