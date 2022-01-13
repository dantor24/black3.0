var menu  = {
    'home': './index.html',
    'post': './html/post.html',
    'channel': './html/channel.html' ,

};

// this function create the main menu
const getMenu = () => {
    let navUl = document.getElementById("nav-ul");
    for(let item in menu){
        let navLi = document.createElement("li");
        let navLink = document.createElement("a");
        navLink.href = menu[item];
        navLink.classList.add("link-menu-item")
        navLink.innerHTML = item;
        navLi.appendChild(navLink);
        navUl.appendChild(navLi);
        
    }
}

getMenu();
// initialise a window box with the bundle dependencie
const win = () => {
    
    var winbox = new WinBox("Settings", {
        top: "55px",
        x: "center",
        background: "gold",
        modal:true,
        
    });
}
// blur the section feed
const blurr = () =>{
    let section = document.getElementsByClassName("section-feed")
    for(let i=0; i<section.length; i++){
        console.log(section[i]);
        section[i].style.filter = "blur(10px)";
    }
}