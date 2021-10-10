document.getElementById("main-heading").addEventListener("mouseenter",function (e) {
    this.style.color= "blue"
    setTimeout(() => {
        this.style.color = "white"
    }, 100);
});

const date = new Date().getFullYear();
document.querySelector(".my-footer-class").innerHTML= `All CopyRights Reserved &copy; ${date}`;