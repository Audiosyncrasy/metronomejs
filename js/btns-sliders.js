// Toggles play button from 'play' to 'pause'
var getBtn = document.getElementById('playBtn');
var getIcon = document.getElementById('transportIcon');



/*function changeClass() {
    if (getIcon.className === 'fas fa-play') {
        getBtn.innerHTML = '<i class="fas fa-pause"></i>';
    } else if (getIcon.className === 'fas fa-pause') {
        getBtn.innerHTML = '<i class="fas fa-play"></i>';
    }
}*/

window.onload = function changeClass() {
    if (getIcon.className === 'fas fa-play') {
        getBtn.addEventListener('click', function (play) {
            getBtn.innerHTML = '<i class="fas fa-pause"></i>';
        });
    } else if (getIcon.className === 'fas fa-pause') {
        getBtn.addEventListener('click', function (pause) {
            getBtn.innerHTML = '<i class="fas fa-play"></i>';
        });
    }
};

