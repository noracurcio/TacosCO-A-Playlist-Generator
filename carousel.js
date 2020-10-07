var apiKey = "444d1a61f4mshd57eb459b8b0709p1e745ajsn2ac16a025434"

//make ajax to try to pull img from playlists into an array

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
    
    // var img = $("<img>").attr("src", "https://api.deezer.com/playlist/2532117644/image" + response.md5_image + ".jpg")

    // $("<img>").append(img)


    // var img = (response.picture)
    // console.log(img)

    // $("<img>").append(img)
 

    $("#picture-1").on("click", function(){
    var playlistOneInfo = $("<p>").text(response.title, response.tracklist)
    console.log(playlistOneInfo)

})


});








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


3126664682

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

