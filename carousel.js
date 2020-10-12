var ulTag;
var titleInfo;
var artistInfo;
var albumInfo;
var songInfo;
var newBr;
var apiKey = "444d1a61f4mshd57eb459b8b0709p1e745ajsn2ac16a025434";

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

$.ajax(throwbackPlaylist).done(function (response) {
	console.log(response);
	$("#picture-1").on("click", function (test) {
		$("#playlist-info").empty();
		var playlistInfo = $("#playlist-info");
		for (i = 0; i < 4; i++) {
			console.log(test);
			// var trackInfo = response.tracks.data[i]
			ulTag = $("<ul>");
			titleInfo = (response.tracks.data[i].title);
			artistInfo = (response.tracks.data[i].artist.name);
			albumInfo = (response.tracks.data[i].album.title);
			songInfo = $("<li>").addClass("text-white bg-dark").text("Title:  " + titleInfo + "..." + "Artist:  " + artistInfo + "..." + "Album:  " + albumInfo);
			newBr = $("<br>");
			// var artistLi = $("<li>").addClass("right-text text-white bg-dark").text("Artist:  " + trackInfo.artist.name + "   ");
			ulTag.append(songInfo);
			playlistInfo.append(ulTag);
		}
	});
})

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
	$("#picture-2").on("click", function (test) {
		$("#playlist-info").empty();
		var playlistInfo = $("#playlist-info");
		for (i = 0; i < 4; i++) {
			console.log(test);
			// var trackInfo = response.tracks.data[i]
			ulTag = $("<ul>");
			titleInfo = (response.tracks.data[i].title);
			artistInfo = (response.tracks.data[i].artist.name);
			albumInfo = (response.tracks.data[i].album.title);
			songInfo = $("<li>").addClass("text-white bg-dark").text("Title:  " + titleInfo + "..." + "Artist:  " + artistInfo + "..." + "Album:  " + albumInfo);
			newBr = $("<br>");
			// var artistLi = $("<li>").addClass("right-text text-white bg-dark").text("Artist:  " + trackInfo.artist.name + "   ");
			ulTag.append(songInfo);
			playlistInfo.append(ulTag);
		}
	});
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
	$("#picture-3").on("click", function (test) {
		$("#playlist-info").empty();
		var playlistInfo = $("#playlist-info");
		for (i = 0; i < 4; i++) {
			console.log(test);
			// var trackInfo = response.tracks.data[i]
			ulTag = $("<ul>");
			titleInfo = (response.tracks.data[i].title);
			artistInfo = (response.tracks.data[i].artist.name);
			albumInfo = (response.tracks.data[i].album.title);
			songInfo = $("<li>").addClass("text-white bg-dark").text("Title:  " + titleInfo + "..." + "Artist:  " + artistInfo + "..." + "Album:  " + albumInfo);
			newBr = $("<br>");
			// var artistLi = $("<li>").addClass("right-text text-white bg-dark").text("Artist:  " + trackInfo.artist.name + "   ");
			ulTag.append(songInfo);
			playlistInfo.append(ulTag);
		}
	});
});