import './style.css';




function sideNav(){
    const nav = document.createElement('div');
    nav.classList.add('nav');

    let navItems = `<div class="logo">Logo</div>
                    <div id="projects">
                        <div class="project" id="inbox">
                            <div></div>
                        </div>
                        <div class="project">T</div>
                        <div class="project">T</div>
                    </div>`;
    nav.innerHTML = navItems;

    return nav;

}

function sidebar(){

    const sidebar = document.createElement('div');
    sidebar.classList.add("sidebar");

     let form = `<h1>NEW TODO</h1>
                <form id="add-todo" autocomplete="off">
                    <label for="title">Title</lable>
                    <input type="text" id="title">
                    <label for="desc">Description</lable>
                    <input type="text" id="author">
                    <label for="date">Due Date</lable>
                    <input type="date" id="pages">
                    <label for="priority">Slecet Priority:</label>
                    <select name="priority" id="priority">
                    <option value="High">High</option>
                    <option value="Medium">Medium</option>
                    <option value="Low">Low</option>
                    </select>
                </form>
                <button type="button" form="add-todo" id="new-todo">Add Todo</button>`;

                sidebar.innerHTML = form;

                return sidebar;
}

function todos(){
    const todoContainer = document.createElement("div");
    todoContainer.classList.add("todo-container");

    let todos = `<div class="dates">
    <div class="date"> 11/11/22</div>
    <div class="todo">
      <div class="todo-header">
        Title
        <select name="priority" class="todo-priority">
        <option value="High">High Priority</option>
        <option value="Medium">Medium Priority</option>
        <option value="Low">Low Priority</option>
      </select>
      </div>
      <div class="todo-body">
        <p class="desc">Description</p>
     
      <button class="complete">Complete</button>
      </div>
    </div>`;

    todoContainer.innerHTML = todos;

    return todoContainer;
}

function main(){
    const main = document.createElement('div');
    main.classList.add('main');
    main.append(sideNav(),todos(), sidebar());

    return main;
}

export default main;