window.addEventListener('load',()=>{
    let todo=document.getElementById('todo');
    let show_todo=document.getElementById('show-todo');
    let submit_bt=document.getElementById('submit-button');
    submit_bt.addEventListener('click', ()=>{
        let task_data=todo.value
        if(!task_data){
            alert("fill task field");
            return;
        }

        let key=new Date();
        localStorage.setItem(key,task_data);
    
        let tasks_div=document.createElement("div");
        tasks_div.classList.add("tasks");

        show_todo.appendChild(tasks_div);

        let task_content_div=document.createElement("div");
        task_content_div.classList.add("content");

        tasks_div.appendChild(task_content_div);

        let task_input=document.createElement("input");
        task_input.classList.add("text");
        task_input.type="text";
        task_input.value=task_data;
        task_input.setAttribute("readonly",true);

        task_content_div.appendChild(task_input);

        let action_div=document.createElement("div");
        action_div.classList.add("actions");

        let edit_bt=document.createElement("button");
        edit_bt.classList.add("edit");
        edit_bt.innerText="Edit";

        let delete_bt=document.createElement("button");
        delete_bt.classList.add("delete");
        delete_bt.innerText="Delete";

        action_div.appendChild(edit_bt);
        action_div.appendChild(delete_bt);

        tasks_div.appendChild(action_div);

        edit_bt.addEventListener('click',()=>{
            if(edit_bt.innerText.toLowerCase()=='edit'){
                edit_bt.innerText="Save";
                task_input.removeAttribute("readonly");
                task_input.focus();
            }else{
                edit_bt.innerText="Edit";
                localStorage.setItem(key,task_input.value);
                task_input.setAttribute("readonly",true);
            }
        });

        delete_bt.addEventListener('click', ()=>{
            show_todo.removeChild(tasks_div);
            localStorage.removeItem(key);
        });
        todo.value="";
    });
});