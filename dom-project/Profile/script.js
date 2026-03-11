function updateProfile()
{

let name=document.getElementById("name").value;
let bio=document.getElementById("bio").value;
let errName = document.getElementById("errName");

if(name==="" || bio===""){
errName.innerText = "Fields cannot be empty";
return;
}

document.getElementById("pname").innerText=name;
document.getElementById("pbio").innerText=bio;
errName.innerText = "";
document.getElementById("name").value="";
document.getElementById("bio").value="";

}

function addHobby()
{
    let hobby=document.getElementById("hobby").value;

    let list=document.getElementById("hobbyList");
    let items=list.getElementsByTagName("li");
    let errHobby = document.getElementById("errHobby");
    
    if(hobby===""){
    errHobby.innerText = "Field cannot be empty";
    return;
    }

    for(let i=0;i<items.length;i++)
    {
        if(items[i].firstChild.textContent === hobby)
        {
            errHobby.innerText = "This hobby already exists!";
            return;
        }
        
    }

    let li=document.createElement("li");
    li.innerText=hobby;

    let btnEdit=document.createElement("button");
    btnEdit.innerText="Edit";

    let btn=document.createElement("button");
    btn.innerText="Remove";

    btnEdit.onclick=function()
    {
        document.getElementById("addHbby").innerText = "Update Hobby";
        document.getElementById("hobby").value = hobby;
        li.remove();
    }

    btn.onclick=function()
    {
        li.remove();
    }

    document.getElementById("addHbby").innerText = "Add Hobby";
    document.getElementById("hobby").value="";
    document.getElementById("errHobby").innerText="";

    li.appendChild(btnEdit);
    li.appendChild(btn);

    list.appendChild(li);
}