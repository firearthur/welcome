// You have watched "Moonlight" - 5 stars
// You have not seen "La La Land" - 4.5 stars
// You have seen "Rogue One" - 5 stars
// You have not seen "Frozen" - 3.5 stars


// var array = [{movie:"Moonlight", rating:"5 stars", hasWatched = true},
// {movie:"La La Land", rating:"4.5 stars", hasWatched = false},
// {movie:"Rogue One", rating:"5 stars", hasWatched = true},
// {movie:"Frozen", rating:"3.5 stars", hasWatched = false}];



var obj1 = new Object()
obj1.movie =  "Moonlight";
obj1.rating = "5 stars";
obj1.hasWatched = true;

var obj2 = new Object()
obj2.movie =  "La La Land";
obj2.rating = "4.5 stars";
obj2.hasWatched = false;

var obj3 = new Object()
obj3.movie =  "Rogue One";
obj3.rating = "5 stars";
obj3.hasWatched = true;

var obj4 = new Object()
obj4.movie =  "Frozen";
obj4.rating = "3.5 stars";
obj4.hasWatched = false;


var array =[obj1,obj2,obj3,obj4];



for(var i = 0; i < array.length; i++)
{
    alert(array[i].movie);
    alert(array[i].rating);
    alert(array[i].hasWatched);
}

