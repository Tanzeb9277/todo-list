import main from "./page-load.js";
import projectHandler from "./projectHandler.js";
import todoHandler from "./todoHandler.js"
import newTodoHandler from "./newTodoHandler.js"

document.querySelector('#content').append(main());

projectHandler();
newTodoHandler();
todoHandler();
