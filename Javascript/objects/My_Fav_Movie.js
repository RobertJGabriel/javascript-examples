var myFavMovie = {
    title: 'Die Hard',
    duration: 30,
    stars: ['Bruice Willis', ' Batman']
};

function printMovie(movie) {
    console.log(movie.title + '\nIt is  ' + movie.duration + ' minutes long');
    console.log('It stars ' + movie.stars.join('along side'));
}
printMovie(myFavMovie);