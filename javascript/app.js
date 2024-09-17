let $ = document
const menuIcon = $.querySelector('.menu_icon')
const navMenuSidbar = $.querySelector('.nav_menu_sidbar')
const burgerImg = $.querySelector('img')
const closeIcon = $.getElementById('close_icon')

menuIcon.addEventListener('click' , function(){
    if ( navMenuSidbar.style.transform === "translateX(-384px)"){
        navMenuSidbar.style.transform = "translateX(0)"
        
    } else {
        navMenuSidbar.style.transform = "translateX(-384px)"
    }

})
