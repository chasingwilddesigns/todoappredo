function onReady() {
  let toDos = [];
  const addToDoForm = document.getElementById('addToDoForm');
  let id = 0;
   function createNewToDo() {
    const newToDoText = document.getElementById('newToDoText');
    if (!newToDoText.value) { return; }
     toDos.push ({
      title: newToDoText.value,
      complete: false,
      id: id
     });
     id++;
     newToDoText.value = '';
     renderTheUI();
  }
   function deleteToDo(id) {
    return toDos.filter(toDo => toDo.id !==id);
  }
   function renderTheUI() {
    const toDoList = document.getElementById('toDoList');
    toDoList.textContent = '';
     toDos.forEach(function(toDo) {
      const newLi = document.createElement('li');
      const checkbox = document.createElement('input');
      checkbox.type = "checkbox";
       const deleteButton = document.createElement('button');
      deleteButton.textContent = 'x';
       deleteButton.addEventListener('click', event => {
        toDos = deleteToDo(toDo.id);
        renderTheUI();
      });
       newLi.textContent = toDo.title;
       toDoList.appendChild(newLi);
      newLi.appendChild(checkbox);
      newLi.appendChild(deleteButton);
     });
  }
   addToDoForm.addEventListener('submit', event => {
    event.preventDefault();
    createNewToDo();
  });
   renderTheUI();
}
 window.onload = function () {
  alert("The window has loaded!");
  onReady();
};
