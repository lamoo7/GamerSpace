document.addEventListener("click", function(event) {
    if (event.target === document.getElementById("dialogElement")) {
        document.getElementById("dialogElement").close();
        document.getElementById("dialogElement").innerHTML = '<div id="mini-loader"></div>';
    }
});