////////////////////////////////////////////////////////////////////////////////
//////////////////////////// map, filter, forEach //////////////////////////////
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
  }
]

////////////////////////////////////////////////////////////////////////////////
// PROBLEM #1 //////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

let filterByTagAndDecade = function(array, tag, decade){
  return array.filter(movie => {
    
  });
}