const dragItems = document.querySelectorAll('.todo');
const containers = document.querySelectorAll('.content-box');
let draggableTodo = null;

dragItems.forEach((todo) => {
  todo.addEventListener("dragstart", dragStart);
  todo.addEventListener("dragend", dragEnd);
});

function dragStart() {
  draggableTodo = this;
  setTimeout(() => {
    this.style.display = "none";
  }, 0);
  console.log("dragStart");
}

function dragEnd() {
  draggableTodo = null;
  setTimeout(() => {
    this.style.display = "flex";
  }, 0);
  console.log("dragEnd");
}

containers.forEach((status) => {
  status.addEventListener("dragover", dragOver);
  status.addEventListener("dragenter", dragEnter);
  status.addEventListener("dragleave", dragLeave);
  status.addEventListener("drop", dragDrop);
});

function dragOver(e) {
  this.style.backgroundColor = "#CCCCCC";
  e.preventDefault();
  //   console.log("dragOver");
}

function dragEnter() {
  this.style.backgroundColor = "#EEEEEE" ;
  console.log("dragEnter");
}

function dragLeave() {
  this.style.backgroundColor = "#EEEEEE" ;
  console.log("dragLeave");
}

function dragDrop() {
  this.style.backgroundColor = "#EEEEEE" ;
  this.appendChild(draggableTodo);
  console.log("dropped");
}

/* modal */
const btns = document.querySelectorAll("[data-target-modal]");
const close_modals = document.querySelectorAll(".close-modal");
const overlay = document.getElementById("overlay");

btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelector(btn.dataset.targetModal).classList.add("active");
    overlay.classList.add("active");
  });
});

close_modals.forEach((btn) => {
  btn.addEventListener("click", () => {
    const modal = btn.closest(".modal");
    modal.classList.remove("active");
    overlay.classList.remove("active");
  });
});

window.onclick = (event) => {
  if (event.target == overlay) {
    const modals = document.querySelectorAll(".modal");
    modals.forEach((modal) => modal.classList.remove("active"));
    overlay.classList.remove("active");
  }
};

/* create todo  */
const todo_submit = document.getElementById("todo_submit");

todo_submit.addEventListener("click", createTodo);

function createTodo() {
  const todo_div = document.createElement("div");
  const input_val = document.getElementById("todo_input").value;
  const txt = document.createTextNode(input_val);

  todo_div.appendChild(txt);
  todo_div.classList.add("todo");
  todo_div.setAttribute("draggable", "true");
  // console.log(todo_div)

  /* create span */
  const span = document.createElement("span");
  const span_txt = document.createTextNode("\u00D7");
  span.classList.add("close");
   span.appendChild(span_txt);

  todo_div.appendChild(span);

  no_status.appendChild(todo_div);

  span.addEventListener("click", () => {
    span.parentElement.style.display = "none";
  });
  //   console.log(todo_div);

  todo_div.addEventListener("dragstart", dragStart);
  todo_div.addEventListener("dragend", dragEnd);

  document.getElementById("todo_input").value = "";
  todo_form.classList.remove("active");
  overlay.classList.remove("active");
}

const close_btns = document.querySelectorAll(".close");

close_btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.parentElement.style.display = "none";
  });
});