let userChoice;
let userSearch;
let artist;
let album;
let songName;
let genre;
let length;
let searchArr;
userChoice = $("#searchOptions").val();
$("#searchButton").on("click", function (event) {
  event.preventDefault();
  userSearch = event.target.parentElement[0].value;
  let settings = {
    async: true,
    crossDomain: true,
    url: "https://deezerdevs-deezer.p.rapidapi.com/search?q=" + userSearch,
    method: "GET",
    headers: {
      "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
      "x-rapidapi-key": "444d1a61f4mshd57eb459b8b0709p1e745ajsn2ac16a025434",
    },
  };
  $.ajax(settings).done(function (response) {
    console.log(response);
    var resultList = response.data.length;
    searchArr = [];
    for (i = 0; i < resultList; i++) {
      let searchObj = {
        artist: response.data[i].artist.name,
        album: response.data[i].album.title,
        songName: response.data[i].title_short,
        length: parseInt(response.data[i].duration),
        albumArtwork: response.data[i].album.cover_small,
      };

      var searchResults = userSearch;
      // var listEl = $("<ul>").attr("id", "ulTag");
      var artistList = $("<li>").attr("class", "list-group-item liTag");
      // var playBtn = $("<button>").attr("class", "playBtn").text("⏵");
      var playBtn = $("<button>").attr("class", "playBtn");
      playBtn
        .append($("<audio controls >"))
        .append(
          $(`<source src=${response.data[i].preview} type="audio/mpeg"> `)
        );
      var addPlaylistBtn = $("<button>")
        .attr("class", "addPlaylistBtn")
        .text("+");
      $("#search-results").append(
        artistList
          .append(`<img src=${response.data[i].album.cover}> `)
          .append(`<strong>Song:</strong> ${response.data[i].title_short} `)
          .append(`<strong>Album:</strong> ${response.data[i].album.title} `)
          .append(` <strong>Artist:</strong> ${response.data[i].artist.name}`)
          .append(playBtn)
          .append(addPlaylistBtn)
      );

      searchArr.push(searchObj);
    }
    // console.log(searchArr)
  });
  $("#search-results").empty();
});
