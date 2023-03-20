


function menuIconClick()
{
    let menuBox = document.getElementById("menuBox");
    let menuIcon = document.getElementById("menuIcon");
    menuBox.classList.toggle("open-menu");

    if(menuBox.classList.contains("open-menu"))
    {
        menuIcon.src = "../resources/close.png";
    }
    else
    {
        menuIcon.src = "../resources/menu.png";
    }

}