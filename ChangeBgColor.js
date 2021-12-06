const buttonbgChange = document.getElementById("ChangeBgColor");
const bgDark = document.getElementById("dark");
const menuBurger = document.getElementById("menu_burger");

buttonbgChange.addEventListener("click", () => {
    if(bgDark.classList.contains("darknone")){
        bgDark.classList.add('dark');
        bgDark.classList.remove('darknone');

        menuBurger.classList.remove('black');
        menuBurger.classList.add('white');
        
    }else{
        bgDark.classList.remove('dark');
        bgDark.classList.add('darknone');
        
        
    }
    
});