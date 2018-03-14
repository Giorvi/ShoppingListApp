 var submitButton = document.getElementById('submit')
 submitButton.addEventListener("click", () => {
     document.getElementById('list').textContent = addItem();
 });

 //var itemInput = document.getElementById("item");
 //var clear = document.getElementById("clear");
 //var submit = document.getElementById("submit");
 // var list = document.getElementById("list");

 function addItem() {
     var inputItem = document.getElementById("item");
     var currentItem = inputItem.textContent;
     var listItem = document.createElement("li");
     listItem.innerHTML = currentItem;
     list.appendChild(listItem);

    return itemInput.textContent = "";
 }

 function clearItem() {


 }
 //submit.onclick = addItem;
 //clear.onclick = function () {
 //list.innerHTML = "";
 // itemInput.value = "";
 // }
