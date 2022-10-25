
describe("reduce", function(){
    describe("getNumberByTag", function(){
        it('should return a number', function(){
            assert.equal(typeof getNumberByTag(films, 'sci-fi'), 'number');
        });
        it('should return the correct number of movies with the tag', function(){
            assert.equal(getNumberByTag(films, 'sci-fi'), 2);
        });
        it('should use the native reduce method', function(){
            assert.equal(getNumberByTag.toString().includes('.reduce('), true);
        });
    });
    describe('#getFilmsByDecade', function(){
        it('should return an array', function(){
            assert.equal(Array.isArray(getMoviesByDecade(films, '1980s')), true);
        });
        it('should return a correct array of movies', function(){
            assert.deepEqual(getMoviesByDecade(films, '1980s'), [
                {
                  title: 'The Thing',
                  year: '1982',
                  directors: [ 'John Carpenter' ],
                  tags: [ 'sci-fi', 'creature' ],
                  views: 1532
                },
                {
                  title: 'Fright Night',
                  year: '1985',
                  directors: [ 'Tom Holland' ],
                  tags: [ 'creature' ],
                  views: 854
                }
              ]);
        });
        it('should use the native reduce method', function(){
            assert.equal(getMoviesByDecade.toString().includes('.reduce('), true);
        });
    });
});