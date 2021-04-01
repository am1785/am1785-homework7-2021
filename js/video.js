window.addEventListener("load", function() {
	console.log("Good job opening the window")
});

window.addEventListener("DOMContentLoaded", initialize);

function initialize(){

	document.getElementById("play").addEventListener("click", playVideo);
	document.getElementById("pause").addEventListener("click", pauseVideo);
	document.getElementById("slower").addEventListener("click", slowVideo);
	document.getElementById("faster").addEventListener("click", speedVideo);
	document.getElementById("skip").addEventListener("click", skipVideo);
	document.getElementById("mute").addEventListener("click", muteUnmute);
	document.getElementById("slider").addEventListener("change", setVolume);
	document.getElementById("vintage").addEventListener("click", setOld);
	document.getElementById("orig").addEventListener("click", setOrig);
	var speedChange = 0;

	function playVideo(){
		document.getElementById("player1").play();
		document.getElementById("volume").innerHTML = document.getElementById("player1").volume * 100 + "%";
		console.log("Play Video");
	}

	function pauseVideo(){
		document.getElementById("player1").pause();
		console.log("Paused Video");
	}

	function slowVideo(){
		var playRate = document.getElementById("player1").playbackRate;
		document.getElementById("player1").playbackRate = playRate * 0.95;
		console.log("New Playspeed: " + document.getElementById("player1").playbackRate);
	}

	function speedVideo(){
		var playRate = document.getElementById("player1").playbackRate;
		document.getElementById("player1").playbackRate = playRate * 1.05;
		console.log("New Playspeed: " + document.getElementById("player1").playbackRate);
	}
	function skipVideo(){
		document.getElementById("player1").currentTime += 15;
		var current_time = document.getElementById("player1").currentTime;
		if (current_time == document.getElementById("player1").duration) {
			document.getElementById("player1").currentTime = 0;
			current_time = 0.00;
		}
		console.log("Timestamp: " + document.getElementById("player1").currentTime);
	}
	function muteUnmute(){
		if (document.getElementById("player1").muted == true){
		document.getElementById("player1").muted = false;
		document.getElementById("mute").innerHTML = "Mute";
		console.log("Unmuted");
		} else {
			document.getElementById("player1").muted = true;
			document.getElementById("mute").innerHTML = "Unmute";
			console.log("Muted");
		}
	}
	function setVolume(){
		document.getElementById("player1").volume = document.getElementById("slider").value/100;
		document.getElementById("volume").innerHTML = document.getElementById("player1").volume * 100 + "%";
	}
	function setOld() {
		document.getElementById("player1").className = "oldSchool";
		console.log("old school theme applied!")
	}
	function setOrig() {
		document.getElementById("player1").className = "video";
		console.log("original theme applied!")
	}
}

// document.querySelector("#play").addEventListener("click", function() {
// 	console.log("Play Video");
// });