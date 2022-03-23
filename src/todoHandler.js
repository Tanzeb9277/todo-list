import { removeDate } from "./newTodoHandler";
export default function todoHandler(){
    document.addEventListener('click',function(e){
        if(e.target && e.target.classList== 'complete'){
            e.target.innerHTML = "Completed";
            console.log(e.target.parentElement);
         }
         if(e.target && e.target.classList== 'remove'){
            let id = e.target.getAttribute("data-id");
            let todo = document.getElementById(`${id}`);
            console.log(id);
            let date = todo.parentElement;
            console.log(date);
            todo.remove();
            let count  = date.childElementCount;
            if (count  < 2) {
                date.remove();
                removeDate(id)
            }
         }
        
         
     });
}