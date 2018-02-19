// Toggles play button from 'play' to 'pause'
var getBtn = document.getElementById('playBtn');
var getIcon = document.getElementById('transportIcon');

getBtn.addEventListener('click', function () {
    if (getIcon.className === 'fas fa-play') {
        getIcon.setAttribute('class', 'fas fa-pause');
    } else {
        getIcon.setAttribute('class', 'fas fa-play');
    }
});