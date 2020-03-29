search_btn.onclick = function () {

    // Get the youtube url source
    let url = document.getElementById("youtube-url").value; // Our iframe
    let video_src = document.getElementById("video_src").src;

    // This function is for changing the youtube url source on the iframe
    function changeSrc() {
        video_src = "https://www.youtube.com/embed/" + url[2];
        document.getElementById("video-src").src = video_src;
    }


    if (url.match(/(\?|&)v=([^&#]+)/)) {
        url = url.match(/(\?|&)v=([^&#]+)/);
        changeSrc();
    }
}