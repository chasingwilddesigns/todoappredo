function onReady(){
  let id = 0;
  addToDoForm = document.getElementById('addToDoForm');
  const toDos = [];

  function createNewToDo() {
    const newToDoText = document.getElementById('newToDoText');
    if (!newToDoText.value) { return; }

    toDos.push({
      title: newToDoText.value,
      complete: false
      let id = [0]
    });

    newToDoText.value = '';

    renderTheUI(
      deleteBtn.addEventListener('click', function(event){
        let buttonLiText = this.parentElement.childNodes[0].textContent;
        // console.log(event);
        // this.parentElement represents the button's <li> parent
        toDoList.removeChild(this.parentElement);
    );
  }

  addToDoForm.addEventListener('submit', event => {
    event.preventDefault();
    createNewToDo();
  });

  function renderTheUI() {
    const toDoList = document.getElementById('toDoList');
    let toDos = [];
    let id = 0;

    toDoList.textContent = '';

    toDos.forEach(function(todo) {
      const newLi = document.createElement('li');
      const checkbox = document.createElement('input');
      checkbox.type = "checkbox";

      newLi.textContent = toDo.title;

      toDoList.appendChild(newLi);
      newLi.appendChild(checkbox);
    });
  }
}

window.onload = function() {
  onReady();
};
