/* eslint-disable max-classes-per-file */
import './style.css';
import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/regular';
import '@fortawesome/fontawesome-free/js/brands';

const clear = document.querySelector(".clear");
const list = document.getElementById("list");
const input = document.getElementById("input");

// classes name
const CHECK = "fa-check-square";
const UNCHECK = "fa-square";
const LINE_THROUGH = "lineThrough";


// Variables
let LIST, id;

// Get item from Local Storage
let data = localStorage.getItem("TODO");

// check if data is not empty
if(data) {
  LIST = JSON.parse(data);
  id = LIST.length;
  loadList(LIST);
}else{
  //if data isn't empty
  LIST = [];
  id = 0;
}

// clear local Storage
clear.addEventListener("click", function(){
  localStorage.clear();
  location.reload();
});

// load items
function loadList(array) {
  array.forEach(function(item){
    addToDo(item.name, item.id, item.done, item.trash);
  });
}

// add to-do function
function addToDo(toDo, id, done, trash) {

  if(trash){ return; }

  const DONE = done ? CHECK : UNCHECK;
  const LINE = done ? LINE_THROUGH : "";

  const item =
    `<li class="item">
      <i class="far ${DONE}" job="complete" id="${id}"></i>
      <p class="text ${LINE}"> ${toDo}</p>
      <i class="fas fa-trash-alt" job="delete" id="${id}"></i>
    </li>`

  const position = "beforeend";

  list.insertAdjacentHTML(position, item);
}

// add an item to the list on enter key
document.addEventListener("keyup", function(event) {
  if(event.keyCode == 13) {
    const toDo = input.value;

      // if the input isn't empty
      if(toDo){
        addToDo(toDo, id, false, false);

        LIST.push({
          name : toDo,
          id : id,
          done : false,
          trash : false
        });

        // Add item from Local Storage
        localStorage.setItem("TODO", JSON.stringify(LIST));

        id++
      }
      input.value = "";
  }
})

// Complete to do
function completeToDo(element) {
  element.classList.toggle(CHECK);
  element.classList.toggle(UNCHECK);
  element.parentNode.querySelector(".text").classList.toggle(LINE_THROUGH);

  LIST[element.id].done = LIST[element.id].done ? false : true;
}

// Remove to do
function removeToDo(element) {
  element.parentNode.parentNode.removeChild(element.parentNode);

  LIST[element.id].trash = true
}

// target the element
list.addEventListener("click", function(event){
  const element = event.target; //return click element inside list
  const elementJob = element.attributes.job.value; // complete or delete

  if(elementJob == "complete"){
    completeToDo(element);
  }else if(elementJob == "delete"){
    removeToDo(element);
  }

  // Add item from Local Storage
  localStorage.setItem("TODO", JSON.stringify(LIST));
});
