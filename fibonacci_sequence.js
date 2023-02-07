function fibonacciGenerator (n) {
        
        let arr = [];
          
            if (n === 1) {
                arr = [0];
            } else if (n === 2) {
                arr = [0 ,1];
            } else {
                arr = [0, 1];
                 
                for (let i = 2; i < n; i++) {
                    arr.push(arr[arr.length - 2] + arr[arr.length - 1]); // acessando o penúltiomo e po último número adicionado ao array
                }
            }
       
        
        return arr;

}
    
console.log(fibonacciGenerator(9));