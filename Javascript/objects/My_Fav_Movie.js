var myFavMovie = {
    title: 'Die Hard',
    duration: 30,
    stars: ['Bruice Willis ', 'Batman']
};

function printMovie(movie) {
    console.log(movie.title + ' It is  ' + movie.duration + ' minutes long ');
    var starsString = 'Stars: ';
    for (var i = 0; i < movie.stars.length; i++) {
        starsString += movie.stars[i];
        if (i != movie.stars.length -1) {
            starsString += ', ';
        }
    }
    console.log(starsString);
}
printMovie(myFavMovie);