function calculateAge(birthYear) {
    var age = new Date().getFullYear() - birthYear;
    console.log('You are either ' + age + ' or ' + (age - 1));
}

calculateAge(1984);
calculateAge(1988);
calculateAge(1982);