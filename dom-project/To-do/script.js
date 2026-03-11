let addBtn=document.getElementById("addBtn");

addBtn.onclick=function()
{

    let input=document.getElementById("taskInput");
    let task=input.value.trim();
    let list=document.getElementById("taskList");
    let error=document.getElementById("Error");

    if(task==="" || task == null)
    {
        error.innerText="Task cannot be empty";
        return;
    }

    // Check duplicate or not
    let items = list.getElementsByTagName("li");

    for(let i = 0; i < items.length; i++)
    {
        let existingTask = items[i].childNodes[0].nodeValue.trim();

        if(existingTask.toLowerCase() === task.toLowerCase()) 
        {
            error.innerText = "Task already exists";
            return;
        }
        else{
            error.innerText = "";
        }
    }

    let li=document.createElement("li");

    li.innerText=task;

    li.onclick=function()
    {
        li.classList.toggle("completed");
    }

    // Add Edit button
    let EditBtn=document.createElement("button");
    EditBtn.innerText="Edit";

    let delBtn=document.createElement("button");
    delBtn.innerText="Delete";

    // Task of edit button
    EditBtn.onclick=function()
    {
        let input=document.getElementById("taskInput");

        // get task text from li
        input.value = li.childNodes[0].nodeValue.trim();
        
        // remove the old task
        li.remove();
    }

    delBtn.onclick=function()
    {
        li.remove();
    }

    li.appendChild(EditBtn); // New added
    li.appendChild(delBtn);

    list.appendChild(li);

    input.value="";
}