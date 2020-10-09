

var apiKey = "444d1a61f4mshd57eb459b8b0709p1e745ajsn2ac16a025434"






// document.addEventListener('DOMContentLoaded', function() {
//     var elems = document.querySelectorAll('.carousel');
//     var instances = M.Carousel.init(elems, options);
//   });

  // Or with jQuery

//   $(document).ready(function(){
//     $('.carousel').carousel();
//   });


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
    $("#picture-1").on("click", function(test){
		
		var playlistInfo = $("#playlist-info")
    
		for(i = 0; i < response.tracks.data.length; i++){
			console.log(test)
			var trackInfo = response.tracks.data[i]
			var titlePTag = $("<p>").addClass("right-text").text(trackInfo.title);
			var artistPTag = $("<p>").addClass("right-text").text(trackInfo.artist.name);
			playlistInfo.append(titlePTag, artistPTag)

			 

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
    
    
})
