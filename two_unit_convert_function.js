
// 12 inch 1 feet

// feet inch conversion

function inchToFeet(inch){
    const feet= inch/12;
    return feet;
}

function inchToFeet2(inch){
     const feetFraction =inch/12; // 6.25
     const feetNumber= parseInt(feetFraction);  //6
     const inchRemaining= inch%12;
     
      return `${feetNumber} ft ${inchRemaining} inch`

}

console.log(inchToFeet(75));
console.log(inchToFeet2(75));

