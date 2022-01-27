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
        top:-50,
        x: "center",
        width:"80%",
        height:"60%",
        background: "black",
        modal:true,
        url:"./html/settings.html",
        onclose: function(){
            blurr("0")
        }
    });
    blurr("10");
}
// blur the section feed
const blurr = (pixel) =>{
    let section = document.getElementsByClassName("section-feed")
    pixel = "blur(" + pixel +"px)"
    for(let i=0; i<section.length; i++){
        section[i].style.filter = pixel;
    }
}
// use blur filter when the menu hamb. is clicked
const checkInput = () =>{
    let input = document.getElementById("active");
    if(input.checked){
        blurr("0");
    }else{
        blurr("10")
    }
}