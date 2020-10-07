
let userChoice
let userSearch
let artist
let album
let songName
let genre
let length
let searchArr


switch (userChoice){
case artist:{
$("#searchButton").on("click", function(event){
  event.preventDefault();  
  userSearch = (event.target.parentElement[1].value);
  console.log(userSearch)
  let settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://deezerdevs-deezer.p.rapidapi.com/search?q=" + userSearch,
    "method": "GET",
    "headers": {
    "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
    "x-rapidapi-key": "444d1a61f4mshd57eb459b8b0709p1e745ajsn2ac16a025434"
    }
    }
  $.ajax(settings).done(function (response) {
    console.log(response);
    searchArr = []
    let searchObj = {
    artist : response.data[0].artist.name,
    album : response.data[0].album.title,
    songName : response.data[0].title_short,
    length : parseInt(response.data[0].duration),
    }
    var searchResults = userSearch;
    var artistEl = $("<div>").attr("class", "results");
    $("#search-container").append(searchResults);
    searchArr.push(searchObj)
    console.log(searchArr)
    });
})
break;
}
// case album:{
//   $("#searchButton").on("click", function(event){
//     event.preventDefault();
//     userSearch = (event.target.parentElement[1].value);
//     console.log(userSearch)
//     let settings = {
//       "async": true,
//       "crossDomain": true,
//       "url": "https://deezerdevs-deezer.p.rapidapi.com/search?q=" + userSearch,
//       "method": "GET",
//       "headers": {
//       "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
//       "x-rapidapi-key": "444d1a61f4mshd57eb459b8b0709p1e745ajsn2ac16a025434"
//       }
//       }
//     $.ajax(settings).done(function (response) {
//       console.log(response);
//       searchArr = []
//       let searchObj = {
//       artist : response.data[0].artist.name,
//       album : response.data[0].album.title,
//       songName : response.data[0].title_short,
//       length : parseInt(response.data[0].duration),
//       }
//       searchArr.push(searchObj)
//       console.log(searchArr)
//       });
//   break;
}
// case songName:{
//   break;
// }
// case genre:{
//   break;
// }
// }
// Album Search
// Song name Search
// genre search
  //insead of genre we will use playlists from top genres and pull songs off those
// populate that list under the search button itself
  //append into the body section of results
// render out album art, song name, artist name, length, and an add to playlist button
  //create html elements and divs for each.
// function render(){
//   }
  // searchArr.forEach(renderfunction())

