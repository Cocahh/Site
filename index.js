var audio, playbtn, audio2, playbtn2
function initAudioPlayer(){
	audio = new Audio();
	audio.src = "Audio/mp3/Chuva.mp3";
	audio.loop = true;
	audio.play();
	// Set object references
	playbtn = document.getElementById("play1");
  	volumeslider = document.getElementById("volumeslider");
	// Add Event Handling
	playbtn.addEventListener("click",playPause);
  	volumeslider.addEventListener("mousemove", setvolume);
	// Functions
	function playPause(){
		if(audio.paused){
		    audio.play();

	    } else {
		    audio.pause();
	    }
	}
  function setvolume(){
    audio.volume = volumeslider.value / 100;
  }
}

function initAudioPlayer2(){
	audio2 = new Audio();
	audio2.src = "Audio/mp3/Vento.mp3";
	audio2.loop = true;
	audio2.play();
	// Set object references
	playbtn2 = document.getElementById("play2");
  volumeslider2 = document.getElementById("volumeslider2");
	// Add Event Handling
	playbtn2.addEventListener("click",playPause2);
  volumeslider2.addEventListener("mousemove", setvolume2);
	// Functions
	function playPause2(){
		if(audio2.paused){
		    audio2.play();

	    } else {
		    audio2.pause();
	    }
	}
  function setvolume2(){
    audio2.volume = volumeslider2.value / 100;
  }
}

function initAudioPlayer3(){
	audio3 = new Audio();
	audio3.src = "Audio/mp3/Lareira.mp3";
	audio3.loop = true;
	audio3.play();
	// Set object references
	playbtn3 = document.getElementById("play3");
  volumeslider3 = document.getElementById("volumeslider3");
	// Add Event Handling
	playbtn3.addEventListener("click",playPause3);
  volumeslider3.addEventListener("mousemove", setvolume3);
	// Functions
	function playPause3(){
		if(audio3.paused){
		    audio3.play();

	    } else {
		    audio3.pause();
	    }
	}
  function setvolume3(){
    audio3.volume = volumeslider3.value / 100;
  }
}


window.addEventListener("load", initAudioPlayer);
window.addEventListener("load", initAudioPlayer2);
window.addEventListener("load", initAudioPlayer3);
