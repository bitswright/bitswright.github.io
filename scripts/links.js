document.getElementById("projects-link-on-intro-page").onclick = () => {
    document.getElementById("intro-div").style.display = "none";
    document.getElementById("projects-div").style.display = "block";
    document.getElementById("back-to-intro-btn").style.display = "block";
}

document.getElementById("about-link-on-intro-page").onclick = () => {
    document.getElementById("intro-div").style.display = "none";
    document.getElementById("about-div").style.display = "block";
    document.getElementById("back-to-intro-btn").style.display = "block";
}

document.getElementById("writings-link-on-intro-page").onclick = () => {
    document.getElementById("intro-div").style.display = "none";
    document.getElementById("writings-div").style.display = "block";
    document.getElementById("back-to-intro-btn").style.display = "block";
}

document.getElementById("back-to-intro-btn").onclick = () => {
    document.getElementById("intro-div").style.display = "block";
    document.getElementById("projects-div").style.display = "none";
    document.getElementById("about-div").style.display = "none";
    document.getElementById("writings-div").style.display = "none";
    document.getElementById("back-to-intro-btn").style.display = "none";
    document.getElementById("now-div").style.display = "none";
}

document.getElementById("now-link-on-about-page").onclick = () => {
    document.getElementById("about-div").style.display = "none";
    document.getElementById("now-div").style.display = "block";
    document.getElementById("back-to-intro-btn").style.display = "block";
}

document.getElementById("linkedin-link-on-intro-page").onclick = () => {
    window.open(URL, "_blank");
}




