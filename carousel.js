var apiKey = "444d1a61f4mshd57eb459b8b0709p1e745ajsn2ac16a025434"

//make ajax to try to pull img from playlists into an array
//This is the throwback Playlist
var throwbackPlaylist = {
	"async": true,
	"crossDomain": true,
	"url": "https://deezerdevs-deezer.p.rapidapi.com/playlist/1964028802",
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
		"x-rapidapi-key": "bac4be6256mshbee794f89d91b14p1ac9b6jsn5140f9dffd59"
	}
}


var currentClick = 


$.ajax(throwbackPlaylist).done(function (response) {
    console.log(response);
    $("#picture-1").on("click", function(){
		event.preventDefault();
		var playistInfo = $("<li>").attr("class", "list-group-item liTag");
		
		$("#carousel")
		.append(`<img src=${response.data[i].album.cover}> `)
		.append(`<strong>Song:</strong> ${response.data[i].title_short} `)
		.append(`<strong>Album:</strong> ${response.data[i].album.title} `)
		.append(` <strong>Artist:</strong> ${response.data[i].artist.name}`)
		$()



	})


	$("#picture-1").on("click", function (event) {
    var currentClick = $("#picture-1").on("click", function(){
    var playlistOneInfo = $("<p>").text(response.title, response.tracklist)
    console.log(playlistOneInfo)

})


});


// $("#picture-1").on("click", function (event) {
	

	// var searchResults = userSearch;
	// // var listEl = $("<ul>").attr("id", "ulTag");
	// var artistList = $("<li>").attr("class", "list-group-item liTag");
	// // var playBtn = $("<button>").attr("class", "playBtn").text("⏵");
	// var playBtn = $("<button>").attr("class", "playBtn");
	// playBtn
	//   .append($("<audio controls >"))
	//   .append(
	// 	$(`<source src=${response.data[i].preview} type="audio/mpeg"> `)
	//   );
	// var addPlaylistBtn = $("<button>")
	//   .attr("class", "addPlaylistBtn")
	//   .text("+");
	// $("#search-results").append(
	//   artistList
	// 	.append(`<img src=${response.data[i].album.cover}> `)
	// 	.append(`<strong>Song:</strong> ${response.data[i].title_short} `)
	// 	.append(`<strong>Album:</strong> ${response.data[i].album.title} `)
	// 	.append(` <strong>Artist:</strong> ${response.data[i].artist.name}`)
	// 	.append(playBtn)
	// 	.append(addPlaylistBtn)
	// );

	
	
	//   var resultList = response.data.length;
	//   searchArr = [];
	//   for (i = 0; i < resultList; i++) {
	// 	let searchObj = {
	// 	  artist: response.data[i].artist.name,
	// 	  album: response.data[i].album.title,
	// 	  songName: response.data[i].title_short,
	// 	  length: parseInt(response.data[i].duration),
	// 	  albumArtwork: response.data[i].album.cover_small,
	// 	};
  
	// 	var searchResults = userSearch;
	// 	// var listEl = $("<ul>").attr("id", "ulTag");
	// 	var artistList = $("<li>").attr("class", "list-group-item liTag");
	// 	// var playBtn = $("<button>").attr("class", "playBtn").text("⏵");
	// 	var playBtn = $("<button>").attr("class", "playBtn");
	// 	playBtn
	// 	  .append($("<audio controls >"))
	// 	  .append(
	// 		$(`<source src=${response.data[i].preview} type="audio/mpeg"> `)
	// 	  );
	// 	var addPlaylistBtn = $("<button>")
	// 	  .attr("class", "addPlaylistBtn")
	// 	  .text("+");
	// 	$("#search-results").append(
	// 	  artistList
	// 		.append(`<img src=${response.data[i].album.cover}> `)
	// 		.append(`<strong>Song:</strong> ${response.data[i].title_short} `)
	// 		.append(`<strong>Album:</strong> ${response.data[i].album.title} `)
	// 		.append(` <strong>Artist:</strong> ${response.data[i].artist.name}`)
	// 		.append(playBtn)
	// 		.append(addPlaylistBtn)
	// 	);




//This is the workout playlist
var workoutPlaylist = {
	"async": true,
	"crossDomain": true,
	"url": "https://deezerdevs-deezer.p.rapidapi.com/playlist/2532117644",
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
		"x-rapidapi-key": "bac4be6256mshbee794f89d91b14p1ac9b6jsn5140f9dffd59"
	}
}

$.ajax(workoutPlaylist).done(function (response) {
    console.log(response);
    
    
}); 





//This is the rock playlist 
var rockPlaylist = {
	"async": true,
	"crossDomain": true,
	"url": "https://deezerdevs-deezer.p.rapidapi.com/playlist/3126664682",
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
		"x-rapidapi-key": "bac4be6256mshbee794f89d91b14p1ac9b6jsn5140f9dffd59"
	}
}

$.ajax(rockPlaylist).done(function (response) {
    console.log(response);
    
    
}); 

