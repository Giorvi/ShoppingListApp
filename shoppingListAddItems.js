 var submitButton = document.getElementById('submit');
 submitButton.addEventListener("click", () => {
     document.getElementById('').textContent = addItem();
 });

function addItem() {
    var itemInput = document.getElementById("item");
    var newItem = document.createElement("li");
    var itemcontent = document.createTextNode(itemInput);

    newItem.appendChild(itemcontent);

    var currentItem = document.getElementById("item");
    document.body.insertBefore(newItem, currentItem);


}


