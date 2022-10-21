describe('#map-filter-forEach', function(){
    describe('filterByTagAndDecade', function(){
        it('should return an array', function(){
            assert.equal(Array.isArray(filterByTagAndDecade(films, 'creature', '80s')), true);
        });
        it('should return an array of correctly filtered films', function(){
            assert.deepEqual(filterByTagAndDecade(films, 'creature', '80s'), [
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
        it('should use the native filter method', function(){
            assert.equal(filterByTagAndDecade.toString().includes('.filter('), true);
        });
    });
    describe('#mapForViews', function(){
        it('should return an array', function(){
            assert.equal(Array.isArray(mapForViews(films)), true);
        });
        it('should return an array of correctly mapped items', function(){
            assert.deepEqual(mapForViews(films), [
                { title: 'The Thing', views: 1532 },
                { title: 'Fright Night', views: 854 },
                { title: 'It Follows', views: 1102 },
                { title: 'Halloween', views: 3432 },
                { title: 'Alien', views: 2800 }
            ]);
        });
        it('should use the native map method', function(){
            assert.equal(mapForViews.toString().includes('.map('), true);
        });
    });
    describe('#addTag', function(){
        let copy = films.slice();
        it('should add a tag to each film', function(){
            addTag(copy, 'Halloween');
            assert.deepEqual(copy, [
                {
                    title: 'The Thing',
                    year: '1982',
                    directors: ['John Carpenter'],
                    tags: ['sci-fi', 'creature', 'Halloween'],
                    views: 1532
                  },
                  {
                    title: 'Fright Night',
                    year: '1985',
                    directors: ['Tom Holland'],
                    tags: ['creature', 'Halloween'],
                    views: 854
                  },
                  {
                    title: 'It Follows',
                    year: '2015',
                    directors: ['David Robert Mitchell'],
                    tags: ['slasher', 'Halloween'],
                    views: 1102
                  },
                  {
                    title: 'Halloween',
                    year: '1978',
                    directors: ['John Carpenter'],
                    tags: ['slasher', 'Halloween'],
                    views: 3432
                  },
                  {
                    title: 'Alien',
                    year: '1979',
                    directors: ['Ridley Scott'],
                    tags: ['sci-fi', 'creature', 'Halloween'],
                    views: 2800
                  }
            ])
        });
        it('should use the native forEach method', function(){
            assert.equal(addTag.toString().includes('.forEach('), true);
        });
    });
});