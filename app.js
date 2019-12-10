function onReady(){
  let toDos = [];

  const ADD_TODO_FORM = document.getElementById('addToDoForm');
  const NEW_TODO_TEXT = document.getElementById('newToDoText');
  const TODO_LIST = document.getElementById('toDoList');

  ADD_TODO_FORM.addEventListener('submit', (event) => {
    event.preventDefault();

    let title = NEW_TODO_TEXT.value;

    toDos.push(title);
    console.log(toDos);

    let newLi = document.createElement('li'); // <li></li>
    let checkbox = document.createElement('input');
    checkbox.type = "checkbox";

    let deleteBtn = document.createElement('button');
    deleteBtn.textContent = "Delete";

    deleteBtn.addEventListener('click', function(event){
      let buttonLiText = this.parentElement.childNodes[0].textContent;
      // console.log(event);
      // this.parentElement represents the button's <li> parent
      TODO_LIST.removeChild(this.parentElement);

      toDos.forEach(function(currentToDo, index){
        // console.log(currentToDo, index);
        // console.log(this);

        if(currentToDo === buttonLiText){
          // remove from array
          toDos.splice(index, 1);
        }
        console.log(toDos);
      });
    })

    newLi.textContent = title;
    newLi.appendChild(checkbox);
    newLi.appendChild(deleteBtn);
    TODO_LIST.appendChild(newLi);
    NEW_TODO_TEXT.value = "";
  });
};

window.onload = function() {
  onReady();
};
