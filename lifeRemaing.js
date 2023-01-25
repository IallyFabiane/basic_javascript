function lifeInWeeks(age) {
    let yearsRemaning = 90 - age;
    let days = yearsRemaning * 365;
    let months = yearsRemaning * 12;
    let weeks = yearsRemaning * 52;
    
    console.log ("You have " + days + " days, " + weeks + " weeks, " + months + " months left.");
    
}
   
lifeInWeeks(12);