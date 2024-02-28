var sequentialDigits = function(low, high) {
    const result = [];

    for(let digit=1; digit<9; digit++){
        let num = digit;
        let nextDigit = num + 1;

        while(num <= high && nextDigit <= 9){
            num= num*10 + nextDigit;
            if(num >= low && num <= high) result.push(num);

            nextDigit++;
        }
    }

    return result.sort((a, b) => a - b);
};