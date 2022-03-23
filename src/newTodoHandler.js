const dates = [];

function newTodoHandler(){
    document.addEventListener('click',function(e){
        if(e.target && e.target.id== 'new-todo'){
            
            let title = document.querySelector('#title').value;
            let desc = document.querySelector('#desc').value;
            let date = document.querySelector('#date').value;
            let priority = document.querySelector('#priority').value;

            todoFactory(title, desc, date, priority)
         }


         
        
         
     });
}

function removeDate(date){
    const index = array.indexOf(date);
    if (index > -1) {
    dates.splice(index, 1); // 2nd parameter means remove one item only
}
}

function todoFactory(title, desc, date, priority){
    if(dates.includes(date)){
            console.log(title, desc, date, priority)
            let todoDate = document.getElementById(`${date}`);
            let todo = document.createElement("div");
            todo.classList.add("todo");
            todo.setAttribute("id", title);

            let todoContent = `<div class="todo-header">
                                ${title}
                                <select name="priority" class="todo-priority">
                                <option value="High">High Priority</option>
                                <option value="Medium">Medium Priority</option>
                                <option value="Low">Low Priority</option>
                            </select>
                            </div>
                            <div class="todo-body">
                                <p class="desc">${desc}</p>
                            
                            <button class="complete">Complete</button>
                            <button class="remove" data-id="${title}">Remove</button>
                            </div>`;

            todo.innerHTML = todoContent;

            todoDate.append(todo);
            
    }else {
        let todoDate = document.createElement("div");
        todoDate.classList.add("dates");
        todoDate.setAttribute("id", date);
        let todo = `<div class="date"> ${date}</div>
        <div class="todo" id="${title}">
        <div class="todo-header">
            ${title}
            <select name="priority" class="todo-priority">
            <option value="High">High Priority</option>
            <option value="Medium">Medium Priority</option>
            <option value="Low">Low Priority</option>
        </select>
        </div>
        <div class="todo-body">
            <p class="desc">${desc}</p>
        
        <button class="complete">Complete</button>
        <button class="remove" data-id="${title}">Remove</button>
        </div>`;
        todoDate.innerHTML = todo;
        let todoContainer = document.querySelectorAll(".active");
        todoContainer[0].append(todoDate);
        dates.push(date);


    }
}

export {newTodoHandler, removeDate};