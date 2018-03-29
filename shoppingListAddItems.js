 var submitButton = document.getElementById('submit');
 submitButton.addEventListener("click", addItem);

function addItem(){

    var input = document.getElementById("item").value;
    var li = document.createElement("li");

    li.textContent = input;

    return document.getElementById("list").appendChild(li);

}


