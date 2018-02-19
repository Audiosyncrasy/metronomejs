// Toggles play button from 'play' to 'pause'
var getBtn = document.getElementById('playBtn');
var getIcon = document.getElementById('transportIcon');

getBtn.addEventListener('click', function () {
    if (getIcon.className === 'fa fa-play') {
        getIcon.setAttribute('class', 'fa fa-pause');
    } else {
        getIcon.setAttribute('class', 'fa fa-play');
    }
});