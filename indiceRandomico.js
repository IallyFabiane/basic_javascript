function whosPaying(names) {

       let numberOfPeople = names.length; 
       let randomPeoplePosition = Math.floor(Math.random() * numberOfPeople);
       let randomPeople = names[randomPeoplePosition];
       return randomPeople + " is going to buy lunch today!";
    
    
   
};

console.log(whosPaying(['Alice', 'John', 'Michael']));