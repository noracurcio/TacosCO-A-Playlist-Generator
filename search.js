$(document).ready(function () {
  let userChoice;
  let userSearch;
  let artist;
  let album;
  let songName;
  let genre;
  let length;
  let searchArr;
  let searchObj;
  // search area
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
          sampleaudioLink: response.data[i].preview,
        };
        var indx = i;
        var playBtn = $("<button>").addClass("playBtn");
        playBtn.append(
          $("<audio controls >").append(
            $(`<source src=${response.data[i].preview} type="audio/mpeg"> `)
          )
        );
        var addPlaylistBtn = $("<button>")
          .addClass("addPlaylistButton")
          .text("+");
        addPlaylistBtn.attr('id', "addPlaylistButton" + i);
        addPlaylistBtn.attr('indx', indx);
        var resultDiv = $("<div>");
        resultDiv.addClass("searchResult");
        var albumArt = $("<img>");
        albumArt.addClass("albumArt");
        albumArt.attr("src", response.data[i].album.cover);
        resultDiv.append(albumArt);
        var songResult = $("<div>");
        songResult.addClass("songResult");
        songResult.text("Song: " + response.data[i].title_short);
        resultDiv.append(songResult);
        var artistResult = $("<div>");
        artistResult.addClass("artistResult");
        artistResult.text("Artist: " + response.data[i].artist.name);
        resultDiv.append(artistResult);
        var albumResult = $("<div>");
        albumResult.addClass("albumResult");
        albumResult.text("Album: " + response.data[i].album.title);
        resultDiv.append(albumResult);
        resultDiv.append(playBtn);
        resultDiv.append(addPlaylistBtn);
        $("#search-results").append(resultDiv);
        searchArr.push(searchObj);
      }
      for (a = 0; a < 29; a++) {
        var button = document.getElementById('addPlaylistButton' + a);
        $(button).on("click", function (event) {
          $("#tacoTV").remove();
          var li = $("<lil>").addClass("list-group-item list-group-item-light").text(event.currentTarget.parentElement.children[1].textContent + event.currentTarget.parentElement.children[2].textContent + event.currentTarget.parentElement.children[3].textContent);
          li.append('<button id = "delete">x</button>');
          $(".playlist").append(li);
          $(".playlist").on("click", "#delete", function () {
            $(this).parent().remove();
          });
        });
      }
    });
    $("#search-results").empty();
  });

  $("#playlistExport").on("click", function (event) {
    var songData = (event.target.parentElement.children[0].innerText);
    // console.log(event.target.parentElement.children[0].innerText)
    const copyToClipboard = str => {
      const el = document.createElement('textarea');
      el.value = str;
      el.setAttribute('readonly', '');
      el.style.position = 'absolute';
      el.style.left = '-9999px';
      document.body.appendChild(el);
      el.select();
      document.execCommand('copy');
      document.body.removeChild(el);
    }
    copyToClipboard(songData);
    $("#playlistExport").text("Your playlist has been copied to your clipboard. Open a blank notepad file and paste!");
  });

  let myTypeItInstance = new TypeIt("#element", {
    // speed: 100,
    afterComplete: function (step, instance) {
      instance.destroy();
    }
  });

  myTypeItInstance.go();

});