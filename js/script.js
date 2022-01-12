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
