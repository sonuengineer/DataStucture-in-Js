/**
 * Calculates the distance between bus stops either in the clockwise or anti-clockwise direction.
 * Returns the shortest distance between the start and destination bus stops.
 * @param {number[]} distance - Array representing the distance between each pair of consecutive bus stops.
 * @param {number} start - Index of the start bus stop.
 * @param {number} destination - Index of the destination bus stop.
 * @returns {number} - Shortest distance between the start and destination bus stops.
 */



var distanceBetweenBusStops = function (distance, start, destination) {
  let result = 0;
  let result2 = 0;
  let sum = 0;
  if (start > destination) {
    [start, destination] = [destination, start]
  }

  result=clockWise(distance, start, destination);
  result2=antiClockWise(distance,result)
  const output = result > result2 ? result2 : result;
  return output
  };

const clockWise = (distance, start, destination) => {
  let result=0;
  for (let i = start; i < destination; i++) {
    result = result + distance[i];
  }
  return result
}

const antiClockWise = (distance,result)=>{
  let sum=0;
  let result2;
    for (let j = 0; j < distance.length; j++) {
    sum = sum + distance[j];
  }
  result2 = sum - result;
  return result2
}