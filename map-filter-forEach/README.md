### map, filter, forEach

**Directions:** Complete the prompts below to gauge your facility with the native versions `map()`, `filter()`, and `forEach()`.

**Problem #1:** Create a function called `filterByTagAndDecade` that takes in two parameters - `array`, `tag`, `decade`. The parameter `array` represents an array of movie objects; `tag` represents a string of a tag; `decade` represents a string of a decade (ex. "70s", "80s", "90s", "2000s", "2010s", "2020s"); This function should use the native filter method to iterate through the input array and return a new array of only the movies from the input decade that have the input tag in their tags array.

**Problem #2:** Create a function called `mapForViews` that takes in one parameter - `array` - which represents an array of movie objects. This function should use the native map method to iterate through the input array and return a new array of objects that only includes the film's `title` and `views` properties.

```
mapForViews(films);
/*
=> 
[
  { title: 'The Thing', views: 1532 },
  { title: 'Fright Night', views: 854 },
  { title: 'It Follows', views: 1102 },
  { title: 'Halloween', views: 3432 },
  { title: 'Alien', views: 2800 }
]
*/
```

**Problem #3:** Create a function called `addTag` that takes in two parameters - `array` and `tag`. The parameter `array` represents an array of movie objects; `tag` represents a string of a tag. This function should use the native forEach method to iterate through the input array and add the input tag to each movie's tags property.