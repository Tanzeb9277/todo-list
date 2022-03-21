import './style.css';


function sideNav(){
    const nav = document.createElement('div');
    nav.classList.add('nav');

    let navItems = `<div class="logo">Logo</div>
                    <div id="projects">
                        <div class="project" id="inbox"></div>
                        <div class="project">T</div>
                        <div class="project">T</div>
                    </div>`;
    nav.innerHTML = navItems;

    const myIcon = new Image();
    myIcon.src = Icon;
  
    document.querySelector("#inbox").appendChild(myIcon);

    return nav;

}

function main(){
    const main = document.createElement('div');
    main.classList.add('main');
    main.append(sideNav());

    return main;
}

export default main;