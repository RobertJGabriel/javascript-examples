function tellFortune(jobTitle, geographic, partner, numKids) {
    var future = 'You will be a ' + jobTitle + ' in ' + geographic + ' and married to ' +
        partner + ' ' + ' with ' + numKids + ' kids.';
    console.log(future);
}

tellFortune('NFL Player', 'Dallas', 'Tony Romo', 3);
tellFortune('Actor', 'Usa', 'Tom Cruise', 3000);
tellFortune('Basketball Player', 'Ireland', 'Robert Gabriel', 0);
