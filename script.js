const audioElements = {
    rainAudio: document.getElementById("rainAudio"),
    myAudio: document.getElementById("myAudio"),
    pianoAudio: document.getElementById("pianoAudio")
};

function toggleMusic(audioId, buttonId, playIconClass, pauseIconClass) {
    const audio = audioElements[audioId];
    const button = document.getElementById(buttonId);

  
    if (audio.paused) {
        audio.play();
        button.className = "bi bi-pause"; // 
    } else {
        audio.pause();
        button.className = "bi bi-play"; // 
    }
}

function adjustVolume() {
    const volume = document.getElementById('volume-input').value / 10;
    for (const audio of Object.values(audioElements)) {
        audio.volume = volume;
    }
}

let distractionCount = 0;
function increaseDistractionCount() {
    distractionCount++;
    document.getElementById("distractionCount").innerText = distractionCount;

    if (distractionCount % 5 === 0) {
        alert("Telefonla Dikkat Dağıtma Butonuna 5 Kez Tıklandınız!");
    }
}