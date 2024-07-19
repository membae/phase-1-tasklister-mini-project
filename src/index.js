document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("create-task-form");
  const taskList = document.getElementById("tasks");

  form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const newelement=document.getElementById("new-task-description").value;
    const list=document.createElement("li");

    list.textContent=newelement;
    taskList.appendChild(list)
    form.reset();
  })
});
