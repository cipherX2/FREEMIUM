document.getElementById("main-heading").addEventListener("mouseenter",function (e) {
    this.style.color= "blue"
    setTimeout(() => {
        this.style.color = "white"
    }, 100);
});
