var button = document.getElementById("submit");
button.addEventListener("click", () => {
    addandsubtract();
});

var list = document.getElementsByTagName("ul")[0];

function addandsubtract() {
    var input = document.getElementById("item").value;
    var li = document.createElement("li");
    var txtcontent = document.createElement("span");
    var deleteb = document.createElement("button");

    document.getElementById("item").value = ""

    deleteb.textContent = "remove";
    deleteb.className = "delete"

    deleteb.addEventListener("click", () => {
        var removeb = deleteb.parentElement;
        removeb.remove();
    });

    txtcontent.textContent = input;

    li.appendChild(txtcontent);
    li.appendChild(deleteb);

    list.appendChild(li);

}
