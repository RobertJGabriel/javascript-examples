var age = new Date().getFullYear() - 1993;
var maxAge = 43;
var numPerDay = 2;
var totalNeeded = (numPerDay * 365) * (maxAge - age);
var message = 'You will need ' + totalNeeded + ' cups of tea to last you until the ripe old age of ' + maxAge;
console.log(message);
