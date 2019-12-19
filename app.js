function onReady(){
  const addToDoForm = document.getElementById('addToDoForm');
  const newToDoText = document.getElementById('newToDoText');
  const toDoList = document.getElementById('toDoList');

  addToDoForm.addEventListener('submit', (event) => {
    event.preventDefault();

    let title = newToDoText.value;

    let newLi = document.createElement('li');

    let checkbox = document.createElement('input');

    checkbox.type = "checkbox";

    newLi.textContext = title;

    newLi.appendChild(checkbox);

    toDoList.appendChild(newLi);

    newToDoText.value = '';

  });

}

var checkbox = document.querySelector("input[name=checkbox]");

checkbox.addEventListener( 'change', function() {
    if(this.checked) {
        // Checkbox is checked..
    } else {
        // Checkbox is not checked..
    }
});

window.onload = function() {
  onReady();
};
