function fizzBuzz(n: number): string[] {
  const newArr:string[] = []
    for(let i = 1; i <= n;i++ ) {
      newArr.push(
        (i % 5 == 0 && i % 3 == 0) ? 'FizzBuzz' :
        (i % 3 == 0) ? 'Fizz' :
        (i % 5 == 0) ? 'Buzz' : 
        String(i)  
      )
    }

    return newArr
};

console.log(fizzBuzz(3))