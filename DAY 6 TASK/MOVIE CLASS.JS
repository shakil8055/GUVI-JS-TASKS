class movie {
  constructor(Title = '', Studio = '', Rating = 'PG' ) {
    this.Title = Title ;
    this.Studio = Studio;
    this.Rating = Rating;
    }
    
    getPG(movie = [movie]) {
        var filteredArray = [];
        movie.forEach((movie) => {
            if (movie.rating === 'PG') {
                filteredArray.push(movie)
            }
        })
        return filteredArray;
    }
}
console.log(movie)
const movie1 = new movie("LOVE ", "ags cinemas");
const movie2 = new movie("GOAT", "ags cinemas");
const movie3 = new movie("DRAGON", "ags cinemas", "PG13");
const movie4 = new movie("SPIDER MAN", "MARVEL", "R");


console.log(movie.getPG([LOVE, GOAT, DRAGON, SPIDERMAN]));