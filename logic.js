document.addEventListener("DOMContentLoaded", function () {
    var splashScreen = document.getElementById("splashScreen");
    setTimeout(function () {
        splashScreen.style.display = "none";
    }, 5000);
    
    // playPauseBtn.addEventListener('click', function () {
    //     if (audioPlayer.paused) {
    //         audioPlayer.play();
    //         playPauseBtn.textContent = 'Pause';
    //     } else {
    //         audioPlayer.pause();
    //         playPauseBtn.textContent = 'Play';
    //     }
    // });
});

const slider = document.querySelector('.slider');

function activate(e) {
    const items = document.querySelectorAll('.item');
    e.target.matches('.next') && slider.append(items[0]);
    e.target.matches('.prev') && slider.prepend(items[items.length - 1]); // Corrected typo here
}
document.addEventListener('click', activate, false);
