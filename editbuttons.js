//inputs
var playlist = ["Pony", "XYZZY", "Song 3", "fgsfds", "DSFARGEG"]; //song names get them from the playlist info
// code


function moveUp(i) {
  if (i !== 0) {
    var temp = playlist[i];
    playlist[i] = playlist[i - 1];
    playlist[i - 1] = temp;
    renderList(playlist);
  }
}

function moveDwn(i) {
  if (i !== playlist.length) {
    var temp = playlist[i];
    playlist[i] = playlist[i + 1];
    playlist[i + 1] = temp;
    renderList(playlist);
  }
}

function renderList(pl){
  // depends on format
  var btnUp = $("<button type='button' class='btn-sm' id='btnUp'>^</button>") // make an up button
var btnDwn = $("<button type='button' class='btn-sm' id='btnDwn'>v</button>"); // make a new down button
$("#song").append(btnUp, btnDwn); //stick the buttons onto the song location
// on each song li
$("#btnUp").on("click", moveUp(idx));
$("#btnDwn").on("click", moveDwn(idx));
}

