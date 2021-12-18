
function average(numbers) {
  if(!(isNaN(numbers))
  return numbers.reduce((p, c)=> p + c, 0) / numbers.length;
}

module.exports = {average};
