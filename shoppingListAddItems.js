var submitButton = document.getElementById('submit');
button.addEventListener("click", () => {
    addItem();
});

function addItem() {
    var deletebutton = document.createElement('button'),
        input = document.getElementById("input").value,
        li = document.createElement("li");

    //     document.getElementById("input").value = "";

    li.textContent = input;
    return document.getElementById("list").appendChild(li);


    /*  deletebutton.textContent = "Delete";
      deletebutton.className = "delete"

      deletebutton.addEventListener("click", () => {
         var target = deletebutton.parentElement;
         target.remove();
     });*/

    content.textContent = input + " ";

    li.appendChild(content);
    li.appendChild(deletebutton);

    list.appendChild(li);

}
