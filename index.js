
document.querySelector(".add__name").addEventListener("click", function(e) {
    let name = prompt("Mời bạn nhập tên:");
    localStorage.setItem("nameHeart", name);
    document.querySelector(".name").innerText = localStorage.getItem("nameHeart");
})
// Set name
document.querySelector(".name").innerText = localStorage.getItem("nameHeart");
document.title = localStorage.getItem("nameHeart");


