import images from "@resources/images";

export function playSound(url = images.sound_click) {
    var audio = document.createElement('audio');
    audio.style.display = "none";
    audio.src = url;
    audio.autoplay = true;
    audio.onended = function () {
        audio.remove() //Remove when played.
    };
    document.body.appendChild(audio);
}
