let userChoice
let userSearch
let artist
let album
let songName
let genre
let length
let searchArr
userChoice = $("#searchOptions").val();
$("#searchButton").on("click", function(event){
event.preventDefault();
  userSearch = (event.target.parentElement[0].value);
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
    var resultList = response.data.length
    searchArr = []
    for(i=0;i<resultList;i++){
    let searchObj = {
    artist : response.data[i].artist.name,
    album : response.data[i].album.title,
    songName : response.data[i].title_short,
    length : parseInt(response.data[i].duration),
    }
    searchArr.push(searchObj)
  }
    console.log(searchArr)
    });
  });
  
  var searchResults = userSearch;
  var artistEl = $("<div>").attr("class", "results");
  $("#search-container").append(searchResults);
  searchArr.push(searchObj)
  console.log(searchArr)
  


// populate that list under the search button itself
  //append into the body section of results
// render out album art, song name, artist name, length, and an add to playlist button
  //create html elements and divs for each.

  // render functin(){

  //}
  // searchArr.forEach(renderfunction()

//  var searchDiv = $("<div>")
//   var listenBtn = $("<button>")
//   var addBtn = $("<button>")
//   searchDiv.append(listenBtn)
//   searchDiv.append(addBtn)
//   $("#search-results").append(searchDiv)
  