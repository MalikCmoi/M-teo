const previous = document.getElementById("previous");
const next = document.getElementById("next");
const child = document.getElementById("container_project");
const tabChild = child.children;
let i = 0;
window.onload = () => {
    
    
    let y = 0;
    while(y < tabChild.length){
        if(tabChild[y].classList.contains("show")){
            break;
        }
        y++;
    }       
    i = y;
};


next.addEventListener("click", () => {
    i++;
    console.log(i);
    if(i < tabChild.length && i >= 0){
        tabChild[i-1].classList.remove("show");
        tabChild[i-1].classList.add("noShow");
        tabChild[i].classList.add("show");
        tabChild[i].classList.remove("noShow");   
    }else{
        tabChild[0].classList.add("show");
        tabChild[0].classList.remove("noShow");
        tabChild[tabChild.length - 1].classList.remove("show");
        tabChild[tabChild.length - 1].classList.add("noShow");
        i = 0;
    }
    
    
});

previous.addEventListener("click", () => {
    i--;
    console.log(i);
    if(i >= 0 && i < tabChild.length){
        console.log("OK");
        tabChild[i].classList.add("show");
        tabChild[i].classList.remove("noShow");
        tabChild[i+1].classList.remove("show");
        tabChild[i+1].classList.add("noShow");   

    }else{
        
        tabChild[0].classList.remove("show");
        tabChild[0].classList.add("noShow");
        tabChild[tabChild.length - 1].classList.add("show");
        tabChild[tabChild.length - 1].classList.remove("noShow");
        i = tabChild.length - 1;
    }
    console.log(i);
   
});