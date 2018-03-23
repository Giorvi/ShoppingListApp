var button = document.getElementById('submit');
button.addEventListener("click", () => {
    document.getElementById("list").textContent = addItem();
});
//var itemInput = document.getElementById("item");
//var clear = document.getElementById("clear");
//var submit = document.getElementById("submit");
// var list = document.getElementById("list");


function addItem() {
    var itemInput = document.getElementById("item");
    var clear = document.getElementById("clear");
    var submit = document.getElementById("submit");
    var list = document.getElementById("list");
    var currentItem = itemInput.value;
    var listItem = document.createElement("li");

    return "i hate this class";

}
