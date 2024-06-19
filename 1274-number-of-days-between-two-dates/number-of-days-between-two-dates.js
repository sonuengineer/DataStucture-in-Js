var daysBetweenDates = function(date1, date2) {
  let mili = 1000 * 60 * 60 * 24;
  return Math.abs((new Date(date1).getTime() - new Date(date2).getTime()) / mili);    
};