window.pastPos = 0;
window.fixPos = null;

window.onscroll = function() {
    const sticky = document.querySelector(".tutorial.title.wrapper");
    const pos = sticky.getBoundingClientRect().y;
    if(window.fixPos === null) {
        if (pos === window.pastPos) {
            window.fixPos = pos;
            sticky.classList.add("sticked");
        } else {
            window.pastPos = pos;
            sticky.classList.remove("sticked");
        }
    } else {
        if (pos <= window.fixPos) {
            sticky.classList.add("sticked");
        } else {
            window.pastPos = pos;
            sticky.classList.remove("sticked");
        }
    }
};