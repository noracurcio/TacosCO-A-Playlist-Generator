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
        sampleaudioLink: response.data[i].preview
      };

      // var listEl = $("<ul>").attr("id", "ulTag");
      var artistList = $("<li>").attr("class", "list-group-item liTag");
      // var playBtn = $("<button>").addClass("playBtn").text("⏵");
      var playBtn = $("<button>").addClass("playBtn");
      playBtn
        .append($("<audio controls >")
        .append(
          $(`<source src=${response.data[i].preview} type="audio/mpeg"> `)
        ));

      var addPlaylistBtn = $("<button>")
        .addClass("addPlaylistButton")
        .text("+");
      addPlaylistBtn.attr('id', 'addPlaylistButton' + i);
      addPlaylistBtn.attr("data-index", i);

      $(document).on("click", "#addPlaylistButton" + i, function(event) {
        var results = searchArr[event.target.dataset.index]
        var li = $("<li>").text("Artist Name: " + results.artist + "Song Name:  " +  results.songName + "Album Name: " + results.album)
        $(".playlist").append(li)

      }) 
     
      var resultDiv = $("<div>")
      resultDiv.addClass("searchResult")
      var albumArt = $("<img>")
      albumArt.addClass("albumArt")
      albumArt.attr("src", response.data[i].album.cover)
      resultDiv.append(albumArt)
      var songResult = $("<div>")
      songResult.addClass("songResult")
      songResult.text("Song: " + response.data[i].title_short)
      resultDiv.append(songResult)
      var artistResult = $("<div>")
      artistResult.addClass("artistResult")
      artistResult.text("Artist: " + response.data[i].artist.name)
      resultDiv.append(artistResult)
      var albumResult = $("<div>")
      albumResult.addClass("albumResult")
      albumResult.text("Album: " + response.data[i].album.title)
      resultDiv.append(albumResult)
      resultDiv.append(playBtn)
      resultDiv.append(addPlaylistBtn)
      $("#search-results").append(resultDiv);
    

      searchArr.push(searchObj);
    }
    console.log(searchArr)
  });
  $("#search-results").empty();
});



