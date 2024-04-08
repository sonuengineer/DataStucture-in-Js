/**
 * @param {number[]} students
 * @param {number[]} sandwiches
 * @return {number}
 */
var countStudents = function(students, sandwiches) {
    let zeroes = 0, ones = 0;

    //Counting what students want
    for (let student of students) {
        if(student === 1) {
            ones++;
        } else {
            zeroes++;
        }
    }

    for(let sandwich of sandwiches) {
        if(sandwich === 1) {
            //Peak sandwich is 1 but no one can take it  
            if(ones === 0 ) {
                return zeroes;
            } 
            ones--;
        } else {
            //Peak sandwich is 0 but no one can take it  
            if(zeroes === 0 ) {
                return ones;
            } 
            zeroes--; 
        }
    }

    //All Sandwiches taken
    return 0;
};