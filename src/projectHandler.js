let active = document.querySelectorAll('.active');
let form = document.querySelector("#new-project");
let add = document.querySelector("#add-project");

export default function projectHandler(){
    document.addEventListener('click',function(e){
        if(e.target && e.target.id== 'add-project'){
            document.querySelector("#new-project").style ="display:flex";
            console.log(e.target.id)
         }
         if(e.target && e.target.id== 'create-project'){
            let project = createProject();
            addProject(project);
            
         }if(e.target && e.target.classList== 'project'){
            console.log(e.target.id)
            let name = e.target.id;
            displayProject(name);
            
            
         }
         
     });
}

function displayProject(name){
    let active = document.querySelectorAll(".todo-project");
    for(let i = 0; i< active.length; i++){
        active[i].classList.remove('active');
    }
    document.querySelector(`[data-name = '${name}']`).classList.add('active');
}

function createProject(){
    let name = document.querySelector("#new-name").value;
    let project = document.createElement('div');
    project.setAttribute("id", name );
    project.classList.add('project');
    project.innerText = name.charAt('0');
    
    return project;
}

function addProject(project){ 
    let projects = document.querySelectorAll('.project');
    for(let i = 0; i< projects.length; i++){
        projects[i].addEventListener('click', function(e){
            console.log(e.currentTarget.classList == 'project')
            let name = e.currentTarget.id;
            let active = document.querySelectorAll(".todo-project");
            for(let i = 0; i< active.length; i++){
                active[i].classList.remove('active');
            }
            document.querySelector(`[data-name = '${name}']`).classList.add('active');
            
        })
    }
    createContainer(project);
    document.querySelector('#projects').append(project);
    document.querySelector("#new-name").value = "";
    document.querySelector("#new-project").style ="display:none";

}

function createContainer(project){
    let active = document.querySelectorAll(".todo-project");
    let id = project.getAttribute('id');
    for(let i = 0; i< active.length; i++){
        active[i].classList.remove('active');
    }
    let newContainer = document.createElement('div');
    newContainer.setAttribute('data-name', id );
    newContainer.classList.add("todo-project", "active");
    document.querySelector("#todo-container").append(newContainer);
}


