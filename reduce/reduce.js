////////////////////////////////////////////////////////////////////////////////
////////////////////////////////// reduce //////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

/*
Opsparkflix is programming a slate of films for Halloween. The array of films is listed below.
*/

const films = [
    {
      title: 'The Thing',
      year: '1982',
      directors: ['John Carpenter'],
      tags: ['sci-fi', 'creature'],
      views: 1532
    },
    {
      title: 'Fright Night',
      year: '1985',
      directors: ['Tom Holland'],
      tags: ['creature'],
      views: 854
    },
    {
      title: 'It Follows',
      year: '2015',
      directors: ['David Robert Mitchell'],
      tags: ['slasher'],
      views: 1102
    },
    {
      title: 'Halloween',
      year: '1978',
      directors: ['John Carpenter'],
      tags: ['slasher'],
      views: 3432
    },
    {
      title: 'Alien',
      year: '1979',
      directors: ['Ridley Scott'],
      tags: ['sci-fi', 'creature'],
      views: 2800
    },
    {
      title: 'Barbarian',
      year: '2022',
      directors: ['Zach Cregger'],
      tags: ['slasher', 'creature'],
      views: 1700
    },
    {
      title: 'Nosferatu',
      year: '1922',
      directors: ['F.W. Murnau'],
      tags: ['creature'],
      views: 980
    }
  ]
  
  ////////////////////////////////////////////////////////////////////////////////
  // PROBLEM #1 //////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  let getNumberByTag = function(array, tag){
    return array.reduce(function(acc, current){
        if (current.tags.includes(tag)){
            acc += 1;
        }
        return acc;
    }, 0);
  };

  ////////////////////////////////////////////////////////////////////////////////
  // PROBLEM #2 //////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

let getMoviesByDecade = function(array, decade){
    return array.reduce(function(acc, current){
        if (decade.slice(0, 3) === current.year.slice(0, 3)){
            acc.push(current);
        }
        return acc;
    }, []);
};

console.log(getMoviesByDecade(films, '1980s'));